# Festival Narrazione Industriale - Modern Site

Questo progetto contiene la versione moderna del sito web per il Festival Narrazione Industriale, sviluppata con tecnologie moderne per poi essere integrata in WordPress.

## Tecnologie

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animazioni
- **Font Custom**: Halenoir (Regular, Light, Bold)

## Struttura del Progetto

```
fni-modern-site/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Layout principale
│   │   └── page.tsx      # Homepage
│   ├── components/       # Componenti riutilizzabili
│   ├── sections/         # Sezioni della homepage
│   ├── styles/           # Stili globali
│   │   └── globals.css   # CSS globale con font
│   └── assets/
│       └── fonts/        # Font Halenoir
└── public/               # File statici

```

## Installazione

```bash
npm install
```

## Comandi

```bash
# Sviluppo
npm run dev

# Build
npm run build

# Start produzione
npm start

# Export statico (per WordPress)
npm run export
```

## Integrazione WordPress

Dopo lo sviluppo, il sito può essere esportato come HTML statico e integrato in WordPress tramite:
1. Content Blocks di Uncode
2. Custom Post Types
3. Shortcodes personalizzati

## Sezioni Homepage

1. Hero con Logo Animato FNI
2. Info Edizione 2025
3. Focus 2025
4. Slider Ospiti
5. Layout F-N-I (Perché?)
6. Edizione 2024 Stats
7. Partners
8. Press Area
9. Newsletter
10. Footer

## Prossimi Step

1. ✅ Setup progetto base
2. ⏳ Analisi design Figma tramite MCP
3. ⏳ Estrazione colori e spaziature
4. ⏳ Sviluppo componenti sezione per sezione
5. ⏳ Integrazione con WordPress
