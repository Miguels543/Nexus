<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nexusworld";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
} else {
    echo "Conectado correctamente a la base de datos";
}

$conn->set_charset("utf8");
?>