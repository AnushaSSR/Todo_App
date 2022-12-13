//require express
const express = require("express");
//Set router from express
const router = express.Router();

//Require the todo controller
const todoController = require("../controllers/todo_controller");

//routers for home, create-task, delete-task by id, delete-tasks selected
router.get("/", todoController.home);
router.post("/create-task", todoController.createTask);
router.get("/delete-task/:id", todoController.deleteTask);
router.post("/delete-tasks", todoController.deleteTasks);

module.exports = router;
