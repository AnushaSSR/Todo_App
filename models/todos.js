//require mongoose from store
const mongoose = require("mongoose");

//define schema for the todos
const todoSchema = new mongoose.Schema({
  //description of todo task
  description: {
    type: String,
    required: true,
  },
  //category of todo task
  category: {
    type: String,
    required: true,
  },
  //duedate of todo task
  duedate: {
    type: Date,
    required: true,
  },
});

const Todos = mongoose.model("Todos", todoSchema);
module.exports = Todos;
