const express = require('express');
const router = express.Router();

// Item Model
const Section = require('../../models/Section');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    Section.find()
    .then(items => res.json(items));
});

router.get('/:name', (req, res) => {
    Section.find({name: req.params.name})
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
  const newItem = new Section({
      name: req.body.name,
      subSections: req.body.subSections
  });
  newItem.save().then(item => res.json(item));
});

router.delete('/:id', (req, res) => {
    Section.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;