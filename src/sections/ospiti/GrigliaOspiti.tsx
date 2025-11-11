'use client';

import Image from 'next/image';
import { ospiti } from '@/data/ospiti';

/**
 * GrigliaOspiti Section
 *
 * Griglia con tutti gli ospiti del festival
 * Layout: 2 colonne fisse, ogni cella ha foto piccola a sinistra + info a destra
 * Design professionale con gestione descrizioni lunghe
 */

export default function GrigliaOspiti() {
  return (
    <section className="relative w-full bg-white py-10 md:py-16 lg:py-20 xl:py-24">
      <div className="max-w-container-fni mx-auto px-4 sm:px-6 md:px-8">
        {/* Mobile/Tablet: lista 1 colonna - newspaper style sempre */}
        <div className="lg:hidden space-y-0">
          {ospiti.map((ospite, index) => (
            <div key={ospite.id}>
              {/* Layout newspaper mobile: foto float-left, testo fluisce sempre a destra */}
              <div className="group py-6 sm:py-8 overflow-hidden">
                {/* Foto mobile - float left */}
                <div className="float-left mr-4 sm:mr-5 mb-4">
                  <div
                    className={`relative overflow-hidden w-[100px] sm:w-[120px] ${
                      ospite.altezza === 'alta'
                        ? 'aspect-[348/600]'
                        : 'aspect-[348/420]'
                    }`}
                  >
                    <Image
                      src={ospite.immagine}
                      alt={ospite.altImmagine || ospite.nome}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: ospite.objectPosition || 'center 20%' }}
                      sizes="(max-width: 640px) 100px, 120px"
                    />
                  </div>
                </div>

                {/* Info mobile - fluisce intorno alla foto */}
                <div>
                  <div className="space-y-0.5 mb-2 sm:mb-2.5">
                    <h3 className="font-halenoir-bold text-fni-red text-[16px] sm:text-[18px] uppercase leading-[1.15] tracking-tight">
                      {ospite.nome}
                    </h3>
                    <p className="font-halenoir-regular text-[#282828] text-[13px] sm:text-[15px] uppercase leading-[1.3] tracking-tight opacity-90 break-words">
                      {ospite.ruolo}
                    </p>
                  </div>
                  {ospite.descrizioneEstesa && (
                    <p className="font-halenoir-regular text-[#282828] text-[13px] sm:text-[14.5px] leading-[1.55] sm:leading-[1.6] text-justify hyphens-auto">
                      {ospite.descrizioneEstesa}
                    </p>
                  )}
                </div>

                {/* Clear float */}
                <div className="clear-both" />
              </div>

              {/* Separatore mobile (eccetto ultimo) */}
              {index < ospiti.length - 1 && (
                <div className="border-t border-gray-200/60" />
              )}
            </div>
          ))}
        </div>

        {/* Desktop: griglia 2 colonne con newspaper-style sempre */}
        <div className="hidden lg:block">
          {ospiti.reduce<{ rows: typeof ospiti[]; currentRow: typeof ospiti }>((acc, ospite, index) => {
            acc.currentRow.push(ospite);
            if (acc.currentRow.length === 2 || index === ospiti.length - 1) {
              acc.rows.push([...acc.currentRow]);
              acc.currentRow = [];
            }
            return acc;
          }, { rows: [], currentRow: [] }).rows.map((riga, rigaIndex, array) => (
            <div key={rigaIndex}>
              {/* Griglia 2 colonne */}
              <div className="grid grid-cols-2 gap-10 xl:gap-14 2xl:gap-16">
                {riga.map((ospite) => (
                  <div key={ospite.id} className="group">
                    {/* Layout newspaper: foto float-left, testo fluisce sempre a destra */}
                    <div className="overflow-hidden">
                      {/* Foto ospite - float left per effetto giornale */}
                      <div className="float-left mr-6 xl:mr-8 mb-6">
                        <div
                          className={`relative overflow-hidden ${
                            ospite.altezza === 'alta'
                              ? 'w-[220px] xl:w-[240px] 2xl:w-[280px] aspect-[348/600]'
                              : 'w-[220px] xl:w-[240px] 2xl:w-[280px] aspect-[348/420]'
                          }`}
                        >
                          <Image
                            src={ospite.immagine}
                            alt={ospite.altImmagine || ospite.nome}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            style={{ objectPosition: ospite.objectPosition || 'center 20%' }}
                            sizes="(max-width: 1280px) 220px, (max-width: 1536px) 240px, 280px"
                          />
                        </div>
                      </div>

                      {/* Info ospite - fluisce intorno alla foto */}
                      <div>
                        {/* Nome e Ruolo */}
                        <div className="space-y-1 mb-5">
                          <h3 className="font-halenoir-bold text-fni-red text-[23px] xl:text-[25px] uppercase leading-[1.15] tracking-tight">
                            {ospite.nome}
                          </h3>
                          <p className="font-halenoir-regular text-[#282828] text-[17px] xl:text-[19px] uppercase leading-[1.3] tracking-tight opacity-90 break-words">
                            {ospite.ruolo}
                          </p>
                        </div>

                        {/* Descrizione estesa - fluisce intorno alla foto e continua sotto se lungo */}
                        {ospite.descrizioneEstesa && (
                          <p className="font-halenoir-regular text-[#282828] text-[17px] xl:text-[18px] 2xl:text-[19px] leading-[1.65] lg:leading-[1.7] text-justify hyphens-auto">
                            {ospite.descrizioneEstesa}
                          </p>
                        )}
                      </div>

                      {/* Clear float */}
                      <div className="clear-both" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Separatore desktop (eccetto ultima riga) */}
              {rigaIndex < array.length - 1 && (
                <div className="mt-12 lg:mt-14 pt-12 lg:pt-14 border-t border-gray-200/60" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
