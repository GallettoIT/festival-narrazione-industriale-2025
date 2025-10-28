'use client';

import { useEffect, useState } from 'react';

/**
 * CalendarioEventi2024 Section
 *
 * Calendario eventi dell'edizione 2024 (PASSATA)
 * Layout IDENTICO a CalendarioEventi.tsx della pagina PROGRAMMA
 * UNICA DIFFERENZA: SENZA bottone "Aggiungi al calendario" (evento passato)
 */

interface Evento {
  ora: string;
  luogo: string;
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

export default function CalendarioEventi2024() {
  const [programmaData, setProgrammaData] = useState<ProgrammaData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/programma-eventi-2024.json')
      .then(res => res.json())
      .then((data: ProgrammaData) => {
        setProgrammaData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Errore caricamento programma 2024:', error);
        setLoading(false);
      });
  }, []);

  if (loading || !programmaData) {
    return (
      <section className="relative w-full bg-[#f7f4f4] pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-32">
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
        {giorno.eventi.map((evento, idx) => (
          <div key={idx} className="space-y-2">
            {/* Ora - SENZA icona calendario (evento passato) */}
            <div className="flex items-center justify-between">
              <p className="font-halenoir-bold text-[#282828] text-[20px] uppercase leading-[28px]">
                ORE {evento.ora}
              </p>
              {/* NO AddToCalendarButton per eventi passati */}
            </div>

            <p className="font-halenoir-bold text-[#282828] text-[20px] uppercase leading-[28px] whitespace-pre-line">
              {evento.luogo}
            </p>
            <p className="font-halenoir-regular text-[#282828] text-[20px] uppercase leading-[28px] whitespace-pre-line">
              {evento.descrizione}
            </p>
            {evento.note && (
              <p className="font-halenoir-light text-[#282828] text-[20px] leading-[28px] whitespace-pre-line">
                {evento.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  // Dividi gli eventi in due metà consecutive
  const middleIndex = Math.ceil(programmaData.eventi.length / 2);
  const primaMetà = programmaData.eventi.slice(0, middleIndex);
  const secondaMetà = programmaData.eventi.slice(middleIndex);

  return (
    <section className="relative w-full bg-[#f7f4f4] pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-32">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Layout calendario
            Mobile: singola colonna in ordine cronologico
            Desktop: 2 colonne - prima metà sulla sinistra, seconda metà sulla destra
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          {/* Colonna Sinistra - Prima metà degli eventi */}
          <div className="space-y-12 lg:space-y-16">
            {primaMetà.map((giorno) => renderGiorno(giorno))}
          </div>

          {/* Colonna Destra - Seconda metà degli eventi */}
          <div className="space-y-12 lg:space-y-16">
            {secondaMetà.map((giorno) => renderGiorno(giorno))}
          </div>
        </div>
      </div>
    </section>
  );
}
