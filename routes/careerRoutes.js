'use strict';

const express = require('express');
const careerController = require('../controllers/careerController');
const router = express.Router();

router.get('/careers', careerController.getCareer);

router.get('/career/:id', careerController.getCareerById);

module.exports = {
    routes: router
}

