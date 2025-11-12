'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NewsArticle, formatNewsDateShort } from '@/data/news';

/**
 * NewsGrid - Festival Narrazione Industriale
 *
 * Griglia 2 colonne con cards delle news:
 * - Immagine feature
 * - Data news (uppercase)
 * - Titolo rosso bold uppercase
 * - Linea decorativa
 * - Sommario
 * - Excerpt/testo descrittivo
 *
 * Figma Node ID: 1:2272-2293
 */

interface NewsGridProps {
  articles: NewsArticle[];
}

export default function NewsGrid({ articles }: NewsGridProps) {
  return (
    <section className="w-full bg-white py-8 md:py-12 lg:py-14">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Grid 2 colonne */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-12">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/news-stampa/${article.slug}`}
              className="group flex flex-col gap-2.5 md:gap-3"
            >
              {/* Featured Image - Più piccola */}
              <div className="relative w-full h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden rounded-sm">
                <Image
                  src={article.featuredImage}
                  alt={article.featuredImageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>

              {/* Content - Testi più piccoli */}
              <div className="flex flex-col gap-1 md:gap-1.5">
                {/* Data News */}
                <p className="font-halenoir-regular text-fni-dark text-xs md:text-sm uppercase tracking-wide">
                  {formatNewsDateShort(article.date)}
                </p>

                {/* Titolo */}
                <h2 className="font-halenoir-bold text-fni-red text-lg md:text-xl lg:text-2xl uppercase leading-tight group-hover:opacity-80 transition-opacity">
                  {article.title}
                </h2>

                {/* Linea decorativa */}
                <div className="w-full h-[1.5px] bg-fni-red my-0.5" />

                {/* Sommario */}
                <p className="font-halenoir-regular text-fni-dark text-sm md:text-base leading-relaxed">
                  {article.summary}
                </p>

                {/* Excerpt */}
                <p className="font-halenoir-regular text-fni-dark text-xs md:text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
