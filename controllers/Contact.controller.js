const Contact = require("../models/Contact.model");

exports.index = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.send(contacts);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.create = async (req, res) => {
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
};

exports.show = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.send(contact);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.update = async (req, res) => {
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
};

exports.delete = async (req, res) => {
  try {
    const removedContact = await Contact.deleteOne({ _id: req.params.id });
    res.send(removedContact);
  } catch (err) {
    res.status(400).send(err);
  }
};
