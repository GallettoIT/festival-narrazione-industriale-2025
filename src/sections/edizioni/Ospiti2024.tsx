'use client';

import Image from 'next/image';
import { ospiti2024 } from '@/data/ospiti-2024';

/**
 * Ospiti2024 Section
 *
 * Griglia ospiti dell'edizione 2024
 * Layout COMPATTO da Figma: foto piccola a sinistra + testo a destra
 * Griglia 2 colonne desktop, 1 colonna mobile
 * NO descrizioni estese
 */

export default function Ospiti2024() {
  // Dividi gli ospiti in 2 colonne come da Figma
  // Colonna sinistra: primi 9 ospiti (indici 0-8)
  // Colonna destra: ultimi 8 ospiti (indici 9-16)
  const colonnasSinistra = ospiti2024.slice(0, 9);
  const colonnaDestra = ospiti2024.slice(9);

  const renderOspite = (ospite: typeof ospiti2024[0]) => (
    <div key={ospite.id} className="group min-h-[220px] md:min-h-[260px] lg:min-h-[300px] xl:min-h-[340px]">
      {/* Layout orizzontale: foto sinistra + testo destra */}
      <div className="flex gap-5 md:gap-6 items-start h-full">
        {/* Foto ospite - tutte stessa altezza per allineamento */}
        <div className="flex-shrink-0">
          <div className="relative overflow-hidden w-[140px] md:w-[170px] lg:w-[200px] xl:w-[230px] h-[170px] md:h-[210px] lg:h-[245px] xl:h-[280px]">
            <Image
              src={ospite.immagine}
              alt={ospite.altImmagine || ospite.nome}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 140px, (max-width: 1024px) 170px, (max-width: 1280px) 200px, 230px"
            />
          </div>
        </div>

        {/* Info ospite - a destra della foto */}
        <div className="flex-1 min-w-0">
          <h3 className="font-halenoir-bold text-fni-red text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] uppercase leading-tight mb-1">
            {ospite.nome}
          </h3>
          <p className="font-halenoir-regular text-[#282828] text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] uppercase leading-normal">
            {ospite.ruolo}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Titolo - stile titolo di sezione */}
        <h2 className="font-halenoir-regular text-fni-red text-4xl md:text-5xl uppercase mb-12 md:mb-16">
          [OSPITI EDIZIONE 2024]
        </h2>

        {/* Layout a 2 colonne verticali come da Figma */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-16 xl:gap-x-20">
          {/* Colonna sinistra - primi 9 ospiti */}
          <div className="space-y-8 md:space-y-10 lg:space-y-12">
            {colonnasSinistra.map(renderOspite)}
          </div>

          {/* Colonna destra - ultimi 8 ospiti */}
          <div className="space-y-8 md:space-y-10 lg:space-y-12">
            {colonnaDestra.map(renderOspite)}
          </div>
        </div>
      </div>
    </section>
  );
}
