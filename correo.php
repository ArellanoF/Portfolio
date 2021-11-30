<?php
$destination = 'francescarellano@gmail.com';

        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $header = "Enviado desde tu Portfolio";

        $mensajeCompleto = $mensaje . "\nAtentamente: " . $name;

        mail($destination, $subject, $mensajeCompleto, $header);  
        echo "<script>alert('correo enviado')</script>"; 
        


?>