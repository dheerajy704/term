const express = require('express')
const { createTask, getTasks, getTask, deleteTask, updateTask } = require('../controllers/taskController')
const Task = require('../models/taskModel')
const router = express.Router()

// Routes for getting all the Tasks and adding a task
router.route("/").get(getTasks).post(createTask)

//Routes to get, delete and update a task
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)

module.exports = router