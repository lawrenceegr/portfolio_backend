const express= require("express");
const router = express.Router();
const {verifyJWT} = require('../middlewares/JWT_Auth')



const userController = require('../controllers/User.controller');

router.get('/', userController.index);
router.post('/register',verifyJWT, userController.create);
router.post('/login', userController.login);
router.get('/:id', userController.show);
router.put('/:id',verifyJWT, userController.update);
router.delete('/:id',verifyJWT, userController.delete);

module.exports = router;
