<?php
// gallery.php - display uploaded images
$uploadsDir = __DIR__ . '/uploads/';
$images = [];
if (is_dir($uploadsDir)) {
    $files = scandir($uploadsDir);
    foreach ($files as $file) {
        if ($file === '.' || $file === '..') continue;
        $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
        if (in_array($ext, ['jpg','jpeg','png','gif'])) {
            $images[] = $file;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Galería de Imágenes</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header class="site-header">
        <div class="container nav-wrap">
            <a href="index.html" class="brand" aria-label="Grupo 2 Cheb Ik Mwuan">
                <div class="brand-logo-wrap">
                    <img src="assets/logo.png" alt="Logotipo Oficial">
                </div>
                <div class="brand-text">
                    <h1>Galería</h1>
                </div>
            </a>
        </div>
    </header>
    <main class="container" style="margin-top: 80px;">
        <h2>Imágenes subidas</h2>
        <?php if (empty($images)): ?>
            <p>No hay imágenes todavía. <a href="admin.php">Sube algunas</a>.</p>
        <?php else: ?>
            <div class="gallery-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px,1fr)); gap:20px;">
                <?php foreach ($images as $img): ?>
                    <figure style="margin:0;">
                        <img src="uploads/<?php echo htmlspecialchars($img); ?>" alt="Imagen" style="width:100%; height:auto; border-radius:8px;">
                    </figure>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
        <p style="margin-top:20px;"><a href="admin.php" class="btn-outline">Subir más imágenes</a></p>
    </main>
</body>
</html>
