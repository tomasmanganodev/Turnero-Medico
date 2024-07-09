//Importar cliente
const client = require("../models/client");
//Importar user
const user = require("../models/user");
//Importar medic
const medic_type = require("../models/medic");
//Importar consult
const medicDate = require("../models/consult");
//importar body-parser
const { json } = require("body-parser");

//Funcion para agregar un paciente
exports.postAddClient = (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const medicType = req.body.specializationList;
  const userm = new user(null, firstName, lastName, email, password, medicType);
  userm
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getMedicType = async (req, res, next) => {
  try {
    const medics = await medic_type.findAll();
    res.status(201).json({
      list: medics[0],
    });
  } catch (error) {
    next(error);
  }
};

exports.getMedic = async (req, res, next) => {
  
  try {
    const medics = await user.findAllMedics();

    res.status(201).json({
      list: medics,
  })  
  } catch (error) {
    
  }
};

//Funcion para agregar un turno


exports.addMedicType = (req, res, next) => {
  //variables

  const specialization = req.body.medicType;

  const medicType = new medic_type(null, specialization);
  medicType.save();
};
