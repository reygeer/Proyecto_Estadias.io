const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000;

const proveedores = require('./routes/proveedores');
const clientes = require('./routes/clientes');
const importaciones = require('./routes/importaciones');
const cotizaciones = require('./routes/cotizaciones');

app.use(cors());
app.use(express.json());

app.use('/api/proveedores', proveedores);
app.use('/api/clientes', clientes);
app.use('/api/importaciones', importaciones);
app.use('/api/cotizaciones', cotizaciones);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
