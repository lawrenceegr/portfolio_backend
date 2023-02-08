const Intro = require('../models/Intro.model');


//add intro
exports.create = async (req, res) => {
  const intro = new Intro({
    welcome: req.body.welcome,
    fullname: req.body.fullname,
    description: req.body.description,
    image: { data: req.file.buffer, contentType: req.file.mimetype },
  });

  try {
    const savedIntro= await intro.save();
    res.send(savedIntro);
  } catch (err) {
    res.status(400).send(err);
  }
};

// show intro
exports.show = async (req, res) => {
  try {
    const intro = await Intro.find();
    res.send(intro);
  } catch (err) {
    res.status(400).send(err);
  }
};

// update intro
exports.update = async (req, res) => {
  try {
    const updatedIntro = await Intro.updateOne({ _id: req.params.id }, {
      $set: {
        welcome: req.body.welcome,
        fullname: req.body.fullname,
        description: req.body.description,
        image: req.body.image
      }
    });
    res.send(updatedIntro);
  } catch (err) {
    res.status(400).send(err);
  }
};

// delete intro
exports.delete = async (req, res) => {
  try {
    const removedIntro = await Intro.deleteOne({ _id: req.params.id });
    res.send(removedIntro);
  } catch (err) {
    res.status(400).send(err);
  }
};


