'use client';

import Image from 'next/image';

/**
 * OspitiHero Section
 *
 * Hero della pagina OSPITI con titolo e immagine
 */

export default function OspitiHero() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Titolo */}
        <h1 className="font-halenoir-regular text-fni-red text-4xl md:text-5xl lg:text-[64px] uppercase mb-8 md:mb-12 lg:mb-16">
          [OSPITI EDIZIONE2025]
        </h1>

        {/* Immagine Hero */}
        <div className="relative w-full aspect-[1610/725] border border-white">
          <Image
            src="/images/ospiti/hero-ospiti.png"
            alt="Ospiti Festival Narrazione Industriale"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
