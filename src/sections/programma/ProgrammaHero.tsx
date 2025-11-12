'use client';

/**
 * Programma Hero Section
 *
 * Sezione hero con solo titolo [PROGRAMMA]
 */

export default function ProgrammaHero() {
  return (
    <section className="relative w-full bg-white pt-6 md:pt-8 lg:pt-10 pb-10 md:pb-14 lg:pb-16">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        {/* Titolo */}
        <h1 className="font-halenoir-regular text-fni-red text-4xl md:text-5xl lg:text-[64px] uppercase">
          [PROGRAMMA]
        </h1>
      </div>
    </section>
  );
}
