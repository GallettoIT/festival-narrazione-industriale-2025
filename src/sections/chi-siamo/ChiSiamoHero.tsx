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
      <section className="relative w-full bg-white pt-12 md:pt-20 pb-8 md:pb-12">
        <div className="max-w-container-fni mx-auto px-6 md:px-8">
          <h1 className="font-halenoir-regular text-fni-red text-4xl md:text-5xl lg:text-[64px] uppercase">
            [CHI SIAMO]
          </h1>
        </div>
      </section>

      {/* Hero section con GIF */}
      <section className="relative w-full bg-fni-red py-16 md:py-24 lg:py-32">
        <div className="max-w-container-fni mx-auto px-6 md:px-8">
          <div className="flex items-center justify-center">
            {/* GIF orizzontale - visibile solo su lg+ */}
            <div className="hidden lg:block relative w-full aspect-video max-w-5xl">
              <Image
                src="/gif/FNI_ORIZZONTALE.gif"
                alt="Logo FNI animato"
                fill
                className="object-contain"
                unoptimized
                priority
              />
            </div>

            {/* GIF verticale - visibile solo su mobile/tablet */}
            <div className="lg:hidden relative w-full max-w-md aspect-[9/16]">
              <Image
                src="/gif/FNI_VERTICALE.gif"
                alt="Logo FNI animato"
                fill
                className="object-contain"
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
