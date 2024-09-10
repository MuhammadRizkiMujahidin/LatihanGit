<?php
include 'db_connect.php';

// Contoh query untuk mengambil data dari tabel 'users'
$sql = "SELECT id, username, email FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data dari setiap row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["username"]. " - Email: " . $row["email"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close(); // Tutup koneksi setelah selesai
?>
