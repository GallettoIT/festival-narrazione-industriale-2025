import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NewsArticleHero from '@/sections/news/NewsArticleHero';
import NewsArticleContent from '@/sections/news/NewsArticleContent';
import OtherNewsCTA from '@/sections/news/OtherNewsCTA';
import PressArea from '@/sections/news/PressArea';
import Footer from '@/components/Footer';
import { getNewsBySlug } from '@/data/news';

// Allow dynamic params to be empty during static export
export const dynamicParams = false;

/**
 * Generate static params for all news articles
 * Includes all articles (published and unpublished) for static generation
 */
export function generateStaticParams() {
  // Import directly to get ALL articles, not just published ones
  const { newsArticles } = require('@/data/news');

  return newsArticles.map((article: any) => ({
    slug: article.slug,
  }));
}

/**
 * Generate metadata for each news article
 */
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getNewsBySlug(params.slug);

  if (!article) {
    return {
      title: 'Articolo non trovato | Festival Narrazione Industriale',
    };
  }

  return {
    title: `${article.title} | News | Festival Narrazione Industriale`,
    description: article.summary,
    openGraph: {
      title: `${article.title} | Festival Narrazione Industriale`,
      description: article.summary,
      url: `https://festivalnarrazioneindustriale.it/news-stampa/${article.slug}`,
      siteName: 'Festival Narrazione Industriale',
      images: [
        {
          url: article.featuredImage,
          alt: article.featuredImageAlt,
        },
      ],
      locale: 'it_IT',
      type: 'article',
      publishedTime: article.date,
      authors: article.author ? [article.author] : undefined,
    },
  };
}

/**
 * News Article Detail Page
 *
 * Pagina dettaglio singolo articolo con:
 * - Hero nero con titolo e info
 * - Contenuto articolo con immagini
 * - CTA altre news
 * - Press Area
 *
 * Figma Node ID: 1:2339
 */

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getNewsBySlug(params.slug);

  // If article not found, show 404
  if (!article) {
    notFound();
  }

  return (
    <>
      <main className="w-full min-h-screen bg-white pt-20 md:pt-24">
        {/* Hero Section con info articolo */}
        <NewsArticleHero article={article} />

        {/* Contenuto articolo */}
        <NewsArticleContent article={article} />

        {/* CTA Altre News */}
        <OtherNewsCTA />

        {/* Press Area */}
        <PressArea />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
