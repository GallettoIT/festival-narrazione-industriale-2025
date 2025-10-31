'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

/**
 * Lab2024 Section
 *
 * Sezione grigia scura con progetto vincitore LAB 2024 - Pilogen Carezza
 * Feature: Scroll orizzontale hijacking - lo scroll verticale diventa orizzontale quando nella sezione
 */

export default function Lab2024() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartY = useRef<number>(0);
  const lastScrollTop = useRef<number>(0);

  // Scroll hijacking per desktop (wheel) e mobile (touch)
  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!section || !scrollContainer) return;

    // DESKTOP: Wheel event
    const handleWheel = (e: WheelEvent) => {
      const carouselRect = scrollContainer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const carouselTop = carouselRect.top;
      const carouselBottom = carouselRect.bottom;

      const scrollLeft = scrollContainer.scrollLeft;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      const isCarouselInView = carouselTop < viewportHeight && carouselBottom > 0;

      if (!isCarouselInView) return;

      // SCROLL VERSO IL BASSO
      if (e.deltaY > 0) {
        const shouldHijackDown = carouselTop <= viewportHeight * 0.3 && carouselBottom > viewportHeight * 0.5;

        if (shouldHijackDown && scrollLeft < maxScroll) {
          e.preventDefault();

          requestAnimationFrame(() => {
            scrollContainer.scrollLeft += e.deltaY * 1;
          });

          setIsScrolling(true);

          if (scrollingTimeoutRef.current) clearTimeout(scrollingTimeoutRef.current);
          scrollingTimeoutRef.current = setTimeout(() => setIsScrolling(false), 150);
        }
      }
      // SCROLL VERSO L'ALTO
      else if (e.deltaY < 0) {
        // Richiede che il carousel sia BEN VISIBILE - top deve essere dentro il viewport
        const shouldHijackUp = carouselTop >= 0 && carouselTop <= viewportHeight * 0.5 && carouselBottom > viewportHeight * 0.6;

        if (shouldHijackUp && scrollLeft > 0) {
          e.preventDefault();

          requestAnimationFrame(() => {
            scrollContainer.scrollLeft += e.deltaY * 1;
          });

          setIsScrolling(true);

          if (scrollingTimeoutRef.current) clearTimeout(scrollingTimeoutRef.current);
          scrollingTimeoutRef.current = setTimeout(() => setIsScrolling(false), 150);
        }
      }
    };

    // MOBILE: Touch events
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      lastScrollTop.current = window.pageYOffset || document.documentElement.scrollTop;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const carouselRect = scrollContainer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const carouselTop = carouselRect.top;
      const carouselBottom = carouselRect.bottom;

      const scrollLeft = scrollContainer.scrollLeft;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      const isCarouselInView = carouselTop < viewportHeight && carouselBottom > 0;

      if (!isCarouselInView) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchY;

      // SWIPE VERSO IL BASSO (scroll down)
      if (deltaY > 0) {
        const shouldHijackDown = carouselTop <= viewportHeight * 0.3 && carouselBottom > viewportHeight * 0.5;

        if (shouldHijackDown && scrollLeft < maxScroll) {
          e.preventDefault();

          requestAnimationFrame(() => {
            scrollContainer.scrollLeft += deltaY * 1; // Moltiplicatore più basso per touch
          });

          touchStartY.current = touchY; // Reset per scroll continuo
        }
      }
      // SWIPE VERSO L'ALTO (scroll up)
      else if (deltaY < 0) {
        // Richiede che il carousel sia BEN VISIBILE - top deve essere dentro il viewport
        const shouldHijackUp = carouselTop >= 0 && carouselTop <= viewportHeight * 0.5 && carouselBottom > viewportHeight * 0.6;

        if (shouldHijackUp && scrollLeft > 0) {
          e.preventDefault();

          requestAnimationFrame(() => {
            scrollContainer.scrollLeft += deltaY * 1; // Moltiplicatore più basso per touch
          });

          touchStartY.current = touchY; // Reset per scroll continuo
        }
      }
    };

    // Event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      if (scrollingTimeoutRef.current) clearTimeout(scrollingTimeoutRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#282828] py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Titolo sezione - ROSSO come da Figma */}
        <h2 className="font-halenoir-bold text-fni-red text-[32px] md:text-[40px] lg:text-[48px] uppercase mb-8 md:mb-12">
          LAB 2024
        </h2>

        {/* Sottotitolo progetto vincitore */}
        <h3 className="font-halenoir-bold text-[#f7f4f4] text-[20px] md:text-[22px] lg:text-[25px] uppercase mb-12 md:mb-16 lg:mb-20">
          PILOGEN CAREZZA: IL PROGETTO VINCITORE
        </h3>

        {/* Container scroll orizzontale */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide -mx-6 md:mx-0 px-6 md:px-0"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-y', // Permette scroll verticale ma lo hijackeremo
          }}
        >
          <div className="flex gap-4 md:gap-6 lg:gap-8 pb-8 md:pb-12 lg:pb-16" style={{ width: 'max-content' }}>
            {/* Galleria immagini orizzontale */}
            <div className="relative w-[280px] sm:w-[350px] md:w-[450px] lg:w-[508px] h-[190px] sm:h-[235px] md:h-[300px] lg:h-[341px] flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src="/images/lab/pilogen-7.png"
                alt="Pilogen Carezza"
                fill
                className="object-cover object-center"
                sizes="508px"
              />
            </div>

            <div className="relative w-[263px] md:w-[332px] h-[395px] md:h-[498px] flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src="/images/lab/pilogen-3.png"
                alt="Pilogen Carezza"
                fill
                className="object-cover object-center"
                sizes="332px"
              />
            </div>

            <div className="relative w-[400px] md:w-[508px] h-[268px] md:h-[338px] flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src="/images/lab/pilogen-2.png"
                alt="Pilogen Carezza"
                fill
                className="object-cover object-center"
                sizes="508px"
              />
            </div>

            <div className="relative w-[63px] md:w-[80px] h-[390px] md:h-[493px] flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src="/images/lab/pilogen-6.png"
                alt="Pilogen Carezza"
                fill
                className="object-cover object-center"
                sizes="80px"
              />
            </div>

            {/* Nuove immagini al posto della freccia */}
            <div className="relative w-[400px] md:w-[508px] h-[270px] md:h-[341px] flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src="/images/lab/pilogen-5.png"
                alt="Pilogen Carezza"
                fill
                className="object-cover object-center"
                sizes="508px"
              />
            </div>

            <div className="relative w-[260px] md:w-[328px] h-[390px] md:h-[492px] flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src="/images/lab/pilogen-1746.png"
                alt="Pilogen Carezza"
                fill
                className="object-cover object-center"
                sizes="328px"
              />
            </div>

            <div className="relative w-[400px] md:w-[508px] h-[270px] md:h-[341px] flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src="/images/lab/pilogen-8.png"
                alt="Pilogen Carezza"
                fill
                className="object-cover object-center"
                sizes="508px"
              />
            </div>

            <div className="relative w-[263px] md:w-[332px] h-[395px] md:h-[498px] flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src="/images/lab/pilogen-4.png"
                alt="Pilogen Carezza"
                fill
                className="object-cover object-center"
                sizes="332px"
              />
            </div>
          </div>
        </div>

        {/* Contenuto testuale sotto il carosello */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 mt-12 md:mt-16 lg:mt-20">
          {/* Colonna sinistra - Testo */}
          <div className="font-halenoir-regular text-[#f7f4f4] text-[18px] md:text-[19px] lg:text-[20px] leading-[25px] space-y-5">
            <p className="font-halenoir-bold text-white uppercase">
              PILOGEN CAREZZA: "CORRISPONDENZE"
            </p>

            <p>
              Progetto vincitore di questa edizione 2024, ha interpretato la storia della famiglia Pignacca, fondatrice di Pilogen Carezza Srl, azienda leader nel settore della cosmesi naturale. Con una storia che fonda le sue radici fin dal 1898, Pilogen Carezza rappresenta un&apos;eccellenza del Made in Italy, specializzata nella produzione di prodotti cosmetici di alta qualità che riflettono cura, ricerca e attenzione ai dettagli.
            </p>

            <p>
              Il gruppo di lavoro universitario ha scelto di raccontare l&apos;azienda attraverso il suo straordinario percorso storico, valorizzando un patrimonio archiviale di oltre 600 lettere ricevute nel tempo dai clienti. Reinterpretando immagini d&apos;epoca, il gruppo ha narrato il "tempo del benessere": la strategia comunicativa ha messo in relazione passato e presente, producendo contenuti capaci di trasmettere un talento imprenditoriale unico.
            </p>
          </div>

          {/* Colonna destra - Video YouTube */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/yTctCP2XMIc"
              title="Pilogen Carezza - Progetto vincitore"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
