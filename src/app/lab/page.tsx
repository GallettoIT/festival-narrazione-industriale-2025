import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Separator from '@/components/Separator';
import LabHero from '@/sections/lab/LabHero';
import LabIntro from '@/sections/lab/LabIntro';
import LabStats from '@/sections/lab/LabStats';
import Lab2024 from '@/sections/lab/Lab2024';
import AllProjects2024 from '@/sections/lab/AllProjects2024';
import LabDocenti2024 from '@/sections/lab/LabDocenti2024';
import Script from 'next/script';

/**
 * Pagina LAB
 *
 * Mostra il laboratorio universitario "Raccontare il lavoro"
 * Include:
 * - Hero LAB
 * - Descrizione laboratorio (sezione rossa)
 * - Statistiche (studenti, imprese, docenti)
 * - LAB 2024 con progetto vincitore
 * - Tutti i progetti 2024
 * - Docenti LAB 2024
 */

export const metadata: Metadata = {
  title: 'Laboratorio Universitario',
  description: 'LAB - Laboratorio Universitario del Festival della Narrazione Industriale. Progetti di storytelling aziendale realizzati dagli studenti con imprese partner: Pilogen Carezza, Infor, Elcos, Delicius.',
  keywords: [
    'laboratorio universitario parma',
    'lab narrazione industriale',
    'progetti studenti comunicazione',
    'storytelling aziendale università',
    'pilogen carezza progetto',
    'infor elcos delicius lab',
    'raccontare il lavoro',
    'comunicazione d\'impresa parma'
  ],
  openGraph: {
    title: 'Laboratorio Universitario | Festival Narrazione Industriale',
    description: 'LAB - Progetti di storytelling aziendale realizzati dagli studenti con imprese partner: Pilogen Carezza, Infor, Elcos, Delicius.',
    url: 'https://www.festivalnarrazioneindustriale.it/lab',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Laboratorio Universitario FNI',
      },
    ],
  },
};

export default function LabPage() {
  // Structured Data - EducationalOrganization + Course
  const labSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'LAB - Laboratorio Universitario Festival della Narrazione Industriale',
    description: 'Laboratorio universitario "Raccontare il lavoro" in cui studenti creano progetti di storytelling aziendale con imprese partner.',
    provider: {
      '@type': 'Organization',
      name: 'Festival della Narrazione Industriale',
      url: 'https://www.festivalnarrazioneindustriale.it',
    },
    url: 'https://www.festivalnarrazioneindustriale.it/lab',
    inLanguage: 'it-IT',
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Structured Data - Course Schema */}
      <Script
        id="lab-course-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(labSchema),
        }}
      />

      <Header />

      {/* Hero Section */}
      <LabHero />

      {/* Intro Section - Descrizione Laboratorio */}
      <LabIntro />

      {/* Stats Section */}
      <LabStats />

      {/* Separator */}
      <Separator
        bgColor="bg-fni-red"
        svgPath="/images/fni-separator-white-logo.svg"
        alt="F-N-I"
      />

      {/* LAB 2024 Section - Con scroll hijacking orizzontale */}
      <Lab2024 />

      {/* Tutti i Progetti 2024 */}
      <AllProjects2024 />

      {/* Docenti LAB 2024 */}
      <LabDocenti2024 />

      <Footer />
    </main>
  );
}
