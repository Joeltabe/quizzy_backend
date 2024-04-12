const { builtinModules } = require('module');

const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
    schoolId: {
            type: Number,
            unique: true,
            required: [true, 'A school  must have a a unique user ID']
        },
        name: {
            type: String,
            required: [true, 'A School must have a name'],
        },
    })
    const School = mongoose.model('School', SchoolSchema);
    
    module.exports = School;
    