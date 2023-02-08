const express= require("express");
const router = express.Router();




const contactController = require('../controllers/Contact.controller');

router.get('/', contactController.index);
router.post('/', contactController.create);
router.get('/:id', contactController.show);
router.put('/:id', contactController.update);
router.delete('/:id', contactController.delete);

module.exports = router;
