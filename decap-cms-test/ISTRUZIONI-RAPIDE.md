# 🚀 ISTRUZIONI RAPIDE - TEST DECAP CMS

## INSTALLAZIONE (5 minuti)

### 1. Installa i pacchetti necessari

Apri terminale nella cartella del progetto:

```bash
cd "/Users/temp/Local Sites/festivalnarrazioneindustrialeuncode/fni-modern-site"

npm install decap-cms-app decap-server --save-dev
```

### 2. Copia i file di configurazione nel progetto principale

```bash
# Copia la cartella admin nel progetto
cp -r decap-cms-test/public/admin public/

# Crea cartelle per i dati (se non esistono)
mkdir -p public/data/eventi
mkdir -p public/data/ospiti
mkdir -p public/data/lab
mkdir -p public/data/testi
mkdir -p public/images/cms-uploads
```

---

## AVVIO TEST (2 comandi)

### Terminale 1: Avvia Decap Server

```bash
npx decap-server
```

**Output atteso:**
```
Decap server listening on port 8081
```

### Terminale 2: Avvia Next.js Dev Server

```bash
npm run dev
```

**Output atteso:**
```
▲ Next.js 14.2.33
- Local: http://localhost:3000
✓ Ready in 2.5s
```

---

## ACCEDI ALL'INTERFACCIA CMS

Apri nel browser:

```
http://localhost:3000/admin
```

---

## COSA VEDRAI

1. **Interfaccia Decap CMS** simile a WordPress
2. **4 Sezioni disponibili:**
   - 📅 Eventi del Programma
   - 👤 Ospiti del Festival
   - 📝 Testi Sezioni Sito
   - 🔬 Progetti LAB

---

## PROVA A CREARE UN EVENTO

1. Click su "📅 Eventi del Programma"
2. Click bottone "New Evento"
3. Compila il form:
   - **Giorno**: LUNEDÌ
   - **Data**: 24
   - **Mese**: NOVEMBRE
   - **Ora**: 18.00
   - **Durata**: 90
   - **Luogo**: Museo Test
   - **Descrizione**: Questo è un evento di test
4. Click "Publish"

**Risultato:**
- File creato in `public/data/eventi/`
- Nome file: `2025-11-24-museo-test.json`

---

## VERIFICA FILE CREATO

```bash
ls -la public/data/eventi/
cat public/data/eventi/2025-11-24-*.json
```

Vedrai il file JSON creato automaticamente!

---

## COME APPARIREBBE AI COLLABORATORI

### LOGIN (In produzione)

1. Vanno su: `https://vostrosito.com/admin`
2. Click "Login with GitHub" (o Netlify Identity)
3. Autorizzano l'app
4. Accedono all'interfaccia

### MODIFICHE

1. Click sulla sezione da modificare
2. Modificano testo/aggiungono evento/caricano foto
3. Click "Publish"
4. **Automaticamente:**
   - Git commit
   - Git push
   - Deploy triggerato
   - Sito aggiornato in 2-3 minuti

---

## DIFFERENZE TEST vs PRODUZIONE

### TEST (Ora - Locale):
- `local_backend: true` → File salvati solo in locale
- Nessun Git commit
- Nessun deploy
- Solo per provare l'interfaccia

### PRODUZIONE (Dopo setup):
- `backend: git-gateway` → File salvati su GitHub
- Git commit automatico
- Deploy automatico
- Tutto tracciato e versionato

---

## PROSSIMI PASSI

Se l'interfaccia vi piace:

1. **Setup Git Gateway** (collega Decap a GitHub)
2. **Setup Netlify Identity** (autenticazione utenti)
3. **Modificare componenti React** per leggere i nuovi file JSON
4. **Deploy di test** su Netlify/Vercel
5. **Formare i collaboratori** (10-15 minuti)

---

## DOMANDE FREQUENTI

### "I file sono davvero modificati?"

In locale SÌ, ma solo in `public/data/eventi/`. In produzione andrebbero su Git.

### "Posso provare a caricare una foto?"

SÌ! Usa il campo "Foto" in un ospite. La foto finisce in `public/images/cms-uploads/`.

### "Come faccio a vedere l'evento nel sito?"

Dovrai modificare `CalendarioEventi.tsx` per leggere dalla cartella `public/data/eventi/` invece che da `programma-eventi.json`.

### "È reversibile?"

100%! Basta cancellare la cartella `public/admin` e torna tutto come prima.

---

## 🆘 PROBLEMI?

### Errore "Command not found: decap-server"

Soluzione:
```bash
npm install -g decap-server
```

### Porta 8081 occupata

Soluzione:
```bash
npx decap-server -p 8082
```

Poi modifica `public/admin/config.yml`:
```yaml
local_backend:
  url: http://localhost:8082/api/v1
```

### Next.js non trova /admin

Assicurati che la cartella sia in `public/admin/` (non `src/`)

---

## 📞 SUPPORTO

Fammi sapere se:
- ✅ Il test funziona
- ❌ Hai errori
- 🤔 Vuoi procedere con implementazione completa
- 🛑 Preferisci rimanere con gestione manuale

Pronto ad aiutarti! 🎨
