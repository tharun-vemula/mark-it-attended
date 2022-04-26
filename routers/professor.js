const express = require('express');

const professorController = require('../controllers/professor');

const router = express.Router();


router.get('/scan', professorController.getQR)



module.exports = router;