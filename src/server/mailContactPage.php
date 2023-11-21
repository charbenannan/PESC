<?php
header("Access-Control-Allow-Origin: http://127.0.0.1:5173");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");


require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$rawData = file_get_contents('php://input');
$formData = json_decode($rawData, true);

if ($formData === null) {
    
    echo "Invalid JSON data received";
    exit;
}

if (isset($formData['name']) && isset($formData['email']) && isset($formData['phone']) && isset($formData['message']) && isset($formData['subject'])) {
    $name = $formData['name'];
    $email = $formData['email'];
    $phone = $formData['phone'];
    $message = $formData['message'];
    $subjectForm = $formData['subject'];

   
    $to = 'annancharles772@gmail.com';

    
    $subject = $subjectForm.'- Contact Page';

    
    $messageBody = 
    '
        <html>
        <body>
            <h1 style="color: #333; text-align: center;">'.$subjectForm.'- Contact Page</h1>
            <p style="color: #555; font-size: 16px; line-height: 1.5;">Hello, my name is <strong>' . $name . '</strong>,</p>
            <p style="color: #555; font-size: 16px; line-height: 1.5;"> '.$message.'</p>
            <p></p>
            <p></p>
            <p></p>
            <p style="color: #555; font-size: 16px; line-height: 1.5;"> Please reply to me via email through <strong>'.$email.'</strong> </p>
            <p style="color: #555; font-size: 16px; line-height: 1.5;">You may contact me via phone call on <strong>'.$phone.'</strong></p>
        </body>
        </html>
    ';

    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: ' . $email . "\r\n" .
                'Reply-To: ' . $email . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

    
    $mail = new PHPMailer(true);

    try {
        
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; 
        $mail->SMTPAuth = true;
        $mail->Username = 'annancharles772@gmail.com'; 
        $mail->Password = 'hqkt utdo tjhh iumw'; 
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587; 

        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress($to); // Recipient's email address

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $messageBody;

        $mail->send();
        echo 'Email sent successfully';
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }
} else {
    echo 'Required data is missing';
}
?>
