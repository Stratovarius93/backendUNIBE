'use strict';

const express = require('express');
const careerController = require('../controllers/careerController');
const studentController = require('../controllers/studentController');
const ratingsController = require('../controllers/ratingController');
const periodController = require('../controllers/periodController');
const registrationController = require('../controllers/registrationController');
const accountController = require('../controllers/accountController');
const router = express.Router();

router.get('/careers', careerController.getCareer);

router.get('/career/:id', careerController.getCareerById);

router.get('/student/:id', studentController.getStudentById);

router.get('/ratings/:id', ratingsController.getRatingsById);

router.get('/periods/:id', periodController.getAllPeriodsById);

router.get('/account/:id', accountController.getEmailAccountByID);

router.get('/registration/:id', registrationController.getRegistrationByID);

router.post('/account', accountController.addAccount);

router.put('/account/:id', accountController.updateEmailAccountByID);

router.get('/accounts', accountController.getAllAccounts);

module.exports = {
  routes: router,
};
