const express = require('express');

const controller = require('../controllers/controller');

const router = express.Router();


router.get('/', controller.getHome)
router.get('/login', controller.getLogin)
router.get('/scan', controller.getScanner)


module.exports = router;