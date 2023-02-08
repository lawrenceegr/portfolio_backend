const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/About.controller');
const upload = require("../middlewares/Upload");

router.get('/', aboutController.index);
// router.post('/',upload.single("image"), aboutController.create);
router.post('/', aboutController.create);
router.put('/:id', aboutController.update);
router.delete('/:id', aboutController.delete);

module.exports = router;
