const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
  type: { type: String, required: true },
  order: { type: Number, required: true}
});


module.exports = mongoose.model('Doc', docSchema);
