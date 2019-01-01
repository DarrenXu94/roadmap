const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SectionSchema = new Schema({
  name: {
    type: String
  },
  order: {
    type: Number
  },
  subSections: 
    [{
        skill: String,
        description: String
    }]
});

module.exports = Section = mongoose.model('sectionLayout', SectionSchema);