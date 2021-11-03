// Import express
const express = require("express");

// Import Questions Controller
const { createQuestion, deleteQuestion, 
    getQuestionById, getQuestionByTheme, 
    getQuestions, updateQuestion } = require
    ("../controllers/questions-controller.js");

 // Init express router
const routerQuestions = express.Router();
 
// Route get all questions
routerQuestions.get('/questions', getQuestions);
// Route get question by id
routerQuestions.get('/questions/:question_id', getQuestionById);
// Route get question by theme
routerQuestions.get('/questions/theme/:theme_id_fk', getQuestionByTheme);
// Route create a new question
routerQuestions.post('/questions', createQuestion);
// Route update question by id
routerQuestions.put('/questions/:question_id', updateQuestion);
// Route delete question by id
routerQuestions.delete('/questions/:question_id', deleteQuestion);
 
// export router
module.exports = routerQuestions;