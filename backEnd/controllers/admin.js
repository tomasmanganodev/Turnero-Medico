const client = require('../models/client');
const medic = require('../models/medic');
const user = require('../models/user');



// Medic GET pages




exports.getAddUser = (req, res, next) => { 
    medic.findAll()
    .then(
        ([rows, datafield]) => {
            res.render('../views/admin/addNewUser', {
                pageTittle: 'Agregar usuario',
                medicList: rows
            });
        })
        .catch( error => {
            console.log(error);
        })
    
}


exports.getAddUserMedic = (req, res, next) => { 
    res.render('../views/admin/addNewTypeMedic', {
        pageTittle: 'Especializaciones medicas'
    });
}


//POST 

exports.postAddUser = (req, res, next) =>{
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


exports.postAddUserMedic = (req, res, next) =>{
   
    const medicType = req.body.medicT;
    const medicT = new medic(null, medicType);
    medicT.save().
    then( () => {
        res.redirect('/');
    })
    .catch( err => {
        console.log(err);
    })
}
