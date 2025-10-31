'use client';

/**
 * Info Edizione Section - Festival Narrazione Industriale
 *
 * Sezione distintiva con background rosso brand che presenta:
 * - Informazioni edizione corrente
 * - Date e location
 * - Tema "L'umanesimo industriale"
 * - CTA "Scopri il programma"
 *
 * Figma Node ID: 1:235 (background section)
 */

export default function InfoEdizione() {
  return (
    <section
      className="relative w-full bg-fni-red py-16 md:py-24 lg:py-32"
      data-section="info-edizione"
    >
      <div className="max-w-container-fni mx-auto px-8">
        {/* Layout 3 Colonne - Mobile: centrato stack | Desktop: 3 colonne */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">

          {/* Colonna Sinistra - Edizione e Tema */}
          <div className="text-fni-white flex flex-col justify-center text-center md:text-left">
            <h2 className="font-halenoir-regular text-2xl md:text-3xl lg:text-4xl uppercase mb-4 md:mb-6">
              SECONDA EDIZIONE
            </h2>
            <h3 className="font-halenoir-bold text-3xl md:text-4xl lg:text-5xl uppercase leading-tight">
              L&apos;UMANESIMO
              <br />
              INDUSTRIALE
            </h3>
          </div>

          {/* Colonna Centro - Icona I*I da Figma */}
          <div className="flex items-center justify-center my-4 md:my-0">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
              <img
                src="/images/icon-fni.svg"
                alt="FNI Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Colonna Destra - Location e Date */}
          <div className="text-fni-white flex flex-col justify-center text-center md:text-left">
            <div className="space-y-4">
              {/* Linea decorativa superiore */}
              <div className="w-full h-px bg-fni-white mb-4 md:mb-6" />

              <h4 className="font-halenoir-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase">
                PARMA
              </h4>
              <p className="font-halenoir-regular text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase">
                DAL 24 AL 29
                <br />
                NOVEMBRE 2025
              </p>

              {/* Linea decorativa inferiore */}
              <div className="w-full h-px bg-fni-white mt-4 md:mt-6" />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="/pdf/PROGRAMMA A4.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-halenoir-regular text-fni-white text-lg md:text-xl uppercase px-6 py-2 border-[3px] border-fni-white hover:bg-fni-white hover:text-fni-red transition-all duration-300"
            aria-label="Scopri il programma del festival"
          >
            SCOPRI IL PROGRAMMA
          </a>
        </div>
      </div>
    </section>
  );
}
