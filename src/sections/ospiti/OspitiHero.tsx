'use client';

/**
 * OspitiHero Section
 *
 * Hero della pagina OSPITI con solo titolo
 */

export default function OspitiHero() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Titolo */}
        <h1 className="font-halenoir-regular text-fni-red text-4xl md:text-5xl lg:text-[64px] uppercase">
          [OSPITI EDIZIONE2025]
        </h1>
      </div>
    </section>
  );
}
