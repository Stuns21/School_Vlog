const express = require('express');
const app = express();

// Configurar middleware para manejar solicitudes JSON
app.use(express.json());

// Manejar solicitudes POST al endpoint /login
app.post('/login', (req, res) => {
  // Extraer los datos del formulario de inicio de sesión del cuerpo de la solicitud
  const { username, password } = req.body;

  // Verificar que los datos de inicio de sesión sean válidos
  if (username === 'usuario' && password === 'contraseña') {
    // Si los datos de inicio de sesión son válidos, redireccionar al usuario a la página principal
    res.redirect('/home');
  } else {
    // Si los datos de inicio de sesión no son válidos, enviar un mensaje de error
    res.status(401).send('Nombre de usuario o contraseña incorrectos');
  }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
