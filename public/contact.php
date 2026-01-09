<?php
/**
 * Contact Form Handler for Netcup Hosting
 * Handles SMTP email sending and spam protection.
 */

// Enable error reporting for debugging (disable in production)
// ini_set('display_errors', 1);
// error_reporting(E_ALL);

header('Content-Type: application/json');

// --- CONFIGURATION ---
// Replace these with your actual Netcup SMTP credentials
define('SMTP_HOST', 'mxe9f2.netcup.net'); // e.g., mxeXXX.netcup.net
define('SMTP_PORT', 465);                // 465 (SSL) or 587 (TLS)
define('SMTP_USER', 'hallo@kunsttherapie-ostholstein.de');
define('SMTP_PASS', 'henzuq-3vajFo-sendur');
define('RECEIVER_EMAIL', 'hallo@kunsttherapie-ostholstein.de');
// ---------------------

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

// Honeypot check
if (!empty($_POST['website'])) {
    // If this field is filled, it's likely a bot
    echo json_encode(['success' => true, 'message' => 'Spam detected.']);
    exit;
}

$name    = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
$email   = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$phone   = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);
$privacy = isset($_POST['privacy']);

if (!$name || !$email || !$message || !$privacy) {
    http_response_code(400);
    echo json_encode(['error' => 'Bitte füllen Sie alle Pflichtfelder aus.']);
    exit;
}

// PHPMailer is highly recommended. Since we don't have composer here, 
// we'll use a simple SMTP implementation or ask the user to install PHPMailer.
// For now, I will provide a script that uses PHPMailer and instructions on how to add it.

// Check if PHPMailer exists (User should upload it to a 'phpmailer' folder in public)
$phpmailer_path = __DIR__ . '/phpmailer/';
if (file_exists($phpmailer_path . 'src/PHPMailer.php')) {
    require $phpmailer_path . 'src/Exception.php';
    require $phpmailer_path . 'src/PHPMailer.php';
    require $phpmailer_path . 'src/SMTP.php';

    $mail = new PHPMailer\PHPMailer\PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = SMTP_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = SMTP_USER;
        $mail->Password   = SMTP_PASS;
        $mail->SMTPSecure = SMTP_PORT === 465 ? PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = SMTP_PORT;
        $mail->CharSet    = 'UTF-8';

        // Recipients
        $mail->setFrom(SMTP_USER, 'Kontaktformular: ' . $name);
        $mail->addAddress(RECEIVER_EMAIL);
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Neue Kontaktanfrage von ' . $name;
        $mail->Body    = "
            <h2>Neue Kontaktanfrage</h2>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>E-Mail:</strong> {$email}</p>
            <p><strong>Telefon:</strong> " . ($phone ?: 'Nicht angegeben') . "</p>
            <p><strong>Nachricht:</strong><br>" . nl2br($message) . "</p>
            <hr>
            <p><small>Diese E-Mail wurde über das Kontaktformular auf kunsttherapie-ostholstein.de gesendet.</small></p>
        ";
        $mail->AltBody = "Name: {$name}\nE-Mail: {$email}\nTelefon: {$phone}\n\nNachricht:\n{$message}";

        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Vielen Dank! Ihre Nachricht wurde gesendet.']);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => "Die Nachricht konnte nicht gesendet werden. Mailer Error: {$mail->ErrorInfo}"]);
    }
} else {
    // Fallback to PHP mail() if PHPMailer is missing, but warn about security/reliability
    $to = RECEIVER_EMAIL;
    $subject = 'Neue Kontaktanfrage von ' . $name;
    $headers = "From: " . SMTP_USER . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    $body = "Name: $name\nE-Mail: $email\nTelefon: $phone\n\nNachricht:\n$message";
    
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Vielen Dank! Ihre Nachricht wurde gesendet. (via mail())']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Die Nachricht konnte nicht gesendet werden. Bitte prüfen Sie die Server-Konfiguration.']);
    }
}
