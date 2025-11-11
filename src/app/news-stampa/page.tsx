import type { Metadata } from 'next';
import NewsStampaHero from '@/sections/news/NewsStampaHero';
import NewsGrid from '@/sections/news/NewsGrid';
import PressArea from '@/sections/news/PressArea';
import { getAllNews } from '@/data/news';

export const metadata: Metadata = {
  title: 'News e Stampa | Festival Narrazione Industriale',
  description: 'Tutte le news, gli aggiornamenti e la rassegna stampa del Festival della Narrazione Industriale di Parma.',
  openGraph: {
    title: 'News e Stampa | Festival Narrazione Industriale',
    description: 'Tutte le news, gli aggiornamenti e la rassegna stampa del Festival della Narrazione Industriale di Parma.',
    url: 'https://festivalnarrazioneindustriale.it/news-stampa',
    siteName: 'Festival Narrazione Industriale',
    locale: 'it_IT',
    type: 'website',
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
    <main className="w-full min-h-screen bg-white pt-20 md:pt-24">
      {/* Hero Section */}
      <NewsStampaHero />

      {/* News Grid */}
      <NewsGrid articles={allNews} />

      {/* Press Area */}
      <PressArea />
    </main>
  );
}
