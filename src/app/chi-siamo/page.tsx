import type { Metadata } from 'next'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ChiSiamoHero from '@/sections/chi-siamo/ChiSiamoHero';
import IlProgetto from '@/sections/chi-siamo/IlProgetto';
import LayoutFNI from '@/sections/LayoutFNI';
import OrganiDirettivi from '@/sections/chi-siamo/OrganiDirettivi';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Chi Siamo',
  description: 'Il Festival della Narrazione Industriale nasce con l\'obiettivo di esplorare il rapporto profondo e dinamico tra industria e società. Scopri il progetto, la missione e gli organi direttivi.',
  keywords: [
    'festival narrazione industriale chi siamo',
    'progetto festival parma',
    'missione festival',
    'cultura industriale',
    'narrazione impresa',
    'adriano olivetti',
    'umanesimo industriale'
  ],
  openGraph: {
    title: 'Chi Siamo | Festival Narrazione Industriale',
    description: 'Il Festival della Narrazione Industriale nasce con l\'obiettivo di esplorare il rapporto profondo e dinamico tra industria e società.',
    url: 'https://www.festivalnarrazioneindustriale.it/chi-siamo',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chi Siamo - Festival Narrazione Industriale',
      },
    ],
  },
};

export default function ChiSiamoPage() {
  // Structured Data - WebPage Schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Chi Siamo - Festival della Narrazione Industriale',
    description: 'Il Festival della Narrazione Industriale nasce con l\'obiettivo di esplorare il rapporto profondo e dinamico tra industria e società.',
    url: 'https://www.festivalnarrazioneindustriale.it/chi-siamo',
    inLanguage: 'it-IT',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Festival della Narrazione Industriale',
      url: 'https://www.festivalnarrazioneindustriale.it',
    },
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Structured Data - WebPage Schema */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      <Header />

      {/* Hero section con titolo e GIF */}
      <ChiSiamoHero />

      {/* IL PROGETTO */}
      <IlProgetto />

      {/* Sezione F-N-I (riutilizzata dalla home) */}
      <LayoutFNI />

      {/* CTA Scopri il programma 2025 */}
      <CTASection
        bgColor="bg-[#272828]"
        buttonText="SCOPRI IL PROGRAMMA 2025"
        buttonColor="border-fni-red text-fni-red hover:bg-fni-red hover:text-white"
        href="/programma"
      />

      {/* Organo Direttivo e Comitato Scientifico */}
      <OrganiDirettivi />

      {/* CTA Scopri gli ospiti */}
      <CTASection
        bgColor="bg-fni-red"
        buttonText="SCOPRI GLI OSPITI DELL'EDIZIONE 2025"
        buttonColor="border-white text-white hover:bg-white hover:text-fni-red"
        href="/ospiti"
      />

      <Footer />
    </main>
  );
}
