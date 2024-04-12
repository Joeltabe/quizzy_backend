const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI="mongodb+srv://chunke135:9lJvdebg5WPs0F4f@cluster0.mbjrcw6.mongodb.net/Quizzy", {
      useNewUrlParser: true,
    });
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit on connection failure
  }
};


module.exports = connectDB;