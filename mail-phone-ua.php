<?php

$recepient = "somebodyua93@gmail.com";
$sitename = "MILIEU";

$name = trim($_GET["name"]);
$email = trim($_GET["email"]);
$tel = trim($_GET["tel"]);


$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nПочта: $email \nТелефон: $tel";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>