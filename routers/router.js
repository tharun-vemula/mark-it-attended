const express = require('express');

const controller = require('../controllers/controller');

const router = express.Router();


router.get('/', controller.getHome)
router.get('/login', controller.getLogin)

module.exports = router;