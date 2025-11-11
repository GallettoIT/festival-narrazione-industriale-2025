'use client';

import Image from 'next/image';

/**
 * LabDocenti2024 Section
 *
 * Sezione con i docenti del LAB 2024: Marco Gualazzini e Luca Signaroldi
 * Layout newspaper-style come la griglia ospiti
 */

interface Docente {
  nome: string;
  ruolo: string;
  immagine: string;
  alt: string;
  altezza: 'alta' | 'bassa';
  objectPosition?: string;
}

export default function LabDocenti2024() {
  const docenti: Docente[] = [
    {
      nome: 'MARCO GUALAZZINI',
      ruolo: 'Fotografo e docente universitario',
      immagine: '/images/ospite-gualazzini-marco.png',
      alt: 'Marco Gualazzini',
      altezza: 'bassa',
      objectPosition: 'center 20%',
    },
    {
      nome: 'LUCA SIGNAROLDI',
      ruolo: 'Communication Specialist & Stories Designer',
      immagine: '/images/ospite-signaroldi-luca.png',
      alt: 'Luca Signaroldi',
      altezza: 'bassa',
      objectPosition: 'center top',
    },
  ];

  return (
    <section className="relative w-full bg-[#282828] py-10 md:py-14 lg:py-16">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Titolo sezione */}
        <h2 className="font-halenoir-bold text-fni-red text-[32px] md:text-[40px] lg:text-[48px] uppercase mb-12 md:mb-16 lg:mb-20">
          DOCENTI LAB 2024:
        </h2>

        {/* Mobile/Tablet: layout newspaper style */}
        <div className="lg:hidden space-y-0">
          {docenti.map((docente, index) => (
            <div key={index}>
              {/* Layout newspaper mobile: foto float-left, testo a sinistra */}
              <div className="group py-6 sm:py-8 overflow-hidden">
                {/* Foto mobile - float left */}
                <div className="float-left mr-4 sm:mr-5 mb-4">
                  <div
                    className={`relative overflow-hidden w-[100px] sm:w-[120px] ${
                      docente.altezza === 'alta'
                        ? 'aspect-[348/600]'
                        : 'aspect-[348/420]'
                    }`}
                  >
                    <Image
                      src={docente.immagine}
                      alt={docente.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: docente.objectPosition || 'center 20%' }}
                      sizes="(max-width: 640px) 100px, 120px"
                    />
                  </div>
                </div>

                {/* Info mobile - fluisce a destra della foto */}
                <div>
                  <div className="space-y-0.5 mb-2 sm:mb-2.5">
                    <h3 className="font-halenoir-bold text-fni-red text-[16px] sm:text-[18px] uppercase leading-[1.15] tracking-tight">
                      {docente.nome}
                    </h3>
                    <p className="font-halenoir-regular text-[#f7f4f4] text-[13px] sm:text-[15px] leading-[1.3] tracking-tight opacity-90 break-words">
                      {docente.ruolo}
                    </p>
                  </div>
                </div>

                {/* Clear float */}
                <div className="clear-both" />
              </div>

              {/* Separatore mobile (eccetto ultimo) */}
              {index < docenti.length - 1 && (
                <div className="border-t border-[#f7f4f4]/20" />
              )}
            </div>
          ))}
        </div>

        {/* Desktop: griglia 2 colonne con newspaper-style */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-10 xl:gap-14 2xl:gap-16">
            {docenti.map((docente, index) => (
              <div key={index} className="group">
                {/* Layout newspaper: foto float-left, testo fluisce a destra */}
                <div className="overflow-hidden">
                  {/* Foto docente - float left per effetto giornale */}
                  <div className="float-left mr-5 xl:mr-6 mb-5">
                    <div
                      className={`relative overflow-hidden ${
                        docente.altezza === 'alta'
                          ? 'w-[160px] xl:w-[180px] 2xl:w-[200px] aspect-[348/600]'
                          : 'w-[160px] xl:w-[180px] 2xl:w-[200px] aspect-[348/420]'
                      }`}
                    >
                      <Image
                        src={docente.immagine}
                        alt={docente.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: docente.objectPosition || 'center 20%' }}
                        sizes="(max-width: 1280px) 160px, (max-width: 1536px) 180px, 200px"
                      />
                    </div>
                  </div>

                  {/* Info docente - fluisce intorno alla foto */}
                  <div>
                    {/* Nome e Ruolo */}
                    <div className="space-y-1 mb-5">
                      <h3 className="font-halenoir-bold text-fni-red text-[20px] md:text-[22px] lg:text-[25px] uppercase leading-[1.15] tracking-tight">
                        {docente.nome}
                      </h3>
                      <p className="font-halenoir-regular text-[#f7f4f4] text-[18px] md:text-[19px] lg:text-[20px] leading-[1.3] tracking-tight break-words">
                        {docente.ruolo}
                      </p>
                    </div>
                  </div>

                  {/* Clear float */}
                  <div className="clear-both" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
