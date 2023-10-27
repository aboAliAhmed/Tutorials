const express = require('express');
const tutorials = require('../controllers/tutorialController');

const router = express.Router();

// Create,find and delete all tutorials
router
  .route('/tutorial/')
  .get(tutorials.findAll)
  .post(tutorials.create)
  .delete(tutorials.deleteAll);

// get a published tutorial
router.route('/tutorials/published').get(tutorials.findAllPublished);

// Create,find and delete a single tutorial
router
  .route('/tutorial/:id')
  .get(tutorials.findOne)
  .put(tutorials.update)
  .delete(tutorials.delete);

// app.use('/api/tutorials', router);

module.exports = router;
