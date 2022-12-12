//require library
const mongoose = require("mongoose");
//connectto databasespecifies
mongoose.connect(
  "mongodb+srv://Todo:JrLghBTrXbi1xyXz@todo-app.jmuerax.mongodb.net/?retryWrites=true&w=majority"
);

//acquire connection
const db = mongoose.connection;

//check the status of db connection

//error, display the error
db.on("error", console.error.bind(console, "Error in connecting to database"));

//up and running print the message
db.once("open", function () {
  console.log("Succesfully connected to database");
});
