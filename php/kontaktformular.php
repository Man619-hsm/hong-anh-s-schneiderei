<?php

if (isset($_POST['submit'])) {
    $name =  $_POST['name'];
    $mailFrom = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $artAnfertigung = isset($_POST['art-anfertigung']) ? implode(", ", $_POST['art-anfertigung']) : "No selection";


    $mailTo = "kontakt@hong-anhs-aenderungsschneiderei.de";
    $headers = "From: ".$mailFrom;
    $txt = "Du hast eine Anfrage bezüglich ".$artAnfertigung." von ".$name." erhalten.\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: kontakt.html?mailsend");
  
    

}