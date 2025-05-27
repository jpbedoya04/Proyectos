const express = require('express');
const router = express.Router();
const { crearProyecto, actualizarProyecto, verProyecto, verProyectos } = require('../controllers/poi.proyectos');


router.post('/proyecto', crearProyecto);
router.put('/proyecto/:id', actualizarProyecto);
router.get('/proyecto/:id', verProyecto);
router.get('/proyectos', verProyectos); // Ver un POI por ID

module.exports = router;
