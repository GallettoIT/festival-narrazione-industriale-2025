'use client';

import Image from 'next/image';

/**
 * Umanesimo Industriale Section - Versione per pagina Ospiti
 *
 * Sezione rossa con citazione di Adriano Olivetti e descrizione del Festival
 * Design: layout a 2 colonne - sinistra (icona + titolo), destra (citazione + testo descrittivo)
 */

export default function UmanesimoIndustrialeOspiti() {
  return (
    <section className="relative w-full bg-fni-red py-16 md:py-20 lg:py-24">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[40%_1fr] lg:grid-cols-[35%_1fr] xl:grid-cols-[28%_1fr] gap-8 lg:gap-12 xl:gap-16">
          {/* Colonna sinistra: Icona + Titolo */}
          <div className="space-y-4 md:space-y-6">
            {/* Logo F-N-I */}
            <div className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px]">
              <Image
                src="/images/icon-fni.svg"
                alt="F-N-I"
                fill
                className="object-contain"
              />
            </div>

            {/* Titolo */}
            <h2 className="font-halenoir-bold text-[#f7f4f4] text-[32px] md:text-[40px] lg:text-[48px] uppercase leading-tight">
              L&apos;UMANESIMO<br />INDUSTRIALE
            </h2>
          </div>

          {/* Colonna destra: Citazione + Testo descrittivo */}
          <div className="font-halenoir-regular text-white text-[15px] lg:text-[18px] xl:text-[20px] leading-normal space-y-6 md:space-y-8">
            {/* Citazione */}
            <p className="font-halenoir-bold">
              «Io penso la fabbrica per l&apos;uomo, non l&apos;uomo per la fabbrica».
            </p>

            {/* Testo descrittivo */}
            <p>
              Sono queste celebri parole, tratte dalla visione del mondo industriale di Adriano Olivetti, che ispirano il Festival della Narrazione Industriale 2025. Giunto alla seconda edizione, il Festival propone un percorso corale e articolato sulla responsabilità sociale dell&apos;industria e sulla concreta possibilità di un lavoro umanista e umanizzato. Al contempo, offre uno sguardo sul presente, mostrando come le nuove generazioni possano reinterpretare questo potente messaggio, arricchendolo di significati contemporanei.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
