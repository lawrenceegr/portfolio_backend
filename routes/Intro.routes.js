const express = require('express');
const router = express.Router();
const introController = require('../controllers/Intro.controller');
const upload = require("../middlewares/Upload");

router.get('/', introController.index);
// router.post('/',upload.single("image"), introController.create);
router.post('/', introController.create);
router.put('/:id', introController.update);
router.delete('/:id', introController.delete);

module.exports = router;
