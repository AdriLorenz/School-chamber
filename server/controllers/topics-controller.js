// Import Topic Model
const Topic = require("../models/topic.js");
 
// Get all topic
exports.getTopics = async (req, res) => {
    try {
        const topic = await Topic.findAll();
        res.send(topic)
    } catch (err) {
        console.log(err);
    }
}

exports.returnTopics = async (req, res) => {
    try {
        const topic = await Topic.findAll();
        return topic;
    } catch (err) {
        console.log(err);
    }
}
 
// Get topic by id
exports.getTopicById = async (req, res) => {
    try {
        const topic = await Topic.findAll({
            where: {
                topic_id: req.params.topic_id
            }
        });
        res.send(topic[0]);
    } catch (err) {
        console.log(err);
    }
}

exports.getTopicByThemeId = async (req, res) => {
    try {
        const topic = await Topic.findAll({
            where: {
                topic_id: req.params.topic_id
            }
        });
        res.send(topic[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// Create a new topic
exports.createTopic = async (req, res) => {
    try {
        await Topic.create(req.body);
        res.json({
            "message": "Topic Created"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update topic by id
exports.updateTopic = async (req, res) => {
    try {
        await Topic.update(req.body, {
            where: {
                topic_id: req.params.topic_id
            }
        });
        res.json({
            "message": "Topic Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete topic by id
exports.deleteTopic = async (req, res) => {
    try {
        await Topic.destroy({
            where: {
                topic_id: req.params.topic_id
            }
        });
        res.json({
            "message": "Topic Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}