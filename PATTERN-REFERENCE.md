# Pattern Reference - Festival Narrazione Industriale

**Scopo**: Riferimento rapido per pattern, best practices e decisioni tecniche prese durante lo sviluppo. Da consultare nelle prossime sessioni per mantenere coerenza e velocizzare lo sviluppo.

**Data creazione**: 27 Ottobre 2025

---

## 🎯 Pattern Fondamentali

### Container Width
```tsx
// ✅ SEMPRE usare max-w-container-fni (1440px) NON 1920px
<div className="max-w-container-fni mx-auto px-6 md:px-8">
  {/* Contenuto sezione */}
</div>
```

### Titoli Sezioni
```tsx
// ✅ Allineati a SINISTRA (NON centrati)
<h2 className="font-halenoir-regular text-fni-red text-4xl md:text-5xl uppercase mb-12 md:mb-16">
  [TITOLO SEZIONE]
</h2>
```

### Bottoni
```tsx
// ✅ Border 3px (NON 2px), padding ridotto
<button className="font-halenoir-regular text-fni-white text-lg uppercase px-6 py-2 border-[3px] border-fni-white hover:bg-fni-white hover:text-fni-red transition-all duration-300">
  TESTO BOTTONE
</button>

// Oppure usa il componente Button.tsx
<Button variant="primary" size="large">TESTO</Button>
```

### Font Sizes Standard
```tsx
text-body    // 20px - Testo corpo standard (leggibilità ottimale)
text-base    // 16px
text-lg      // 18px
text-xl      // 20px
text-2xl     // 24px (nome ospiti, titoli medi)
text-4xl     // 36px (titoli sezioni mobile)
text-5xl     // 48px (titoli sezioni desktop)
```

### Responsive Spacing
```tsx
// Padding verticale sezioni
py-16 md:py-24 lg:py-32

// Margin bottom progressivo
mb-12 md:mb-16

// Gap tra elementi
gap-8 md:gap-12 lg:gap-16
```

---

## 📐 Layout Patterns

### Grid 2 Colonne Responsive
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
  <div>Colonna 1</div>
  <div>Colonna 2</div>
</div>
```

### Grid 3 Colonne Responsive
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
</div>
```

### Mobile: Centrato, Desktop: Allineato
```tsx
<div className="text-center md:text-left">
  {/* Testo */}
</div>
```

---

## 🖼️ Immagini

### Con Next.js Image (Preferred)
```tsx
import Image from 'next/image';

<div className="relative w-full aspect-[348/480]">
  <Image
    src="/images/nome.png"
    alt="Descrizione"
    fill
    className="object-cover object-top" // object-top per volti in alto
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />
</div>
```

### SVG Senza Stretching
```tsx
<img
  src="/images/vettore.svg"
  alt="Descrizione"
  className="w-full max-w-4xl h-auto"
  style={{ objectFit: 'contain' }}
/>
```

### Immagini Hero (Full-width mobile, margini desktop)
```tsx
<div className="max-w-container-fni mx-auto px-0 md:px-8 mb-0 md:mb-12">
  <div className="relative w-full h-[450px] md:h-[725px]">
    <img src="/images/hero.png" className="w-full h-full object-cover" />
  </div>
</div>
```

---

## 🎨 Colori

### Palette Completa
```tsx
bg-fni-red          // #e94d34 - Primary brand
bg-fni-white        // #ffffff
bg-fni-gray         // #f5f5f5 - Background alternate
bg-fni-dark-gray    // #333333 - Footer/press
bg-fni-dark         // #1a1a1a - Testi scuri
bg-fni-black        // #000000

text-fni-red        // Testi rossi (titoli, nomi)
text-[#282828]      // Testi secondari (ruoli ospiti)
```

---

## 🔤 Typography

### Font Families
```tsx
font-halenoir-regular  // Testi normali, titoli
font-halenoir-light    // Sottotitoli delicati (usare poco)
font-halenoir-bold     // Nomi ospiti, parole chiave
```

### Uppercase
```tsx
// ✅ Sempre uppercase per:
// - Titoli sezioni [FOCUS 2025]
// - Nomi ospiti (NOME COGNOME)
// - Testo bottoni
className="uppercase"
```

---

## 📱 Mobile-First

### Breakpoints
```tsx
sm:   640px
md:   768px
lg:   1024px
xl:   1280px
2xl:  1536px
```

### Esempi Pratici
```tsx
// Padding responsive
className="px-4 md:px-6 lg:px-8"

// Font size responsive
className="text-base md:text-xl lg:text-2xl"

// Visibilità condizionale
className="hidden md:block"      // Solo desktop
className="block md:hidden"      // Solo mobile
```

---

## 🔄 Carousel (Embla)

### Setup Base
```tsx
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    loop: true,
    align: 'start',
    dragFree: false,
  },
  [
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  ]
);
```

### Altezze Card Dinamiche
```tsx
// Pattern usato in OspitiSlider per dinamismo visivo
const ospiti = [
  { altezza: 'alta' },  // aspect-[348/480]
  { altezza: 'bassa' }, // aspect-[348/360]
];

// Mobile: tutte uguali
// Desktop: variazione alta/bassa
const aspectRatioDesktop = ospite.altezza === 'alta'
  ? 'md:aspect-[348/480]'
  : 'md:aspect-[348/360]';
```

