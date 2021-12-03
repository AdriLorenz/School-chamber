// Import express
const express = require("express");

// Import Topics Controller
const { createTopic, deleteTopic, 
    getTopicById, getTopics, 
    updateTopic } = require
    ("../controllers/topics-controller.js");
 
 // Init express router
const routerTopics = express.Router();
 
// Route get all topics
routerTopics.get('/topics', getTopics);
// Route get topic by id
routerTopics.get('/topics/:topic_id', getTopicById);
// Route create a new topic
routerTopics.post('/topics', createTopic);
// Route update topic by id
routerTopics.put('/topics/:topic_id', updateTopic);
// Route delete topic by id
routerTopics.delete('/topics/:topic_id', deleteTopic);
 
// export router
module.exports = routerTopics;