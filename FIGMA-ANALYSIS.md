# Analisi Design Figma - Festival Narrazione Industriale

## Data: 27 Ottobre 2025

## 🎨 Colori Estratti

### Variabile Principale
- **FNI_1**: `#e94d34` (Rosso/Arancione corallo - Colore principale del brand)

### Palette Completa da Screenshot
Dall'analisi visiva dello screenshot:
- **Primary Brand**: `#e94d34` (Rosso FNI)
- **Dark Gray/Black**: Per testi e background scuri
- **Light Gray**: Per background sezioni alternate
- **White**: `#FFFFFF` per background chiari
- **Black**: `#000000` per testi

## 📐 Struttura Homepage

### Sezioni Identificate (in ordine):

1. **Header/Navigazione**
   - Frame ID: `1:201` (Livello_1 - Logo)
   - Menu items: CHI SIAMO, PROGRAMMA, OSPITI, NEWS E STAMPA, EDIZIONI, LAB, CONTATTI

2. **Hero Section con Logo F-N-I**
   - Frame ID: `4075:4` (Group 120)
   - Frame ID: `1:15` (Group 2 - FNI GRANDE)
   - Logo grande "F-N-I" con linee decorative
   - Immagine hero sottostante
   - CTA "scopri"

3. **Info Edizione 2025** (Background colore FNI_1 #e94d34)
   - Frame ID: `16:2` (Group 93)
   - Rectangle ID: `1:6` (Rectangle 41 - background rosso)
   - Dimensioni: 1919x882px
   - Testo: "SECONDA edizione", "l'umanesimo industriale"
   - Date: "Parma dal 24 al 29 novembre 2025"
   - CTA: "scopri il programma" (ID: `1:244`)

4. **Focus 2025**
   - Text ID: `1:342` "[FOCUS 2025]"
   - Layout 2 colonne di testo
   - Icon FNI al centro (Frame ID: `1:238`)

5. **Ospiti**
   - Text ID: `1:273` "[OSPITI]"
   - Grid di foto profilo con nomi
   - Esempi: Cristina Accornero, Emanuele Aldrovandi, Alberto Albertini, Corrado Beldì

6. **Layout F-N-I (Perché?)**
   - Frame ID: `1:1423` (Livello_1)
   - Background grigio (Rectangle ID: `1:819`)
   - Dimensioni: 1920x1348px
   - Lettere verticali "F", "N", "I"
   - 3 colonne: Lettere | Testi | Immagini

7. **Edizione 2024**
   - Text ID: `1:247` "edizione 2024"
   - Hero image con stats overlay
   - Stats boxes: "08 EVENTI", "32 aziende", "30 studenti", "18 ospiti"
   - CTA: "RIPERCORRI L'EDIZIONE 2024"

8. **Partner** (Loghi)
   - Frame ID: `4001:1818` (SECTION_LoghiPartner)
   - Text ID: `1:333` "[PARTNER]"
   - Categorie: MAIN SPONSOR (Barilla), SPONSOR, sostenitori, media partner, etc.

9. **Press Area**
   - Frame ID: parte di `4006:1989` (FOOTER)
   - Text ID: `1:315` "PRESS AREA"
   - Background distintivo
   - CTA: "NEWS E STAMPA"

10. **Newsletter + Footer**
    - Frame ID: `4006:1989` (FOOTER)
    - Form newsletter
    - Loghi e info associazione

## 📏 Dimensioni Chiave

- **Width homepage**: 1920px
- **Hero section**: 1610x1021px
- **Sezione Info Edizione (rossa)**: 1919x882px
- **Sezione F-N-I**: 1920x1348px
- **Footer**: 1920x1080px

## 🔤 Tipografia

Dal metadata:
- Font principale: **Halenoir** (già configurato)
- Dimensioni variano per sezioni
- Lettere giganti F-N-I per effetto visivo drammatico

## 🎯 Prossimi Step

### 1. Analisi Dettagliata Sezioni
Dobbiamo fare chiamate separate a `get_design_context` per ogni sezione:

#### Priority 1 - Sezioni Critiche:
- [ ] Hero Section (Frame ID: `4075:4`)
- [ ] Info Edizione (Frame ID: `16:2`)
- [ ] Focus 2025 (Text ID: `1:342` area)

#### Priority 2 - Sezioni Contenuto:
- [ ] Ospiti (Text ID: `1:273` area)
- [ ] Layout F-N-I (Frame ID: `1:1423`)
- [ ] Edizione 2024 (area stats)

#### Priority 3 - Sezioni Supporto:
- [ ] Partner (Frame ID: `4001:1818`)
- [ ] Press Area
- [ ] Footer/Newsletter (Frame ID: `4006:1989`)

### 2. Aggiornamento Configurazione

- [x] Colore principale FNI_1 identificato
- [ ] Aggiornare tailwind.config.js con colori
- [ ] Identificare altri colori dal design
- [ ] Configurare spaziature standard

### 3. Sviluppo Componenti

Ordine di sviluppo:
1. Hero Section (più complessa, imposta il tono)
2. Info Edizione (sezione rossa distintiva)
3. Focus 2025 (layout 2 colonne)
4. Continua con le altre...

## 📝 Note Importanti

⚠️ **Metadata troppo grande**: Il design completo non entra nel context, quindi useremo chiamate separate per ogni sezione
✅ **Screenshot disponibile**: Abbiamo riferimento visivo completo
✅ **Colore brand identificato**: #e94d34 (rosso/arancione corallo)
✅ **Font configurati**: Halenoir già pronto

## 🎨 Color Palette da Applicare

```javascript
// tailwind.config.js
colors: {
  'fni-red': '#e94d34',        // Colore principale brand
  'fni-dark': '#1a1a1a',       // Testi scuri
  'fni-gray': '#f5f5f5',       // Background grigio chiaro
  'fni-dark-gray': '#333333',  // Gray per footer/press
}
```

---

**Prossima Azione**: Analizzare Hero Section in dettaglio (Frame ID: 4075:4)
