import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Separator from '@/components/Separator';
import EdizioniHero from '@/sections/edizioni/EdizioniHero';
import InfoEdizione2024 from '@/sections/edizioni/InfoEdizione2024';
import CalendarioEventi2024 from '@/sections/edizioni/CalendarioEventi2024';
import Ospiti2024 from '@/sections/edizioni/Ospiti2024';
import AziendeCoinvolte2024 from '@/sections/edizioni/AziendeCoinvolte2024';
import Link from 'next/link';
import Script from 'next/script';

/**
 * Pagina EDIZIONI
 *
 * Mostra le edizioni precedenti del festival (al momento solo 2024)
 * Include:
 * - Hero con video YouTube edizione 2024
 * - Info edizione 2024 (date + descrizione)
 * - Calendario eventi 2024 (SENZA bottoni calendario)
 * - Ospiti edizione 2024
 * - Aziende partner
 * - CTA per laboratorio universitario
 */

export const metadata: Metadata = {
  title: 'Edizioni Precedenti',
  description: 'Scopri le edizioni passate del Festival della Narrazione Industriale. Rivivi gli eventi, gli ospiti e le aziende partner della prima edizione 2024 a Parma: cinema, letteratura e arte per raccontare il lavoro.',
  keywords: [
    'edizioni festival narrazione industriale',
    'festival parma 2024',
    'edizione 2024 festival narrazione',
    'storia festival parma',
    'archivio festival narrazione industriale',
    'ospiti edizione 2024',
    'aziende partner festival parma',
    'eventi passati festival narrazione',
    'laboratorio universitario 2024'
  ],
  openGraph: {
    title: 'Edizioni Precedenti | Festival Narrazione Industriale',
    description: 'Scopri le edizioni passate del Festival della Narrazione Industriale. Rivivi gli eventi, gli ospiti e le aziende partner della prima edizione 2024.',
    url: 'https://www.festivalnarrazioneindustriale.it/edizioni',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Edizioni Festival Narrazione Industriale',
      },
    ],
  },
};

export default function EdizioniPage() {
  // Structured Data - CollectionPage with past editions
  const editionsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Edizioni del Festival della Narrazione Industriale',
    description: 'Archivio delle edizioni passate del Festival della Narrazione Industriale a Parma',
    url: 'https://www.festivalnarrazioneindustriale.it/edizioni',
    inLanguage: 'it-IT',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Festival della Narrazione Industriale',
      url: 'https://www.festivalnarrazioneindustriale.it',
    },
    about: {
      '@type': 'Event',
      name: 'Festival della Narrazione Industriale 2024 - Prima Edizione',
      startDate: '2024-11-25',
      endDate: '2024-11-30',
      location: {
        '@type': 'Place',
        name: 'Parma',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Parma',
          addressRegion: 'Emilia-Romagna',
          addressCountry: 'IT',
        },
      },
      organizer: {
        '@type': 'Organization',
        name: 'Festival della Narrazione Industriale',
        url: 'https://www.festivalnarrazioneindustriale.it',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
    },
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Structured Data - CollectionPage Schema */}
      <Script
        id="editions-collection-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(editionsSchema),
        }}
      />

      <Header />

      {/* Hero Section */}
      <EdizioniHero />

      {/* Info Edizione 2024 */}
      <InfoEdizione2024 />

      {/* Calendario Eventi 2024 */}
      <CalendarioEventi2024 />

      {/* Separator - Festival Narrazione Industriale */}
      <Separator
        bgColor="bg-fni-red"
        svgPath="/images/logo-fni-festival-full.svg"
        alt="Festival Narrazione Industriale"
      />

      {/* Ospiti Edizione 2024 */}
      <Ospiti2024 />

      {/* CTA Laboratorio Universitario */}
      <section className="relative w-full bg-fni-red py-12 md:py-16 lg:py-20">
        <div className="max-w-container-fni mx-auto px-6 md:px-8">
          <div className="flex items-center justify-center">
            <Link
              href="/lab"
              className="border-[3px] border-[#f7f4f4] px-4 md:px-6 lg:px-8 py-2 md:py-2.5 lg:py-3
                         font-halenoir-regular text-[#f7f4f4] text-[20px] md:text-[26px] lg:text-[32px]
                         uppercase text-center leading-snug
                         transition-all duration-300 hover:bg-[#f7f4f4] hover:text-fni-red"
            >
              PROGETTI LABORATORIO UNIVERSITARIO
            </Link>
          </div>
        </div>
      </section>

      {/* Separator - F-N-I Logo */}
      <Separator
        bgColor="bg-[#282828]"
        svgPath="/images/fni-separator-logo.svg"
        alt="F-N-I"
      />

      {/* Aziende Coinvolte */}
      <AziendeCoinvolte2024 />

      <Footer />
    </main>
  );
}
