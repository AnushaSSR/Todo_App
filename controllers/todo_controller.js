const Todos = require("../models/todos");

module.exports.home = function (req, res) {
  return res.end("home_page");
};
