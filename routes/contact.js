const { Router } = require('express');

const ContactController = require('../controllers/contactController');
const ContactValidator = require('../validators/ContactValidator');

const router = Router();

router.post('/contact/create', [ContactValidator.createContactValidator], ContactController.create);
router.get('/contact/get/all', ContactController.getAll);

module.exports = router;
