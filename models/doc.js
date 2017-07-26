const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
  type: { type: String, required: true },
  order: { type: Number }
});


module.exports = mongoose.model('Doc', docSchema);
