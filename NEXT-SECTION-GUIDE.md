# Guide per la Prossima Sezione - Focus 2025

**Data**: 27 Ottobre 2025, 18:50
**Sezioni Completate**: Hero Section, Info Edizione 2025
**Prossima Sezione**: Focus 2025

---

## 🎯 Sezione da Sviluppare: Focus 2025

### Informazioni da Figma
- **Text ID**: `1:342` - "[FOCUS 2025]"
- **Layout**: 2 colonne di testo
- **Icon**: FNI al centro (Frame ID: `1:238`)
- **Priority**: Alta (continua il flow narrativo)

---

## 📋 Checklist Sviluppo

### 1. Analisi Figma (PRIMO STEP)

Prima di iniziare a scrivere codice, eseguire SEMPRE questi comandi:

```bash
# 1. Ottenere screenshot della sezione
mcp__figma__get_screenshot(nodeId: "1:342")

# 2. Ottenere design context completo
mcp__figma__get_design_context(nodeId: "1:342")

# 3. Se necessario, ottenere metadata per capire la struttura
mcp__figma__get_metadata(nodeId: "1:342")
```

**Cosa cercare nell'analisi:**
- [ ] Background color
- [ ] Layout (grid columns, flex direction)
- [ ] Padding/Margin (py-16, px-8, etc.)
- [ ] Font sizes e families
- [ ] Immagini/Icon da scaricare
- [ ] Hover states per bottoni/link
- [ ] Responsive behavior (mobile vs desktop)

---

### 2. Download Assets

Se la sezione contiene immagini o SVG:

```bash
cd "/Users/temp/Local Sites/festivalnarrazioneindustrialeuncode/fni-modern-site"

# Scaricare asset da Figma MCP
curl -s "http://localhost:3845/assets/[ASSET_HASH].svg" -o "public/images/[nome-descrittivo].svg"
curl -s "http://localhost:3845/assets/[ASSET_HASH].png" -o "public/images/[nome-descrittivo].png"

# Verificare dimensioni
ls -lh public/images/[nome-descrittivo].*
```

**Convenzioni nomi file:**
- Descrittivi: `icon-focus-2025.svg` invece di `asset-123.svg`
- Lowercase con trattini
- Estensione corretta (.svg, .png, .jpg)

---

### 3. Struttura File Sezione

Creare file: `src/sections/Focus2025.tsx`

**Template base:**

```tsx
'use client';

/**
 * Focus 2025 Section - Festival Narrazione Industriale
 *
 * [Breve descrizione della sezione]
 *
 * Layout:
 * - [Descrizione layout mobile]
 * - [Descrizione layout desktop]
 *
 * Figma Node ID: 1:342
 */

export default function Focus2025() {
  return (
    <section
      className="relative w-full bg-[BACKGROUND_COLOR] py-16 md:py-24 lg:py-32"
      data-section="focus-2025"
    >
      <div className="max-w-container-fni mx-auto px-8">
        {/* Contenuto sezione */}
      </div>
    </section>
  );
}
```

---

### 4. Design Tokens da Usare

#### Colori
```tsx
bg-fni-red          // #e94d34 - Background sezioni brand
bg-fni-white        // #ffffff - Background chiaro
bg-fni-gray         // #f5f5f5 - Background grigio alternato
bg-fni-dark-gray    // #333333 - Footer/press
text-fni-red        // #e94d34 - Testo rosso
text-fni-white      // #ffffff - Testo bianco
text-fni-dark       // #1a1a1a - Testo scuro
```

#### Font
```tsx
font-halenoir-regular   // Halenoir Expanded Regular
font-halenoir-light     // Halenoir Compact ExtraLight
font-halenoir-bold      // Halenoir Expanded Bold
```

#### Font Sizes (da TYPOGRAPHY-GUIDE.md)
```tsx
text-body           // 20px - Testo corpo standard
text-base           // 16px - Mobile piccolo
text-lg             // 18px - Mobile/Tablet
text-xl             // 20px - Desktop piccolo
text-2xl            // 24px - Desktop
text-3xl            // 30px - Titoli piccoli
text-4xl            // 36px - Titoli medi
text-5xl            // 48px - Titoli grandi
```

#### Spacing & Layout
```tsx
max-w-container-fni     // 1440px - Container principale (NON 1920px!)
py-16 md:py-24 lg:py-32 // Padding verticale sezioni
px-8                     // Padding orizzontale standard
gap-8 md:gap-12 lg:gap-16 // Spaziatura tra elementi
```

