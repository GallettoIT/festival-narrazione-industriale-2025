/**
 * News Data - Festival Narrazione Industriale
 *
 * Interfacce TypeScript e dati per gli articoli di news
 * Integrazione con Decap CMS per gestione contenuti
 *
 * Le news vengono generate da file markdown tramite lo script scripts/generate-news.js
 * che viene eseguito prima del build per convertire i file MD in JSON.
 */

import generatedNews from './news-generated.json';

export interface NewsArticle {
  slug: string;
  title: string;
  date: string; // Format: YYYY-MM-DD
  featuredImage: string; // Immagine per card/anteprima
  featuredImageAlt: string;
  articleImage?: string; // Immagine nell'articolo (opzionale)
  articleImageAlt?: string;
  summary: string;
  excerpt: string; // Testo breve per card
  content: string; // HTML o Markdown
  author?: string;
  authorRole?: string;
  category?: string;
  published: boolean;
}

export interface NewsImage {
  src: string;
  alt: string;
  position: 'left' | 'right';
}

/**
 * News Articles
 * Le news vengono caricate dal file JSON generato a build time
 * dai file markdown in src/content/news/ gestiti tramite Decap CMS
 */
export const newsArticles: NewsArticle[] = generatedNews;

/**
 * Utility Functions
 */

// Get all published news sorted by date (newest first)
export function getAllNews(): NewsArticle[] {
  return newsArticles
    .filter(article => article.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get news by slug
export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => article.slug === slug && article.published);
}

// Get latest N news
export function getLatestNews(count: number): NewsArticle[] {
  return getAllNews().slice(0, count);
}

// Format date to Italian format
export function formatNewsDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return date.toLocaleDateString('it-IT', options).toUpperCase();
}

// Format date short (for cards)
export function formatNewsDateShort(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
