const User = require('../models/User.model');
const zxcvbn = require('zxcvbn');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {verifyJWT} = require('../middlewares/JWT_Auth');
exports.index = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(400).send(err);
  }
};
//user registrations
exports.create =  async (req, res) => {
  const { name, email, password} = req.body;
  const strength = zxcvbn(password);
  if (strength.score < 3) {
      return res.status(400).send({ error: 'password is too weak' });

  }
  const encryptedPassword = await bcrypt.hash(password, 10); //encrypting the password
  try {
      const oldUser = await User.findOne({ email });
      if (oldUser) {
          return res.send({ error: "user exists" })
      }
      await User.create({
          name,
          email,
          password: encryptedPassword,
          

      });
      res.status(200);
  } catch (error) {
    res.status(400).send(error);

  }

};
exports.login = async (req, res) =>{
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
      return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
      const options = { expiresIn: '1h' };
      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, options);

      return res.status(200).json({
        message: "Auth successful",
        token: token
      });

  } else {
      res.status(401).json({ error: "Invalid email or password" });
  }
}
exports.show = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if(!user){
      res.send("User not found")
    }
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.update = async (req, res) => {
  try {
    const updatedUser = await User.updateOne({ _id: req.params.id }, {
      $set: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }
    });
    res.send(updatedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.id });
    res.send(removedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};
