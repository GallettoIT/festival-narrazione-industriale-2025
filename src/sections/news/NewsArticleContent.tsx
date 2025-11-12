'use client';

import { useState } from 'react';
import Image from 'next/image';
import { NewsArticle } from '@/data/news';

/**
 * NewsArticleContent - Festival Narrazione Industriale
 *
 * Contenuto articolo con:
 * - Layout testo + immagini alternato
 * - Linee decorative rosse
 * - Firma articolo
 * - Immagini apribili in lightbox
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

  // State per lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [lightboxAlt, setLightboxAlt] = useState('');

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage(src);
    setLightboxAlt(alt);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

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
            <div
              className="relative w-full h-[400px] md:h-[500px] lg:h-[658px] overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(mainImage, mainImageAlt)}
            >
              <Image
                src={mainImage}
                alt={mainImageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 650px"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>

            {/* Immagine Secondaria (solo se articleImage è specificato) */}
            {article.articleImage && (
              <div
                className="relative w-full h-[400px] md:h-[500px] lg:h-[807px] overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(article.featuredImage, article.featuredImageAlt)}
              >
                <Image
                  src={article.featuredImage}
                  alt={article.featuredImageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 650px"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-fni-red transition-colors z-50"
            onClick={closeLightbox}
            aria-label="Chiudi immagine"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <Image
              src={lightboxImage}
              alt={lightboxAlt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
