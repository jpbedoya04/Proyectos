const { Pool } = require('pg');

const express = require('express');
const app = express();
app.use(express.json());

// Reemplaza estos valores con tu configuración real
const pool = new Pool({
  user: 'postgres',
  host: '10.125.8.120',
  database: 'EAGIC',
  password: 'postgres',
  port: 5433, // Puerto por defecto de PostgreSQL
});

// Probar la conexión inmediatamente al cargar este módulo
pool.connect()
  .then(client => {
    console.log('✅ Conexión a la base de datos exitosa');
    client.release(); // Liberar el cliente después de la prueba
  })
  .catch(err => {
    console.error('❌ Error al conectar a la base de datos:', err.message);
  });

  // 👇 Esto permite que req.body funcione correctamente


module.exports = pool;
