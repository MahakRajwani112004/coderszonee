<?php
include 'config.php';

$data = json_decode(file_get_contents('php://input'), true);

$fullName = $data['fullName'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_BCRYPT);

$stmt = $pdo->prepare("INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)");
if ($stmt->execute([$fullName, $email, $password])) {
    echo json_encode(["status" => "success", "message" => "User registered successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Registration failed"]);
}
?>
