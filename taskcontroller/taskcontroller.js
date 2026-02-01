const taskmodel = require("../models/taskmodel");
const taskModel=require("../models/taskmodel");
const Mongoose = require('mongoose');

const createTask = async (req,res)=>{
    const { title,description} = req.body;

    try{
        const task= await taskModel.create({title,description});
        res.status(200).json(task);
    } catch(e){
        res.status(400).json({error:e.message});
    }
};

// to get all taks

const getTasks = async (req,res)=>{
    try {
        const tasks = await taskModel.find({});
        res.status(200).json(tasks);
    } catch (e){
        res.status(400).json({error:e.message});
    }
};

//GET ONE TASK
const getsingleTasks = async (req,res)=>{
    const {id}=req.params
        if(!Mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:"task not found"})
    }
    try {
        const singleTask = await taskModel.findById(id);
        res.status(200).json(singleTask);
    } catch (e){
        res.status(400).json({error:e.message});
    }
};

//UPDATE TASK

const updateTask = async (req,res)=>{
    const {id}=req.params
    if(!Mongoose.Types.ObjectId.isValid(id) ){
        return res.status(404).json({message:"task not found"})
    } try {
        const task= await taskmodel.findByIdAndUpdate({
            _id:id
        },
        {
            ...req.body,
        }
    );
    res.status(200).json(task);
    } catch (e){
        res.status(400).json({error:e.message});
    }
};
const deleteTask =async (req,res)=>{
    const {id}=req.params
    if(!Mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:"task not found"})
    } try{
        const task=await taskmodel.findByIdAndDelete(id);
        res.status(200).json(task)
    } catch (e){
        res.status(400).json({error:e.message});
    }
};

module.exports={createTask, getTasks,getsingleTasks,updateTask,deleteTask};