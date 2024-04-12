const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming User.js is in models directory

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body; // Extract data from request body

  // Validate user input (optional)

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser = new User({
      name,
      email,
      password,
      role: 'student', // Set role to student for registration
    });

    await newUser.save();

    res.status(201).json({ message: 'Student registered successfully!' });
  } catch (err) {
    console.error('Error registering student:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
