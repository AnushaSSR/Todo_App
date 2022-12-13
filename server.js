//require express
const express = require("express");
const app = express();

//port to establish connection on
const port = 8000;
//to require the db connection from config
const db = require("./config/mongoose");

//to require express ejs layouts to display the views
const expressLayouts = require("express-ejs-layouts");

//to parse the data and cookies
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(require("cookie-parser")());

//to use the files in the assets folder
app.use(express.static("./assets"));

//set the app's view engine to ejs
app.set("view engine", "ejs");

//setting the path of the views
app.set("views", "./views");

//use the routes path for routing
app.use("/", require("./routes"));

//make app listen to port
app.listen(port, function (err) {
  //print error if any
  if (err) {
    console.log("Error in connecting to port");
  }
  //upon successful connectiom to port
  console.log(`Succesfully connected to port :: ${port}`);
});
