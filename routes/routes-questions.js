// Import express
const express = require("express");
const { getAnswers } = require("../controllers/answers-controller.js");
const { getThemes } = require("../controllers/themes-controller.js");
var app = express();
const {authUser, authRole, checkNotAuthenticated, 
    checkAuthenticated} = require('../controllers/auth')

// Import Questions Controller
const { createQuestion, deleteQuestion, 
    getQuestionById, getQuestionByTheme, 
    getQuestions, updateQuestion } = require
    ("../controllers/questions-controller.js");

 // Init express router
const routerQuestions = express.Router();
 
// Route get all questions
routerQuestions.get('/questions', checkAuthenticated, 
authRole(2), async (req, res, next) => {
    try {
        let answers = await getAnswers();
        let questions = await getQuestions();
        let themes = await getThemes();
        res.render('../views/questions.ejs', { answers, questions, themes })
    } catch (error) {
        next(error);
    }
    
});
routerQuestions.get('/questions/create', checkAuthenticated, 
authRole(2), async (req, res) => {
    res.render('../views/create-question.ejs')
    
});

routerQuestions.get('/questions/edit', checkAuthenticated,
async (req, res) => {
    res.render('../views/edit-question.ejs')
});

routerQuestions.delete('/logout', (req, res) => {
    req.logOut();
    res.redirect('/login')
})
// Route get question by id
routerQuestions.get('/questions/:question_id', getQuestionById);
// Route get question by theme
routerQuestions.get('/questions/theme/:theme_id_fk', getQuestionByTheme);
// Post page

// Route create a new question
routerQuestions.post('/questions', createQuestion);
// Route update question by id
routerQuestions.put('/questions/:question_id', updateQuestion);
// Route delete question by id
routerQuestions.delete('/questions/:question_id', deleteQuestion);
 
// export router
module.exports = routerQuestions;