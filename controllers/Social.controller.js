const Social = require('../models/Social.model');

// get all the socials
exports.index = async (req, res) => {
  try {
    const socials = await Social.find();
    res.send(socials);
  } catch (err) {
    res.status(400).send(err);
  }
};

//add a social link
exports.create = async (req, res) => {
  const social = new Social({
    platform: req.body.platform,
    link: req.body.link
  });

  try {
    const savedSocial = await social.save();
    res.send(savedSocial);
  } catch (err) {
    res.status(400).send(err);
  }
};

// show a specific social account
exports.show = async (req, res) => {
  try {
    const social = await Social.findById(req.params.id);
    res.send(social);
  } catch (err) {
    res.status(400).send(err);
  }
};

// update an account
exports.update = async (req, res) => {
  try {
    const updatedSocial = await Social.updateOne({ _id: req.params.id }, {
      $set: {
        platform: req.body.platform,
        link: req.body.link
      }
    });
    res.send(updatedSocial);
  } catch (err) {
    res.status(400).send(err);
  }
};

// delete an account
exports.delete = async (req, res) => {
  try {
    const removedSocial = await Social.deleteOne({ _id: req.params.id });
    res.send(removedSocial);
  } catch (err) {
    res.status(400).send(err);
  }
};


