# Componente Separator - Guida d'Uso

**Data**: 27 Ottobre 2025, 19:25
**File**: `src/components/Separator.tsx`

---

## 📋 Descrizione

Il componente `Separator` è un elemento decorativo riutilizzabile che può essere inserito tra le sezioni del sito. Mostra un vettore SVG su sfondo colorato mantenendo le proporzioni originali senza stretching.

---

## 🎯 Caratteristiche

- ✅ **Riutilizzabile**: può essere usato in qualsiasi pagina
- ✅ **Personalizzabile**: colore background e SVG configurabili
- ✅ **Responsive**: si adatta a tutte le dimensioni schermo
- ✅ **No Stretching**: mantiene proporzioni originali del vettore
- ✅ **Container width**: rispetta max-w-container-fni (1440px)

---

## 🔧 Props

| Prop | Tipo | Default | Descrizione |
|------|------|---------|-------------|
| `bgColor` | `string` | `'bg-fni-red'` | Classe Tailwind per colore background |
| `svgPath` | `string` | **Required** | Path al file SVG (es: `/images/logo.svg`) |
| `alt` | `string` | `''` | Testo alternativo per accessibilità |
| `className` | `string` | `''` | Classi CSS aggiuntive opzionali |

---

## 💡 Esempi d'Uso

### Esempio Base (Rosso)
```tsx
import Separator from '@/components/Separator';

<Separator
  svgPath="/images/logo-fni-festival-full.svg"
  alt="Festival Narrazione Industriale"
/>
```

### Con Colore Personalizzato
```tsx
<Separator
  bgColor="bg-fni-dark-gray"
  svgPath="/images/separator-dark.svg"
  alt="Separator decorativo"
/>
```

### Con Classi Aggiuntive
```tsx
<Separator
  bgColor="bg-fni-red"
  svgPath="/images/logo-fni-festival-full.svg"
  alt="FNI Logo"
  className="my-16"
/>
```

### Varianti Colore Disponibili

```tsx
// Rosso brand (default)
<Separator bgColor="bg-fni-red" svgPath="..." />

// Grigio chiaro
<Separator bgColor="bg-fni-gray" svgPath="..." />

// Grigio scuro
<Separator bgColor="bg-fni-dark-gray" svgPath="..." />

// Bianco
<Separator bgColor="bg-fni-white" svgPath="..." />

// Nero
<Separator bgColor="bg-fni-black" svgPath="..." />
```

---

## 📏 Specifiche Tecniche

### Padding Responsive
- Mobile: `py-8` (32px top/bottom)
- Tablet: `py-12` (48px top/bottom)
- Desktop: `py-16` (64px top/bottom)

### SVG Sizing
- Width: `100%` del container
- Max Width: `max-w-4xl` (896px)
- Height: `auto` (mantiene proporzioni)
- Object Fit: `contain` (no stretching)

### Container
- Max Width: `max-w-container-fni` (1440px)
- Horizontal Padding: `px-6` mobile, `px-8` desktop
- Centrato: `mx-auto`

---

## 🎨 SVG Assets Disponibili

### Attualmente nel Progetto

| File | Dimensione | Uso |
|------|-----------|-----|
| `logo-fni-festival-full.svg` | 9.5 KB | Separator rosso con F—N—I + Festival Narrazione Industriale |

### Come Aggiungere Nuovi SVG

1. **Scaricare** il vettore da Figma MCP:
```bash
curl -s "http://localhost:3845/assets/[HASH].svg" -o "public/images/separator-nome.svg"
```

2. **Verificare** che il file sia stato scaricato:
```bash
ls -lh public/images/separator-nome.svg
```

3. **Usare** nel componente:
```tsx
<Separator svgPath="/images/separator-nome.svg" />
```

---

## 📱 Responsive Behavior

### Mobile (< 768px)
```
┌─────────────────────┐
│    [Background]     │
│                     │
│   ┌─────────────┐   │
│   │     SVG     │   │
│   └─────────────┘   │
│                     │
└─────────────────────┘
```

### Desktop (≥ 768px)
```
┌──────────────────────────────┐
│       [Background]           │
│                              │
│     ┌──────────────────┐     │
│     │       SVG        │     │
│     └──────────────────┘     │
│                              │
└──────────────────────────────┘
```

### Wide Desktop (≥ 1440px)
```
┌───────────────────────────────────────┐
│           [Background]                │
│                                       │
│        ┌────────────────────┐         │
│        │        SVG         │         │
│        │   (max 896px)      │         │
│        └────────────────────┘         │
│                                       │
└───────────────────────────────────────┘
```

---

## 🔍 Testing Checklist

Quando aggiungi un nuovo separator:

### Visual Check
- [ ] SVG non è stretchato o distorto
- [ ] Proporzioni originali mantenute
- [ ] Centrato orizzontalmente
- [ ] Padding superiore/inferiore corretto
- [ ] Colore background corretto

### Responsive Check
- [ ] Mobile (390px): SVG leggibile e proporzionato
- [ ] Tablet (768px): Transizione smooth
- [ ] Desktop (1440px): SVG ben centrato
- [ ] Ultra Wide (1920px+): Non si allarga oltre 896px

### Accessibilità
- [ ] Attributo `alt` fornito
- [ ] Testo alternativo descrittivo

---

## 🚀 Best Practices

### ✅ DO
- Usare SVG ottimizzati (< 20KB idealmente)
- Fornire sempre `alt` text descrittivo
- Testare su mobile prima di desktop
- Mantenere aspect ratio originali del vettore
- Usare colori brand predefiniti

### ❌ DON'T
- Non usare PNG/JPG per separatori (preferire SVG)
- Non forzare dimensioni fisse in pixel
- Non omettere il parametro `alt`
- Non sovrascrivere `object-fit: contain`
- Non usare colori non presenti nel design system

---

## 📝 Modifiche Future

### Possibili Estensioni
- [ ] Variante con animazione fade-in on scroll
- [ ] Supporto per SVG inline (invece di file)
- [ ] Opzione per allineamento custom (left/center/right)
- [ ] Variante con overlay gradient
- [ ] Supporto per pattern ripetuti

---

**Status**: ✅ Componente completato e funzionante
**Integrato in**: Homepage (dopo sezione Ospiti)
**Pronto per**: Riutilizzo in altre pagine e sezioni

