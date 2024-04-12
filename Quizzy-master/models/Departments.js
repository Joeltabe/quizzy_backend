
const mongoose = require('mongoose');

const DepartmentsSchema = new mongoose.Schema({
    DepartmentId: {
            type: Number,
            unique: true,
            required: [true, 'A Department must have a a unique user ID']
        },
        name: {
            type: String,
            trim: true,
            required: [true, 'A Department must have a name'],
        },
    })
    const Department = mongoose.model('Department', DepartmentSchema);
    
    module.exports = Department;