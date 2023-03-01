const bcrypt = require('bcryptjs');
const user = require('../models/user');
exports.signup = (req, res, next) => {

    const firstName = req.body.firstName;
    const lastName = req.body.LastName;
    const email = req.body.email;
    const password = req.body.password;
    const medicId = req.body.MedChoice;

    bcrypt.hash(password, 12).
    then( passwordHashed => {
        const userm = new user(null, firstName, lastName, email, passwordHashed, medicId);
        userm.save();
    }).then(result =>{
        res.status(201).json({message:'User created'});
    })
    .catch(
        err =>{
          console.log(err);  
    })


}

exports.login = (req, res, next) => {
    res.status(501).json({message:'test'});
}