---

## 📦 Struttura File

### Sezioni
```
src/sections/
  HeroSection.tsx
  InfoEdizione.tsx
  Focus2025.tsx
  OspitiSlider.tsx
```

### Componenti Riutilizzabili
```
src/components/
  Header.tsx
  Button.tsx
  Separator.tsx  // ← NUOVO! Per separatori tra sezioni
```

### Dati
```
src/data/
  ospiti.ts  // Array con interface TypeScript
```

### Assets
```
public/images/
  logo-fni.svg
  hero-robot.png
  ospite-*.png
  icon-*.svg
  logo-fni-festival-full.svg  // ← NUOVO! Separator
```

---

## ⚠️ Errori Comuni da Evitare

### ❌ NON FARE
```tsx
// Container troppo largo
<div className="max-w-screen-2xl"> // ← SBAGLIATO (1920px)

// Titoli centrati
<h2 className="text-center"> // ← SBAGLIATO

// Border bottoni 2px
<button className="border-2"> // ← SBAGLIATO

// Padding bottoni eccessivo
<button className="px-10 py-4"> // ← SBAGLIATO

// Logo F-N-I da SVG
<img src="logo-fni-large.svg" /> // ← SBAGLIATO (stretching)

// Testo non responsive con whitespace-nowrap
<p className="whitespace-nowrap"> // ← SBAGLIATO (overflow mobile)

// Object position center per volti
<Image className="object-center" /> // ← SBAGLIATO (taglia volti)
```

### ✅ FARE
```tsx
// Container corretto
<div className="max-w-container-fni">

// Titoli allineati sinistra
<h2>

// Border bottoni 3px
<button className="border-[3px]">

// Padding bottoni ridotto
<button className="px-6 py-2">

// Logo F-N-I in codice HTML/CSS
<div className="font-halenoir-bold">F</div>

// Testo responsive
<p className="leading-relaxed">

// Object position top per volti
<Image className="object-top" />
```

---

## 🚀 Workflow Ottimale Nuova Sezione

### 1. Analisi Figma (5-10 min)
```bash
# Selezione su Figma Desktop, poi:
mcp__figma__get_screenshot(nodeId: "")
mcp__figma__get_design_context(nodeId: "")
```

### 2. Download Assets (2-5 min)
```bash
cd public/images
curl -s "http://localhost:3845/assets/[HASH].svg" -o "nome-descrittivo.svg"
ls -lh nome-descrittivo.svg
```

### 3. Creare File Sezione (20-40 min)
```tsx
// src/sections/NomeSezione.tsx
'use client';

export default function NomeSezione() {
  return (
    <section className="relative w-full bg-[COLOR] py-16 md:py-24 lg:py-32">
      <div className="max-w-container-fni mx-auto px-6 md:px-8">
        <h2 className="font-halenoir-regular text-fni-red text-4xl md:text-5xl uppercase mb-12 md:mb-16">
          [TITOLO]
        </h2>
        {/* Contenuto */}
      </div>
    </section>
  );
}
```

### 4. Integrare in Homepage (1 min)
```tsx
// src/app/page.tsx
import NomeSezione from '@/sections/NomeSezione';

<NomeSezione />
```

### 5. Test (5-10 min)
- [ ] Desktop 1440px
- [ ] Tablet 768px
- [ ] Mobile 390px

---

## 📚 File di Riferimento

### Guide Complete
- [NEXT-SECTION-GUIDE.md](./NEXT-SECTION-GUIDE.md) - Workflow step-by-step
- [SEPARATOR-GUIDE.md](./SEPARATOR-GUIDE.md) - Separatori decorativi
- [BUTTONS-GUIDE.md](./BUTTONS-GUIDE.md) - Styling bottoni
- [TYPOGRAPHY-GUIDE.md](./TYPOGRAPHY-GUIDE.md) - Font sizes
- [PROGRESS-REPORT.md](./PROGRESS-REPORT.md) - Stato progetto

### File Dati
- `src/data/ospiti.ts` - Gestione ospiti (add/remove facile)

---

## 🔑 Decisioni Tecniche Chiave

### Perché max-w-container-fni (1440px)?
✅ Larghezza laptop standard, non ultra-wide
✅ Migliore leggibilità
✅ Coerente con design Figma analizzato

### Perché object-top per immagini?
✅ Volti degli ospiti sono nella parte alta
✅ Evita di tagliare i volti con aspect ratio variabili

### Perché altezze card dinamiche?
✅ Crea dinamismo visivo (Figma ha card alte/basse)
✅ Solo su desktop (mobile uniforme per semplicità)

### Perché border-[3px] sui bottoni?
✅ Analisi Figma mostra 3px (non 2px)
✅ Più visibile e coerente con design

### Perché separatore come componente?
✅ Riutilizzabile in tutte le pagine
✅ Facile cambiare colore/SVG
✅ Mantiene proporzioni senza stretching

---

**Status**: ✅ Reference completo
**Da aggiornare**: Quando si creano nuovi pattern/componenti
**Uso**: Consultare all'inizio di ogni nuova sessione

