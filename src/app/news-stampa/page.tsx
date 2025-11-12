import type { Metadata } from 'next';
import NewsStampaHero from '@/sections/news/NewsStampaHero';
import NewsGrid from '@/sections/news/NewsGrid';
import Footer from '@/components/Footer';
import { getAllNews } from '@/data/news';

export const metadata: Metadata = {
  title: 'News e Stampa',
  description: 'Tutte le novità, gli aggiornamenti e la rassegna stampa del Festival della Narrazione Industriale. Resta aggiornato sugli eventi, le iniziative e le collaborazioni del festival.',
  keywords: [
    'news festival narrazione industriale',
    'stampa festival parma',
    'rassegna stampa festival',
    'novità festival 2025',
    'aggiornamenti festival',
    'comunicati stampa',
    'eventi parma news'
  ],
  openGraph: {
    title: 'News e Stampa | Festival Narrazione Industriale',
    description: 'Tutte le novità, gli aggiornamenti e la rassegna stampa del Festival della Narrazione Industriale.',
    url: 'https://www.festivalnarrazioneindustriale.it/news-stampa',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'News e Stampa - Festival Narrazione Industriale',
      },
    ],
  },
};

/**
 * News & Stampa Page
 *
 * Pagina principale con lista di tutte le news
 * e sezione dedicata alla stampa
 *
 * Figma Node ID: 1:2205
 */

export default function NewsStampaPage() {
  const allNews = getAllNews();

  return (
    <>
      <main className="w-full min-h-screen bg-white pt-20 md:pt-24">
        {/* Hero Section */}
        <NewsStampaHero />

        {/* News Grid */}
        <NewsGrid articles={allNews} />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
