'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ospiti } from '@/data/ospiti';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Ospiti Slider Section - Festival Narrazione Industriale
 *
 * Carousel moderno con:
 * - Autoplay infinito ogni 2 secondi (loop seamless)
 * - Altezze card dinamiche (alta/bassa) per effetto visivo vario
 * - Touch/drag navigation
 * - Frecce custom in CSS (stile Figma)
 * - Card design fedele a Figma
 * - Responsive: 1 card mobile, 2 tablet, 3-4 desktop
 *
 * Per aggiungere/rimuovere ospiti: modificare src/data/ospiti.ts
 *
 * Figma Node ID: 4099:73
 */

export default function OspitiSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,          // Loop infinito seamless
      align: 'start',      // Allineamento card
      skipSnaps: false,
      dragFree: false,     // Snap alle card
    },
    [
      Autoplay({
        delay: 2000,                 // 2 secondi tra gli scroll
        stopOnInteraction: false,    // Continua anche dopo interazione utente
        stopOnMouseEnter: true,      // Pausa su hover
      })
    ]
  );

  // Funzione per andare alla slide precedente
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // Funzione per andare alla slide successiva
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      className="relative w-full bg-fni-white py-16 md:py-24 lg:py-32"
      data-section="ospiti"
    >
      <div className="max-w-container-fni mx-auto px-6 md:px-8">

        {/* Titolo - Allineato a sinistra */}
        <h2 className="font-halenoir-regular text-fni-red text-4xl md:text-5xl uppercase mb-12 md:mb-16">
          [OSPITI]
        </h2>

        {/* Carousel Container */}
        <div className="relative">

          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {ospiti.map((ospite) => {
                // Aspect ratio:
                // Mobile: tutte uguali (380) per uniformità e semplicità
                // Desktop: variazione alta/bassa per dinamismo visivo come da Figma
                const aspectRatioDesktop = ospite.altezza === 'alta'
                  ? 'md:aspect-[348/480]'  // Card alta desktop
                  : 'md:aspect-[348/360]'; // Card bassa desktop

                return (
                  <div
                    key={ospite.id}
                    className="flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 min-w-0 pr-6 md:pr-8"
                  >
                    {/* Card Ospite - Clickable Link */}
                    <Link href="/ospiti" className="group cursor-pointer block">
                      {/* Immagine - Mobile uniforme, Desktop dinamico */}
                      <div className={`relative w-full aspect-[348/380] ${aspectRatioDesktop} mb-4 md:mb-6 overflow-hidden rounded-lg`}>
                        <Image
                          src={ospite.immagine}
                          alt={ospite.altImmagine || ospite.nome}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        />
                      </div>

                      {/* Nome e Ruolo */}
                      <div className="space-y-1">
                        {/* Nome - BOLD rosso uppercase */}
                        <p className="font-halenoir-bold text-fni-red text-xl md:text-2xl uppercase leading-tight">
                          {ospite.nome}
                        </p>
                        {/* Ruolo - Grigio normale uppercase */}
                        <p className="font-halenoir-regular text-[#282828] text-base md:text-lg uppercase">
                          {ospite.ruolo}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Frecce Navigazione - CSS custom */}
          {/* Freccia Sinistra */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 lg:-translate-x-12 z-10 p-3 md:p-4 hover:scale-110 transition-transform duration-300"
            aria-label="Ospite precedente"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M25 10 L15 20 L25 30"
                  stroke="#e94d34"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          {/* Freccia Destra */}
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 lg:translate-x-12 z-10 p-3 md:p-4 hover:scale-110 transition-transform duration-300"
            aria-label="Ospite successivo"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M15 10 L25 20 L15 30"
                  stroke="#e94d34"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

        </div>

      </div>
    </section>
  );
}
