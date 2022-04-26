const express = require('express');

const attendeeController = require('../controllers/attendee');

const router = express.Router();


router.get('/', attendeeController.getHome)
router.get('/login', attendeeController.getLogin)
router.get('/scanner', attendeeController.getScanner)


module.exports = router;