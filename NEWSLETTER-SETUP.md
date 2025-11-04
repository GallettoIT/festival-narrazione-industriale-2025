# Sistema Newsletter FNI - Documentazione

Sistema completo di gestione iscrizioni newsletter con notifiche email automatiche e accesso ai dati solo via FTP.

## 🎯 Funzionalità

- ✅ **Iscrizione newsletter** tramite form nel footer
- ✅ **Notifica email automatica** a `luca@unsocials.com` e `marcello@unsocials.com` per ogni iscrizione
- ✅ **Salvataggio sicuro** dei dati in file JSON (NON accessibile da web)
- ✅ **Accesso dati SOLO via FTP/SFTP** - nessun endpoint web disponibile
- ✅ **Rate limiting** anti-spam (max 5 iscrizioni/ora per IP)
- ✅ **Validazione email** lato server
- ✅ **GDPR compliant** con consenso privacy obbligatorio

---

## 📁 Struttura File

```
fni-modern-site/
├── data/
│   └── newsletter/
│       ├── subscribers.json         # Dati iscritti (accesso SOLO via FTP)
│       └── .gitignore               # Ignora subscribers.json
├── src/
│   ├── app/
│   │   └── api/
│   │       └── newsletter/
│   │           └── subscribe/
│   │               └── route.ts     # API iscrizione
│   └── components/
│       └── Footer.tsx               # Form newsletter
└── .env.local                       # Configurazione
```

---

## ⚙️ Configurazione

### 1. Variabili d'ambiente (`.env.local`)

```bash
# [OPZIONALE] API Key Resend per invio email
# Se non configurata, le notifiche vengono logate in console
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

### 2. Setup Resend (per email vere)

**Opzionale - Se vuoi inviare email vere invece di solo log console:**

1. Registrati su [Resend.com](https://resend.com) (gratuito fino a 100 email/giorno)
2. Ottieni la tua API key da [resend.com/api-keys](https://resend.com/api-keys)
3. Aggiungi al `.env.local`:
   ```bash
   RESEND_API_KEY=re_tua_api_key_qui
   ```
4. Verifica il dominio `festivalnarrazioneindustriale.it` su Resend per inviare da un'email personalizzata

---

## 📧 Notifiche Email

Ogni iscrizione invia automaticamente una notifica a **luca@unsocials.com** e **marcello@unsocials.com** con:

- Nome dell'iscritto
- Email dell'iscritto
- Data e ora iscrizione
- IP address
- Consenso privacy

**Se Resend non è configurato**: la notifica viene stampata in console del server (utile per testing locale).

---

## 📊 Accesso ai Dati Iscritti (SOLO FTP)

### Sicurezza: Nessun Accesso Web

**IMPORTANTE**: I dati degli iscritti NON sono accessibili tramite web (GET, POST, API, ecc.). L'unico modo per accedere ai dati è tramite FTP/SFTP direttamente sul server.

### Accesso via FTP/SFTP

I dati degli iscritti sono salvati in:

```
/data/newsletter/subscribers.json
```

Per accedere ai dati:

1. **Connettiti al server via FTP/SFTP**
   - Host: `festivalnarrazioneindustriale.it`
   - Usa le tue credenziali FTP del server

2. **Scarica il file**
   ```
   /data/newsletter/subscribers.json
   ```

3. **Converti in CSV se necessario**
   - Usa uno script locale o tool online per convertire JSON → CSV
   - Oppure importa direttamente il JSON in Excel/Sheets

### Formato Dati JSON

```json
{
  "subscribers": [
    {
      "id": "uuid-123",
      "name": "Mario Rossi",
      "email": "mario@example.com",
      "subscribedAt": "2025-01-20T10:30:00.000Z",
      "ipAddress": "192.168.1.1",
      "privacyAccepted": true
    }
  ]
}
```

---

## 🔒 Sicurezza

### File dati NON accessibili da web

Il file `data/newsletter/subscribers.json` è:
- Fuori dalla cartella `public`
- Ignorato da git (`.gitignore`)
- **NON accessibile tramite nessun endpoint web**
- Accessibile **SOLO via FTP/SFTP** con credenziali server

### Rate Limiting

- **Max 5 iscrizioni per ora** per indirizzo IP
- Previene spam e abusi

### Validazione

- Email valida (regex)
- Nome obbligatorio
- Privacy policy obbligatoria
- Duplicate email bloccate

---

## 🧪 Testing Locale

### 1. Avvia il server di sviluppo

```bash
npm run dev
```

### 2. Testa il form newsletter

1. Vai su http://localhost:3000
2. Scrolla al footer
3. Compila il form newsletter
4. Controlla la console del server per la notifica email

### 3. Verifica i dati salvati

```bash
cat data/newsletter/subscribers.json
```

**Nota**: In produzione, i dati sono accessibili SOLO via FTP/SFTP, non tramite endpoint web.

---

## 🚀 Deploy su Produzione

### 1. Configurare le variabili d'ambiente

Su Vercel/Netlify/altro provider, imposta:

```bash
RESEND_API_KEY=re_tua_api_key_qui  # Opzionale
```

### 2. Assicurarsi che il file `subscribers.json` esista

Il file viene creato automaticamente alla prima iscrizione, ma per sicurezza:

```bash
# Verifica che la directory esista
mkdir -p data/newsletter

