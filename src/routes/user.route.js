const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

// Login
router.post('/login', userController.login);

module.exports = router;