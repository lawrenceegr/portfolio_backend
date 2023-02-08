const About = require('../models/About.model');


//add about
exports.create = async (req, res) => {
  const about = new About({
    title: req.body.title,
    description: req.body.description,
    services: req.body.services,
    
  });

  try {
    const savedAbout= await about.save();
    res.send(savedAbout);
  } catch (err) {
    res.status(400).send(err);
  }
};

// show about
exports.show = async (req, res) => {
  try {
    const about = await About.find();
    res.send(about);
  } catch (err) {
    res.status(400).send(err);
  }
};

// update about
exports.update = async (req, res) => {
  try {
    const updatedAbout = await About.updateOne({ _id: req.params.id }, {
      $set: {
        title: req.body.title,
        description: req.body.description,
        services: req.body.services,
        
      }
    });
    res.send(updatedAbout);
  } catch (err) {
    res.status(400).send(err);
  }
};

// delete About
exports.delete = async (req, res) => {
  try {
    const removedAbout = await About.deleteOne({ _id: req.params.id });
    res.send(removedAbout);
  } catch (err) {
    res.status(400).send(err);
  }
};


