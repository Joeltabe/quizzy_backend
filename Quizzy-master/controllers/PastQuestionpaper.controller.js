const PastQuestionPaper = require('./../models/PastQuestionPaper');
const Course = require('../models/Course');

// Questions upload
exports.uploadQuestion = async (req, res, next) => {
  try {
    const { year, courseId, isDownloadable } = req.body;

    // Check if the course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Create a new question paper
    const newQuestionPaper = new PastQuestionPaper({
      year,
      course: course._id,
      isDownloadable,
    });

    // Save the question paper
    await newQuestionPaper.save();

    res.status(201).json({ message: 'Question paper uploaded successfully' });
  } catch (error) {
    next(error);
  }
};

// View questions
exports.viewQuestions = async (req, res, next) => {
  try {
    const questions = await PastQuestionPaper.find().populate('course');
    res.status(200).json(questions);
  } catch (error) {
    next(error);
  }
};

// Update question
exports.updateQuestion = async (req, res, next) => {
  try {
    const questionId = req.params.id;
    const { year, courseId, isDownloadable } = req.body;

    // Check if the question paper exists
    const questionPaper = await PastQuestionPaper.findById(questionId);
    if (!questionPaper) {
      return res.status(404).json({ message: 'Question paper not found' });
    }

    // Check if the course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Update the question paper attributes
    questionPaper.year = year || questionPaper.year;
    questionPaper.course = course._id;
    questionPaper.isDownloadable = isDownloadable || questionPaper.isDownloadable;

    // Save the updated question paper
    await questionPaper.save();

    res.status(200).json({ message: 'Question paper updated successfully' });
  } catch (error) {
    next(error);
  }
};

// Delete question
exports.deleteQuestion = async (req, res, next) => {
  try {
    const questionId = req.params.id;

    // Find and delete the question paper
    await PastQuestionPaper.findByIdAndDelete(questionId);

    res.status(200).json({ message: 'Question paper deleted successfully' });
  } catch (error) {
    res.status(500).json({
        message: error,
    })
    next(error);
  }
};

// Refuse download of question paper
exports.refuseDownload = async (req, res, next) => {
  try {
    const questionId = req.params.idSure; 

// questionController.js (continued)
  

    // Find the question paper
    const questionPaper = await PastQuestionPaper.findById(questionId);

    if (!questionPaper) {
      return res.status(404).json({ message: 'Question paper not found' });
    }

    // Update the isDownloadable attribute to false
    questionPaper.isDownloadable = false;

    // Save the updated question paper
    await questionPaper.save();

    res.status(200).json({ message: 'Download of question paper refused' });
  } catch (error) {
    next(error);
  }
};

// Sort question paper by alphabetical order
exports.sortByAlphabeticalOrder = async (req, res, next) => {
  try {
    const sortedQuestionPapers = await PastQuestionPaper.find()
      .populate('course')
      .sort({ 'course.name': 1 });

    res.status(200).json(sortedQuestionPapers);
  } catch (error) {
    next(error);
  }
};

// Add favorites to a question paper
exports.addFavorites = async (req, res, next) => {
  try {
    const questionId = req.params.id;
    const { userId } = req.body;

    // Find the question paper
    const questionPaper = await PastQuestionPaper.findById(questionId);

    if (!questionPaper) {
      return res.status(404).json({ message: 'Question paper not found' });
    }

    // Check if the user has already added the question paper to favorites
    if (questionPaper.favorites.includes(userId)) {
      return res.status(400).json({ message: 'Question paper already added to favorites' });
    }

    // Add the user ID to the favorites array
    questionPaper.favorites.push(userId);

    // Save the updated question paper
    await questionPaper.save();

    res.status(200).json({ message: 'Question paper added to favorites successfully' });
  } catch (error) {
    next(error);
  }
};

// Sort question paper by year
exports.sortByYear = async (req, res, next) => {
  try {
    const sortedQuestionPapers = await PastQuestionPaper.find().sort({ year: 1 });

    res.status(200).json(sortedQuestionPapers);
  } catch (error) {
    next(error);
  }
};
  