#### Bottoni (da BUTTONS-GUIDE.md)
```tsx
// Bottone primary (su sfondo rosso)
className="font-halenoir-regular text-fni-white text-lg uppercase px-6 py-2 border-[3px] border-fni-white hover:bg-fni-white hover:text-fni-red transition-all duration-300"

// Bottone secondary (su sfondo chiaro)
className="font-halenoir-regular text-fni-red text-lg uppercase px-6 py-2 border-[3px] border-fni-red hover:bg-fni-red hover:text-fni-white transition-all duration-300"

// Importante: border-[3px] (NON border-2), padding ridotto (px-6 py-2)
```

#### Responsive Grid
```tsx
// 2 colonne mobile → desktop
grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12

// 3 colonne (come Info Edizione)
grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16
```

---

### 5. Pattern Comuni

#### Titolo Sezione con [BRACKETS]
```tsx
<h2 className="font-halenoir-bold text-fni-red text-3xl md:text-4xl lg:text-5xl uppercase mb-8 md:mb-12 text-center">
  [FOCUS 2025]
</h2>
```

#### Layout 2 Colonne con Icon Centrale
```tsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
  {/* Colonna Sinistra - Testo */}
  <div className="lg:col-span-1 text-center lg:text-left">
    <p className="font-halenoir-regular text-body text-fni-dark leading-relaxed">
      Testo colonna sinistra
    </p>
  </div>

  {/* Centro - Icon */}
  <div className="flex items-center justify-center">
    <img
      src="/images/icon-fni.svg"
      alt="FNI Icon"
      className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
    />
  </div>

  {/* Colonna Destra - Testo */}
  <div className="lg:col-span-1 text-center lg:text-right">
    <p className="font-halenoir-regular text-body text-fni-dark leading-relaxed">
      Testo colonna destra
    </p>
  </div>
</div>
```

#### Immagini Responsive
```tsx
// Immagine full-width con aspect ratio
<div className="relative w-full aspect-video md:aspect-[16/9]">
  <img
    src="/images/nome-immagine.jpg"
    alt="Descrizione"
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>

// Immagine con margini desktop, full-width mobile
<div className="max-w-container-fni mx-auto px-0 md:px-8">
  <img src="/images/nome.jpg" alt="" className="w-full" />
</div>
```

---

### 6. Mobile-First Responsive

**Principio**: Sviluppare SEMPRE mobile-first, poi aggiungere breakpoints desktop.

#### Allineamento Testo
```tsx
// Centrato mobile, sinistra desktop
text-center md:text-left

// Centrato mobile, destra desktop
text-center md:text-right
```

#### Padding/Margin Responsive
```tsx
// Padding verticale progressivo
py-8 md:py-16 lg:py-24

// Margin bottom progressivo
mb-4 md:mb-8 lg:mb-12
```

#### Font Size Responsive
```tsx
// Da piccolo a grande
text-base md:text-lg lg:text-xl

// Titoli
text-2xl md:text-3xl lg:text-4xl xl:text-5xl
```

#### Grid Responsive
```tsx
// Stack mobile, 2 colonne desktop
grid grid-cols-1 md:grid-cols-2

// Stack mobile, 3 colonne desktop
grid grid-cols-1 md:grid-cols-3

// Auto-fit con min-max
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
```

---

### 7. Integrazione in Homepage

Dopo aver creato la sezione, aggiungerla a `src/app/page.tsx`:

```tsx
import HeroSection from '@/sections/HeroSection';
import InfoEdizione from '@/sections/InfoEdizione';
import Focus2025 from '@/sections/Focus2025'; // ← Nuova import

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <InfoEdizione />
      <Focus2025 /> {/* ← Aggiungere qui */}
    </main>
  );
}
```

---

### 8. Testing Checklist

Dopo aver implementato la sezione:

#### Visual Check (Desktop)
- [ ] Aprire http://localhost:3000
- [ ] Verificare layout 2/3 colonne corretto
- [ ] Verificare padding/spacing consistente
- [ ] Verificare font size e colori
- [ ] Verificare allineamento testi
- [ ] Hover states funzionanti (se presenti bottoni/link)
- [ ] Immagini/icon caricati correttamente
- [ ] Nessun overflow orizzontale

#### Mobile Check (DevTools)
- [ ] Device Toolbar → iPhone 14 Pro (390px)
- [ ] Layout stack verticale
- [ ] Testo leggibile senza zoom
- [ ] Bottoni tappabili (min 44x44px)
- [ ] Immagini responsive (non stretching)
- [ ] Nessun testo tagliato
- [ ] Padding adeguato sui bordi (px-8 minimo)

#### Tablet Check
- [ ] iPad Air (820px)
- [ ] Transizione smooth da mobile a desktop
- [ ] Gap tra elementi appropriato

#### Browser Check
- [ ] Chrome (primario)
- [ ] Safari (Mac/iOS)
- [ ] Firefox (opzionale)

