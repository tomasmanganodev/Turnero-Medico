const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

//GET User
router.get('/add', adminController.getAddUser);
router.get('/add/medic', adminController.getAddUserMedic);



//Get Medic
// router.get('/medic/add', adminController.getAddMedic);

//POST  User 
router.post('/add', adminController.postAddUser);
router.post('/add/medic', adminController.postAddUserMedic);

// router.post('/medic/add', adminController.postAddMedic);
router.post('/consult/add',);
router.post('/consult/del',);
router.post('/consult/upd',);

module.exports = router;