# Crea il file vuoto se non esiste
echo '{"subscribers":[]}' > data/newsletter/subscribers.json
```

### 3. Verificare i permessi di scrittura

Il server deve poter scrivere in `data/newsletter/subscribers.json`.

---

## 📤 Uso dei Dati con Servizi Email

### Conversione JSON → CSV

Dopo aver scaricato `subscribers.json` via FTP, converti in CSV:

**Opzione 1: Tool online**
- [ConvertCSV.com](https://www.convertcsv.com/json-to-csv.htm)
- Incolla il contenuto JSON e scarica il CSV

**Opzione 2: Script Node.js locale**
```javascript
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('subscribers.json', 'utf-8'));
const csv = 'Nome,Email\n' + data.subscribers.map(s => `"${s.name}","${s.email}"`).join('\n');
fs.writeFileSync('subscribers.csv', csv);
```

### Import in Brevo (Sendinblue)

1. Scarica `subscribers.json` via FTP
2. Converti in CSV
3. Vai su [Brevo Contacts](https://app.brevo.com/contacts)
4. Clicca "Import Contacts"
5. Carica il file CSV
6. Mappa le colonne: Nome → First Name, Email → Email

### Import in Mailchimp

1. Scarica e converti il JSON in CSV
2. Vai su Audience → Manage Audience → Import contacts
3. Carica il CSV
4. Mappa Nome e Email

---

## 🐛 Troubleshooting

### Email non arrivano

1. Verifica che `RESEND_API_KEY` sia configurata
2. Controlla i log del server
3. Verifica il dominio su Resend

**Alternativa**: Controlla direttamente il file JSON sul server:
```bash
cat data/newsletter/subscribers.json
```

### File permission error

```bash
# Verifica permessi
ls -la data/newsletter/subscribers.json

# Dai permessi di scrittura
chmod 644 data/newsletter/subscribers.json
```

### Rate limit error

Se vedi "Troppe richieste":
- Aspetta 1 ora
- Oppure riavvia il server (rate limit è in-memory)

---

## 📝 Formato Dati

### Struttura `subscribers.json`

```json
{
  "subscribers": [
    {
      "id": "uuid-v4",
      "name": "Mario Rossi",
      "email": "mario@example.com",
      "subscribedAt": "2025-01-20T10:30:00.000Z",
      "ipAddress": "192.168.1.1",
      "privacyAccepted": true
    }
  ]
}
```

---

## 🔧 Personalizzazione

### Cambiare email destinatario notifiche

In `src/app/api/newsletter/subscribe/route.ts`:

```typescript
const NOTIFICATION_EMAIL = 'tua-email@example.com';
```

### Cambiare rate limit

In `src/app/api/newsletter/subscribe/route.ts`:

```typescript
const MAX_REQUESTS_PER_HOUR = 10; // Cambia il numero
```

### Personalizzare email notifica

In `src/app/api/newsletter/subscribe/route.ts`, modifica la proprietà `html` dell'oggetto `emailContent`.

---

## 📞 Supporto

Per problemi o domande:
- Email: luca@unsocials.com
- Repository: [GitHub Issues](link-repo)

---

## ✅ Checklist Pre-Produzione

- [ ] (Opzionale) API Key Resend configurata e testata
- [ ] Form newsletter testato (iscrizione + messaggio successo)
- [ ] Verificato che `subscribers.json` non sia in git
- [ ] Verificato che `subscribers.json` NON sia accessibile via web
- [ ] Accesso FTP/SFTP al server configurato correttamente
- [ ] Rate limiting testato
- [ ] Email duplicate bloccate correttamente
- [ ] Notifiche email ricevute su luca@unsocials.com e marcello@unsocials.com

---

**Sistema implementato e testato** ✅

Ultimo aggiornamento: 20 Gennaio 2025
