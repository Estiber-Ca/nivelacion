const express = require('express');
const router = express.Router();
const lugaresController = require('../controller/lugaresController');

//rutas del crud

router.post('/', lugaresController.agregarLugar);
router.get('/', lugaresController.mostrarLugares);
router.get('/:id', lugaresController.mostrarLugar);
router.put('/:id', lugaresController.actualizarLugar);
router.delete('/:id', lugaresController.eliminarLugar);

module.exports = router;