const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact.model');

// Create a new contact
router.post('/contacts', async (req, res) => {
  const contact = new Contact({
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address
  });

  try {
    const savedContact = await contact.save();
    res.send(savedContact);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all contacts
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.send(contacts);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get a specific contact by ID
router.get('/contacts:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.send(contact);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update a specific contact by ID
router.patch('/contacts:id', async (req, res) => {
  try {
    const updatedContact = await Contact.updateOne({ _id: req.params.id }, {
      $set: {
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
      }
    });
    res.send(updatedContact);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a specific contact by ID
router.delete('/contacts:id', async (req, res) => {
  try {
    const removedContact = await Contact.remove({ _id: req.params.id });
    res.send(removedContact);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
