//Importar cliente
const client = require("../models/client");
//Importar user
const user = require("../models/user");
//Importar medic
const medictype = require("../models/medic");
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

exports.getCalendarData = (req, res, next) => {
  medictype.findAll().then((medics) => {
    res.status(201).json({
      medicList: medics[0],
    });
  });
};

exports.getMedic = (req, res, next) => {
  console.log("hola"); /*user.findAllMedics());
        user.findAllMedics()
        .then(Medics  =>{
            console.log(Medics);
        })*/
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
