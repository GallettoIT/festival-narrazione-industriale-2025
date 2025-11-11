# Festival della Narrazione Industriale - Website

Sito web ufficiale del Festival della Narrazione Industriale di Parma.

**Live**: [festivalnarrazioneindustriale.it](https://festivalnarrazioneindustriale.it)

---

## 🚀 Tech Stack

- **Framework**: Next.js 14.2.33 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Decap CMS (git-based)
- **Hosting**: Register.it
- **Deploy**: GitHub Actions (automatico)
- **Analytics**: Matomo
- **Font Custom**: Halenoir (Regular, Light, Bold)

## 📁 Struttura Progetto

```
fni-modern-site/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── chi-siamo/         # About
│   │   ├── programma/         # Program
│   │   ├── ospiti/            # Guests
│   │   ├── news-stampa/       # News & Press ✨ NEW
│   │   ├── edizioni/          # Editions
│   │   ├── lab/               # Lab
│   │   └── contatti/          # Contacts
│   ├── components/            # Reusable components
│   ├── sections/              # Page sections
│   │   └── news/              # News sections ✨ NEW
│   ├── data/                  # Data files
│   │   └── news.ts            # News data ✨ NEW
│   └── content/               # CMS content (Markdown)
│       └── news/              # News articles ✨ NEW
├── public/
│   ├── images/                # Static images
│   └── admin/                 # Decap CMS ✨ NEW
├── .github/
│   └── workflows/
│       └── deploy.yml         # Auto-deploy ✨ NEW
└── out/                       # Build output
```

## 🛠️ Sviluppo Locale

### Setup

```bash
# Clone repository
git clone https://github.com/tuouser/fni-modern-site.git
cd fni-modern-site

# Install dependencies
npm install

# Run dev server
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000)

### Build Produzione

```bash
# Build static site
npm run build

# Output in /out directory
```

## 📰 Gestione News ✨ NEW

### Per Utenti Non Tecnici

1. Vai su `/admin`
2. Login (Netlify Identity o GitHub)
3. Gestisci news (Crea/Modifica/Elimina)
4. Ogni modifica = commit GitHub automatica
5. Deploy automatico in 3-5 minuti

### Formato News (Markdown)

```markdown
---
title: "TITOLO NEWS"
slug: "titolo-news"
date: "2024-03-15"
featuredImage: "/images/news/image.jpg"
summary: "Breve riassunto"
published: true
---

Contenuto in Markdown...
```

---

## 🚀 Deploy Automatico ✨ NEW

### Come Funziona

```
Commit su main
    ↓
GitHub Actions
    ├─ Build Next.js
    ├─ Test output
    └─ Deploy FTP → Register
    ↓
Sito Live (3-5 min)
```

### Setup Deploy

1. Configura **4 GitHub Secrets**:
   - `FTP_SERVER`
   - `FTP_USERNAME`
   - `FTP_PASSWORD`
   - `FTP_REMOTE_DIR`

2. Commit su `main` → Deploy automatico

**📚 Documentazione**: Vedi `GITHUB_DEPLOY_SETUP.md`

---

## 📄 Pagine Sito

- **/** - Homepage
- **/chi-siamo** - Chi siamo
- **/programma** - Programma 2024
- **/ospiti** - Ospiti
- **/news-stampa** - News & Press ✨ NEW
- **/news-stampa/[slug]** - Articolo dettaglio ✨ NEW
- **/edizioni** - Edizioni passate
- **/lab** - Lab Industriale
- **/contatti** - Contatti
- **/admin** - CMS Panel ✨ NEW

---

## 📚 Documentazione

- **[QUICK_START.md](./QUICK_START.md)** - Setup veloce (5 min)
- **[GITHUB_DEPLOY_SETUP.md](./GITHUB_DEPLOY_SETUP.md)** - Deploy automatico completo
- **[DECAP_CMS_SETUP.md](./DECAP_CMS_SETUP.md)** - CMS gestione news

---

## 🎨 Design System

**Colori**: `#e94d34` (red), `#282828` (dark), `#f7f4f4` (gray)
**Font**: Halenoir Expanded (Regular, Bold)
**Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

---

## 📞 Contatti

- **Email**: segreteria@festivalnarrazioneindustriale.it
- **Website**: [festivalnarrazioneindustriale.it](https://festivalnarrazioneindustriale.it)
- **Social**: Facebook | Instagram | LinkedIn

---

**Versione**: 2.0.0 (News & CMS Integration)
**Ultimo aggiornamento**: Novembre 2024
