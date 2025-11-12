import type { Metadata } from 'next'
import Header from '@/components/Header'
import HeroSection from '@/sections/HeroSection'
import InfoEdizione from '@/sections/InfoEdizione'
import Focus2025 from '@/sections/Focus2025'
import OspitiSlider from '@/sections/OspitiSlider'
import Separator from '@/components/Separator'
import LayoutFNI from '@/sections/LayoutFNI'
import Edizione2024 from '@/sections/Edizione2024'
import Partners from '@/sections/Partners'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Festival della Narrazione Industriale 2025 | Parma, 24-29 Novembre',
  description: 'La 2^ Edizione dal titolo Per un Umanesimo Industriale, esplora il rapporto tra lavoro e società attraverso cinema, letteratura e arte. Scopri il programma e gli ospiti.',
  keywords: [
    'festival narrazione industriale 2025',
    'festival parma 2025',
    'umanesimo industriale',
    'adriano olivetti',
    'narrazione impresa',
    'cultura industriale',
    'festival novembre parma',
    'economia cultura',
    'storytelling aziendale',
    'eventi parma 2025'
  ],
  openGraph: {
    title: 'Festival della Narrazione Industriale 2025 | Parma, 24-29 Novembre',
    description: 'La 2^ Edizione dal titolo Per un Umanesimo Industriale, esplora il rapporto tra lavoro e società attraverso cinema, letteratura e arte.',
    url: 'https://www.festivalnarrazioneindustriale.it',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Festival della Narrazione Industriale 2025 - Parma',
      },
    ],
  },
}

export default function Home() {
  // Structured Data - Event Schema per il Festival 2025
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Festival della Narrazione Industriale 2025 - Per un Umanesimo Industriale',
    description: 'La 2^ Edizione dal titolo Per un Umanesimo Industriale, esplora il rapporto tra lavoro e società attraverso cinema, letteratura e arte.',
    startDate: '2025-11-24',
    endDate: '2025-11-29',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
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
      sameAs: [
        'https://www.instagram.com/festivalnarrazioneindustriale/',
        'https://www.facebook.com/festivalnarrazioneindustriale/',
      ],
    },
    performer: {
      '@type': 'Organization',
      name: 'Festival della Narrazione Industriale',
    },
    inLanguage: 'it-IT',
    image: 'https://www.festivalnarrazioneindustriale.it/images/og-image.jpg',
    url: 'https://www.festivalnarrazioneindustriale.it',
    keywords: 'festival narrazione industriale, festival parma 2025, umanesimo industriale, adriano olivetti, narrazione impresa, cultura industriale, festival novembre parma, economia cultura, storytelling aziendale, eventi parma 2025',
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
    <main className="min-h-screen pt-20 md:pt-24">
      {/* Structured Data - Event Schema */}
      <Script
        id="event-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchema),
        }}
      />

      {/* Header */}
      <Header />

        {/* Hero Section */}
        <HeroSection />

      {/* Info Edizione 2025 - Sezione Rossa */}
      <InfoEdizione />

      {/* Focus 2025 - Sezione Grigia */}
      <Focus2025 />

      {/* Ospiti Slider - Carosello */}
      <OspitiSlider />

      {/* Separator - Elemento grafico decorativo */}
      <Separator
        bgColor="bg-fni-red"
        svgPath="/images/logo-fni-festival-full.svg"
        alt="Festival Narrazione Industriale"
      />

      {/* Layout F-N-I - Sezione "Perché?" con 3 colonne */}
      <LayoutFNI />

      {/* Edizione 2024 - Retrospettiva con statistiche */}
      <Edizione2024 />

      {/* Separator - Logo FNI su sfondo scuro */}
      <Separator
        bgColor="bg-[#272828]"
        svgPath="/images/fni-separator-logo.svg"
        alt="FNI"
      />

      {/* Partners - Sponsor, Sostenitori e Partner Istituzionali */}
      <Partners />

      {/* Footer - Press Area, Newsletter, Info & Contact */}
      <Footer />
    </main>
  )
}
