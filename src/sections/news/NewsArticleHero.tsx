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
      <div className="bg-[#f7f4f4] w-full">
        <div className="max-w-container-fni mx-auto px-6 md:px-8 py-8 md:py-10 lg:py-12">
          <h1 className="font-halenoir-regular text-fni-red text-2xl md:text-4xl lg:text-5xl leading-none">
            [NEWS E STAMPA]
          </h1>
        </div>
      </div>

      {/* Hero Nero */}
      <div className="bg-[#282828] w-full py-12 md:py-16 lg:py-20">
        <div className="max-w-container-fni mx-auto px-6 md:px-8">
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
            {/* Logo FNI Bianco */}
            <div className="relative w-[140px] md:w-[160px] lg:w-[180px] h-[52px] md:h-[60px] lg:h-[67px]">
              <Image
                src="/images/logo-fni-white.svg"
                alt="Festival Narrazione Industriale"
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            {/* Data News */}
            <p className="font-halenoir-regular text-[#f7f4f4] text-lg md:text-2xl lg:text-3xl uppercase tracking-wide">
              {formatNewsDateShort(article.date)}
            </p>

            {/* Titolo News */}
            <h2 className="font-halenoir-bold text-fni-red text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase leading-tight max-w-4xl">
              {article.title}
            </h2>

            {/* Sommario */}
            <p className="font-halenoir-regular text-[#f7f4f4] text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl">
              {article.summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
