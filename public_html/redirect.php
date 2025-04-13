<?php
require_once __DIR__ . '/../config.php'; // Adjust path if config.php is in a different location

$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

$stmt = $pdo->prepare("SELECT url FROM qr_links WHERE id = ?");
$stmt->execute([$id]);
$link = $stmt->fetch(PDO::FETCH_ASSOC);

if ($link) {
    $update = $pdo->prepare("UPDATE qr_links SET scan_count = scan_count + 1 WHERE id = ?");
    $update->execute([$id]);
    header("Location: " . $link['url']);
    exit;
} else {
    echo "Invalid QR code.";
}
?>