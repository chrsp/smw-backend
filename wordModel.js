const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
  desc: {
    type: String,
    required: true,
    unique: true,
  }
});

wordSchema.path('desc').index({ unique: true });

const Word = (module.exports = mongoose.model('word', wordSchema));

module.exports.get = (callback, limit) => {
  Word.find(callback).limit(limit);
};
