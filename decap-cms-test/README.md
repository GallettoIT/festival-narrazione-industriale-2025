# 🧪 TEST DECAP CMS - Festival Narrazione Industriale

Questa è una cartella di test per provare Decap CMS senza modificare il sito principale.

---

## 📌 COME FUNZIONA IL WORKFLOW COMPLETO

### 1. **SITUAZIONE ATTUALE (Senza CMS)**

```
Voi → Modificate file .tsx o .json manualmente → Git commit → Git push → Deploy su hosting
```

**Problema**: Solo chi sa programmare può modificare i contenuti.

---

### 2. **CON DECAP CMS (Dopo implementazione)**

```
Collaboratori → Accedono a /admin → Modificano tramite UI → Click "Pubblica" →
→ Decap crea Git commit automatico → Git push automatico → Deploy automatico
```

**Vantaggi**:
- ✅ I collaboratori non vedono mai codice
- ✅ Non serve VS Code
- ✅ Tutto salvato su Git (versionamento)
- ✅ Deploy automatico

---

## 🎯 COSA POSSONO FARE I COLLABORATORI

### **A) MODIFICARE TESTI**
- Cambiano un testo nella sezione "FOCUS 2025"
- Click "Salva" → Il file JSON si aggiorna automaticamente
- Il sito si rebuilda automaticamente

### **B) AGGIUNGERE/MODIFICARE EVENTI**
1. Accedono alla sezione "📅 Eventi del Programma"
2. Click "Nuovo Evento" oppure modificano uno esistente
3. Compilano il form:
   - Giorno: scelgono dal menu (LUNEDÌ, MARTEDÌ, ecc.)
   - Data: inseriscono 24
   - Mese: scelgono NOVEMBRE
   - Ora: inseriscono 18.00
   - Luogo: digitano "Museo Glauco Lombardi"
   - Descrizione: scrivono il testo
4. Click "Pubblica"
5. **Decap automaticamente:**
   - Crea/aggiorna il file JSON
   - Fa commit su Git con messaggio "Update evento: [nome]"
   - Pusha su GitHub/GitLab
   - Triggerati il deploy (Vercel/Netlify)

### **C) CARICARE FOTO**
1. Nel form dell'ospite, campo "Foto"
2. Click su campo → Si apre file picker
3. Scelgono foto dal computer
4. Decap automaticamente:
   - Carica la foto in `/public/images/cms-uploads/`
   - Ottimizza l'immagine
   - Aggiorna il riferimento nel JSON
   - Commit + Push automatico

---

## 🚀 DEPLOY AUTOMATICO

### **Opzione 1: VERCEL** (Raccomandato)

**Setup (una volta sola):**
1. Collegate il repository GitHub a Vercel
2. Vercel rileva automaticamente Next.js
3. Configurate branch: `main`

**Funzionamento:**
```
Collaboratore modifica contenuto → Decap fa commit → Push su GitHub →
→ Vercel rileva cambiamenti → Build automatica → Deploy automatico → Sito online in 2-3 minuti
```

**Costi**: GRATUITO (piano Hobby)

---

### **Opzione 2: NETLIFY**

**Setup (una volta sola):**
1. Collegate repository a Netlify
2. Build command: `npm run build`
3. Publish directory: `out` o `.next`

**Funzionamento:**
```
Modifica → Decap commit → Push → Netlify build → Deploy → Online
```

**Costi**: GRATUITO (piano Starter)

---

### **Opzione 3: Server Proprietario**

**Setup:**
1. Git hook sul server
2. Quando riceve push, esegue:
   ```bash
   git pull
   npm run build
   pm2 restart app
   ```

---

## 🔐 AUTENTICAZIONE COLLABORATORI

### **Metodo 1: GitHub** (Raccomandato)

**Setup:**
1. Collaboratori devono avere account GitHub
2. Li invitate al repository (read/write access)
3. Configurate OAuth GitHub App
4. I collaboratori accedono con "Login with GitHub"

**Controllo accessi:**
- Solo chi ha accesso al repo può modificare
- Git tracking completo (chi ha fatto cosa)

---

### **Metodo 2: GitLab**

Come GitHub, ma con GitLab.

---

### **Metodo 3: Netlify Identity**

- Più semplice
- Non serve account GitHub
- Create utenti direttamente su Netlify
- Invitate via email

---

## 📁 STRUTTURA FILE DOPO IMPLEMENTAZIONE

