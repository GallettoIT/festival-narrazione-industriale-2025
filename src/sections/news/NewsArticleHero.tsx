'use client';

import Image from 'next/image';
import { NewsArticle, formatNewsDateShort } from '@/data/news';

/**
 * NewsArticleHero - Festival Narrazione Industriale
 *
 * Hero section per singolo articolo con:
 * - Background nero (#282828)
 * - Logo FNI bianco
 * - Data news
 * - Titolo grande rosso
 * - Sommario bianco
 *
 * Figma Node ID: 1:2340-2408
 */

interface NewsArticleHeroProps {
  article: NewsArticle;
}

export default function NewsArticleHero({ article }: NewsArticleHeroProps) {
  return (
    <section className="relative w-full">
      {/* Titolo Pagina Sopra */}
      <div className="bg-[#f7f4f4] w-full pt-6 md:pt-8 lg:pt-10">
        <div className="max-w-container-fni mx-auto px-6 md:px-8 pb-6 md:pb-8 lg:pb-10">
          <h1 className="font-halenoir-regular text-fni-red text-xl md:text-3xl lg:text-4xl leading-none">
            [NEWS E STAMPA]
          </h1>
        </div>
      </div>

      {/* Hero Nero */}
      <div className="bg-[#282828] w-full py-10 md:py-14 lg:py-16">
        <div className="max-w-container-fni mx-auto px-6 md:px-8">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            {/* Logo FNI Bianco */}
            <div className="relative w-[120px] md:w-[140px] lg:w-[160px] h-[44px] md:h-[52px] lg:h-[60px]">
              <Image
                src="/images/logo-fni-white.svg"
                alt="Festival Narrazione Industriale"
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            {/* Data News */}
            <p className="font-halenoir-regular text-[#f7f4f4] text-sm md:text-lg lg:text-xl uppercase tracking-wide">
              {formatNewsDateShort(article.date)}
            </p>

            {/* Titolo News */}
            <h2 className="font-halenoir-bold text-fni-red text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase leading-tight max-w-4xl">
              {article.title}
            </h2>

            {/* Sommario */}
            <p className="font-halenoir-regular text-[#f7f4f4] text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl">
              {article.summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
