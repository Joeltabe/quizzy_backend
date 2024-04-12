const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    videoId: {
        type: String,
        unique: true,
        required: [true, 'A video must have a unique id']
    },
    title: {
        type: String,
        required: [true, 'A video must have a title']
    },
    description: {
        type: String,
        required: [true, 'A video must have a description']
    },
    url: {
        type: String,
        required: [true, 'A video must have a url']
    },
    userId:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Eact video must be uploaded by a user']
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: 'VideoCategory',
        required: [true, 'Eact video must have a particular category IDaz']
    }
})

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;



