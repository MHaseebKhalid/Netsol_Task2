import { v4 as uuid } from 'uuid';

let students=[
    {firstName:"Haseeb",lastName:"Khalid",age:25,id:"05de365a-d1ab-45d9-b98a-0a9884eea3dc"},
    {firstName:"Junaid",lastName:"Khalid",age:25,id:"59a5f2a0-cd05-4c2c-be9a-78fbc9d551dd"},
    {firstName:"Ali",lastName:"Khan",age:25,id:"f88e705d-142a-455f-8ba2-750ad0a19868"}
];

export const getStudents =(req, res)=>{
    //each callback function have request and response parameters
    res.send(students);
    }


export const addStudent=(req, res)=>{
    
    //req.body is what we are posting
    const student = req.body;

    //for unique student id we'r using uuid
    students.push({...student, id: uuid()});
    
    res.send(`student with the name ${student.firstName} added!`);
}

export const getStudent=(req, res)=>{
    //first we will pass the id of specific Student
    const { id } = req.params;

    //now we'll find value
    const StudentWithID = students.find((student)=> student.id == id);

    res.send(StudentWithID);
}


export const deleteStudent=(req, res)=>{
    //first we will pass the id of specific Student
    const { id } = req.params;

    //now we'll filter value
    students = students.filter((student)=> student.id !== id);

    res.send(`Student with the ${id} is deleted`);
}

export const updateStudent=(req, res)=>{
    //first we will pass the id of specific Student
    const { id } = req.params;

    const { firstName,lastName,age } = req.body;

    const student = students.find((student)=> student.id == id);

    if(firstName){
        student.firstName=firstName;
    }

    if(lastName){
        student.lastName=lastName;
    }

    if(age){
        student.age=age;
    }

    res.send(`Student with the ${id} is Updated`);
    
}