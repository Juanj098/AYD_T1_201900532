// API básica con Node.js y Express
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Nadie sabe lo que pasará mañana :: Juan José Gerardi Hernandez - 201900532');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
