const express = require('express');

const attendanceController = require('../controllers/mark');

const router = express.Router();

router.get('/mark/:lecture', attendanceController.markAttendance);


module.exports = router;