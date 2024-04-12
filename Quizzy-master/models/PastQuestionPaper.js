
const mongoose = require('mongoose');

const PastQuestionPaperSchema = new mongoose.Schema({
    PastQuestionPaperId: {
            type: Number,
            unique: true,
            required: [true, 'A question paper must have a unique u ID']
        },
        title: {
            type: String,
            trim: true,
            required: [true, 'A Paper must have a title'],
        },
        content: {
            type: String,
            trim: true,
            required: [true, 'A Paper must have contents inside it'],
        },
        Course:{
            type: mongoose.Types.ObjectId,
            ref: 'Course',
            required: [true, 'Each paper must have a Course']
        }
    })
    
    const PastQuestionPaper = mongoose.model('PastQuestionPaper', PastQuestionPaperSchema);
    
    module.exports = PastQuestionPaper;