'use client';

import Link from 'next/link';

/**
 * Hero Section - Festival Narrazione Industriale
 *
 * Sezione hero con:
 * - Logo F-N-I grande con linee decorative
 * - Tagline dell'edizione corrente
 * - Immagine hero con overlay
 * - CTA "Scopri"
 *
 * Figma Node ID: 4075:4
 */

export default function HeroSection() {
  return (
    <section
      className="relative w-full bg-fni-white"
      data-section="hero"
    >
      {/* Logo F-N-I Grande e Tagline */}
      <div className="relative w-full pt-12 md:pt-20">
        <div className="max-w-container-fni mx-auto px-6 md:px-8">
          {/* Logo FNI con linee - Codice per proporzioni corrette */}
          <div className="relative mb-8">
            <div className="flex items-center justify-between gap-4 md:gap-8 lg:gap-12">
              <div className="flex-1 flex items-center gap-4 md:gap-8 lg:gap-16">
                {/* F */}
                <div className="font-halenoir-bold text-fni-red text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-none">
                  F
                </div>
                {/* Linea decorativa - più spessa */}
                <div className="flex-1 h-1 md:h-1.5 lg:h-2 bg-fni-red" />
              </div>

              <div className="flex-1 flex items-center gap-4 md:gap-8 lg:gap-16 justify-center">
                {/* N */}
                <div className="font-halenoir-bold text-fni-red text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-none">
                  N
                </div>
                {/* Linea decorativa - più spessa */}
                <div className="flex-1 h-1 md:h-1.5 lg:h-2 bg-fni-red" />
              </div>

              <div className="flex items-center gap-4 md:gap-8 lg:gap-16">
                {/* I */}
                <div className="font-halenoir-bold text-fni-red text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-none">
                  I
                </div>
              </div>
            </div>
          </div>

          {/* Tagline - Testo pulito senza linee decorative */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="font-halenoir-regular text-fni-red text-base md:text-xl lg:text-2xl leading-relaxed">
              «Io penso la fabbrica per l&apos;uomo, non l&apos;uomo per la fabbrica» (Adriano Olivetti). L&apos;umanesimo industriale guida il racconto di questa edizione: un intreccio di storie, fabbrica e territori che, attraverso voci autorevoli, definisce nuovi sguardi al futuro.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image con Overlay */}
      {/* Desktop: margini laterali + bottom | Mobile: full-width, no margini */}
      <div className="max-w-container-fni mx-auto px-0 md:px-8 mb-0 md:mb-12 lg:mb-16">
        <div className="relative w-full h-[450px] sm:h-[600px] md:h-[725px] overflow-hidden">
          {/* Background Image - Scaricata da Figma */}
          <img
            src="/images/hero-robot.jpg"
            alt="Robot industriale"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay Content */}
          <div className="relative h-full flex flex-col items-start justify-end p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="max-w-xl">
              {/* Titolo */}
              <h1 className="font-halenoir-regular text-fni-white text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase mb-4 sm:mb-6 md:mb-8">
                COS&apos;È IL FESTIVAL DELLA NARRAZIONE INDUSTRIALE
              </h1>

              {/* CTA Button - Link to Chi Siamo */}
              <Link
                href="/chi-siamo"
                className="inline-block font-halenoir-regular text-fni-white text-base sm:text-lg md:text-xl uppercase px-4 py-1.5 border-[3px] border-fni-white hover:bg-fni-white hover:text-fni-dark transition-all duration-300"
                aria-label="Scopri di più sul festival"
              >
                SCOPRI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
