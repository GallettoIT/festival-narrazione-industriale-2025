'use client';

import Image from 'next/image';

/**
 * Chi Siamo Hero Section
 *
 * Sezione hero della pagina Chi Siamo con:
 * - Titolo [CHI SIAMO]
 * - Background rosso con GIF del logo FNI (16:9 su desktop, 9:16 su mobile)
 */

export default function ChiSiamoHero() {
  return (
    <>
      {/* Titolo [CHI SIAMO] */}
      <section className="relative w-full bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-container-fni mx-auto px-6 md:px-8">
          <h1 className="font-halenoir-regular text-fni-red text-4xl md:text-5xl lg:text-[64px] uppercase">
            [CHI SIAMO]
          </h1>
        </div>
      </section>

      {/* Hero section con GIF - Full width con altezza ridotta */}
      <section className="relative w-full bg-fni-red overflow-hidden">
        {/* GIF orizzontale 16:9 - visibile solo su lg+ */}
        <div className="hidden lg:block relative w-full h-[400px] xl:h-[500px]">
          <Image
            src="/gif/FNI_ORIZZONTALE.gif"
            alt="Logo FNI animato"
            fill
            className="object-cover"
            unoptimized
            priority
          />
        </div>

        {/* GIF verticale 9:16 - visibile solo su mobile/tablet */}
        <div className="lg:hidden relative w-full h-[500px] md:h-[600px]">
          <Image
            src="/gif/FNI_VERTICALE.gif"
            alt="Logo FNI animato"
            fill
            className="object-cover"
            unoptimized
            priority
          />
        </div>
      </section>
    </>
  );
}
