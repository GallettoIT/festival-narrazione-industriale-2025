'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Header - Festival Narrazione Industriale
 *
 * Header principale con:
 * - Logo FNI a sinistra
 * - Menu di navigazione orizzontale
 * - Hamburger menu per mobile
 * - Sticky header con scroll effect (opzionale)
 *
 * Figma Node ID: 1:201 (Logo)
 */

const menuItems = [
  { label: 'CHI SIAMO', href: '/chi-siamo' },
  { label: 'PROGRAMMA', href: '/programma' },
  { label: 'OSPITI', href: '/ospiti' },
  { label: 'EDIZIONI', href: '/edizioni' },
  { label: 'LAB', href: '/lab' },
  { label: 'CONTATTI', href: '/contatti' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block" aria-label="Festival Narrazione Industriale - Home">
              {/* Logo FNI SVG - Scaricato da Figma */}
              <div className="relative w-[140px] md:w-[180px] h-[52px] md:h-[67px]">
                <Image
                  src="/images/logo-fni.svg"
                  alt="Festival Narrazione Industriale"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-halenoir-regular text-fni-dark text-sm xl:text-base uppercase hover:text-fni-red transition-colors duration-300 relative group"
              >
                {item.label}
                {/* Underline hover effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fni-red group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-fni-dark transition-transform duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-fni-dark transition-opacity duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-fni-dark transition-transform duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block font-halenoir-regular text-fni-dark text-base uppercase hover:text-fni-red transition-colors duration-300 py-2 border-b border-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
