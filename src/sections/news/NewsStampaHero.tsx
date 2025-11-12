'use client';

/**
 * NewsStampaHero - Festival Narrazione Industriale
 *
 * Hero section per pagina NEWS & STAMPA con:
 * - Titolo [NEWS E STAMPA] in rosso
 *
 * Figma Node ID: 1:2382
 */

export default function NewsStampaHero() {
  return (
    <section className="relative w-full bg-white pt-6 md:pt-8 lg:pt-10 pb-10 md:pb-14 lg:pb-16">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Titolo */}
        <h1 className="font-halenoir-regular text-fni-red text-4xl md:text-5xl lg:text-[64px] uppercase">
          [NEWS E STAMPA]
        </h1>
      </div>
    </section>
  );
}
