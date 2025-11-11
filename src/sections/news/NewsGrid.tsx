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
    <section className="w-full bg-white py-8 md:py-12 lg:py-16">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Grid 2 colonne */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {articles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/news-stampa/${article.slug}`}
              className="group flex flex-col gap-4 md:gap-6"
            >
              {/* Featured Image */}
              <div className="relative w-full h-[240px] md:h-[280px] lg:h-[320px] overflow-hidden">
                <Image
                  src={article.featuredImage}
                  alt={article.featuredImageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 650px"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 md:gap-3">
                {/* Data News */}
                <p className="font-halenoir-regular text-fni-dark text-base md:text-lg lg:text-xl uppercase tracking-wide">
                  {formatNewsDateShort(article.date)}
                </p>

                {/* Titolo */}
                <h2 className="font-halenoir-bold text-fni-red text-2xl md:text-3xl lg:text-4xl uppercase leading-tight group-hover:opacity-80 transition-opacity">
                  {article.title}
                </h2>

                {/* Linea decorativa */}
                <div className="w-full h-[2px] bg-fni-red my-1 md:my-2" />

                {/* Sommario */}
                <p className="font-halenoir-regular text-fni-dark text-lg md:text-xl lg:text-2xl leading-relaxed">
                  {article.summary}
                </p>

                {/* Excerpt */}
                <p className="font-halenoir-regular text-fni-dark text-base md:text-lg lg:text-xl leading-relaxed line-clamp-4">
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
