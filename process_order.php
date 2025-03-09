<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "orders";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? '';
    $number = $_POST['number'] ?? '';
    $email = $_POST['email'] ?? '';
    $address = $_POST['address'] ?? '';
    $city = $_POST['city'] ?? '';
    $item = isset($_POST['item']) && !empty($_POST['item']) ? $_POST['item'] : 'Not Specified';
    $quantity = isset($_POST['quantity']) ? intval($_POST['quantity']) : 1;
    $total_price = isset($_POST['total_price']) && !empty($_POST['total_price']) ? floatval($_POST['total_price']) : 0.00;

    if (empty($name) || empty($number) || empty($email) || empty($address) || empty($city)) {
        die("Error: Missing required fields");
    }

    $item = htmlspecialchars($item, ENT_QUOTES, 'UTF-8');
    
    $sql = "INSERT INTO orders (name, number, email, address, city, item, quantity, total_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    if ($stmt) {
        $stmt->bind_param("ssssssid", $name, $number, $email, $address, $city, $item, $quantity, $total_price);
        if ($stmt->execute()) {
            header("Location: confirmation.html?item=$item&quantity=$quantity&total_price=$total_price");
        } else {
            echo "Error: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo "Error in SQL statement preparation";
    }
    
    $conn->close();
} else {
    echo "Invalid request";
}
?>
