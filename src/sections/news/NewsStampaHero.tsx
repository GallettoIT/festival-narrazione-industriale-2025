'use client';

import Image from 'next/image';

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

      {/* Hero Image - Full Width */}
      <div className="max-w-container-fni mx-auto px-0 md:px-8 mb-12 md:mb-16 lg:mb-20">
        <div className="relative w-full h-[450px] sm:h-[600px] md:h-[725px] overflow-hidden">
          <Image
            src="/images/news/hero-news.jpg"
            alt="News e Stampa - Festival Narrazione Industriale"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1536px) calc(100vw - 64px), 1472px"
          />
        </div>
      </div>
    </section>
  );
}
