<?php
// Define database connection variables
$servername = "localhost"; // This is usually 'localhost', but confirm it with Hostinger if you're unsure
$username = "your_username"; // Your MySQL username (created in phpMyAdmin)
$password = "your_password"; // Your MySQL password
$dbname = "your_database";   // Your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
