const express = require('express');
const app = express();
const poiRoutes = require('./routes/poi.routes');

app.use(express.json()); // Middleware para parsear JSON
app.use('/api', poiRoutes); // Tus endpoints serán /api/pois

module.exports = app;
