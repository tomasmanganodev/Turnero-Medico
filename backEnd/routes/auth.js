//Importar express
const express = require("express");
//Importar router
const router = express.Router();
//Importar auth
const authController = require("../controllers/auth");
//Importar express-validator
const { body } = require("express-validator");
//Importar archivo user
const user = require("../models/user");

//GET rutas
router.get("signgup");

//PUT rutas
router.post(
  "/signup",
  //Validación
  [
    /*
    body('firstName')
        .trim()
        .isLength({min: 2}),
    body('lastName')
        .trim()
        .isLength({min: 2}),*/
    body("email")
      .trim()
      .isEmail()
      .isLength({ min: 5 })
      .withMessage("Por favor, ingresa un email valido")
      .normalizeEmail(),
    body("password").isStrongPassword(),
    /*body('specializationList')
        .trim()
        .isNumeric()
        .isLength({max:2})*/
  ],
  authController.signup
);

router.post(
  "/signup1",
  //Validación
  [
    body("firstName").trim().isLength({ min: 2 }),
    body("lastName").trim().isLength({ min: 2 }),
    body("email")
      .trim()
      .isEmail()
      .isLength({ min: 5 })
      .withMessage("Por favor, ingresa un email valido")
      .normalizeEmail(),
    body("password").isStrongPassword(),
    /*body('specializationList')
        .trim()
        .isNumeric()
        .isLength({max:2})*/
  ],
  authController.signup1
);

//POST rutas
router.post("/login", authController.login);

//Exportar router
module.exports = router;
