'use client';

import Image from 'next/image';
import { NewsArticle } from '@/data/news';

/**
 * NewsArticleContent - Festival Narrazione Industriale
 *
 * Contenuto articolo con:
 * - Layout testo + immagini alternato
 * - Linee decorative rosse
 * - Firma articolo
 *
 * Figma Node ID: 1:2416-2424
 */

interface NewsArticleContentProps {
  article: NewsArticle;
}

export default function NewsArticleContent({ article }: NewsArticleContentProps) {
  // Usa articleImage se disponibile, altrimenti featuredImage
  const mainImage = article.articleImage || article.featuredImage;
  const mainImageAlt = article.articleImageAlt || article.featuredImageAlt;

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Colonna Sinistra - Testo */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Linea decorativa top */}
            <div className="w-full h-[2px] bg-fni-red" />

            {/* Contenuto articolo */}
            <div
              className="font-halenoir-regular text-fni-dark text-sm md:text-base lg:text-lg leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Linea decorativa bottom con firma */}
            {article.author && (
              <div className="flex flex-col gap-3 mt-8">
                <div className="w-full h-[2px] bg-fni-red" />
                <div className="flex justify-end">
                  <p className="font-halenoir-bold text-fni-red text-sm md:text-base uppercase text-right">
                    {article.author}
                    {article.authorRole && (
                      <>
                        <br />
                        <span className="font-halenoir-regular text-xs md:text-sm">
                          {article.authorRole}
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Colonna Destra - Immagini */}
          <div className="flex flex-col gap-8 lg:gap-12">
            {/* Immagine Articolo Principale */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[658px] overflow-hidden">
              <Image
                src={mainImage}
                alt={mainImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 650px"
              />
            </div>

            {/* Immagine Secondaria (solo se articleImage è specificato) */}
            {article.articleImage && (
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[807px] overflow-hidden">
                <Image
                  src={article.featuredImage}
                  alt={article.featuredImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 650px"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
