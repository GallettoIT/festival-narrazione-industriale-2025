'use client';

import Image from 'next/image';
import Link from 'next/link';

/**
 * PressArea - Festival Narrazione Industriale
 *
 * Sezione dedicata alla stampa con:
 * - Titolo PRESS AREA
 * - Link download rassegna stampa
 * - Bottone NEWS E STAMPA
 * - Logo sponsor
 *
 * Figma Node ID: 43:2864-2922
 */

export default function PressArea() {
  return (
    <section className="w-full bg-[#e0e0e0] py-12 md:py-16 lg:py-20">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Logo + Title */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Logo FNI */}
            <div className="relative w-[140px] md:w-[160px] h-[52px] md:h-[60px]">
              <Image
                src="/images/logo-fni-dark.svg"
                alt="Festival Narrazione Industriale"
                fill
                className="object-contain object-left"
              />
            </div>

            {/* Title */}
            <h2 className="font-halenoir-bold text-fni-red text-3xl md:text-4xl lg:text-5xl uppercase leading-tight">
              PRESS AREA
            </h2>
          </div>

          {/* Right: Content + CTA */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Download Text */}
            <p className="font-halenoir-regular text-fni-dark text-lg md:text-xl lg:text-2xl leading-relaxed">
              Scarica la rassegna stampa
            </p>

            {/* CTA Button */}
            <div className="flex justify-start">
              <Link
                href="/rassegna-stampa.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-halenoir-regular text-fni-red text-base md:text-lg lg:text-xl uppercase border-[3px] border-fni-red px-6 md:px-8 lg:px-10 py-2.5 md:py-3 hover:bg-fni-red hover:text-white transition-all duration-300"
              >
                NEWS E STAMPA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
