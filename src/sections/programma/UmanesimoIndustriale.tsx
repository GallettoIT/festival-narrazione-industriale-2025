'use client';

import Image from 'next/image';

/**
 * Umanesimo Industriale Section
 *
 * Sezione rossa con descrizione del tema dell'edizione 2025
 * Design: layout a 2 colonne - sinistra (icona + titolo), destra (testo descrittivo)
 */

export default function UmanesimoIndustriale() {
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

          {/* Colonna destra: Testo descrittivo */}
          <div className="font-halenoir-regular text-white text-[15px] lg:text-[18px] xl:text-[20px] leading-normal">
            <p className="mb-6 md:mb-8">
              Il ruolo della narrazione d&apos;autore, in particolar modo quella letteraria e giornalistica, rappresenta uno strumento fondamentale per analizzare e interpretare il mondo dell&apos;industria. Non si limita a descriverla, ma riflette profondamente su come le sue evoluzioni plasmino le trasformazioni sociali, i modelli relazionali e il rapporto tra generazioni, influenzando l&apos;immaginario collettivo.
            </p>

            <p>
              Il filo conduttore tematico di quest&apos;anno è l&apos;<span className="font-halenoir-bold">Umanesimo Industriale</span>, ispirato alla visione olivettiana. L&apos;obiettivo è riaffermare l&apos;individuo al centro della progettazione del lavoro, in una filosofia d&apos;impresa che promuove la crescita personale e professionale e assume un ruolo attivo e responsabile verso l&apos;intera società.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
