/**
 * Generate News JSON from Markdown Files
 * Festival Narrazione Industriale
 *
 * This script runs before build to convert markdown files
 * from src/content/news/ into a JSON file that can be imported
 * by the Next.js static site.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsDirectory = path.join(__dirname, '..', 'src/content/news');
const outputFile = path.join(__dirname, '..', 'src/data/news-generated.json');

function generateNewsJSON() {
  console.log('📰 Generating news JSON from markdown files...');

  // Check if directory exists
  if (!fs.existsSync(newsDirectory)) {
    console.warn('⚠️  News directory not found:', newsDirectory);
    console.log('Creating empty news array...');
    fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
    return;
  }

  const fileNames = fs.readdirSync(newsDirectory);
  const articles = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md')) continue;

    const filePath = path.join(newsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Parse frontmatter and content
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const htmlContent = marked(content);

    // Create article object
    const article = {
      slug: data.slug || fileName.replace('.md', ''),
      title: data.title || '',
      date: data.date ? new Date(data.date).toISOString().split('T')[0] : '',
      featuredImage: data.featuredImage || '/images/news/placeholder.jpg',
      featuredImageAlt: data.featuredImageAlt || data.title || '',
      articleImage: data.articleImage || undefined,
      articleImageAlt: data.articleImageAlt || undefined,
      summary: data.summary || '',
      excerpt: data.excerpt || '',
      content: htmlContent,
      author: data.author || undefined,
      authorRole: data.authorRole || undefined,
      category: data.category || undefined,
      published: data.published !== false,
    };

    articles.push(article);
    console.log(`  ✓ Processed: ${fileName}`);
  }

  // Write to JSON file
  fs.writeFileSync(outputFile, JSON.stringify(articles, null, 2));
  console.log(`✅ Generated ${articles.length} news articles to ${outputFile}`);
}

// Run the generator
try {
  generateNewsJSON();
} catch (error) {
  console.error('❌ Error generating news JSON:', error);
  process.exit(1);
}
