// Import Question Model
const Theme = require("../models/theme.js");
const Question = require("../models/question.js");
const User = require("../models/user.js");
 
// Get all question
exports.getQuestions = async (req, res) => {
    try {
        const question = await Question.findAll({
            include:[{model: User, required:true},
                {model: Theme, required:true}]
        });
        return question;
    } catch (err) {
        console.log(err);
        
    }
}
 
// Get question by id
exports.getQuestionById = async (req, res) => {
    try {
        const question = await Question.findAll({
            where: {
                question_id: req.params.question_id
            }, 
            include:[{model: User, required:true},
                {model: Theme, required:true}]
        });
        res.send(question[0]);
    } catch (err) {
        console.log(err);
    }
}

exports.getQuestionByTheme = async(req, res) => {
    try {
        const question = await Question.findAll({
            where: {
                theme_id_fk: req.params.theme_id_fk
            },
            include:[{model: User, required:true},
                {model: Theme, required:true}]
        });
        res.send(question);
    } catch (err) {
        console.log(err);
    }
}
 
// Create a new question

exports.createQuestion = async (req, res) => {
    try {
        await Question.create(req.body);
        res.json({
            "message": "Question Created"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update question by id
exports.updateQuestion = async (req, res) => {
    try {
        await Question.update(req.body, {
            where: {
                question_id: req.params.question_id
            }
        });
        res.json({
            "message": "Question Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete question by id
exports.deleteQuestion = async (req, res) => {
    try {
        await Question.destroy({
            where: {
                question_id: req.params.question_id
            }
        });
        res.json({
            "message": "Question Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}