```
fni-modern-site/
├── public/
│   ├── admin/              ← INTERFACCIA DECAP CMS
│   │   ├── index.html
│   │   └── config.yml      ← CONFIGURAZIONE
│   ├── data/               ← DATI GESTITI DAL CMS
│   │   ├── eventi/         ← Ogni evento = 1 file .json
│   │   ├── ospiti/         ← Ogni ospite = 1 file .json
│   │   ├── lab/            ← Progetti LAB
│   │   └── testi/          ← Testi sezioni
│   └── images/
│       └── cms-uploads/    ← FOTO CARICATE DAI COLLABORATORI
├── src/
│   ├── components/         ← NESSUNA MODIFICA
│   ├── sections/           ← NESSUNA MODIFICA (o minime)
│   └── app/                ← NESSUNA MODIFICA
```

**Modifiche al codice React**: MINIME o ZERO

---

## 🧪 COME TESTARE DECAP CMS (ORA)

### **Passo 1: Installare Decap CMS localmente**

```bash
cd "fni-modern-site"
npm install decap-cms-app --save-dev
npm install decap-server --save-dev
```

### **Passo 2: Avviare server locale**

Terminale 1 - Server Decap:
```bash
npx decap-server
```

Terminale 2 - Dev server Next.js:
```bash
npm run dev
```

### **Passo 3: Accedere all'interfaccia**

Aprire nel browser:
```
http://localhost:3000/admin
```

### **Passo 4: Provare a creare un evento**

1. Click su "📅 Eventi del Programma"
2. Click "Nuovo Evento"
3. Compilare il form
4. Click "Salva"
5. Il file viene creato in `public/data/eventi/`

---

## ✅ VANTAGGI DECAP CMS

### **Per i Collaboratori:**
- ✅ Interfaccia visuale tipo WordPress
- ✅ No coding richiesto
- ✅ Preview in tempo reale
- ✅ Upload foto drag & drop
- ✅ Validazione campi automatica

### **Per gli Sviluppatori:**
- ✅ Codice React invariato
- ✅ Dati in Git (versionamento completo)
- ✅ No database necessario
- ✅ Deploy automatico
- ✅ Gratuito e open source

### **Per il Progetto:**
- ✅ Workflow professionale
- ✅ Storico modifiche completo
- ✅ Rollback facile in caso di errori
- ✅ Nessun costo aggiuntivo

---

## 📝 ESEMPIO WORKFLOW REALE

**Scenario**: Giuseppe deve aggiungere un nuovo ospite per il Festival 2026

### **Senza CMS:**
1. Chiama voi
2. Voi aprite VS Code
3. Modificate il JSON a mano
4. Fate commit e push
5. Verificate il deploy
6. **Tempo: 15-30 minuti**

### **Con Decap CMS:**
1. Giuseppe accede a `festivalnarrazione.it/admin`
2. Click "👤 Ospiti del Festival"
3. Click "Nuovo Ospite"
4. Compila:
   - Nome: Beppe
   - Cognome: Severgnini
   - Ruolo: Giornalista
   - Bio: [testo]
   - Foto: [carica JPG]
5. Click "Pubblica"
6. **Tempo: 3-5 minuti**
7. **Deploy automatico**: sito online in 2-3 minuti

---

## 🎓 FORMAZIONE COLLABORATORI

**Tempo necessario**: 10-15 minuti

**Cosa devono imparare:**
1. Come fare login
2. Come creare nuovo contenuto
3. Come modificare contenuto esistente
4. Come caricare foto
5. Come pubblicare

**Tutorial**: Posso creare un video-guida da condividere con il team.

---

## 🆘 SUPPORTO

Se dopo l'implementazione i collaboratori hanno problemi:

1. **Chat di supporto**: Posso settare un webhook Slack/Discord
2. **Log delle modifiche**: Tutto tracciato su Git
3. **Rollback**: Posso fare rollback a versione precedente in 1 minuto

---

## 💰 COSTI

- **Decap CMS**: GRATUITO (open source)
- **Hosting Vercel/Netlify**: GRATUITO (piani base)
- **GitHub**: GRATUITO
- **Dominio**: costo esistente
- **Setup e formazione**: 3-4 ore di lavoro

**TOTALE COSTI RICORRENTI**: 0€/mese

---

## 📞 PROSSIMI PASSI

Vuoi che:

1. **A)** Installiamo e testiamo Decap CMS localmente ORA?
2. **B)** Vi mostro una demo con dati di esempio?
3. **C)** Implementiamo direttamente sul sito?
4. **D)** Rimaniamo con gestione manuale file JSON?

Dimmi cosa preferisci! 🎨
