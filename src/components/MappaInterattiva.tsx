'use client';

import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useState, useRef } from 'react';

interface Luogo {
  id: number;
  nome: string;
  indirizzo: string;
  lat: number;
  lng: number;
  eventi: string[];
}

interface MappaInterattivaProps {
  luoghi: Luogo[];
  centro: {
    lat: number;
    lng: number;
    zoom: number;
  };
}

// Bounds per limitare la mappa alla città di Parma
const PARMA_BOUNDS: L.LatLngBoundsExpression = [
  [44.77, 10.28], // Sud-Ovest
  [44.84, 10.37]  // Nord-Est
];

// Componente per centrare la mappa su un luogo specifico e gestire i bounds
function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom, { animate: true });
    // Imposta i limiti massimi della mappa a Parma città
    map.setMaxBounds(PARMA_BOUNDS);
  }, [center, zoom, map]);
  return null;
}

// Crea un'icona personalizzata semplice per i marker - pin rosso FNI
const createCustomIcon = (isActive = false) => {
  return L.divIcon({
    className: 'custom-marker-fni',
    html: `
      <svg width="30" height="40" viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0C6.716 0 0 6.716 0 15c0 11.25 15 25 15 25s15-13.75 15-25C30 6.716 23.284 0 15 0z" fill="${isActive ? '#c43d2a' : '#e94d34'}"/>
        ${isActive ? '<circle cx="15" cy="15" r="5" fill="white"/>' : ''}
      </svg>
    `,
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -40],
    tooltipAnchor: [15, -20]
  });
};

