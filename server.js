const express = require("express");
require('dotenv').config();
const mongoose=require("mongoose");
const app = express();
const taskRoutes=require('./routes/taskroutes');



const cors = require("cors");
app.use(cors());


//Middleware
app.use((req,res,next)=>{
console.log("path - "  +req.path + "  medhod - " + req.method);
next();
})

app.use(express.json());
//app.get("/",(req,res)=>{
  //  res.send("HI,My First Project");
//});

//mongodb connect
mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
app.listen(process.env.PORT,() =>{
    console.log("DB connection is success and Listening port is " + process.env.PORT);
});
}).catch((error)=> console.log(error));

app.use('/api/tasks',taskRoutes);
