'use client';

/**
 * NewsStampaHero - Festival Narrazione Industriale
 *
 * Hero section per pagina NEWS & STAMPA con:
 * - Titolo [NEWS E STAMPA] in rosso
 * - Hero image grande a tutta larghezza
 *
 * Figma Node ID: 1:2382
 */

export default function NewsStampaHero() {
  return (
    <section className="relative w-full bg-fni-white">
      {/* Titolo Pagina */}
      <div className="max-w-container-fni mx-auto px-6 md:px-8 pt-10 md:pt-14 lg:pt-16 pb-8 md:pb-12 lg:pb-16">
        <h1 className="font-halenoir-regular text-fni-red text-3xl md:text-5xl lg:text-6xl leading-none">
          [NEWS E STAMPA]
        </h1>
      </div>
    </section>
  );
}
