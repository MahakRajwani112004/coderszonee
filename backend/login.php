<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // User found
        echo json_encode(["status" => "success", "message" => "Login successful"]);
    } else {
        // User not found
        echo json_encode(["status" => "error", "message" => "Invalid email or password"]);
    }
}

$conn->close();
?>
