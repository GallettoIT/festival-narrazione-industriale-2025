import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OspitiHero from '@/sections/ospiti/OspitiHero';
import UmanesimoIndustrialeOspiti from '@/sections/ospiti/UmanesimoIndustrialeOspiti';
import GrigliaOspiti from '@/sections/ospiti/GrigliaOspiti';
import CTASection from '@/components/CTASection';
import Script from 'next/script';

/**
 * Pagina OSPITI
 *
 * Mostra tutti gli ospiti del festival con informazioni dettagliate
 */

export const metadata: Metadata = {
  title: 'Ospiti 2025',
  description: 'Scopri gli ospiti del Festival della Narrazione Industriale 2025. Scrittori, registi, artisti e pensatori esplorano il tema dell\'Umanesimo Industriale a Parma dal 24 al 29 Novembre.',
  keywords: [
    'ospiti festival narrazione industriale',
    'relatori festival parma',
    'scrittori festival parma 2025',
    'ospiti umanesimo industriale',
    'artisti festival narrazione',
    'registi cinema industriale',
    'intellettuali parma 2025',
    'speaker festival narrazione'
  ],
  openGraph: {
    title: 'Ospiti 2025 | Festival Narrazione Industriale',
    description: 'Scopri gli ospiti del Festival della Narrazione Industriale 2025. Scrittori, registi, artisti e pensatori esplorano il tema dell\'Umanesimo Industriale.',
    url: 'https://www.festivalnarrazioneindustriale.it/ospiti',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ospiti Festival Narrazione Industriale 2025',
      },
    ],
  },
};

export default function OspitiPage() {
  // Structured Data - Person/Speaker List
  const speakerListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Ospiti Festival della Narrazione Industriale 2025',
    description: 'Lista degli ospiti e relatori del Festival della Narrazione Industriale 2025',
    url: 'https://www.festivalnarrazioneindustriale.it/ospiti',
    numberOfItems: 10, // Aggiorna con il numero reale
  }

  return (
    <main className="min-h-screen bg-white pt-20 md:pt-24">
      {/* Structured Data - Speaker List Schema */}
      <Script
        id="speaker-list-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(speakerListSchema),
        }}
      />

      <Header />
      <OspitiHero />
      <UmanesimoIndustrialeOspiti />
      <GrigliaOspiti />
      <CTASection
        bgColor="bg-[#272828]"
        buttonText="SCOPRI IL PROGRAMMA 2025"
        buttonColor="border-fni-red text-fni-red hover:bg-fni-red hover:text-white"
        href="/programma"
      />
      <Footer />
    </main>
  );
}
