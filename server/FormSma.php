<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pendaftaran_pondok";

// Membuat koneksi ke database
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data dari POST request
$namaAnak = isset($_POST['namaAnak']) ? $_POST['namaAnak'] : '';
$namaWali = isset($_POST['namaWali']) ? $_POST['namaWali'] : '';
$noHpWali = isset($_POST['noHpWali']) ? $_POST['noHpWali'] : '';
$metodePembayaran = isset($_POST['metodePembayaran']) ? $_POST['metodePembayaran'] : '';
$buktiPembayaran = null;

// Validasi data
if (empty($namaAnak) || empty($namaWali) || empty($noHpWali) || empty($metodePembayaran)) {
    echo json_encode(["error" => "Semua field harus diisi"]);
    exit;
}

if ($metodePembayaran === 'Transfer Bank' && (!isset($_FILES['buktiPembayaran']) || $_FILES['buktiPembayaran']['error'] !== UPLOAD_ERR_OK)) {
    echo json_encode(["error" => "Gagal meng-upload bukti pembayaran"]);
    exit;
}

if ($metodePembayaran === 'Transfer Bank') {
    $buktiPembayaran = file_get_contents($_FILES['buktiPembayaran']['tmp_name']);
}

// Persiapkan SQL statement untuk menyimpan data ke database
$stmt = $conn->prepare("INSERT INTO pendaftaran_sma (nama_anak, nama_wali, no_hp_wali, metode_pembayaran, bukti_pembayaran) VALUES (?, ?, ?, ?, ?)");
if ($stmt === false) {
    die(json_encode(["error" => "Gagal menyiapkan statement: " . $conn->error]));
}

$stmt->bind_param("ssiss", $namaAnak, $namaWali, $noHpWali, $metodePembayaran, $buktiPembayaran);

// Eksekusi SQL statement
if ($stmt->execute()) {
    echo json_encode(["message" => "Barakallahu fikum! Data berhasil dikirim, Silahkan lanjutkan untuk pengisian berkas"]);
} else {
    echo json_encode(["error" => "Error: " . $stmt->error]);
}

// Tutup statement dan koneksi
$stmt->close();
$conn->close();
?>
