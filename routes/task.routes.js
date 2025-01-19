const express = require('express');
const {createTask, updateTask, getAllTask,getSingleTask,deleteTask} = require('../controllers/task.controllers.js')

const router = express.Router();

// create task
router.post("/createTask", createTask);

//update task
router.put("/updateTask/:id", updateTask);

// get single task
router.get("/getSingleTask/:id", getSingleTask);

// get all task
router.get("/getAllTask", getAllTask);

// delete task
router.delete("/deleteTask/:id", deleteTask);

module.exports = router;