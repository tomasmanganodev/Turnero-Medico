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

  /*medic_type.findAll().then((medics) => {
    res.status(201).json({
      list: medics[0],
    });
  });*/
};

exports.getMedic = (req, res, next) => {
  user.findAllMedics();
  user.findAllMedics().then((Medics) => {
    console.log(Medics);
  });
};

//Funcion para agregar un turno
exports.addTurn = (req, res, next) => {
  //variables
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const dni = req.body.dni;
  const tel = req.body.tel;
  const ObraSocial = req.body.ObraSocial;
  const medic = req.body.medic;
  const year = req.body.year;
  const mes = req.body.mes;
  const dia = req.body.dia;
  const hora = req.body.hora;

  const Client = new client(dni, firstName, lastName, tel);
  Client.save();
  const MedicDate = new medicDate(null, dia, dni, 24);
  MedicDate.save();
};

exports.addMedicType = (req, res, next) => {
  //variables

  const specialization = req.body.medicType;

  const medicType = new medic_type(null, specialization);
  medicType.save();
};
