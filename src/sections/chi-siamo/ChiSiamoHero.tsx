'use client';

import Image from 'next/image';

/**
 * Chi Siamo Hero Section
 *
 * Sezione hero della pagina Chi Siamo con:
 * - Background rosso con GIF del logo FNI (16:9 su desktop, 9:16 su mobile)
 */

export default function ChiSiamoHero() {
  return (
    <>
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
