// wordController.js

const Word = require('./wordModel');

exports.index = (req, res) => {
  Word.get((err, words) => {
    if (err) {
      res.json({
        status: 'error',
        message: err
      });
    }
    res.json({
      status: 'success',
      data: words
    });
  });
};

exports.new = (req, res) => {
    const word = new Word();
    word.desc = req.body.desc;
    
    word.save(err => {
      if (err) return res.json({
        status: 'error',
        message: 'Word already exists',
      });

      res.json({
        data: word,
        message: `Word ${word} saved.`,
      });
    });
};

exports.view = (req, res) => {
  Word.findById(req.params.contact_id, (err, word) => {
    if (err) res.send(err);
    res.json({
      message: 'Word details loading..',
      data: word
    });
  });
};

exports.update = (req, res) => {
  Word.findById(req.params.contact_id, (err, word) => {
    if (err) res.send(err);
    word.description = req.body.description
      ? req.body.description
      : word.description;

    word.save(err => {
      if (err) res.json(err);
      res.json({
        message: 'Word Info updated',
        data: word
      });
    });
  });
};

exports.delete = (req, res) => {
  Word.remove({ _id: req.params.word_id }, (err, word) => {
    if (err) res.send(err);
    res.json({
      status: 'success',
      message: 'Word deleted'
    });
  });
};
