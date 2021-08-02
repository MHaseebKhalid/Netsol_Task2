import express from 'express';

import {addStudent,getStudents,getStudent,deleteStudent,updateStudent} from '../controllers/students.js';

//initialize routes
const router = express.Router();





// get request from main
//all routes here are starting with /students i.e; /students == /
router.get('/', getStudents);




//Post request
router.post('/', addStudent);

//Get specific student with ID
//  '/:id'  is because we'r expecting something after /
router.get('/:id',getStudent);



//Delete request
router.delete('/:id',deleteStudent);




//Update request
//we'r using PATCH method because we want to change data partially, we'r not using PUT because PUT override previous data
router.patch('/:id',updateStudent);



export default router; 