const { Router } = require('express');

const PositionController = require('../controllers/positionController');
const PositionValidator = require('../validators/PositionValidator');

const router = Router();

router.post('/position/create', [PositionValidator.createPositionValidator], PositionController.create);
router.post('/position/get/all', PositionController.getAll);

module.exports = router;
