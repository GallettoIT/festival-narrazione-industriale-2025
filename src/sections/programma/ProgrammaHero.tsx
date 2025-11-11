'use client';

/**
 * Programma Hero Section
 *
 * Sezione hero con solo titolo [PROGRAMMA]
 */

export default function ProgrammaHero() {
  return (
    <section className="relative w-full bg-white py-10 md:py-14 lg:py-16">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Titolo */}
        <h1 className="font-halenoir-regular text-fni-red text-4xl md:text-5xl lg:text-[64px] uppercase">
          [PROGRAMMA]
        </h1>
      </div>
    </section>
  );
}
