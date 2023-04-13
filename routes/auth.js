const { Router } = require('express');

const AuthController = require('../controllers/authController');
const AuthValidator = require('../validators/AuthValidator');

const router = Router();

router.post('/auth', [AuthValidator.AuthValidator], AuthController.auth);

module.exports = router;
