import express from 'express';

//initialize routes
const router = express.Router();

const students=[
    {
        firstName:'John',
        lastName:'Doe',
        age:25,
    },
    {
        firstName:'Jhonny',
        lastName:'Doe',
        age:21,
    }
]


// get request from main
//each callback function have request and response parameters
//all routes here are starting with /students i.e; /students == /
router.get('/', (req, res)=>{
    res.send(students);
});

router.post('/', (req, res)=>{
    

    //req.body is what we are posting
    const student = req.body;
    students.push(student);
    res.send(`student with the name ${student.firstName} added!`);
});


export default router; 