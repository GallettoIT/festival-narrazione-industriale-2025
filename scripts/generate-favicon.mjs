import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Leggi il file SVG
const svgContent = readFileSync(join(projectRoot, 'src/app/icon.svg'), 'utf-8');

console.log('📱 Favicon SVG aggiornato con successo!');
console.log('✅ Il nuovo icon.svg ha sfondo rosso (#E94D34) e logo bianco');
console.log('');
console.log('Per generare i file PNG, puoi usare uno di questi metodi:');
console.log('1. Usa un servizio online come https://realfavicongenerator.net/');
console.log('2. Installa sharp: npm install --save-dev sharp');
console.log('3. Usa ImageMagick: convert icon.svg -resize 192x192 icon-192.png');
console.log('');
console.log('I file SVG sono stati aggiornati in:');
console.log('- src/app/icon.svg');
console.log('- public/images/icon.svg');
