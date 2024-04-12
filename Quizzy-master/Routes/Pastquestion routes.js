const express = require('express');

const questionController = require('./../controllers/PastQuestionpaper.controller');

const router = express.Router();



router.post('quizzy/v1/question', questionController.uploadQuestion);
router.get('quizzy/v1/question', questionController.viewQuestions);
router.put('quizzy/v1/question:id', questionController.updateQuestion);
router.delete('quizzy/v1/question:id', questionController.deleteQuestion);
router.put('quizzy/v1/question/refuse/:id', questionController.refuseDownload);
router.get('quizzy/v1/question/sort/alphabetical', questionController.sortByAlphabeticalOrder);
router.put('quizzy/v1/question/favorites/:id', questionController.addFavorites);
router.get('quizzy/v1/question/sort/year', questionController.sortByYear);

module.exports = router;