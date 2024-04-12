const connectDB = require('./db'); 
const registerUser = require('./auth').registerUser;
const loginUser = require('./auth').loginUser;

// Example usage
registerUser('new_student', 'secure_password');
loginUser('existing_user', 'correct_password').then((user) => {
  console.log("Logged in user:", user);
}).catch((err) => {
  console.error("Login error:", err.message);
});
