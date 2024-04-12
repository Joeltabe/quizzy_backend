const express = require('express');
const videoController = require('./../controllers/video.controller');




const connect = require('../server')

const router = express.Router();
// app.use(express.json())

// app.use(express.json())
// app.use(express.json());

router.post('/quizzy/v1/video', videoController.uploadVideo );
router.patch('/quizzy/v1/video:videoId', videoController.modifyVideo);
router.delete('/quizzy/v1/video :videoId', videoController.deleteVideo);
router.get('/quizzy/v1/video', videoController.getAllVideos);
router.get('/quizzy/v1/video :videoId', videoController.getVideo);



// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ message: 'Internal Server Error' });
//   });
module.exports = router;