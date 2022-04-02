<?php
    error_reporting(-1);
    ini_set('display_errors', 'On');
    set_error_handler("var_dump");
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
    $subject = "Nowa wiadomosc od ".$email;
    $body = ""; 
    
    $body .= "Wiadomosc od: ".$email."\r\n\n";
    $body .= $message."\r\n\n";
    $body .= "Szczegółowe informacje\n";
    $body .= "Termin: ".$arrivalDate." - ".$departureDate."\r\n";
    $body .= "Liczba osób dorosłych: ".$adultsNumber."\r\n";
    $body .= "Liczba dzieci: ".$kidsNumber."\r\n";
    $body .= "Liczba zwierząt: ".$animalsNumber."\r\n";
    
    $success = mail($myMail,$subject,$body);

    $message_send = true;

    if($success==1){
        echo '<div
        style="
          width: 100%;
          height: 100vh;
          background-color: #f6f4e9;
          color: #282926;
          text-align: center;
          padding-top: 34vh;
          font-size: 20px;
          line-height: 120%;
          font-family: Georgia, `Times New Roman`, Times, serif;
        "
      >
        <p
          style="
            font-size: 50px;
            color: #747e5b;
            font-weight: 700;
            margin-bottom: 40px;
            /* margin-top: 40px; */
          "
        >
          Dziękujemy za wiadomość!
        </p>
      
        <p style="margin-bottom: 30px">Postaramy się odpowiedzieć jak najszybciej.</p>
        <a
          href="http://amelia.szczawnica.pl"
          style="
            color: white;
            background-color: #747e5b;
            text-decoration: none;
            padding: 6px 16px;
            border-radius: 4px;
            font-size: 16px;
            margin-top: 40px;
          "
          >Wróć</a
        >
      </div>
      ';
    }
    else {
        echo '<div
        style="
          width: 100%;
          height: 100vh;
          background-color: #f6f4e9;
          color: #282926;
          text-align: center;
          padding-top: 34vh;
          font-size: 20px;
          line-height: 120%;
          font-family: Georgia, `Times New Roman`, Times, serif;
        "
      >
        <p
          style="
            font-size: 50px;
            color: #747e5b;
            font-weight: 700;
            margin-bottom: 40px;
            /* margin-top: 40px; */
          "
        >
          Wystąpił błąd.
        </p>
      
        <p style="margin-bottom: 30px">Wiadomość nie została wysłana.</p>
        <a
          href="http://amelia.szczawnica.pl"
          style="
            color: white;
            background-color: #747e5b;
            text-decoration: none;
            padding: 6px 16px;
            border-radius: 4px;
            font-size: 16px;
            margin-top: 40px;
          "
          >Wróć</a
        >
      </div>';
    }
    }
    else {
        echo '<div
        style="
          width: 100%;
          height: 100vh;
          background-color: #f6f4e9;
          color: #282926;
          text-align: center;
          padding-top: 34vh;
          font-size: 20px;
          line-height: 120%;
          font-family: Georgia, `Times New Roman`, Times, serif;
        "
      >
        <p
          style="
            font-size: 50px;
            color: #747e5b;
            font-weight: 700;
            margin-bottom: 40px;
            /* margin-top: 40px; */
          "
        >
          Wystąpił błąd.
        </p>
      
        <p style="margin-bottom: 30px">Podano niepoprawny email.</p>
        <a
          href="http://amelia.szczawnica.pl"
          style="
            color: white;
            background-color: #747e5b;
            text-decoration: none;
            padding: 6px 16px;
            border-radius: 4px;
            font-size: 16px;
            margin-top: 40px;
          "
          >Wróć</a
        >
      </div>';
    }
}
else {
    echo '<div
    style="
      width: 100%;
      height: 100vh;
      background-color: #f6f4e9;
      color: #282926;
      text-align: center;
      padding-top: 34vh;
      font-size: 20px;
      line-height: 120%;
      font-family: Georgia, `Times New Roman`, Times, serif;
    "
  >
    <p
      style="
        font-size: 50px;
        color: #747e5b;
        font-weight: 700;
        margin-bottom: 40px;
        /* margin-top: 40px; */
      "
    >
      Wystąpił błąd.
    </p>
  
    <p style="margin-bottom: 30px">Nie podano emaila.</p>
    <a
      href="http://amelia.szczawnica.pl"
      style="
        color: white;
        background-color: #747e5b;
        text-decoration: none;
        padding: 6px 16px;
        border-radius: 4px;
        font-size: 16px;
        margin-top: 40px;
      "
      >Wróć</a
    >
  </div>';
}

?>