# Sezioni Homepage - Festival Narrazione Industriale

## Status Sviluppo

- ✅ **HeroSection** - Completato (v1.0)
- ⏳ **InfoEdizione** - In attesa
- ⏳ **Focus2025** - In attesa
- ⏳ **OspitiSlider** - In attesa
- ⏳ **FNILayout** - In attesa
- ⏳ **Edizione2024** - In attesa
- ⏳ **Partners** - In attesa
- ⏳ **PressArea** - In attesa
- ⏳ **Newsletter** - In attesa

## HeroSection

### Descrizione
Sezione hero principale con logo F-N-I grande, tagline e immagine di sfondo.

### Componenti Inclusi
- Logo F-N-I grande con linee decorative
- Tagline edizione corrente
- Immagine hero con overlay
- CTA "Scopri"

### Figma Reference
- Node ID: `4075:4`
- [Screenshot disponibile]

### Assets Necessari
⚠️ **TODO**: Scaricare/gestire questi assets:

1. **Logo F-N-I SVG**
   - URL Figma: `http://localhost:3845/assets/1bf830d26f957b541fe3a425bffe35fc02e28233.svg`
   - Destinazione: `fni-modern-site/public/images/logo-fni.svg`

2. **Hero Image**
   - URL Figma: `http://localhost:3845/assets/a636572a8f7ca70ad33438503eb340e91f2884ce.png`
   - Destinazione: `fni-modern-site/public/images/hero-robot.png`
   - Alternativa: Usare immagine dal WordPress esistente

3. **Line decorative (SVG)**
   - Line 8: `http://localhost:3845/assets/cf118b5e4d8e1125359702f1c9696012581fa3d2.svg`
   - Line 25: `http://localhost:3845/assets/87601c79090822d065a3ad756a783ff15b1d6fe9.svg`

### Personalizzazioni
- Responsive design: mobile-first approach
- Hover states per button
- Transizioni smooth

### Prossimi Step
1. Scaricare assets da Figma MCP server
2. Ottimizzare immagini (WebP conversion)
3. Aggiungere animazioni con Framer Motion (opzionale)
4. Test responsive su tutti i breakpoint

---

## Template per Nuove Sezioni

Quando si crea una nuova sezione:

```typescript
'use client';

/**
 * [NomeSezione] - Festival Narrazione Industriale
 *
 * [Descrizione breve]
 *
 * Figma Node ID: [ID]
 */

export default function NomeSezione() {
  return (
    <section
      className="relative w-full"
      data-section="nome-sezione"
    >
      {/* Contenuto sezione */}
    </section>
  );
}
```

### Checklist per Ogni Sezione:
- [ ] Codice estratto da Figma MCP
- [ ] Componente TypeScript creato
- [ ] Screenshot Figma salvato
- [ ] Assets identificati
- [ ] Styling con Tailwind
- [ ] Responsive design
- [ ] Test su mobile/tablet/desktop
- [ ] Accessibilità (aria-labels, semantic HTML)
- [ ] Performance (lazy loading, ottimizzazione immagini)

---

**Ultimo Aggiornamento**: 27 Ottobre 2025, 15:00
