// const mongoose = require('mongoose');

// const UserProfileSchema = new mongoose.Schema({
//     name:{
//         type: string,
//         trim: true,
//         required: [true, ' A user must have a name'],
//         unique: true,
//     },
//     Address:{
//         type: string,
//         trim: true,
//         required: [true, ' A user must have an adress'],
//     },
//     phoneNumber:{
//         type: Number,
//         unique: true,
//         required: [true, ' A user must have a phone number'],

//     },
//     Subscription: {
//         type: mongoose.Types.ObjectId,
//         ref: 'Subscription',
//         required: [true, 'Each user must pay a subscription fee to continue']
//     }
// })

// const UserProfile = mongoose.model('UserProfile', UserProfileSchema);
// module.exports = UserProfile;