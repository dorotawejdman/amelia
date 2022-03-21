<?php
   use PHPMailer\PHPMailer\PHPMailer; 
   use PHPMailer\PHPMailer\Exception;
   // Base files 
   require 'PHPMailer/src/Exception.php';
   require 'PHPMailer/src/PHPMailer.php';



   $email = $_POST['email'];
   $message = $_POST['message'];
   $adultsNumber = $_POST['adultsNumber'];
   $kidsNumber = $_POST['kidsNumber'];
   $animalsNumber = $_POST['animalsNumber'];
   $arrivalDate = $_POST['arrivalDate'];
   $departureDate = $_POST['departureDate'];
   

   $myMail = "dorota.wejdman@gmail.com";
   $subject = "MAIL od: ".$email;
   $body = ""; 
   
   $body .= "E-mail: ".$email."\r\n";
   $body .= "Treść wiadomości: ".$message."\r\n";
   $body .= "Szczegółowe informacje\n";
   $body .= "Termin: ".$arrivalDate." - ".$departureDate."\r\n";
   $body .= "Liczba osób dorosłych: ".$adultsNumber."\r\n";
   $body .= "Liczba dzieci: ".$kidsNumber."\r\n";
   $body .= "Liczba zwierząt: ".$animalsNumber."\r\n";




   $mail = new PHPMailer(true);                              
    try {
        $mail->isSMTP(); // using SMTP protocol                                     
        $mail->Host = 'smtp.gmail.com'; // SMTP host as gmail 
        $mail->SMTPAuth = true;  // enable smtp authentication                             
        $mail->Username = 'amelia.noclegi@gmail.com';  // sender gmail host              
        $mail->Password = 'ameliaNoclegi22'; // sender gmail host password                          
        $mail->SMTPSecure = 'ssl';  // for encrypted connection                           
        $mail->Port = 587;   // port for SMTP     

        $mail->setFrom('amelia.noclegi@gmail.com', "Sender"); // sender's email and name
        $mail->addAddress('amelia.noclegi@gmail.com', "Receiver");  // receiver's email and name

        $mail->Subject = $subject;
        $mail->Body    = $body;

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) { // handle error.
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }


   $message_send = false;

    if(isset($_POST['email']) && $_POST['email']!= ""){

        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
        {

            $email = $_POST['email'];
            $message = $_POST['message'];
            $adultsNumber = $_POST['adultsNumber'];
            $kidsNumber = $_POST['kidsNumber'];
            $animalsNumber = $_POST['animalsNumber'];
            $arrivalDate = $_POST['arrivalDate'];
            $departureDate = $_POST['departureDate'];
            

            $myMail = "dorota.wejdman@gmail.com";
            $subject = "MAIL od: ".$email;
            $body = ""; 
            
            $body .= "E-mail: ".$email."\r\n";
            $body .= "Treść wiadomości: ".$message."\r\n";
            $body .= "Szczegółowe informacje\n";
            $body .= "Termin: ".$arrivalDate." - ".$departureDate."\r\n";
            $body .= "Liczba osób dorosłych: ".$adultsNumber."\r\n";
            $body .= "Liczba dzieci: ".$kidsNumber."\r\n";
            $body .= "Liczba zwierząt: ".$animalsNumber."\r\n";
            
           mail($myMail,$subject,$body);

            $message_send = true;
            echo $message_send;
        }
    }

?>