const express = require('express');
const router = express.Router();
const socialController = require('../controllers/Social.controller');

router.get('/', socialController.index);
router.post('/', socialController.create);
router.get('/:id', socialController.show);
router.put('/:id', socialController.update);
router.delete('/:id', socialController.delete);

module.exports = router;


