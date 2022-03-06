<?php
    
   $message_send = false;

    $q ="";
    echo $q;

    if(isset($_POST['email']) && $_POST['email']!= ""){

        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
        {

            // $name = $_POST['name'];
            $email = $_POST['email'];
            $message = $_POST['message'];
            
            $myMail = "dorota.wejdman@gmail.com";
            $subject = "MAIL: T.devWeb od:".$name;
            $body = ""; 
            
            // $body .= "Wiadomość od: ".$name."\r\n";
            $body .= "e-mail: ".$email."\r\n";
            $body .= "Treść wiadomości: ".$message."\r\n";
            
           // mail($myMail,$subject,$body);

            $message_send = true;
            echo $message_send;
        }
    }

?>