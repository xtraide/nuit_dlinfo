<?php

namespace App\Mail;
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';
//require 'pdf.php';
//Create an instance; passing `true` enables exceptions
class Mail
{

    /**
     * envoie un mail  
     * 
     * @param $addAddress  adresse mail de la victime
     * @param $subject sujet du mail 
     * @param $Body body du mail 
     * @param $pdfid id de la reservation 
     * 
     * */
    function sendmail(string $addAddress = "thieblemontnicolas@gmail.com")
    {
        $mail = new PHPMailer(true);
        try {
            //Server settings
            $mail->SMTPDebug = 0;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->SMTPAuth = true;                                   //Enable SMTP authentication
            $mail->Username = 'proxtraide@gmail.com';                     //SMTP username
            $mail->Password = 'wgbyelugxrsewiox';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Host = 'smtp.gmail.com';                             //Set the SMTP server to send through
            $mail->Port = 587;                                  //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

            //Recipients
            $mail->setFrom('noreply@gmail.com', 'ne pas repondre');
            $mail->addAddress($addAddress);       //Add a recipient

            //Attachments
            //Optional name


            $mail->SMTPOptions = [
                'ssl' => [
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true,
                ]
            ];
            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = $this->getSubject();
            $mail->Body    = $this->getBody();


            $mail->send();
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
    public function getSubject()
    {
        return "test";
    }
    public function getBody()
    {
        return "test";
    }
}
