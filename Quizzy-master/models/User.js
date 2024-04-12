// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//     UserId: {
//         type: Number,
//         unique: true,
//         required: [true, 'A User must have a unique id']
//     },
//     username:{
//         type: string,
//         trim: true,
//         required: [true, ' A user must have a name'],
//         unique: true,
//     },
//     password:{
//         type: string,
//         trim: true,
//         unique:true,
//         required: [true, 'A User must have a unique password']

//     },
//     email:{
//         type: string,
//         trim: true,
//         required: [true, ' A user must have an adress'],
//     },
//     role:{
//         type: string,
//         trim: true,
//         required: [true, ' A user must have an adress'],
//         enum: ['admin', 'user'], 
//         default: 'user' 
//     },
//     profile:
//         {
//             type: mongoose.Types.ObjectId,
//             ref: 'UserProfile',
//             required: [true, 'Each user must have a user profile']
//         }
    
     
// })
// const User = mongoose.model('User', UserSchema);
// module.exports = User;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'tutor', 'admin'], default: 'student' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
