// Import express
const express = require("express");

// Import Answers Controller
const { createAnswer, deleteAnswer, 
    getAnswerById, getAnswerByQuestion, 
    getAnswers, updateAnswer, returnAnswers } = 
    require("../controllers/answers-controller.js");
 
 // Init express router
const routerAnswers = express.Router();
 
// Route get all answers
routerAnswers.get('/answers', returnAnswers);
// Route get answer by id
routerAnswers.get('/answers/:answer_id', getAnswerById);
// Route get answer by theme
routerAnswers.get('/answers/question/:question_id_fk', getAnswerByQuestion);
// Route create a new answer
routerAnswers.post('/answers', createAnswer);
// Route update answer by id
routerAnswers.put('/answers/:answer_id', updateAnswer);
// Route delete answer by id
routerAnswers.delete('/answers/:answer_id', deleteAnswer);
 
// export router
module.exports = routerAnswers;