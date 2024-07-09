//Importar express
const express = require('express');
//Importar express router
const router = express.Router();
//Importar calendar
const calendarController = require('../controllers/calendar');
//Importar auth
const auth = require('../middlewares/auth');

//POST Rutas
router.post('/addturn', calendarController.addTurn);
router.post('/updTurn/:id', calendarController.updTurn);
//GET Rutas
router.get('/consults/all', calendarController.getTurns);
router.get('/consults/:page/:pageSize', calendarController.getTurnsPag);
router.get('/consults/week/:startDate/:endDate/:userId', calendarController.getTurnsWeek);


// DEl rutas
router.delete('/consult/del/:id', calendarController.delTurn);


//exportar router
module.exports = router; 
