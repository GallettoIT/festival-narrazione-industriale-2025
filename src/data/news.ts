/**
 * News Data - Festival Narrazione Industriale
 *
 * Interfacce TypeScript e dati per gli articoli di news
 * Integrazione con Decap CMS per gestione contenuti
 */

export interface NewsArticle {
  slug: string;
  title: string;
  date: string; // Format: YYYY-MM-DD
  featuredImage: string;
  featuredImageAlt: string;
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
 * Le news vengono gestite tramite Decap CMS e salvate in src/content/news/
 * Questo array verrà popolato dinamicamente dal CMS
 *
 * NOTA: Manteniamo una news placeholder per permettere il build statico.
 * Questa verrà rimossa quando il CMS sarà attivo e popolerà l'array dinamicamente.
 */
export const newsArticles: NewsArticle[] = [
  {
    slug: '_placeholder',
    title: 'News in arrivo',
    date: '2025-01-01',
    featuredImage: '/images/news/hero-news.jpg',
    featuredImageAlt: 'Festival Narrazione Industriale',
    summary: 'Le news del festival saranno disponibili a breve',
    excerpt: 'Le news del festival saranno disponibili a breve.',
    content: '<p>Le news del festival saranno disponibili a breve.</p>',
    published: false, // Non pubblicata, quindi non apparirà nell'elenco
  },
];

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
