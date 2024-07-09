const client = require('../models/client');
const user = require('../models/medic');
const medicDate = require("../models/consult");
const validation = require("../middlewares/validation.js")
//Devuelve todo los turnos
exports.getTurns = async (req,res, next) => {
    try {
        const consults = await medicDate.findAll();
        console.log(consults)
        res.status(201).json({
            list: consults,
        })  
    } catch (error) {
        next(error)
    }
}
// PAginacion de las consultas
exports.getTurnsPag = async (req,res, next) => {
    const page = parseInt(req.params.page);
    const pageSize = parseInt(req.params.pageSize);

    try {
        const consults = await medicDate.pag(page, pageSize);
        console.log(consults)
        res.status(201).json({
        list: consults,
        })  
    } catch (error) {
        next(error)
    }
    
}
exports.getTurnsWeek = async (req, res, next) => {
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;
    const userId = req.params.userId;

    try {
        const consults = await medicDate.getWeek(startDate, endDate, userId);
        console.log(consults);
        res.status(200).json({
            list: consults,
        });
    } catch (error) {
        next(error);
    }
};
//Agregar consulta a la base de datos
exports.addTurn = async (req, res, next) => {
    //variables
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const DNI = req.body.dni;
    const tel = req.body.tel;
    const ObraSocial = req.body.ObraSocial;
    const medic = req.body.medic;
    const date = req.body.date;
    const hora = req.body.hora;
    const endHora = req.body.endHora;
    const val_dni = await validation.checkDataExists(DNI, 'clients', 'dni');

    console.log(val_dni);
    
    
    if(val_dni === 0){
        const Client = new client(null, DNI, firstName, lastName, tel, ObraSocial);
        const ClientID = await Client.save();
        console.log(ClientID);
        const MedicDate = new medicDate(null, ClientID, medic, date, hora, endHora);
        await MedicDate.save();
         // Enviar respuesta al cliente
        res.status(200).json({ message: "Turno registrado correctamente" });
    }else if (val_dni === 1){
        checkRes = await client.findBydni(DNI);
        const MedicDate = new medicDate(null,checkRes[0][0].id , medic, date, hora, endHora);
        await MedicDate.save();
         // Enviar respuesta al cliente
        res.status(200).json({ message: "Turno registrado correctamente" });
    } 
    
  };
exports.updTurn = async (req, res, next) => {
   // Extracción del ID de la consulta de los parámetros de la URL
   const consultId = req.params.id;
    const checkId = await validation.checkDataExists(consultId, 'consults', 'id');
   // Extracción de los datos del cuerpo de la solicitud
   const { date, hora, endHora } = req.body;
    if ( checkId === 1) {
        try {
            // Llamada a la función para actualizar la consulta en la base de datos
            await medicDate.updateById(consultId, date, hora, endHora);
            // Si llega aquí, la actualización fue exitosa
            res.status(200).json({ message: 'Consulta actualizada correctamente' });
        } catch (error) {
            // Si ocurre algún error, se maneja aquí
            next(error);
        } 
    } else {
        res.status(404).json({message: 'Consulta no encontrada'})
    }
   
    
  };
exports.delTurn = async (req, res, next) => {
    // Extracción del ID de la consulta de los parámetros de la URL
   const consultId = req.params.id;
   const checkId = await validation.checkDataExists(consultId, 'consults', 'id');

 
   if ( checkId === 1) {
       try {
           // Llamada a la función para actualizar la consulta en la base de datos
           await medicDate.deleteById(consultId);
           // Si llega aquí, la actualización fue exitosa
           res.status(204).json({ message: 'Consulta eliminada correctamente' });
       } catch (error) {
           // Si ocurre algún error, se maneja aquí
           next(error);
       } 
   } else {
       res.status(404).json({message: 'Consulta no encontrada, no se ha podido eliminar'})
   }
    
  };








