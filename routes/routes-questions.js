// Import express
const express = require("express");
const { getAnswers } = require("../controllers/answers-controller.js");
const { returnThemes } = require("../controllers/themes-controller.js");
var app = express();
const {authUser, authRole, checkNotAuthenticated, 
    checkAuthenticated} = require('../controllers/auth')

// Import Questions Controller
const { createQuestion, deleteQuestion, 
    getQuestionById, getQuestionByTheme, 
    getQuestions, updateQuestion, createQuestionAndAnswers } = require
    ("../controllers/questions-controller.js");
const { returnTopics } = require("../controllers/topics-controller.js");

 // Init express router
const routerQuestions = express.Router();
 
// Route get all questions
routerQuestions.get('/questions', checkAuthenticated, 
authRole(2), async (req, res, next) => {
    try {
        let answers = await getAnswers();
        let questions = await getQuestions();
        let themes = await returnThemes();
        res.render('../views/questions.ejs', { answers, questions, themes })
    } catch (error) {
        next(error);
    }
    
});

routerQuestions.get('/questions/theme/:theme_id_fk', checkAuthenticated, 
authRole(2), async (req, res, next) => {
    try {
        console.log("vamos a ver que pasa " +  req.params.theme_id_fk)
        const id = req.params.theme_id_fk;
        let answers = await getAnswers();
        let questions = await getQuestions();
        let themes = await getThemes();
        let questionsByThemes = await getQuestionByTheme(req, res);
        res.render('../views/questionsByThemes.ejs', { id, answers, questions, themes, questionsByThemes  })
    } catch (error) {
        next(error);
    }
    
});

routerQuestions.get('/questions/create', checkAuthenticated, 
authRole(2), async (req, res) => {
    let themes = await returnThemes();
    let topics = await returnTopics();
    res.render('../views/create-question.ejs', {themes, topics})
    
});

routerQuestions.get('/questions/edit/:question_id', checkAuthenticated,
authRole(2), async (req, res) => {
    const question = req.params.question_id
    let themes = await getThemes();
    res.render('../views/edit-question.ejs', {question_id: question, themes})
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
routerQuestions.post('/questions', createQuestionAndAnswers);
// Route update question by id
routerQuestions.put('/questions/edit/:question_id', updateQuestion);
// Route delete question by id
routerQuestions.delete('/questions/:question_id', deleteQuestion);
 
// export router
module.exports = routerQuestions;