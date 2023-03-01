const client = require('../models/client');
const user = require('../models/medic');


exports.postAddClient = (req, res, next) =>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const medicType = req.body.specializationList;
    const userm = new user(null, firstName, lastName, email, password, medicType);
    userm.save().
    then( () => {
        res.redirect('/');
    })
    .catch( err => {
        console.log(err);
    })
}







exports.getCalendar = (req, res, next) =>{

    user.findAll().then( medics =>{
        res.render('../views/calendar/home', {
            pageTittle: 'Inicio',
            listMedic: medics      
      });
    })
     .catch( error => {
         console.log(error);
     }

    )
}

exports.getCalendarc = (req, res, next) =>{

    client.findAll().then( clients =>{
        res.render('../views/calendar/homeC', {
            pageTittle: 'Inicio',
            patient: clients     
      });
    })
     .catch( error => {
         console.log(error);
     }

    )
}

/* 
exports.getCalendar = (req, res, next) =>{

    const getMedic = await Medic.findAll();
    const getClient = Client.findAll();

    res.render('../views/calendar/home', {
        pageTittle: 'Inicio',
        listMedic: getMedic,
        listClient: getClient
    });
}
*/


