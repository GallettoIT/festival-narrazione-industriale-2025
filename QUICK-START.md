# Quick Start - Festival Narrazione Industriale

## 🚀 Installazione e Avvio

### 1. Installare le Dipendenze

```bash
cd fni-modern-site
npm install
```

### 2. Avviare il Server di Sviluppo

```bash
npm run dev
```

Il sito sarà disponibile su: **http://localhost:3000**

## ✅ Hero Section Completata!

La prima sezione (Hero) è stata sviluppata e integrata nella homepage.

### Cosa Funziona:
- ✅ Logo F-N-I grande con linee decorative
- ✅ Tagline "L'umanesimo industriale..."
- ✅ Layout responsive
- ✅ Button "SCOPRI" con hover effect
- ✅ Styling con font Halenoir custom
- ✅ Colori brand (#e94d34)

### Da Completare:
- ⚠️ Assets (immagini) - attualmente placeholder
- ⚠️ Logo SVG definitivo
- ⚠️ Immagine hero robot/androide

## 📁 Assets Necessari

Gli assets sono disponibili sul server Figma MCP locale. Per usarli nel progetto:

### Opzione 1: Download Manuale
1. Aprire gli URL nel browser:
   - Logo: `http://localhost:3845/assets/1bf830d26f957b541fe3a425bffe35fc02e28233.svg`
   - Hero Image: `http://localhost:3845/assets/a636572a8f7ca70ad33438503eb340e91f2884ce.png`

2. Salvare i file in:
   ```
   fni-modern-site/public/images/
   ├── logo-fni.svg
   └── hero-robot.png
   ```

3. Aggiornare i riferimenti in `HeroSection.tsx`

### Opzione 2: Usare Direttamente gli URL
Gli URL localhost:3845 funzionano finché il server Figma MCP è attivo.

### Opzione 3: Usare Assets dal WordPress Esistente
```bash
# Copiare immagini dal progetto WordPress
cp "../app/public/wp-content/uploads/[filename]" "public/images/"
```

## 📊 Progresso Sviluppo

### ✅ Completato
1. Setup progetto Next.js + TypeScript + Tailwind
2. Configurazione font Halenoir
3. Configurazione colori brand
4. **Hero Section** (Sezione 1)

### 🔄 In Corso
- Raccolta assets Hero Section

### ⏳ Da Fare
2. Info Edizione 2025 (sezione rossa)
3. Focus 2025
4. Ospiti Slider
5. Layout F-N-I
6. Edizione 2024 Stats
7. Partner/Sponsor
8. Press Area
9. Newsletter
10. Footer

## 🎯 Prossimi Step

### Step 1: Testare Hero Section
```bash
npm run dev
# Aprire http://localhost:3000
# Verificare responsive (mobile, tablet, desktop)
```

### Step 2: Gestire Assets
Scegliere una delle opzioni sopra per gli assets

### Step 3: Sviluppare Info Edizione Section
La prossima sezione da sviluppare (sezione rossa con info 2025)

## 🛠️ Comandi Utili

```bash
# Sviluppo
npm run dev

# Build produzione
npm run build

# Test build locale
npm run start

# Export statico (per WordPress)
npm run export
```

## 📝 Note Tecniche

### Font
- Font Halenoir già configurati e funzionanti
- Classi Tailwind: `font-halenoir-regular`, `font-halenoir-light`, `font-halenoir-bold`

### Colori
- `fni-red`: #e94d34 (brand principale)
- `fni-dark`: #1a1a1a
- `fni-gray`: #f5f5f5
- `fni-white`: #ffffff
- `fni-black`: #000000

### Breakpoints Tailwind
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px
- Custom: `screen-2xl`: 1920px

## 🐛 Troubleshooting

### Font non vengono caricati
Verificare che i file font siano in: `src/assets/fonts/`

### Errori TypeScript
```bash
npm run build
# Verificare errori e correggere
```

### Immagini non si vedono
Verificare che il server Figma MCP sia attivo o sostituire con assets locali

## 📞 Supporto

Per problemi o domande, consultare:
- [README.md](./README.md) - Documentazione generale
- [SETUP-COMPLETO.md](./SETUP-COMPLETO.md) - Setup dettagliato
- [FIGMA-ANALYSIS.md](./FIGMA-ANALYSIS.md) - Analisi design Figma
- [src/sections/README-SECTIONS.md](./src/sections/README-SECTIONS.md) - Info sezioni

---

**Ultimo Aggiornamento**: 27 Ottobre 2025, 15:30
**Status**: ✅ Hero Section Completata - Pronta per test
