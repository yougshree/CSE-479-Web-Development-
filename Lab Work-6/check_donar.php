<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = ""; // Update with your database password
$dbname = "donor_database"; // Update with your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form inputs
$nid = $_POST['nid'];
$dob = $_POST['dob'];

// Query to check if NID and DOB exist in the database
$sql = "SELECT * FROM donors WHERE nid = ? AND dob = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $nid, $dob);
$stmt->execute();
$result = $stmt->get_result();

// Redirect based on query result
if ($result->num_rows > 0) {
    // Match found, redirect to "You are a donor" page
    header("Location: donor_found.html");
    exit();
} else {
    // No match, proceed with registration
    header("Location: register.php");
    exit();
}
?>
