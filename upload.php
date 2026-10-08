<?php
// upload.php - handle file uploads for the gallery
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
        echo '<p>Error al subir el archivo.</p>';
        exit;
    }
    $allowed = ['image/jpeg', 'image/png', 'image/gif'];
    $fileType = mime_content_type($_FILES['image']['tmp_name']);
    if (!in_array($fileType, $allowed)) {
        echo '<p>Solo se permiten imágenes (JPG, PNG, GIF).</p>';
        exit;
    }
    $uploadsDir = __DIR__ . '/uploads/';
    if (!is_dir($uploadsDir)) {
        mkdir($uploadsDir, 0755, true);
    }
    $fileName = basename($_FILES['image']['name']);
    $targetPath = $uploadsDir . $fileName;
    // Ensure unique filename
    $i = 1;
    $pathInfo = pathinfo($fileName);
    while (file_exists($targetPath)) {
        $fileName = $pathInfo['filename'] . "_{$i}." . $pathInfo['extension'];
        $targetPath = $uploadsDir . $fileName;
        $i++;
    }
    if (move_uploaded_file($_FILES['image']['tmp_name'], $targetPath)) {
        header('Location: admin.php?status=success');
        exit;
    } else {
        echo '<p>No se pudo mover el archivo.</p>';
    }
}
?>
