// Import express
const express = require("express");
const { getAnswerById, getAnswers, getAnswerByQuestion } = require("../controllers/answers-controller.js");

// Import Questions Controller
const { createQuestion, deleteQuestion, 
    getQuestionById, getQuestionByTheme, 
    getQuestions, updateQuestion } = require
    ("../controllers/questions-controller.js");

 // Init express router
const routerQuestions = express.Router();
 
// Route get all questions
routerQuestions.get('/questions', checkAuthenticated, 
async (req, res, next) => {
    try {
        let answers = await getAnswers();
        let questions = await getQuestions();
        res.render('../views/questions.ejs', { answers, questions })
    } catch (error) {
        next(error);
    }
    
});
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

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login')
}
 
// export router
module.exports = routerQuestions;