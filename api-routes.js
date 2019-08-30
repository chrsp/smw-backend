// api-routes.js

let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to SMW!',
    });
});

var wordController = require('./wordController');

router.route('/words')
    .get(wordController.index)
    .post(wordController.new);
router.route('/words/:word_id')
    .get(wordController.view)
    .patch(wordController.update)
    .put(wordController.update)
    .delete(wordController.delete);

module.exports = router;