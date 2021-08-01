import express from "express";
//body-parser allows us incoming post request bodies;
import bodyParser from "body-parser";


import studentsRoutes from './routes/students.js';


const app = express();
const PORT = 5000;

//below line is for sending and receiving data through restApi in json
app.use(bodyParser.json());

//we use the name we will use for all the routes
//2nd param is routes file
app.use('/students',studentsRoutes);


//As we know express depend upon routes so
//first parameter is where we'r expected are path to
//2nd is callback function it has 2 parameters requset and response
app.get('/', (req, res)=>{
    console.log('Route');
    
    res.send("Hello from HomePage");
});

//below line is for listening incoming request
app.listen(PORT, ()=>console.log(`Server is runnig on Port: http://localhost:${PORT}`));