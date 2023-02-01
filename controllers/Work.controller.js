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

exports.create= (req, res) => {
    const { dateStarted, dateEnded, workTitle, description } = req.body;
    const image = req.file.path;
  
    const work = new Work({
      dateStarted,
      dateEnded,
      workTitle,
      description,
      image,
    });
  
    work
      .save()
      .then((result) => {
        res.status(201).json({
          message: "Work created successfully!",
          work: result,
        });
      })
      .catch((err) => {
        handleError(err);
      });
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
                dateStarted: req.body.dateStarted,
                dateEnded: req.body.dateEnded,
                title: req.body.title,
                image: req.body.image,
                description: req.body.description
            }
        });
        res.send(updatedWork);
    } catch (err) {
        res.status(400).send(err);
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


