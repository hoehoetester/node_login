const router = require('express').Router();
const Joi = require('@hapi/joi');

const User = require('../models/User');

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(2).required(),
});

/**
 * @route  POST api/user
 * @desc   Register a user
 * @access Public
 */
router.post('/', async (req, res) => {
  // res.send('Register a user');
  try {
    const { error } = await schema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    // res.send('req.body');
    res.send(req.body);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
