import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// SVG content con sfondo rosso e logo bianco
const svgContent = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="512" height="512" fill="#E94D34"/>
<g transform="translate(156, 180) scale(2.6)">
<path d="M41.8503 17.0692V25.678C44.8239 25.4801 48.338 23.5753 51.1641 23.3031C51.5082 23.2784 51.631 23.2042 51.9014 23.5258C52.0734 23.7484 53.0564 26.3706 53.1792 26.8159C53.253 27.088 53.4987 27.1623 53.1055 27.4096L43.718 29.9576L49.3456 37.3543L45.2416 39.6054L39.3191 32.9262L33.3966 39.9023L29.5384 37.1316L35.1414 29.9576L25.7539 27.5333L27.253 23.2537L36.7388 25.6532V17.4402L37.132 17.0444H41.8257L41.8503 17.0692Z" fill="white"/>
<path d="M11.8696 0H0V59H11.8696V0Z" fill="white"/>
<path d="M78.0248 0H66.1553V59H78.0248V0Z" fill="white"/>
</g>
</svg>`;

const svgBuffer = Buffer.from(svgContent);

console.log('🎨 Generazione favicon PNG in corso...\n');

// Genera icon-192.png
await sharp(svgBuffer)
  .resize(192, 192)
  .png()
  .toFile(join(projectRoot, 'public/images/icon-192.png'));
console.log('✅ Generato: public/images/icon-192.png (192x192)');

// Genera icon-512.png
await sharp(svgBuffer)
  .resize(512, 512)
  .png()
  .toFile(join(projectRoot, 'public/images/icon-512.png'));
console.log('✅ Generato: public/images/icon-512.png (512x512)');

// Genera apple-icon.png (180x180 per Apple)
await sharp(svgBuffer)
  .resize(180, 180)
  .png()
  .toFile(join(projectRoot, 'public/apple-icon.png'));
console.log('✅ Generato: public/apple-icon.png (180x180)');

await sharp(svgBuffer)
  .resize(180, 180)
  .png()
  .toFile(join(projectRoot, 'src/app/apple-icon.png'));
console.log('✅ Generato: src/app/apple-icon.png (180x180)');

// Genera favicon.ico (32x32)
await sharp(svgBuffer)
  .resize(32, 32)
  .png()
  .toFile(join(projectRoot, 'public/favicon-32.png'));
console.log('✅ Generato: public/favicon-32.png (32x32)');

// Copia come favicon.ico
await sharp(svgBuffer)
  .resize(32, 32)
  .png()
  .toFile(join(projectRoot, 'public/favicon.ico'));
console.log('✅ Generato: public/favicon.ico (32x32)');

await sharp(svgBuffer)
  .resize(32, 32)
  .png()
  .toFile(join(projectRoot, 'src/app/favicon.ico'));
console.log('✅ Generato: src/app/favicon.ico (32x32)');

console.log('\n🎉 Tutte le favicon sono state generate con successo!');
console.log('📱 Colori: Sfondo rosso (#E94D34) + Logo bianco');
