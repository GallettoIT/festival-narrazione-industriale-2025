# Buttons Style Guide - Festival Narrazione Industriale

## 📅 Data: 27 Ottobre 2025, 18:45

## 🎯 Problema Risolto

### ❌ Prima: Troppo Padding
```tsx
// Border 2px, padding eccessivo
<button className="px-10 py-4 border-2">
  SCOPRI IL PROGRAMMA
</button>
```
**Risultato**: Troppo spazio tra testo e bordo, non fedele a Figma

### ✅ Dopo: Padding Minimo (Figma-accurate)
```tsx
// Border 3px, padding ridotto
<button className="px-6 py-2 border-[3px]">
  SCOPRI IL PROGRAMMA
</button>
```
**Risultato**: Poco spazio tra testo e bordo, fedele al design Figma ✅

## 📏 Specifiche dal Figma

### Border
- **Spessore**: `3px` (non 2px)
- **Colore**: `#f7f4f4` (bianco su sfondo rosso)

### Padding
Dal screenshot Figma, il padding è **molto ridotto**:
- **Orizzontale**: `px-4` a `px-6` (16-24px)
- **Verticale**: `py-1.5` a `py-2` (6-8px)

### Font
- **Family**: Halenoir Regular
- **Transform**: UPPERCASE
- **Size**:
  - Mobile: `text-base` (16px) - `text-lg` (18px)
  - Desktop: `text-lg` (18px) - `text-xl` (20px)

## 🎨 Stili Standard Bottoni

### 1. Bottone Primary (su sfondo rosso)
```tsx
<button className="font-halenoir-regular text-fni-white text-lg uppercase px-6 py-2 border-[3px] border-fni-white hover:bg-fni-white hover:text-fni-red transition-all duration-300">
  SCOPRI IL PROGRAMMA
</button>
```

**Uso**: Sezioni con sfondo rosso (InfoEdizione, etc.)

### 2. Bottone Secondary (su sfondo chiaro)
```tsx
<button className="font-halenoir-regular text-fni-white text-base uppercase px-4 py-1.5 border-[3px] border-fni-white hover:bg-fni-white hover:text-fni-dark transition-colors duration-300">
  SCOPRI
</button>
```

**Uso**: Hero section, footer, overlay su immagini

### 3. Bottone su Sfondo Bianco
```tsx
<button className="font-halenoir-regular text-fni-red text-lg uppercase px-6 py-2 border-[3px] border-fni-red hover:bg-fni-red hover:text-fni-white transition-all duration-300">
  BUTTON TEXT
</button>
```

**Uso**: Sezioni con sfondo bianco

## 🔧 Componente Button Riutilizzabile

### File: `src/components/Button.tsx`

```tsx
import Button from '@/components/Button';

// Uso semplice
<Button>SCOPRI</Button>

// Con variant
<Button variant="secondary">SCOPRI IL PROGRAMMA</Button>

// Con size
<Button size="large">SCOPRI IL PROGRAMMA</Button>

// Custom className
<Button className="w-full">BUTTON FULL WIDTH</Button>
```

### Variants Disponibili

```typescript
variant="primary"    // Bianco su rosso (default)
variant="secondary"  // Rosso su bianco
```

### Sizes Disponibili

```typescript
size="default"  // px-4 py-1.5, text-base md:text-lg
size="large"    // px-6 py-2, text-lg md:text-xl
```

## 📐 Dimensioni Padding

### Confronto Prima/Dopo

| Elemento | Prima | Dopo | Differenza |
|----------|-------|------|------------|
| Padding X | `px-10` (40px) | `px-6` (24px) | **-40%** ✅ |
| Padding Y | `py-4` (16px) | `py-2` (8px) | **-50%** ✅ |
| Border | `2px` | `3px` | **+50%** ✅ |

### Visual Comparison

**Prima** (troppo padding):
```
┌─────────────────────────────┐
│                             │
│    SCOPRI IL PROGRAMMA      │  ← Molto spazio
│                             │
└─────────────────────────────┘
```

**Dopo** (padding minimo - Figma):
```
┌───────────────────────┐
│ SCOPRI IL PROGRAMMA   │  ← Poco spazio ✅
└───────────────────────┘
```

