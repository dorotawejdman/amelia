<?php
    
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