<?php
/**
 * Newsletter Subscription API Endpoint
 *
 * Gestisce le iscrizioni alla newsletter per il sito statico Next.js
 * Deploy questo file nella root pubblica del tuo server Plesk
 *
 * Requisiti: PHP 7.3+ con estensioni JSON e cURL
 */

// Check requisiti PHP
if (version_compare(PHP_VERSION, '7.3.0', '<')) {
    http_response_code(500);
    die(json_encode(['error' => 'PHP 7.3+ richiesto. Versione attuale: ' . PHP_VERSION]));
}

if (!extension_loaded('json')) {
    http_response_code(500);
    die(json_encode(['error' => 'Estensione JSON non disponibile']));
}

if (!extension_loaded('curl')) {
    http_response_code(500);
    die(json_encode(['error' => 'Estensione cURL non disponibile']));
}

// Headers CORS e JSON
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Metodo non consentito']);
    exit;
}

// Rate limiting semplice basato su IP
session_start();
$ip = $_SERVER['REMOTE_ADDR'];
$rate_limit_key = 'newsletter_' . md5($ip);
$max_requests = 5;
$time_window = 3600; // 1 ora

if (!isset($_SESSION[$rate_limit_key])) {
    $_SESSION[$rate_limit_key] = ['count' => 0, 'reset_at' => time() + $time_window];
}

$rate_data = $_SESSION[$rate_limit_key];

// Reset se è passata un'ora
if (time() > $rate_data['reset_at']) {
    $rate_data = ['count' => 0, 'reset_at' => time() + $time_window];
}

// Check rate limit
if ($rate_data['count'] >= $max_requests) {
    http_response_code(429);
    echo json_encode(['error' => 'Troppe richieste. Riprova più tardi.']);
    exit;
}

// Incrementa counter
$rate_data['count']++;
$_SESSION[$rate_limit_key] = $rate_data;

// Parse JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Dati non validi']);
    exit;
}

// Validation
$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$privacyAccepted = $input['privacyAccepted'] ?? false;

if (empty($name) || empty($email) || !$privacyAccepted) {
    http_response_code(400);
    echo json_encode(['error' => 'Tutti i campi sono obbligatori']);
    exit;
}

// Email validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email non valida']);
    exit;
}

// Data directory path (modifica questo percorso in base alla tua configurazione Plesk)
$data_dir = __DIR__ . '/../../data/newsletter';
$data_file = $data_dir . '/subscribers.json';

// Crea directory se non esiste
if (!is_dir($data_dir)) {
    mkdir($data_dir, 0755, true);
}

// Leggi subscribers esistenti
$subscribers = [];
if (file_exists($data_file)) {
    $json_content = file_get_contents($data_file);
    $data = json_decode($json_content, true);
    $subscribers = $data['subscribers'] ?? [];
}

// Check duplicati
foreach ($subscribers as $sub) {
    if (strtolower($sub['email']) === strtolower($email)) {
        http_response_code(409);
        echo json_encode(['error' => 'Questa email è già iscritta alla newsletter']);
        exit;
    }
}

// Crea nuovo subscriber
$new_subscriber = [
    'id' => uniqid('sub_', true),
    'name' => $name,
    'email' => strtolower($email),
    'subscribedAt' => date('c'),
    'ipAddress' => $ip,
    'privacyAccepted' => true
];

// Aggiungi alla lista
$subscribers[] = $new_subscriber;

// Salva nel file
$data_to_save = ['subscribers' => $subscribers];
file_put_contents($data_file, json_encode($data_to_save, JSON_PRETTY_PRINT));

// Invia notifica email via Resend
sendNotificationEmail($new_subscriber);

// Risposta di successo
http_response_code(201);
echo json_encode([
    'success' => true,
    'message' => 'Iscrizione completata con successo!'
]);

/**
 * Invia email di notifica tramite Resend API
 */
function sendNotificationEmail($subscriber) {
    // IMPORTANTE: Configura questa variabile nelle impostazioni PHP di Plesk
    // oppure inseriscila direttamente qui (meno sicuro)
    $resend_api_key = getenv('RESEND_API_KEY') ?: 're_WRHHYqTS_6YhhY8RpbiLPZBe1DexPV37y';

    if (empty($resend_api_key)) {
        error_log('RESEND_API_KEY non configurata');
        return false;
    }

    $notification_emails = ['luca@unsocials.com', 'marcello@unsocials.com'];

    $email_data = [
        'from' => 'onboarding@resend.dev',
        'to' => $notification_emails,
        'subject' => '🎉 Nuova iscrizione newsletter FNI - ' . $subscriber['name'],
        'html' => '
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #282828;">
                    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                        <h2 style="color: #e94d34;">Nuova iscrizione alla newsletter</h2>

                        <div style="background-color: #f7f4f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <p><strong>Nome:</strong> ' . htmlspecialchars($subscriber['name']) . '</p>
                            <p><strong>Email:</strong> ' . htmlspecialchars($subscriber['email']) . '</p>
                            <p><strong>Data iscrizione:</strong> ' . date('d/m/Y H:i:s', strtotime($subscriber['subscribedAt'])) . '</p>
                            <p><strong>IP Address:</strong> ' . htmlspecialchars($subscriber['ipAddress']) . '</p>
                        </div>

                        <p style="color: #666; font-size: 14px;">
                            Questa è una notifica automatica del sistema newsletter del Festival Narrazione Industriale.
                        </p>
                    </div>
                </body>
            </html>
        '
    ];

    $ch = curl_init('https://api.resend.com/emails');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($email_data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $resend_api_key,
        'Content-Type: application/json'
    ]);

    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curl_error = curl_error($ch);
    curl_close($ch);

    // Log per debug
    error_log('Resend API Response Code: ' . $http_code);
    error_log('Resend API Response Body: ' . $response);
    if ($curl_error) {
        error_log('cURL Error: ' . $curl_error);
    }

    if ($http_code !== 200) {
        error_log('Errore invio email Resend - HTTP ' . $http_code . ': ' . $response);
        // Non bloccare l'iscrizione anche se l'email fallisce
        return false;
    }

    return true;
}
