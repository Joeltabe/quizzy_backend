const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Connect to MongoDB (assuming a separate db.js file)
const connectDB = require('./db'); // Replace with the path to your db.js file

// User model (assuming User.js in models directory)
const User = require('./models/User');

// Function to register a new user
async function registerUser(username, password) {
  try {
    await connectDB(); // Connect to MongoDB before user creation

    const hashedPassword = await bcrypt.hash(password, 10); // Hash password for security

    const newUser = new User({
      username,
      password: hashedPassword,
      role: 'student', // Default role for registration
    });

    await newUser.save();
    console.log("User registered successfully!");
  } catch (err) {
    console.error("Error registering user:", err.message);
  }
}

// Function to login a user
async function loginUser(username, password) {
  try {
    await connectDB(); // Connect to MongoDB before user login

    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('Invalid username or password');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid username or password');
    }

    console.log("User logged in successfully!");
    return user; // Return user object for further processing (e.g., authorization)
  } catch (err) {
    console.error("Error logging in user:", err.message);
    throw err; // Re-throw the error for handling in the calling function
  }
}

// Function to authorize a user based on role
function authorize(userRole, allowedRoles) {
  return allowedRoles.includes(userRole);
}

module.exports = {
  registerUser,
  loginUser,
  authorize,
};
