<?php
require_once __DIR__ . './config.php';

$conn = Database::connectDB();

$sql = "DELETE FROM usuario WHERE id = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $_REQUEST['id']);
if($stmt->execute()) {
    header('location: ?page=listar');
}


