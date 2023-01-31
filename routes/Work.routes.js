const express = require('express');
const router = express.Router();
const Work = require('../models/Work.model');

// Create a new work item
router.post('/work', async (req, res) => {
  const work = new Work({
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    title: req.body.title,
    image: req.body.image,
    description: req.body.description
  });

  try {
    const savedWork = await work.save();
    res.send(savedWork);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all work items
router.get('/work', async (req, res) => {
  try {
    const works = await Work.find();
    res.send(works);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get a specific work item by ID
router.get('/work:id', async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    res.send(work);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update a specific work item by ID
router.patch('/work:id', async (req, res) => {
  try {
    const updatedWork = await Work.updateOne({ _id: req.params.id }, {
      $set: {
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        title: req.body.title,
        image: req.body.image,
        description: req.body.description
      }
    });
    res.send(updatedWork);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a specific work item by ID
router.delete('/work:id', async (req, res) => {
  try {
    const removedWork = await Work.deleteOne({ _id: req.params.id });
    res.send(removedWork);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
