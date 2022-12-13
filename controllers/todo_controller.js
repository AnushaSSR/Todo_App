//to require connection to todo model'
const Todos = require("../models/todos");

//Controller to render the home page
module.exports.home = async function (req, res) {
  //to fetch the todo tasks from db in sorted way, due date earlier
  let todos = await Todos.find().sort({ duedate: 1 });
  //to iterate over the list of todo tasks
  for (let todo of todos) {
    console.log("todos are", todo);
  }
  return res.render("todos", {
    title: "TODO LIST",
    todos: todos,
  });
};

//Controller to create a new todo task
module.exports.createTask = function (req, res) {
  Todos.create(req.body, function (err, todo) {
    if (err) {
      //if there is error
      console.log("error in creating new employee", err);
      return res.redirect("back");
    }
  });
  return res.redirect("back");
};

//Controller to delete a todo task from list
module.exports.deleteTask = async function (req, res) {
  let id = req.params.id;
  console.log("id is", id);
  Todos.findByIdAndDelete(id, function (err) {
    if (err) {
      //if there is error
      console.log("error in deleteing the selected to do", err);
      return;
    }
  });
  return res.redirect("back");
};

//Controller to delete seleceted todo task/s from the list
module.exports.deleteTasks = async function (req, res) {
  //list fetched fprm checkbox
  let list = req.body.select;
  if (list) {
    for (let id of list) {
      Todos.findByIdAndDelete(id, function (err) {
        if (err) {
          //if there is error
          console.log("error in deleteing the selected to do", err);
          return;
        }
      });
    }
  }
  return res.redirect("back");
};
