import express from "express";
import bodyParser from "body-parser";
//body-parser allows us incoming post request bodies;

const app = express();
const PORT = 5000;

//below line is for sending and receiving data through restApi in json
app.use(bodyParser.json())

//below line is for listening incoming request
app.listen(PORT, ()=>console.log(`Server is runnig on Port: ${PORT}`))