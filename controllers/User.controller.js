const User = require('../models/User.model');
const verifyJWT = require('../middlewares/JWT_Auth');
exports.index = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.create = async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.show = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
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
