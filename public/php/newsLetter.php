<?php
/*
   Codi que gestiona el enviament del correu
   de benvinguda quan l'usuari es dona d'alta
   al NewsLetter
   Made by Alexander Beltran
*/
// Inclou PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require '/path/to/vendor/autoload.php'; // Assegura't que la ruta sigui correcta al teu autoload.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $correu = $_POST['correu'] ?? ''; // Obtenir el correu de la petició

    // Validar correu electrònic
    if (!filter_var($correu, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Correu electrònic no vàlid.']);
        exit;
    }

    // Funció que envia el correu
    function enviarCorreu($correu) {
        $mail = new PHPMailer(true); // Crear una nova instància de PHPMailer

        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.mail.yahoo.com'; // Host de Yahoo
            $mail->SMTPAuth = true;
            $mail->Username = 'tabletabcontact@yahoo.com'; // Correu des d'on enviem
            $mail->Password = 'Grup2MP13'; // Contrasenya
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            $mail->setFrom('elteucorreu@yahoo.com', 'El teu nom o empresa');
            $mail->addAddress($correu); // Correu on s'envia

            $mail->isHTML(true);
            $mail->Subject = 'Benvingut al nostre newsletter!';
            $mail->Body    = '<h1>Benvingut!</h1><p>Gràcies per confiar amb TableTab!</p>';
            $mail->AltBody = 'Gràcies per unir-te al nostre newsletter!';

            $mail->send();
            return ['success' => true, 'message' => 'Correu enviat correctament.'];
        } catch (Exception $e) {
            return ['success' => false, 'message' => "Error al enviar el correu: {$mail->ErrorInfo}"];
        }
    }

    // Cridar la funció per enviar el correu
    $resultat = enviarCorreu($correu);

    // Retornar la resposta al client
    echo json_encode($resultat);
}
?>
