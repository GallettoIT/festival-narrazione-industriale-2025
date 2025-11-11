'use client';

import Image from 'next/image';

/**
 * LabStats Section
 *
 * Cards statistiche del laboratorio + foto studenti
 * Layout preciso da Figma: studenti a sinistra (alto), imprese + docenti al centro (stack verticale), foto a destra
 */

export default function LabStats() {
  return (
    <section className="relative w-full bg-white py-10 md:py-14 lg:py-16">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Layout Desktop: 4 colonne */}
        <div className="hidden lg:grid lg:grid-cols-[351px_351px_348px_343px] gap-8 xl:gap-10 justify-center">
          {/* Colonna 1: Card STUDENTI - Alta */}
          <div className="bg-[rgba(233,77,52,0.9)] rounded-[58px] h-[597px] flex flex-col items-center justify-center px-8">
            <p className="font-halenoir-bold text-[#282828] text-[32px] uppercase text-center leading-normal mb-4">
              STUDENTI
            </p>
            <p className="font-halenoir-bold text-[#282828] text-[80px] uppercase text-center leading-none">
              23
            </p>
          </div>

          {/* Colonna 2: Stack Card IMPRESE + Card DOCENTI */}
          <div className="flex flex-col gap-8">
            {/* Card IMPRESE */}
            <div className="bg-[rgba(233,77,52,0.64)] rounded-[49px] h-[313px] flex flex-col items-center justify-center px-8">
              <p className="font-halenoir-bold text-[#282828] text-[32px] uppercase text-center leading-normal mb-3">
                IMPRESE
              </p>
              <p className="font-halenoir-bold text-[#282828] text-[70px] uppercase text-center leading-none">
                4
              </p>
            </div>

            {/* Card DOCENTI */}
            <div className="bg-[rgba(233,77,52,0.3)] rounded-[53px] h-[244px] flex flex-col items-center justify-center px-8">
              <p className="font-halenoir-bold text-[#282828] text-[32px] uppercase text-center leading-normal mb-3">
                DOCENTI
              </p>
              <p className="font-halenoir-bold text-[#282828] text-[64px] uppercase text-center leading-none">
                2
              </p>
            </div>
          </div>

          {/* Colonna 3: Foto studenti 1 */}
          <div className="relative h-[425px] overflow-hidden">
            <Image
              src="/images/lab/foto-studenti-1.png"
              alt="Studenti Lab"
              fill
              className="object-cover object-center"
              sizes="348px"
            />
          </div>

          {/* Colonna 4: Foto studenti 2 - Più alta */}
          <div className="relative h-[598px] overflow-hidden">
            <Image
              src="/images/lab/foto-studenti-2.png"
              alt="Studenti Lab"
              fill
              className="object-cover object-center"
              sizes="343px"
            />
          </div>
        </div>

        {/* Layout Mobile/Tablet: Design migliorato */}
        <div className="lg:hidden">
          {/* Grid superiore: Card STUDENTI + Foto 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Card STUDENTI - Dominante */}
            <div className="bg-[rgba(233,77,52,0.9)] rounded-[40px] md:rounded-[50px] h-[350px] md:h-[425px] flex flex-col items-center justify-center px-6">
              <p className="font-halenoir-bold text-[#282828] text-[26px] md:text-[32px] uppercase text-center leading-normal mb-3">
                STUDENTI
              </p>
              <p className="font-halenoir-bold text-[#282828] text-[64px] md:text-[80px] uppercase text-center leading-none">
                23
              </p>
            </div>

            {/* Foto studenti 1 */}
            <div className="relative aspect-[348/425] md:h-[425px] overflow-hidden rounded-[10px]">
              <Image
                src="/images/lab/foto-studenti-1.png"
                alt="Studenti Lab"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 348px"
              />
            </div>
          </div>

          {/* Grid centrale: Cards IMPRESE + DOCENTI */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6">
            {/* Card IMPRESE */}
            <div className="bg-[rgba(233,77,52,0.64)] rounded-[35px] md:rounded-[45px] h-[200px] md:h-[260px] flex flex-col items-center justify-center px-4">
              <p className="font-halenoir-bold text-[#282828] text-[20px] md:text-[28px] uppercase text-center leading-tight mb-2">
                IMPRESE
              </p>
              <p className="font-halenoir-bold text-[#282828] text-[52px] md:text-[70px] uppercase text-center leading-none">
                4
              </p>
            </div>

            {/* Card DOCENTI */}
            <div className="bg-[rgba(233,77,52,0.3)] rounded-[35px] md:rounded-[45px] h-[200px] md:h-[260px] flex flex-col items-center justify-center px-4">
              <p className="font-halenoir-bold text-[#282828] text-[20px] md:text-[28px] uppercase text-center leading-tight mb-2">
                DOCENTI
              </p>
              <p className="font-halenoir-bold text-[#282828] text-[52px] md:text-[64px] uppercase text-center leading-none">
                2
              </p>
            </div>
          </div>

          {/* Foto studenti 2 - Full width */}
          <div className="relative aspect-[343/598] md:aspect-[16/9] overflow-hidden rounded-[10px] max-w-[600px] mx-auto">
            <Image
              src="/images/lab/foto-studenti-2.png"
              alt="Studenti Lab"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
