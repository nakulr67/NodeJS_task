const Task = require('../model/task.model.js');
// create task
const createTask =async (req, res) =>{
    
        const { title, description, status } = req.body;
        try {
          const task = new Task({ title, description, status });
          await task.save();
          res.status(201).json(task);
        } catch (err) {
          res.status(400).json({ error: err.message });
        }     
}

// get all tasks
const getAllTask =async (req, res) =>{
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

// get single task
const getSingleTask = async (req, res) =>{
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
          return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(task);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

// update single task
const updateTask = async(req, res) =>{
    const { title, description, status } = req.body;
    try {
      const task = await Task.findByIdAndUpdate(
        req.params.id,
        { title, description, status },
        { new: true, runValidators: true }
      );
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.status(200).json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
}

// delete task
const deleteTask =async (req, res) =>{
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
          return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

module.exports = {createTask, getAllTask, getSingleTask, updateTask, deleteTask};