export default function MappaInterattiva({ luoghi, centro }: MappaInterattivaProps) {
  const [selectedLuogo, setSelectedLuogo] = useState<number | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([centro.lat, centro.lng]);
  const [mapZoom, setMapZoom] = useState(centro.zoom);
  const [isListOpen, setIsListOpen] = useState(false);
  const [isMapActive, setIsMapActive] = useState(false);
  const markerRefs = useRef<{ [key: number]: L.Marker }>({});

  useEffect(() => {
    // Fix per l'icona predefinita di Leaflet
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/images/marker-icon-2x.png',
      iconUrl: '/images/marker-icon.png',
      shadowUrl: '/images/marker-shadow.png',
    });
  }, []);

  const handleLuogoClick = (luogo: Luogo) => {
    setSelectedLuogo(luogo.id);
    setMapCenter([luogo.lat, luogo.lng]);
    setMapZoom(16);
    setIsMapActive(true); // Attiva la mappa quando si clicca un luogo

    // Chiudi la lista su mobile per vedere meglio il popup
    setIsListOpen(false);

    // Apri il popup del marker corrispondente
    setTimeout(() => {
      const marker = markerRefs.current[luogo.id];
      if (marker) {
        marker.openPopup();
      }
    }, 500);
  };

  // Funzione per ottenere indicazioni - rileva mobile/desktop
  const handleGetDirections = (luogo: Luogo) => {
    const { lat, lng } = luogo;
    const destination = `${lat},${lng}`;
    const label = encodeURIComponent(luogo.nome);

    // Rileva se è mobile (iOS/Android)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // Su mobile: chiedi all'utente quale app usare
      if (isIOS) {
        // iOS: prova prima Apple Maps, poi Google Maps
        const appleMapsUrl = `maps://maps.apple.com/?daddr=${destination}&q=${label}`;
        const googleMapsUrl = `comgooglemaps://?daddr=${destination}&directionsmode=driving`;
        const fallbackUrl = `https://maps.google.com/maps?daddr=${destination}&amp;ll=`;

        // Prova ad aprire Apple Maps
        window.location.href = appleMapsUrl;

        // Fallback dopo 500ms se Apple Maps non è disponibile
        setTimeout(() => {
          if (confirm('Apple Maps non disponibile. Vuoi aprire Google Maps?')) {
            window.location.href = googleMapsUrl;
            // Fallback web se anche Google Maps app non è disponibile
            setTimeout(() => {
              window.open(fallbackUrl, '_blank');
            }, 500);
          }
        }, 500);
      } else {
        // Android: prova Google Maps app, poi fallback web
        const googleMapsUrl = `geo:${destination}?q=${destination}(${label})`;
        const fallbackUrl = `https://maps.google.com/maps?daddr=${destination}&amp;ll=`;

        window.location.href = googleMapsUrl;

        // Fallback dopo 500ms se app non è disponibile
        setTimeout(() => {
          window.open(fallbackUrl, '_blank');
        }, 500);
      }
    } else {
      // Su desktop: apri Google Maps in una nuova tab
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&destination_place_id=${label}`;
      window.open(googleMapsUrl, '_blank');
    }
  };

  return (
    <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] flex">
      {/* Lista luoghi laterale - Desktop sempre visibile, Mobile con toggle */}
      <div className={`
        absolute lg:relative z-[1000] lg:z-auto
        ${isListOpen ? 'left-0' : '-left-full lg:left-0'}
        transition-all duration-300
        w-[280px] lg:w-[320px] h-full
        bg-[#1a1a1a] overflow-y-auto
        border-r-2 border-fni-red
      `}>
        {/* Header lista */}
        <div className="sticky top-0 bg-[#1a1a1a] p-4 border-b border-gray-700 z-10">
          <div className="flex items-center justify-between">
            <h3 className="font-halenoir-bold text-white text-[14px] uppercase">
              Contenuti della mappa
            </h3>
            <button
              onClick={() => setIsListOpen(false)}
              className="lg:hidden text-white hover:text-fni-red"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Lista luoghi */}
        <div className="p-2">
          {luoghi.map((luogo) => (
            <button
              key={luogo.id}
              onClick={() => handleLuogoClick(luogo)}
              className={`
                w-full text-left p-3 mb-2 rounded
                transition-colors duration-200
                ${selectedLuogo === luogo.id ? 'bg-fni-red' : 'hover:bg-gray-800'}
              `}
            >
              <div className="flex items-start gap-2">
                <svg width="20" height="26" viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                  <path d="M15 0C6.716 0 0 6.716 0 15c0 11.25 15 25 15 25s15-13.75 15-25C30 6.716 23.284 0 15 0z" fill="#e94d34"/>
                </svg>
                <span className="font-halenoir-regular text-white text-[12px] uppercase leading-tight">
                  {luogo.nome}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Toggle button per mobile - posizionato a destra per non sovrapporsi ai controlli zoom */}
      <button
        onClick={() => setIsListOpen(!isListOpen)}
        className="lg:hidden absolute top-4 right-4 z-[1001] bg-[#1a1a1a] text-white p-3 rounded-lg border-2 border-fni-red shadow-lg hover:bg-fni-red transition-colors duration-200 flex items-center gap-2"
      >
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        <span className="font-halenoir-bold text-[12px] uppercase">
          {isListOpen ? 'Chiudi' : 'Luoghi'}
        </span>
      </button>

      {/* Mappa */}
      <div className="flex-1 relative">
        {/* Overlay per richiedere click su desktop */}
        {!isMapActive && (
          <div
            onClick={() => setIsMapActive(true)}
            className="absolute inset-0 z-[400] bg-black bg-opacity-5 backdrop-blur-[0.5px] cursor-pointer flex items-center justify-center group hover:bg-opacity-10 transition-all duration-300"
          >
            <div className="bg-white px-6 py-3 rounded-lg shadow-lg border-2 border-fni-red group-hover:scale-105 transition-transform duration-300">
              <p className="font-halenoir-bold text-fni-red text-[14px] md:text-[16px] uppercase text-center">
                Clicca per esplorare la mappa
              </p>
            </div>
          </div>
        )}

        <MapContainer
          center={mapCenter}
          zoom={mapZoom}
          scrollWheelZoom={isMapActive}
          dragging={isMapActive}
          touchZoom={isMapActive}
          doubleClickZoom={isMapActive}
          boxZoom={isMapActive}
          keyboard={isMapActive}
          maxBounds={PARMA_BOUNDS}
          maxBoundsViscosity={1.0}
          style={{ height: '100%', width: '100%' }}
          className="z-0"
          zoomControl={true}
        >
          <MapController center={mapCenter} zoom={mapZoom} />

          {/* Mappa con stile CartoDB Positron - simile a Figma (colori tenui/grigi) */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            subdomains="abcd"
            maxZoom={20}
          />

          {/* Marker per ogni luogo evento */}
          {luoghi.map((luogo) => (
            <Marker
              key={luogo.id}
              position={[luogo.lat, luogo.lng]}
              icon={createCustomIcon(selectedLuogo === luogo.id)}
              ref={(ref) => {
                if (ref) {
                  markerRefs.current[luogo.id] = ref;
                }
              }}
              eventHandlers={{
                click: () => setSelectedLuogo(luogo.id)
              }}
            >
              {/* Tooltip al hover con nome del luogo */}
              <Tooltip
                direction="top"
                className="custom-tooltip-fni"
                opacity={0.95}
              >
                <span className="font-halenoir-bold text-fni-red text-[14px] uppercase whitespace-nowrap">
                  {luogo.nome}
                </span>
              </Tooltip>

              {/* Popup al click con dettagli */}
              <Popup className="custom-popup-fni" minWidth={250}>
                <div className="font-halenoir-regular p-2">
                  <h3 className="font-halenoir-bold text-fni-red text-[16px] uppercase mb-2">
                    {luogo.nome}
                  </h3>
                  <p className="text-[#282828] text-[14px] mb-3">
                    {luogo.indirizzo}
                  </p>

                  {/* Bottone Ottieni Indicazioni */}
                  <button
                    onClick={() => handleGetDirections(luogo)}
                    className="w-full font-halenoir-bold text-white bg-fni-red hover:bg-[#c43d2a] text-[14px] uppercase border-2 border-fni-red px-4 py-2 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Ottieni indicazioni
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
