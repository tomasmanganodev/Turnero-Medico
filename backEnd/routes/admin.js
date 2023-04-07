//Importar express
const express = require("express");
//Importar Express router
const router = express.Router();
//Importar archivo admin
const adminController = require("../controllers/admin");

//GET  Rutas
router.get("/list/medics", adminController.getMedic);
router.get("/list/medicType", adminController.getMedicType);
router.post("/medicType/add", adminController.addMedicType);

//Exportar router
module.exports = router;
