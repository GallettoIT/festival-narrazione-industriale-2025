# Deploy su Server Plesk - Festival Narrazione Industriale

## 📋 Prerequisiti

- Server con Plesk
- PHP 7.3.33 (o superiore)
- Estensioni PHP: JSON e cURL (solitamente già abilitate)
- Permessi di scrittura sul server

## 🚀 Procedura di Deploy

### 1. Build del sito statico

Sul tuo computer locale, esegui:

```bash
npm run build
```

Questo genererà la cartella `out/` con tutti i file statici del sito.

### 2. Upload dei file sul server

Carica tutto il contenuto della cartella `out/` nella directory pubblica del tuo dominio su Plesk (solitamente `httpdocs/` o `public_html/`).

**IMPORTANTE:** Il file `out/api/newsletter-subscribe.php` deve essere presente nella directory `api/` del server.

### 3. Configurazione permessi

Tramite SSH o File Manager di Plesk, esegui:

```bash
# Crea la directory per i dati della newsletter
mkdir -p /path/to/httpdocs/data/newsletter

# Imposta i permessi corretti
chmod 755 /path/to/httpdocs/data/newsletter
chmod 644 /path/to/httpdocs/api/newsletter-subscribe.php
```

### 4. Configurazione variabile d'ambiente RESEND_API_KEY (Opzionale ma consigliato)

**Metodo A: Via Plesk Panel**

1. Vai su **Siti Web e Domini** > Il tuo dominio
2. Clicca su **Impostazioni PHP**
3. Cerca la sezione **Variabili d'ambiente** o **php.ini aggiuntivo**
4. Aggiungi:
   ```
   RESEND_API_KEY=re_WRHHYqTS_6YhhY8RpbiLPZBe1DexPV37y
   ```

**Metodo B: Via .htaccess**

Crea/modifica il file `.htaccess` nella root del sito:

```apache
SetEnv RESEND_API_KEY re_WRHHYqTS_6YhhY8RpbiLPZBe1DexPV37y
```

**Nota:** Se non configuri la variabile d'ambiente, l'API key è già inserita direttamente nel file PHP (meno sicuro ma funziona).

### 5. Test della newsletter

Dopo il deploy:

1. Vai sul sito in produzione
2. Scorri fino al footer
3. Compila il form newsletter
4. Verifica che ricevi l'email di notifica su `luca@unsocials.com` e `marcello@unsocials.com`

### 6. Verifica permessi file subscribers.json

Il file `data/newsletter/subscribers.json` verrà creato automaticamente alla prima iscrizione.

Se hai problemi, verifica i permessi:

```bash
ls -la /path/to/httpdocs/data/newsletter/
```

Il file deve avere permessi `644` e appartenere all'utente del web server.

## 🔍 Troubleshooting

### Errore: "Unexpected token '<'"

Significa che il file PHP non viene eseguito correttamente:

- Verifica che PHP sia abilitato per la directory
- Controlla che il file si chiami esattamente `newsletter-subscribe.php`
- Verifica i log degli errori PHP in Plesk

### Errore: "Failed to write to file"

Il server non ha permessi di scrittura:

```bash
chmod 755 /path/to/httpdocs/data/newsletter
chown www-data:www-data /path/to/httpdocs/data/newsletter
```

### Email non arrivano

1. Controlla i log PHP per errori Resend
2. Verifica che l'API key sia corretta
3. Testa l'API key manualmente su https://resend.com/

### Rate limit troppo restrittivo

Modifica le righe 31-32 in `api/newsletter-subscribe.php`:

```php
$max_requests = 10; // aumenta il numero
$time_window = 3600; // tempo in secondi
```

## 📊 Gestione Subscribers

I dati degli iscritti vengono salvati in:
```
/path/to/httpdocs/data/newsletter/subscribers.json
```

Puoi scaricare questo file per importare i contatti in MailChimp, Sendinblue, etc.

Formato del file:
```json
{
  "subscribers": [
    {
      "id": "sub_123abc",
      "name": "Mario Rossi",
      "email": "mario@example.com",
      "subscribedAt": "2025-11-03T14:30:00+00:00",
      "ipAddress": "192.168.1.1",
      "privacyAccepted": true
    }
  ]
}
```

## 🔒 Sicurezza

- ✅ Rate limiting attivo (5 richieste/ora per IP)
- ✅ Validazione email lato server
- ✅ Protezione CSRF tramite sessioni
- ✅ Sanitizzazione input
- ✅ CORS configurato

## 📞 Supporto

Per problemi contatta: luca@unsocials.com