---

### 9. Errori Comuni da Evitare

❌ **NON FARE:**
- Container width 1920px (usare 1440px con `max-w-container-fni`)
- Border 2px sui bottoni (usare `border-[3px]`)
- Padding eccessivo bottoni come `px-10 py-4` (usare `px-6 py-2` o `px-4 py-1.5`)
- Logo F-N-I da SVG (preferire codice HTML/CSS)
- `whitespace-nowrap` su testi lunghi (causa overflow mobile)
- `min-h-screen` su sezioni (altezza dovrebbe matchare contenuto)
- Allineamento sinistra su mobile (preferire centrato)

✅ **FARE:**
- Analizzare Figma PRIMA di codificare
- Usare design tokens configurati
- Mobile-first responsive
- Scaricare assets da Figma MCP
- Border 3px sui bottoni
- Padding ridotto bottoni (fedeltà Figma)
- Container max-width 1440px
- Testi centrati su mobile
- Leading-relaxed per leggibilità

---

### 10. Documentazione da Aggiornare

Dopo aver completato la sezione:

#### PROGRESS-REPORT.md
Aggiornare sezione "Completato":
```markdown
#### ✅ Focus 2025 (Sezione 3) - **NUOVA!**
- Layout 2 colonne con icon centrale
- Testo focus edizione 2025
- **Status**: Completata, responsive
- **File**: `src/sections/Focus2025.tsx`
- **Figma Node ID**: `1:342`
```

Aggiornare statistiche:
```markdown
- **Sezioni completate**: 3/10 (30%)
- **Tempo stimato rimanente**: 3-5 ore
```

---

## 🔄 Workflow Completo

### Step-by-Step

1. **Analisi Figma** (10-15 min)
   ```bash
   mcp__figma__get_screenshot(nodeId: "1:342")
   mcp__figma__get_design_context(nodeId: "1:342")
   ```

2. **Download Assets** (5 min)
   ```bash
   curl -s "http://localhost:3845/assets/[HASH].svg" -o "public/images/[nome].svg"
   ```

3. **Creare File Sezione** (20-30 min)
   ```bash
   touch src/sections/Focus2025.tsx
   # Implementare layout con design tokens
   ```

4. **Integrare in Homepage** (2 min)
   ```tsx
   // src/app/page.tsx
   import Focus2025 from '@/sections/Focus2025';
   ```

5. **Testing** (10-15 min)
   - Desktop: http://localhost:3000
   - Mobile: DevTools → iPhone 14 Pro
   - Tablet: DevTools → iPad Air

6. **Documentazione** (5 min)
   - Aggiornare PROGRESS-REPORT.md
   - Aggiornare QUICK-START.md se necessario

**Tempo Totale Stimato**: 50-70 minuti per sezione media

---

## 📚 Riferimenti

- [BUTTONS-GUIDE.md](./BUTTONS-GUIDE.md) - Styling bottoni
- [TYPOGRAPHY-GUIDE.md](./TYPOGRAPHY-GUIDE.md) - Font sizes standard
- [LAYOUT-FIXES.md](./LAYOUT-FIXES.md) - Container width e spacing
- [MOBILE-IMPROVEMENTS.md](./MOBILE-IMPROVEMENTS.md) - Best practices mobile
- [FIGMA-ANALYSIS.md](./FIGMA-ANALYSIS.md) - Struttura completa sito
- [PROGRESS-REPORT.md](./PROGRESS-REPORT.md) - Stato progetto

---

## 🎯 Template Prompt per AI Assistant

Quando chiedi all'AI di sviluppare la prossima sezione, usa questo template:

```
Sviluppa la sezione Focus 2025 seguendo accuratamente questi step:

1. Analizza il design Figma (node ID: 1:342):
   - Screenshot per vedere layout visivo
   - Design context per ottenere specifiche tecniche

2. Scarica tutti gli assets necessari da Figma MCP a public/images/

3. Crea src/sections/Focus2025.tsx seguendo:
   - Design tokens da TYPOGRAPHY-GUIDE.md e BUTTONS-GUIDE.md
   - Container max-w-container-fni (1440px)
   - Mobile-first responsive
   - Testi centrati su mobile, allineati su desktop

4. Integra la sezione in src/app/page.tsx

5. Testa su:
   - Desktop (1440px+)
   - Mobile (390px)
   - Tablet (820px)

6. Aggiorna PROGRESS-REPORT.md con stato completamento

Seguire ESATTAMENTE il design Figma, specialmente:
- Colori background
- Font sizes responsive
- Padding/spacing
- Layout grid columns
```

---

**Status**: ✅ Guida creata per Focus 2025
**Prossima Azione**: Analizzare Figma node 1:342 e iniziare sviluppo

