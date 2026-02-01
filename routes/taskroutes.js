const express=require('express');
const router = express.Router();

const{ createTask,getTasks,getsingleTasks,updateTask,deleteTask}=require("../taskcontroller/taskcontroller");

router.post('/',createTask);
router.get('/',getTasks);
router.get('/:id',getsingleTasks);
router.patch('/:id',updateTask);
router.delete('/:id',deleteTask);

module.exports=router;
