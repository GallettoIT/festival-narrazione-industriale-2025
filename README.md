# Festival della Narrazione Industriale - Coming Soon Page

Landing page responsive per la seconda edizione del Festival della Narrazione Industriale (24-29 Novembre 2025, Parma).

## 📋 Informazioni Progetto

- **Evento**: Festival della Narrazione Industriale 2025
- **Edizione**: Seconda
- **Tema**: Per un Umanesimo Industriale
- **Date**: 24-29 Novembre 2025
- **Luogo**: Parma, Italia
- **Website**: [festivalnarrazioneindustriale.it](https://www.festivalnarrazioneindustriale.it)

## 🏢 Credits

- **Sviluppato da**: Marcello Galli
- **Azienda**: Unsocials
- **Versione**: 1.0.0
- **Anno**: 2025

## 🎨 Caratteristiche

- **Design Responsive**: Ottimizzato per desktop, tablet e mobile
- **GIF Animata**: Background animato con gestione intelligente dei loop
- **Sidebar Informativa**: Pannello laterale con dettagli sul festival
- **Animazioni**: Animazioni fluide al caricamento della pagina
- **SEO Ottimizzato**: Meta tags, Open Graph e Schema.org markup
- **Accessibilità**: ARIA labels e semantic HTML

## 🛠️ Tecnologie Utilizzate

- **HTML5**: Markup semantico
- **CSS3**: Animazioni, Flexbox, Media Queries
- **JavaScript**: Vanilla JS per interazioni
- **Font**: Halenoir (custom), Helvetica Neue

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 769px - 1024px
- **Mobile**: ≤ 768px
- **Mobile Small**: ≤ 480px

## 🎯 Features Principali

### Design
- Background GIF animato (orizzontale/verticale in base al device)
- Palette colori: #E94D34 (rosso), #F7F4F4 (bianco/crema), #282828 (nero)
- Typography: Font Halenoir con pesi multipli (Light, Regular, Bold, Expanded)

### Funzionalità
- **GIF Loop Pause**: Pausa di 3.5 secondi tra i loop del GIF
- **Sidebar Toggle**: Pannello informativo apribile con animazione
- **Mobile Logo**: Logo interattivo visibile solo su mobile
- **Email CTA**: Pulsante per contatto diretto via email

### SEO & Performance
- Meta tags ottimizzati per motori di ricerca
- Open Graph per condivisione social
- Schema.org Event markup per Google Rich Results
- Preload delle risorse critiche
- DNS prefetch per social media

## 📂 Struttura File

```
cooming-soon-page/
├── index.html              # Pagina principale
├── fonts/                  # Font Halenoir
│   └── Halenoir Font/
├── src/                    # Risorse grafiche
│   ├── logo.svg
│   ├── logo-icon.svg
│   ├── f-n-i.svg
│   ├── ig-icon.svg
│   ├── fb-icon.svg
│   ├── mail-icon.svg
│   └── star-icon.svg
└── video/                  # GIF animate
    ├── FNI_ORIZZONTALE.gif
    └── FNI_VERTICALE.gif
```

## 🌐 Browser Support

- Chrome/Edge (ultime 2 versioni)
- Firefox (ultime 2 versioni)
- Safari (ultime 2 versioni)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contatti

- **Email Festival**: segreteria@festivalnarrazioneindustriale.it
- **Instagram**: [@festivalnarrazioneindustriale](https://www.instagram.com/festivalnarrazioneindustriale/)
- **Facebook**: [Festival Narrazione Industriale](https://www.facebook.com/festivalnarrazioneindustriale/)

## 📝 Note Tecniche

### GIF Loop Management
Per personalizzare la durata del loop, modifica la variabile `gifDuration` nel JavaScript (riga ~1736):

```javascript
const gifDuration = 12000; // Durata in millisecondi
const pauseDuration = 3500; // Pausa tra i loop
```

### First Frame Pause
Per utilizzare un'immagine statica del primo frame durante la pausa, crea:
- `video/FNI_ORIZZONTALE_frame1.png`
- `video/FNI_VERTICALE_frame1.png`

---

**Unsocials** © 2025 | Sviluppato da Marcello Galli
