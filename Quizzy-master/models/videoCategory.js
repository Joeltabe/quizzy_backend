const mongoose = require('mongoose');

const videoCategorySchema = new mongoose.Schema({
    categoryId: {
        type: Number,
        unique: true,
        required: [true, 'A category must have a a unique category ID']
    },
    name: {
        type: String,
        required: [true, 'A Category must have a name'],
    },
})

const VideoCategory = mongoose.model('VideoCategory', videoCategorySchema);

// const testVideo = new VideoCategory({
//     name: 'jackey',
//     categoryId: '600'
// })
// testVideo.save()
// .then(doc =>{
//     console.log(doc)
// })
// .catch(err =>{
//     console.log('ERROR🧩🧩', err)
// });


module.exports = VideoCategory;
