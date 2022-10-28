<?php

$nombre = $_POST['name'];
$mail = $_POST['email'];
$phone = $_POST['phone'];
$selec = $_POST['selecciona'];
$checkbox = $_POST['Opciones'];
$mensaje = $_POST['textarea'];

// lo que la gente me escribio en el formulario

$mensaje = "Este mensaje fue enviado por" . $nombre . "\r\n";
$mensaje = "Su e-mail es" . $mail . "\r\n";
$mensaje = "Su numero es" . $phone . "\r\n";
$mensaje = "Su eleccion fue" . $selec . "\r\n";
$mensaje = "Su opcion fue" . $checkbox . "\r\n";
$mensaje = "Mensaje: " . $_POST{'mensaje'} . "\r\n";
$mensaje = "Enviado el " . date('d/m/y', time ())

$para = 'david.r.v@hotmail.com'
$asunto = 'Nueva solicitud de servicio de grua'

mail($para, $asunto, utf8_decode($mensaje), $header);

header('localicacion:exito.html');

?>
