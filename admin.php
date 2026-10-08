<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Panel de Control – Subir imágenes</title>
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
    <h2>Subir imagen a la galería</h2>
    <?php if (isset($_GET['status']) && $_GET['status'] === 'success'): ?>
      <p style="color: green;">Imagen subida correctamente.</p>
    <?php endif; ?>
    <form action="upload.php" method="post" enctype="multipart/form-data">
      <label for="image">Selecciona una imagen (JPG, PNG, GIF):</label><br>
      <input type="file" name="image" id="image" accept="image/*" required><br><br>
      <button type="submit" class="btn-primary">Subir</button>
    </form>
    <p style="margin-top:20px;"><a href="gallery.php" class="btn-outline">Ver galería</a></p>
  </main>
</body>
</html>
