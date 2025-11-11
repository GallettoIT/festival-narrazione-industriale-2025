'use client';

import Link from 'next/link';

/**
 * OtherNewsCTA - Festival Narrazione Industriale
 *
 * CTA per tornare alla lista news con:
 * - Onda decorativa
 * - Bottone "ALTRE NEWS" centrato bianco
 *
 * Figma Node ID: 1:2425-2428
 */

export default function OtherNewsCTA() {
  return (
    <section className="relative w-full bg-white">
      {/* Onda Decorativa */}
      <div className="relative w-full h-[100px] md:h-[140px] lg:h-[168px] overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1920 168"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 168V84C160 28 320 0 480 0C640 0 800 28 960 84C1120 140 1280 168 1440 168C1600 168 1760 140 1920 84V168H0Z"
            fill="#E94D34"
          />
        </svg>
      </div>

      {/* CTA Button su sfondo rosso */}
      <div className="bg-fni-red w-full py-12 md:py-16 lg:py-20">
        <div className="max-w-container-fni mx-auto px-6 md:px-8 flex justify-center">
          <Link
            href="/news-stampa"
            className="inline-block font-halenoir-regular text-white text-lg md:text-xl lg:text-2xl uppercase border-[3px] border-white px-8 md:px-12 lg:px-16 py-3 md:py-4 hover:bg-white hover:text-fni-red transition-all duration-300"
          >
            ALTRE NEWS
          </Link>
        </div>
      </div>
    </section>
  );
}
