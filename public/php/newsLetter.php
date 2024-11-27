<?php
/*
   Codi que gestiona el enviament del correu
   de benvinguda quan l'usuari es dona d'alta
   al NewsLetter
   Made by Alexander Beltran
*/

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php'; // Incloure PHPMailer

if ($_SERVER['REQUEST_METHOD'] === 'POST') { // Mirem si la petició és POST
    $correu = $_POST['correu'] ?? ''; // Obtenim el correu de la petició

    if (!filter_var($correu, FILTER_VALIDATE_EMAIL)) { // Validem el correu
        echo json_encode(['success' => false, 'message' => 'Correu electrònic no vàlid.']); // Si no és vàlid, retornem un error
        exit;
    }

    // Funció que envia el correu
    function enviarCorreu($correu) {
        $mail = new PHPMailer(true); // Creem una nova instància de PHPMailer

        try {
            $mail->isSMTP(); // Indiquem que utilitzarem SMTP
            $mail->Host = 'smtp.mail.yahoo.com'; // Host de Yahoo
            $mail->SMTPAuth = true; // Habilitar autenticació SMTP
            $mail->Username = 'tabletabcontact@yahoo.com'; // Correu des d'on enviem
            $mail->Password = 'Grup2MP13'; // Contrasenya del correu
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Encriptació del missatge (STARTTLS per Yahoo)
            $mail->Port = 587; // Port per SMTP amb STARTTLS

            $mail->setFrom('elteucorreu@yahoo.com', 'El teu nom o empresa'); // Correu i nom de qui envia
            $mail->addAddress($correu); // Correu on enviem

            $mail->isHTML(true); // Habilitar HTML
            $mail->Subject = 'Benvingut al nostre newsletter!'; // Assumpte del correu
            $mail->Body = '<h1>Benvingut!</h1><p>Gràcies per confiar amb TableTab!</p>'; // Cos del correu en HTML
            $mail->AltBody = 'Gràcies per unir-te al nostre newsletter!'; // Cos del correu en text pla

            $mail->send();
            return ['success' => true, 'message' => 'Correu enviat correctament.'];
        } catch (Exception $e) {
            return ['success' => false, 'message' => "Error al enviar el correu: {$mail->ErrorInfo}"];
        }
    }

    $resultat = enviarCorreu($correu); //Cridem al la funcio
}
?>