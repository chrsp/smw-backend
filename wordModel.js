var mongoose = require('mongoose');

var wordSchema = mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
});

var Word = module.exports = mongoose.model('word', wordSchema);

module.exports.get = function (callback, limit) {
    Word.find(callback).limit(limit);
}
