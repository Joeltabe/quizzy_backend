const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/quizzy/v1/register', userController.register);
router.post('/quizzy/v1/login', userController.login);
router.get('/quizzy/v1/profile/', userController.getProfile);
router.patch('/quizzy/v1/profile', userController.updateProfile);

router.get('/', userController.getAllUsers)

module.exports = router;