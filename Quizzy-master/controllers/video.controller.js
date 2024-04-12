const Video = require('./../models/video');
const VideoCategory = require('../models/videoCategory');
const { validationResult } = require('express-validator');
const app = require('../app');

const express = require('express');
// const app = express();

// Middleware to parse JSON body
// app.use(express.json());

// Upload a video
exports.uploadVideo = async (req, res) => {
  try {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, categoryId, userId, url, videoId } = req.body;
    const video = new Video({
      title,
      description,
      categoryId,
      userId,
      url,
      videoId
    });
    await video.save();
    res.status(201).json({ message: 'Video uploaded successfully', video });
  } catch (error) {
    res.status(500).json({ message: 'Failed to upload video', error });
  }
};

//get video

exports.getAllVideos = async (req, res, next) => {
    try{

        const video  = await Video.find({});
    
        res.status(200).json({
            message: 'Success',
            results: categories.length,
            data: video 

        })
    }catch(err){
        res.status(500).json({
            message: 'Something went wrong',            
        })
    }
    // getAllCategories()

}

// get a video by id

exports.getVideo = async (req, res, next) => {
    try{
        const videoId = req.params.id

        const video = await Video.findOne({name: videoId})
        // await VideoCategory.findOne({_id: req.params.id})
        // const category = await VideoCategory.findById(categoryId);

        if(!category) throw ((() =>{
            console.log('no such file found')
        }));

        res.status(200).json({
            message: 'success',
            data: video 
        })

    }catch(err){
        res.status(500).json({
            message: 'Failed',
            error: 'Something went wrong',
            err
        })
    }
}

// Modify a video
exports.modifyVideo = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { videoId } = req.params;
    const { title, description, categoryId } = req.body;
    const video = await Video.findByIdAndUpdate(videoId, { title, description, category: categoryId });
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.json({ message: 'Video modified successfully', video });
  } catch (error) {
    res.status(500).json({ message: 'Failed to modify video', error });
  }
};

// Delete a video
exports.deleteVideo = async (req, res) => {
  try {
    const { videoId } = req.params;
    const video = await Video.findByIdAndDelete(videoId);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.json({ message: 'Video deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete video', error });
  }
};