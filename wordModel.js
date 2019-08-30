const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
  desc: {
    type: String,
    required: true,
    unique: true,
    index: true
  }
});

const Word = (module.exports = mongoose.model('word', wordSchema));

module.exports.get = (callback, limit) => {
  Word.find(callback).limit(limit);
};
