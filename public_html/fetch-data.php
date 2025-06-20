<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(0);


ob_start();

// Allow cross-origin requests from your domain
header("Access-Control-Allow-Origin: https://www.cafebereka.com");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight (OPTIONS) requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

require_once __DIR__ . "/../config.php";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

$sql = "SELECT * FROM products WHERE availability = 1";
$result = $conn->query($sql);

$products = [];

while ($row = $result->fetch_assoc()) {
    $products[] = $row;
}

echo json_encode($products, JSON_PRETTY_PRINT);

$conn->close();
?>
