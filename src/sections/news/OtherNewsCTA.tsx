'use client';

import Link from 'next/link';

/**
 * OtherNewsCTA - Festival Narrazione Industriale
 *
 * CTA per tornare alla lista news con:
 * - Bottone "ALTRE NEWS" centrato bianco su sfondo rosso
 *
 * Figma Node ID: 1:2425-2428
 */

export default function OtherNewsCTA() {
  return (
    <section className="relative w-full bg-white">
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
