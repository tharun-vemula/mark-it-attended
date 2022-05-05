const express = require('express');

const professorController = require('../controllers/professor');

const router = express.Router();

router.get('/professor', professorController.getHome);

router.get('/takeAttendance/:lecture', professorController.getQR)

router.get('/view/:id', professorController.viewAttendancePerCourse);

module.exports = router;