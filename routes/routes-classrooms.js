// Import express
const express = require("express");

// Import Classrooms Controller
const { createClassroom, deleteClassroom, 
    getClassroomById, getClassrooms, 
    updateClassroom } = require
    ("../controllers/classrooms-controller.js");
 
 // Init express router
const routerClassrooms = express.Router();
 
// Route get all classrooms
routerClassrooms.get('/classrooms', getClassrooms);
// Route get classroom by id
routerClassrooms.get('/classrooms/:classroom_id', getClassroomById);
// Route create a new classroom
routerClassrooms.post('/classrooms', createClassroom);
// Route update classroom by id
routerClassrooms.put('/classrooms/:classroom_id', updateClassroom);
// Route delete classroom by id
routerClassrooms.delete('/classrooms/:classroom_id', deleteClassroom);
 
// export router
module.exports = routerClassrooms;