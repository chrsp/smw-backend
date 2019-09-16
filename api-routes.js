// api-routes.js

const router = require('express').Router();
const wordController = require('./wordController');

router.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Welcome to SMW!'
  });
});

router
  .route('/words')
  .get(wordController.index)
  .post(wordController.new);

router
  .route('/words/:word_id')
  .get(wordController.view)
  .patch(wordController.update)
  .put(wordController.update)
  .delete(wordController.delete);

module.exports = router;
