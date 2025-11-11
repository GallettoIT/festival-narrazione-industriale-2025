'use client';

import { useEffect, useState } from 'react';
import AddToCalendarButton from '@/components/AddToCalendarButton';

/**
 * Calendario Eventi Section
 *
 * Sezione con il calendario completo degli eventi del festival
 * I dati vengono caricati dal file JSON pubblico per facilitare le modifiche
 */

interface Evento {
  ora: string;
  durata: number; // durata in minuti
  luogo: string;
  indirizzoCompleto?: string; // indirizzo completo per calendario
  descrizione: string;
  note?: string;
}

interface GiornoEvento {
  id: number;
  giorno: string;
  data: string;
  mese: string;
  eventi: Evento[];
}

interface ProgrammaData {
  anno: number;
  eventi: GiornoEvento[];
}

// Helper per creare oggetto Date da ora stringa (es. "11.00" o "17:30")
const createEventDate = (anno: number, mese: string, giorno: string, ora: string): Date => {
  const meseMap: { [key: string]: number } = {
    'GENNAIO': 0, 'FEBBRAIO': 1, 'MARZO': 2, 'APRILE': 3,
    'MAGGIO': 4, 'GIUGNO': 5, 'LUGLIO': 6, 'AGOSTO': 7,
    'SETTEMBRE': 8, 'OTTOBRE': 9, 'NOVEMBRE': 10, 'DICEMBRE': 11
  };

  const meseNumero = meseMap[mese.toUpperCase()];
  const giornoNumero = parseInt(giorno);

  // Parse ora - supporta sia "11.00" che "11:00"
  const [oreStr, minutiStr] = ora.replace('.', ':').split(':');
  const ore = parseInt(oreStr);
  const minuti = parseInt(minutiStr) || 0;

  return new Date(anno, meseNumero, giornoNumero, ore, minuti);
};

export default function CalendarioEventi() {
  const [programmaData, setProgrammaData] = useState<ProgrammaData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/programma-eventi.json')
      .then(res => res.json())
      .then((data: ProgrammaData) => {
        setProgrammaData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Errore caricamento programma:', error);
        setLoading(false);
      });
  }, []);

  if (loading || !programmaData) {
    return (
      <section className="relative w-full bg-[#f7f4f4] pt-10 md:pt-14 lg:pt-16 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-container-fni mx-auto px-6 md:px-8">
          <p className="font-halenoir-regular text-[#282828] text-center">Caricamento programma...</p>
        </div>
      </section>
    );
  }

  const renderGiorno = (giorno: GiornoEvento) => (
    <div key={giorno.id} className="space-y-6 md:space-y-8">
      {/* Header Giorno - Esattamente come da Figma */}
      <div>
        {/* Prima riga: Giorno + Data + Linea a destra */}
        <div className="flex items-center gap-4 mb-2">
          <h3 className="font-halenoir-bold text-fni-red text-[48px] uppercase leading-normal">
            {giorno.giorno} {giorno.data}
          </h3>
          <div className="flex-1 h-[3px] bg-fni-red max-w-[100px]" />
        </div>
        {/* Seconda riga: Mese sotto */}
        <p className="font-halenoir-bold text-fni-red text-[32px] uppercase leading-[25px]">
          {giorno.mese}
        </p>
      </div>

      {/* Eventi del giorno */}
      <div className="space-y-6 md:space-y-8 lg:space-y-10">
        {giorno.eventi.map((evento, idx) => {
          // Crea date per il calendario
          const startDate = createEventDate(programmaData.anno, giorno.mese, giorno.data, evento.ora);
          const endDate = new Date(startDate.getTime() + evento.durata * 60000);

          return (
            <div key={idx} className="space-y-2">
              {/* Ora con icona calendario */}
              <div className="flex items-center justify-between">
                <p className="font-halenoir-bold text-[#282828] text-[18px] leading-relaxed">
                  Ore {evento.ora}
                </p>
                <AddToCalendarButton
                  title={`${evento.descrizione.split('\n')[0]} - Festival Narrazione Industriale`}
                  description={evento.descrizione}
                  location={evento.indirizzoCompleto || evento.luogo}
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>

              <p className="font-halenoir-bold text-[#282828] text-[18px] leading-relaxed whitespace-pre-line">
                {evento.luogo}
              </p>
              <p className="font-halenoir-regular text-[#282828] text-[18px] leading-relaxed whitespace-pre-line">
                {evento.descrizione}
              </p>
              {evento.note && (
                <p className="font-halenoir-light text-[#282828] text-[18px] leading-relaxed whitespace-pre-line">
                  {evento.note}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  // Dividi gli eventi in due metà consecutive
  const middleIndex = Math.ceil(programmaData.eventi.length / 2);
  const primaMetà = programmaData.eventi.slice(0, middleIndex);
  const secondaMetà = programmaData.eventi.slice(middleIndex);

  return (
    <section className="relative w-full bg-[#f7f4f4] pt-10 md:pt-14 lg:pt-16 pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Layout calendario
            Mobile: singola colonna in ordine cronologico
            Desktop: 2 colonne - prima metà sulla sinistra, seconda metà sulla destra
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          {/* Colonna Sinistra - Prima metà degli eventi (es. Lun 24, Mar 25, Mer 26) */}
          <div className="space-y-12 lg:space-y-16">
            {primaMetà.map((giorno) => renderGiorno(giorno))}
          </div>

          {/* Colonna Destra - Seconda metà degli eventi (es. Gio 27, Ven 28, Sab 29) */}
          <div className="space-y-12 lg:space-y-16">
            {secondaMetà.map((giorno) => renderGiorno(giorno))}
          </div>
        </div>
      </div>
    </section>
  );
}
