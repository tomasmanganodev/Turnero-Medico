/*//Importar express
const express = require('express');
//Importar express router
const router = express.Router();
//Importar calendar
const calendarController = require('../controllers/calendar');
//Importar auth
const auth = require('../middlewares/auth');

//POST Rutas
router.post('/addturn', calendarController.addTurn);
//GET Rutas
router.get('/home', auth, calendarController.getCalendarData);

//exportar router
module.exports = router; */
