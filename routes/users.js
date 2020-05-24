const router = require('express').Router();

const User = require('../models/User');

/**
 * @route  POST api/user
 * @desc   Register a user
 * @access Public
 */
router.post('/', (req, res) => {
  // res.send('Register a user');
  res.send(req.body);
});

module.exports = router;
