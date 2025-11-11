'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

/**
 * Luoghi Eventi Section
 *
 * Sezione con mappa interattiva dei luoghi dove si svolgono gli eventi del festival
 */

interface Luogo {
  id: number;
  nome: string;
  indirizzo: string;
  lat: number;
  lng: number;
  eventi: string[];
}

interface LuoghiData {
  luoghi: Luogo[];
  centro: {
    lat: number;
    lng: number;
    zoom: number;
  };
}

// Importa dinamicamente la mappa per evitare problemi SSR
const MappaInterattiva = dynamic(
  () => import('@/components/MappaInterattiva'),
  {
    ssr: false,
    loading: () => (
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-gray-100 flex items-center justify-center">
        <p className="font-halenoir-regular text-[#282828]">Caricamento mappa...</p>
      </div>
    )
  }
);

export default function LuoghiEventi() {
  const [luoghiData, setLuoghiData] = useState<LuoghiData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/luoghi-eventi.json')
      .then(res => res.json())
      .then((data: LuoghiData) => {
        setLuoghiData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Errore caricamento luoghi:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="relative w-full bg-white pt-10 md:pt-14 lg:pt-16 pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Titolo */}
        <h2 className="font-halenoir-regular text-fni-red text-4xl md:text-5xl uppercase mb-12 md:mb-16">
          [LUOGHI EVENTI]
        </h2>

        {/* Mappa Interattiva con Lista Luoghi */}
        {loading || !luoghiData ? (
          <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] bg-gray-100 flex items-center justify-center rounded-lg border-2 border-gray-200">
            <p className="font-halenoir-regular text-[#282828]">Caricamento mappa...</p>
          </div>
        ) : (
          <MappaInterattiva luoghi={luoghiData.luoghi} centro={luoghiData.centro} />
        )}
      </div>
    </section>
  );
}
