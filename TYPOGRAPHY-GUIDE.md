# Typography Guide - Festival Narrazione Industriale

## 📅 Data: 27 Ottobre 2025

## 🎯 Standard di Leggibilità

### Font Size per Contenuti Testuali

**Regola Base**: Tutti i testi di paragrafi, descrizioni e contenuti devono avere **20px** di dimensione per garantire leggibilità ottimale.

## 📏 Font Sizes Definiti

### Tailwind Custom Sizes

```javascript
// tailwind.config.js
fontSize: {
  'body': '20px',  // ✅ Testi paragrafi, descrizioni, contenuti
}
```

### Mapping Completo

| Uso | Classe Tailwind | Size | Esempio |
|-----|----------------|------|---------|
| **Paragrafi/Contenuti** | `text-body` | **20px** | Descrizioni, testi informativi |
| Testi piccoli | `text-sm` | 14px | Note, caption |
| Testi base | `text-base` | 16px | Menu, link |
| Testi large | `text-lg` | 18px | Sottotitoli |
| Extra large | `text-xl` | 20px | Alternativa a `text-body` |
| Titoli small | `text-2xl` | 24px | Titoli secondari |
| Titoli medium | `text-3xl` | 30px | Titoli sezione |
| Titoli large | `text-4xl` | 36px | Titoli principali |
| Titoli XL | `text-5xl` | 48px | Hero titles |
| Titoli XXL | `text-6xl` | 60px | Grande emphasis |
| Titoli huge | `text-7xl` | 72px | Logo elements |
| Titoli massive | `text-8xl` | 96px | Logo F-N-I |
| Titoli giant | `text-9xl` | 128px | Logo F-N-I large |

## 🎨 Applicazioni per Tipo di Contenuto

### 1. Paragrafi e Descrizioni ✅
```tsx
// ✅ CORRETTO - 20px per leggibilità
<p className="font-halenoir-regular text-body">
  Testo descrittivo del festival...
</p>
```

```tsx
// ❌ EVITARE - troppo piccolo
<p className="text-base">  // 16px
  Testo descrittivo...
</p>
```

### 2. Tagline e Sottotitoli
```tsx
// Hero tagline - 20px
<p className="font-halenoir-regular text-body text-fni-red">
  L'umanesimo industriale guida il racconto...
</p>
```

### 3. Titoli Sezione
```tsx
// Titoli principali - più grandi
<h2 className="font-halenoir-bold text-4xl lg:text-5xl">
  SECONDA EDIZIONE
</h2>

// Contenuto sotto - 20px
<p className="font-halenoir-regular text-body">
  Descrizione dell'edizione...
</p>
```

### 4. Call to Action Text
```tsx
// Button text - può essere più grande per enfasi
<button className="text-xl lg:text-2xl">
  SCOPRI IL PROGRAMMA
</button>
```

### 5. Menu di Navigazione
```tsx
// Menu items - base o leggermente più grande
<a className="text-base lg:text-lg">
  CHI SIAMO
</a>
```

## 📱 Responsive Typography

### Strategia

Per contenuti testuali lunghi, mantieni `text-body` (20px) fisso:

```tsx
// ✅ Size fissa per leggibilità
<p className="text-body">
  Testo sempre 20px su tutti i dispositivi
</p>
```

Per titoli, usa dimensioni responsive:

```tsx
// ✅ Titoli responsive
<h1 className="text-3xl md:text-4xl lg:text-5xl">
  Titolo che scala
</h1>
```

### Esempi Pratici

#### Mobile
```tsx
<div className="p-4">
  <h2 className="text-2xl mb-4">Titolo</h2>
  <p className="text-body">Paragrafo 20px</p>  {/* Sempre leggibile */}
</div>
```

#### Desktop
```tsx
<div className="p-8">
  <h2 className="text-4xl mb-6">Titolo</h2>
  <p className="text-body">Paragrafo 20px</p>  {/* Stessa size, coerente */}
</div>
```

## 🔤 Font Families

### Halenoir Family

```css
font-halenoir-regular   /* Corpo testo, paragrafi */
font-halenoir-light     /* Testi leggeri, note */
font-halenoir-bold      /* Titoli, emphasis */
```

### Combinazioni Consigliate

```tsx
// Paragrafi standard
<p className="font-halenoir-regular text-body">

// Titoli
<h2 className="font-halenoir-bold text-4xl">

// Sottotitoli
<h3 className="font-halenoir-regular text-2xl">

// Note/Caption
<span className="font-halenoir-light text-sm">
```

## 📐 Line Height

### Default Tailwind

Con `text-body` (20px), il line-height di default è:
- `leading-normal`: 1.5 (30px) ✅ Buono per leggibilità

### Custom Line Height (se necessario)

```tsx
// Più spazio per testi lunghi
<p className="text-body leading-relaxed">  {/* 1.625 = 32.5px */}
  Paragrafo con più spaziatura...
</p>

// Compatto per testi brevi
<p className="text-body leading-snug">  {/* 1.375 = 27.5px */}
  Testo più compatto
</p>
```

## ✅ Checklist Typography

Quando scrivi contenuti testuali:

- [ ] Paragrafi usano `text-body` (20px)
- [ ] Font family appropriato (regular per body)
- [ ] Line height adeguato (default è ok)
- [ ] Colore con sufficiente contrasto
- [ ] Responsive appropriato (fisso per body, scaling per titoli)

## 🎯 Esempi Completi

### Sezione con Contenuto Testuale

```tsx
<section className="py-16">
  <div className="max-w-container-fni mx-auto px-8">
    {/* Titolo */}
    <h2 className="font-halenoir-bold text-4xl lg:text-5xl mb-8">
      [FOCUS 2025]
    </h2>

    {/* Contenuto - 20px per leggibilità */}
    <div className="grid md:grid-cols-2 gap-8">
      <p className="font-halenoir-regular text-body text-fni-dark">
        Il Festival della Narrazione Industriale torna a Parma
        con una prospettiva rinnovata...
      </p>
      <p className="font-halenoir-regular text-body text-fni-dark">
        L'Umanesimo Industriale rappresenta una visione che mette
        le persone al centro dell'impresa...
      </p>
    </div>
  </div>
</section>
```

### Card con Descrizione

```tsx
<div className="bg-white p-6 rounded">
  <h3 className="font-halenoir-bold text-2xl mb-4">
    Titolo Card
  </h3>
  <p className="font-halenoir-regular text-body text-fni-dark">
    Descrizione della card sempre leggibile a 20px.
  </p>
</div>
```

## 🔍 Testing Leggibilità

### Checklist Visual

1. **Apri** http://localhost:3000
2. **Verifica distanza lettura**:
   - Desktop: 50-70cm → 20px perfetto ✅
   - Mobile: 30-40cm → 20px ottimo ✅
3. **Contrasto colori**:
   - Nero su bianco: AAA ✅
   - Rosso su bianco: Verificare (min AA)
4. **Lunghezza linea**:
   - Max 75 caratteri per riga
   - Usa container width appropriato

---

**Regola d'Oro**: 📖 **Tutto il contenuto testuale = 20px (`text-body`)**

**Status**: ✅ Standard typography implementato

**Prossime Sezioni**: Applicare `text-body` a tutti i paragrafi e contenuti testuali
