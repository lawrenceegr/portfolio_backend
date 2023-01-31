


const express = require('express');
const router = express.Router();
const Social = require('../models/Social.model');

// Create a new social account
router.post('/social', async (req, res) => {
const social = new Social({
icon: req.body.icon,
link: req.body.link
});

try {
const savedSocial = await social.save();
res.send(savedSocial);
} catch (err) {
res.status(400).send(err);
}
});

// Get all social accounts
router.get('/social', async (req, res) => {
try {
const socials = await Social.find();
res.send(socials);
} catch (err) {
res.status(400).send(err);
}
});

// Get a specific social account by ID
router.get('/social:id', async (req, res) => {
try {
const social = await Social.findById(req.params.id);
res.send(social);
} catch (err) {
res.status(400).send(err);
}
});

// Update a specific social account by ID
router.patch('/social:id', async (req, res) => {
try {
const updatedSocial = await Social.updateOne({ _id: req.params.id }, {
$set: {
icon: req.body.icon,
link: req.body.link
}
});
res.send(updatedSocial);
} catch (err) {
res.status(400).send(err);
}
});

// Delete a specific social account by ID
router.delete('/social:id', async (req, res) => {
try {
const removedSocial = await Social.deleteOne({ _id: req.params.id });
res.send(removedSocial);
} catch (err) {
res.status(400).send(err);
}
});

module.exports = router;