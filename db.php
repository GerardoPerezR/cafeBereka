<?php
// Define database connection variables
$servername = "localhost"; // This is usually 'localhost', but confirm it with Hostinger if you're unsure
$username = "u239129368_root"; // Your MySQL username (created in phpMyAdmin)
$password = "antena"; // Your MySQL password
$dbname = "u239129368_cafeBereka";   // Your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
