'use client';

/**
 * InfoEdizione2024 Section
 *
 * Sezione distintiva con background grigio scuro (#282828) che presenta:
 * - Informazioni edizione 2024 (passata)
 * - Date e location
 * - Testo descrittivo della prima edizione
 * - Layout simile a InfoEdizione.tsx ma con colori diversi
 */

export default function InfoEdizione2024() {
  return (
    <section
      className="relative w-full bg-[#282828] py-16 md:py-24 lg:py-32"
      data-section="info-edizione-2024"
    >
      <div className="max-w-container-fni mx-auto px-8">
        {/* Layout 3 Colonne - Mobile: centrato stack | Desktop: 3 colonne */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">

          {/* Colonna Sinistra - Edizione e Date */}
          <div className="text-white flex flex-col justify-center text-center md:text-left">
            <h2 className="font-halenoir-regular text-2xl md:text-3xl lg:text-4xl uppercase mb-4 md:mb-6">
              PRIMA EDIZIONE
            </h2>
            <h3 className="font-halenoir-bold text-fni-red text-3xl md:text-4xl lg:text-5xl uppercase leading-tight">
              28 - 30 NOVEMBRE 2024
              <br />
              A PARMA
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

          {/* Colonna Destra - Testo descrittivo */}
          <div className="text-white flex flex-col justify-center text-center md:text-left">
            <p className="font-halenoir-regular text-[15px] lg:text-[18px] xl:text-[20px] leading-normal">
              <span>Attraverso opere letterarie, cinematografiche e fotografiche, la prima edizione del </span>
              <span className="font-halenoir-bold">Festival della Narrazione Industriale ha indagato le trasformazioni del mondo del lavoro </span>
              <span>e il loro impatto sulla società, sui rapporti umani e sui modelli di comportamento, </span>
              <span className="font-halenoir-bold">creando un dialogo tra le narrazioni del boom economico italiano e quelle delle più recenti evoluzioni industriali</span>
              <span>, a partire dagli anni Duemila.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
