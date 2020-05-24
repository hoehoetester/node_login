const router = require('express').Router();
const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
  const { error } = await schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exist' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    user = new User({
      name,
      email,
      password: hashPassword,
    });

    await user.save();

    const payload = {
      user: {
        id: user._id,
      },
    };

    jwt.sign(
      payload,
      process.env.TOKEN_SECRET,
      {
        // Signing a token with 1 hour of expiration:
        expiresIn: '1h',
      },
      (err, token) => {
        if (err) {
          throw err;
        }

        res.json({ token });
      }
    );

    // res.send('User saved' + user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
