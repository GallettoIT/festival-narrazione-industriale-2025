'use client';

import Image from 'next/image';

/**
 * LabHero Section
 *
 * Hero della pagina LAB con titolo e immagine hero
 */

export default function LabHero() {
  return (
    <section className="relative w-full bg-[#f7f4f4] pt-6 md:pt-8 lg:pt-10 pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Titolo */}
        <h1 className="font-halenoir-regular text-fni-red text-4xl md:text-5xl lg:text-[64px] uppercase mb-8 md:mb-12 lg:mb-16">
          [LAB]
        </h1>

        {/* Immagine Hero */}
        <div className="relative w-full aspect-[1609/721] overflow-hidden">
          <Image
            src="/images/lab/hero-lab.png"
            alt="Laboratorio Raccontare il Lavoro"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
