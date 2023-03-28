//Importar  bcdryptjs
const bcrypt = require("bcryptjs");
//Importar archivo user
const user = require("../models/user");
//Importar express-validator
const { validationResult } = require("express-validator");
//Importar jsonwebtoken
const jwt = require("jsonwebtoken");

//Funcion para registrar un usuario
exports.signup = (req, res, next) => {
  //Resultados de la validación
  const errors = validationResult(req);

  //Verificar si existe algun error
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed.");
    error.statusCode = 422;
    error.data = errors.array();
    console.log(errors.array());
    throw error;
  }

  //Constantes
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const medicId = req.body.specializationList;

  //Hash la constraseña
  bcrypt
    .hash(password, 12)
    .then((passwordHashed) => {
      //Guardando nuevo usuario
      const userm = new user(
        null,
        firstName,
        lastName,
        email,
        passwordHashed,
        medicId
      );
      userm.save();
    })
    .then((result) => {
      res.status(201).json({ message: "User created" });
    })
    .catch((err) => {
      console.log(err);
    });
};

//Funcion para logear un usuario
exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;

  //Buscar user email
  user.findByEmail(email).then((user) => {
    console.log(user[0]);
    if (user[0].length > 0) {
      loadedUser = user[0][0];
      return bcrypt.compare(
        password,
        loadedUser.passwrd,
        (err, datapassword) => {
          //ver si hay errors
          if (err) {
            throw err;
          }
          //Asignar a token si no hay errores
          if (datapassword) {
            const token = jwt.sign(
              {
                email: loadedUser.email,
                userId: loadedUser.id.toString(),
              },
              "Beatifulspringinshorts",
              { expiresIn: "8h" }
            );
            res
              .status(200)
              .json({ token: token, userId: loadedUser.id.toString() });
          }
        }
      );
    }
  });
};
