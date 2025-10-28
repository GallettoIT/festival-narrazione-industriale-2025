'use client';

import Image from 'next/image';

/**
 * AziendeCoinvolte2024 Section
 *
 * Sezione con loghi delle aziende partner dell'edizione 2024
 */

export default function AziendeCoinvolte2024() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Titolo */}
        <h2 className="font-halenoir-regular text-fni-red text-4xl md:text-5xl uppercase mb-12 md:mb-16">
          [AZIENDE COINVOLTE <br className="hidden md:block" />EDIZIONE 2024]
        </h2>

        {/* Immagine loghi aziende */}
        <div className="relative w-full">
          <div className="relative w-full aspect-[1611/859] max-w-[1400px] mx-auto">
            <Image
              src="/images/edizioni/aziende-2024.png"
              alt="Aziende partner edizione 2024"
              fill
              className="object-contain object-center grayscale"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
