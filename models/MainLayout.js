const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MainLayoutSchema = new Schema({
  sections: {
    type: [String]
  }
});

module.exports = MainLayout = mongoose.model('mainLayout', MainLayoutSchema);