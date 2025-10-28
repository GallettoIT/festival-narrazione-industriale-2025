'use client';

import Link from 'next/link';

/**
 * CTA Section Component - Festival Narrazione Industriale
 *
 * Componente per Call-to-Action con bottone
 *
 * Props:
 * - bgColor: colore background
 * - buttonText: testo del bottone
 * - buttonColor: classi colore del bottone (border + text + hover)
 * - href: link destinazione
 */

interface CTASectionProps {
  bgColor: string;
  buttonText: string;
  buttonColor: string;
  href: string;
}

export default function CTASection({
  bgColor,
  buttonText,
  buttonColor,
  href,
}: CTASectionProps) {
  return (
    <section className={`relative w-full ${bgColor} py-16 md:py-20 lg:py-24`}>
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        <div className="flex items-center justify-center">
          <Link
            href={href}
            className={`inline-block font-halenoir-regular text-[18px] md:text-[24px] lg:text-[36px] uppercase border-[3px] ${buttonColor} px-4 md:px-6 lg:px-8 py-2 md:py-2.5 lg:py-3 transition-colors duration-300 text-center`}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
