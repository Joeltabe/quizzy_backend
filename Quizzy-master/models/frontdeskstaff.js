
const mongoose = require('mongoose');

const FrontDeskStaffSchema = new mongoose.Schema({
    staffId: {
            type: Number,
            unique: true,
            required: [true, 'Each staff must have a a unique user ID']
        },
        fullname: {
            type: String,
            trim: true,
            required: [true, 'A Staff must have a name'],
        },
            email: {
            type: String,
            trim: true,
            required: [true, 'A Staff must have an email'],
        },
      
    })
    const FrontDeskStaff = mongoose.model('FrontDeskStaff', FrontDeskStaffSchema);
    
    module.exports = FrontDeskStaff;