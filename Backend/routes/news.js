const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.send('Welcome to the News API!');
});
router.post('/updateContent', (req, res) => {
  res.send('hello');
});
module.exports = router;
