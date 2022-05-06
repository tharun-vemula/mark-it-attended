const express = require('express');

const attendeeController = require('../controllers/attendee');

const router = express.Router();


router.get('/', attendeeController.getHome)
router.get('/login', attendeeController.getLogin)
router.post('/login', attendeeController.postLogin)
router.get('/scanner', attendeeController.getScanner)
router.get('/logout', attendeeController.logout)

module.exports = router;