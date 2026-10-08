<?php
session_start();

// Credenciales simples (cámbialas o usa una base de datos en producción)
$validUser = 'admin';
$validPass = 'secret';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = $_POST['username'] ?? '';
    $pass = $_POST['password'] ?? '';
    if ($user === $validUser && $pass === $validPass) {
        // Autenticado correctamente
        $_SESSION['logged_in'] = true;
        // Redirigir al panel de control
        header('Location: admin.php');
        exit;
    } else {
        $error = 'Usuario o contraseña incorrectos.';
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Acceso al Panel de Control</title>
    <link rel="stylesheet" href="css/styles.css">
    <style>
        .login-wrapper {
            max-width: 320px;
            margin: 80px auto;
            padding: 20px;
            background: rgba(255,255,255,0.9);
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .login-wrapper h2 { text-align:center; margin-bottom:1rem; }
        .login-wrapper label { display:block; margin-top:0.5rem; }
        .login-wrapper input { width:100%; padding:0.5rem; margin-top:0.25rem; }
        .login-wrapper button { width:100%; margin-top:1rem; padding:0.5rem; }
        .error { color:#c00; text-align:center; margin-top:0.5rem; }
    </style>
</head>
<body>
    <div class="login-wrapper">
        <h2>Iniciar sesión</h2>
        <?php if (!empty($error)) echo "<p class='error'>{$error}</p>"; ?>
        <form method="post" action="login.php">
            <label for="username">Usuario</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" required>
            <button type="submit" class="btn-primary">Acceder</button>
        </form>
    </div>
</body>
</html>
