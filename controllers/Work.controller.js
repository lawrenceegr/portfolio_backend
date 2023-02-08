const Work = require('../models/Work.model');
const { handleError } = require("../helpers/Error");
exports.index = async (req, res) => {
  try {
    const works = await Work.find();
    res.send(works);
  } catch (err) {
    res.status(400).send(err);
}
};

exports.create= async (req, res) => {
 
    const work = new Work({
      title: req.body.title,
      dateStarted: req.body.dateStarted,
      dateEnded: req.body.dateEnded,
      description: req.body.description,
      image: { data: req.file.buffer, contentType: req.file.mimetype },
    });
     try {
      const savedWork = await work.save();
      res.send(savedWork);
      } catch (error) {
        // handleError(error);
        res.send(error);
      }
  };


exports.show = async (req, res) => {
    try {
        const work = await Work.findById(req.params.id);
        res.send(work);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.update = async (req, res) => {
    try {
        const updatedWork = await Work.updateOne({ _id: req.params.id }, {
            $set: {
              title: req.body.title,
              dateStarted: req.body.dateStarted,
              dateEnded: req.body.dateEnded,
              description: req.body.description,
              image: { data: req.file.buffer, contentType: req.file.mimetype },
            }
        });
        res.send(updatedWork);
    } catch (err) {
        res.send(err);
    }
};

exports.delete = async (req, res) => {
    try {
        const removedWork = await Work.deleteOne({ _id: req.params.id });
        res.send(removedWork);
    } catch (err) {
        res.status(400).send(err);
    }
};