## 🎯 Applicazioni nel Sito

### Hero Section
```tsx
// file: src/sections/HeroSection.tsx
<button
  className="font-halenoir-regular text-fni-white text-base sm:text-lg md:text-xl uppercase px-4 py-1.5 border-[3px] border-fni-white hover:bg-fni-white hover:text-fni-dark transition-colors duration-300"
>
  SCOPRI
</button>
```

### Info Edizione (Sezione Rossa)
```tsx
// file: src/sections/InfoEdizione.tsx
<button
  className="font-halenoir-regular text-fni-white text-lg md:text-xl uppercase px-6 py-2 border-[3px] border-fni-white hover:bg-fni-white hover:text-fni-red transition-all duration-300"
>
  SCOPRI IL PROGRAMMA
</button>
```

## 🎨 Hover States

### Primary (sfondo rosso)
- **Normal**: Testo bianco, border bianco, sfondo trasparente
- **Hover**: Testo rosso, border bianco, sfondo bianco

### Secondary (sfondo chiaro)
- **Normal**: Testo rosso, border rosso, sfondo trasparente
- **Hover**: Testo bianco, border rosso, sfondo rosso

## 📱 Responsive

### Mobile
```tsx
className="text-base px-4 py-1.5"  // Più piccolo
```

### Desktop
```tsx
className="md:text-xl px-6 py-2"  // Più grande
```

### Combo Responsive
```tsx
className="text-base sm:text-lg md:text-xl px-4 py-1.5"
// Mobile: 16px, 16px padding
// Tablet: 18px, 16px padding
// Desktop: 20px, 16px padding
```

## ✅ Checklist Bottoni

Quando crei un bottone:

- [ ] Border `3px` (non 2px)
- [ ] Padding minimo (`px-4 py-1.5` o `px-6 py-2`)
- [ ] Font Halenoir Regular
- [ ] UPPERCASE
- [ ] Hover state con inversione colori
- [ ] Transition smooth (300ms)
- [ ] Colori corretti per il background

## 🔍 Testing

### Visual Check
1. **Apri** http://localhost:3000
2. **Verifica bottoni**:
   - Hero: "SCOPRI" - padding ridotto ✅
   - Info Edizione: "SCOPRI IL PROGRAMMA" - padding ridotto ✅
3. **Hover**: Inversione colori smooth ✅
4. **Border**: 3px visibile ✅

### Mobile Check
1. DevTools → Device Toolbar
2. iPhone 14 Pro
3. Bottoni responsive e leggibili ✅

## 🎯 Esempi Completi

### Full Button con Tutte le Props
```tsx
<button
  className="font-halenoir-regular text-fni-white text-lg uppercase px-6 py-2 border-[3px] border-fni-white hover:bg-fni-white hover:text-fni-red transition-all duration-300"
  aria-label="Scopri il programma del festival"
>
  SCOPRI IL PROGRAMMA
</button>
```

### Button Centered
```tsx
<div className="flex justify-center">
  <button className="...">BUTTON TEXT</button>
</div>
```

### Button Full Width Mobile
```tsx
<button className="w-full md:w-auto ...">
  BUTTON TEXT
</button>
```

## 📊 Metriche Padding

| Size | Padding X | Padding Y | Use Case |
|------|-----------|-----------|----------|
| **Small** | `px-4` (16px) | `py-1.5` (6px) | Mobile, compact |
| **Default** | `px-6` (24px) | `py-2` (8px) | Standard, desktop |
| **Large** | `px-8` (32px) | `py-2.5` (10px) | Emphasis (raramente) |

**Regola**: Preferire sempre **small** o **default** per fedeltà Figma

---

## 🎨 Regola Generale

> **Poco spazio tra testo e bordo = design Figma accurato** ✅

**Border**: Sempre `3px`
**Padding**: Minimo possibile mantenendo leggibilità
**Hover**: Inversione colori con transition smooth

---

**Status**: ✅ **Tutti i bottoni aggiornati con padding ridotto e border 3px**

**Componente**: ✅ `Button.tsx` creato per riutilizzo

**Server**: 🟢 Attivo su http://localhost:3000
