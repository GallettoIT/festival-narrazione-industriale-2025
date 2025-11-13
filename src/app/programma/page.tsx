import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ProgrammaHero from '@/sections/programma/ProgrammaHero';
import UmanesimoIndustriale from '@/sections/programma/UmanesimoIndustriale';
import CalendarioEventi from '@/sections/programma/CalendarioEventi';
import LuoghiEventi from '@/sections/programma/LuoghiEventi';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Programma 2025',
  description: 'Scopri il programma completo del Festival della Narrazione Industriale 2025. Tema: Umanesimo Industriale. Cinema, letteratura, arte e incontri a Parma dal 24 al 29 Novembre.',
  keywords: [
    'programma festival narrazione industriale',
    'festival parma 2025 programma',
    'eventi parma novembre 2025',
    'umanesimo industriale programma',
    'calendario festival narrazione',
    'cinema letteratura arte parma',
    'adriano olivetti eventi',
    'luoghi festival parma'
  ],
  openGraph: {
    title: 'Programma 2025 | Festival Narrazione Industriale',
    description: 'Scopri il programma completo del Festival della Narrazione Industriale 2025. Cinema, letteratura, arte e incontri a Parma dal 24 al 29 Novembre.',
    url: 'https://www.festivalnarrazioneindustriale.it/programma',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Programma Festival Narrazione Industriale 2025',
      },
    ],
  },
};

export default function ProgrammaPage() {
  // Structured Data - Event Schema per Programma
  const eventListSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventSeries',
    name: 'Festival della Narrazione Industriale 2025 - Programma Completo',
    description: 'Programma completo del Festival della Narrazione Industriale 2025. Tema: Per un Umanesimo Industriale. Eventi di cinema, letteratura e arte.',
    startDate: '2025-11-24',
    endDate: '2025-11-29',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    image: 'https://www.festivalnarrazioneindustriale.it/images/og-image.jpg',
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
    performer: {
      '@type': 'Organization',
      name: 'Festival della Narrazione Industriale',
    },
    eventSchedule: {
      '@type': 'Schedule',
      startDate: '2025-11-24',
      endDate: '2025-11-29',
      repeatFrequency: 'P1Y',
    },
    url: 'https://www.festivalnarrazioneindustriale.it/programma',
    inLanguage: 'it-IT',
    offers: {
      '@type': 'Offer',
      url: 'https://www.festivalnarrazioneindustriale.it/programma',
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      validFrom: '2025-10-01',
    },
  }

  return (
    <main className="min-h-screen bg-white pt-20 md:pt-24">
      {/* Structured Data - EventSeries Schema */}
      <Script
        id="event-series-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventListSchema),
        }}
      />

      <Header />

      {/* Hero section con titolo e immagine */}
      <ProgrammaHero />

      {/* Sezione tema: L'umanesimo industriale */}
      <UmanesimoIndustriale />

      {/* Calendario completo degli eventi */}
      <CalendarioEventi />

      {/* CTA Scarica il programma */}
      <CTASection
        bgColor="bg-[#272828]"
        buttonText="SCARICA IL PROGRAMMA"
        buttonColor="border-fni-red text-fni-red hover:bg-fni-red hover:text-white"
        href="/pdf/PROGRAMMA A4.pdf"
      />

      {/* Mappa luoghi eventi */}
      <LuoghiEventi />

      <Footer />
    </main>
  );
}
