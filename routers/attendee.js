const express = require('express');

const attendeeController = require('../controllers/attendee');

const router = express.Router();


router.get('/', attendeeController.getLogin)
router.get('/home', attendeeController.getHome)
router.post('/login', attendeeController.postLogin)
router.get('/scanner', attendeeController.getScanner)
router.get('/logout', attendeeController.logout)

module.exports = router;