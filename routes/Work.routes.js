const express = require('express');
const router = express.Router();
const workController = require('../controllers/Work.controller');
const upload = require("../middlewares/Upload");

router.get('/', workController.index);
router.post('/',upload.single("image"), workController.create);
router.get('/:id', workController.show);
router.put('/:id', workController.update);
router.delete('/:id', workController.delete);

module.exports = router;
