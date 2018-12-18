const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SectionSchema = new Schema({
  name: {
    type: String
  },
  subSections: 
    [{
        skill: String,
        description: String
    }]
});

module.exports = Section = mongoose.model('sectionLayout', SectionSchema);