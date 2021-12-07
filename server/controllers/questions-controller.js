// Import Question Model
const Theme = require("../models/theme.js");
const Topic = require("../models/topic.js");
const Question = require("../models/question.js");
const User = require("../models/user.js");
const Answer = require("../models/answer.js");
 
// Get all question
exports.getQuestions = async (req, res) => {
    try {
        const question = await Question.findAll({
            include:[{model: Topic, required:true}]
        });
        res.send(question);
    } catch (err) {
        console.log(err);
        
    }
}

exports.returnQuestions = async (req, res) => {
    try {
        const question = await Question.findAll({
            include:[{model: Topic, required:true}]
        });
        console.log(question)
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
            include:[{model: Topic, required:true}]
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
            include:[{model: Theme, required:true}]
        });
        console.log("itérame esta "+question)
        return question;
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

exports.createQuestionAndAnswers = async (req, res) => {
    try {
        await Question.create(req.body);
        const getLastQuestionId = async () => {
            try {
                const question = await Question.findAll();
                return question[question.length-1].dataValues.question_id;
            } catch (err) {
                console.log(err);
            }
        }
        const id = await getLastQuestionId();
        console.log("The last question ID is: " + id)
        await Answer.create({
            answer_content: req.body.correctAnswer,
            answer_points: 10,
            question_id_fk: id
        });
        await Answer.create({
            answer_content: req.body.wrongAnswer1,
            answer_points: 0,
            question_id_fk: id
        });

        if (req.body.wrongAnswer2 !== "") {
            await Answer.create({
                answer_content: req.body.wrongAnswer2,
                answer_points: 0,
                question_id_fk: id
            });
        } 
        res.redirect('/questions');
    } catch (err) {
        console.log(err);
    }
}
 
// Update question and answers by id
exports.updateQuestionAndAnswers = async (req, res) => {
    try {
        await Question.update(req.body, {
            where: {
                question_id: req.params.question_id
            }
        });

        //
        const getAnswerId = async () => {
            try {
                const answer = await Answer.findAll({
                    where: {
                        answer_points: 0,
                        question_id_fk: req.params.question_id
                }});
                return answer[1].dataValues.answer_id;
            } catch (err) {
                console.log(err);
            }
        }
        const answerId = await getAnswerId();
        console.log("The last question ID is: " + answerId)

        await Answer.update({
            answer_content: req.body.correctAnswer,
            answer_points: 10,
        }, {
            where: {
                question_id_fk: req.params.question_id,
                answer_points: 10
            }
        });
        await Answer.update({
            answer_content: req.body.wrongAnswer1
        }, {
            where: {
                answer_id: answerId - 1,
                question_id_fk: req.params.question_id,
                answer_points: 0
            }
        });
        await Answer.update({
            answer_content: req.body.wrongAnswer2
        }, {
            where: {
                answer_id: answerId,
                question_id_fk: req.params.question_id,
                answer_points: 0
            }
        });
        res.redirect('/questions');
    } catch (err) {
        console.log(err);
    }
}

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
        res.redirect('/questions');
    } catch (err) {
        console.log(err);
    }
}