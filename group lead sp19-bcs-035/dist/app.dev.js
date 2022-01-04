"use strict";

var _express = _interopRequireDefault(require("express"));

var _teachers = _interopRequireDefault(require("./teachers.js"));

var _students = _interopRequireDefault(require("./students.js"));

var _class = _interopRequireDefault(require("./Models/class.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get('/api/teachers', function (req, res) {
  res.json(_teachers["default"]);
});
app.get('/api/teachers/:id', function (req, res) {
  var teacher = _teachers["default"].find(function (t) {
    return t._id === req.params.id;
  });

  res.json(teacher);
});
app.get('/api/students', function (req, res) {
  res.json(_students["default"]);
});
app.get('/api/students/:id', function (req, res) {
  var student = _students["default"].find(function (s) {
    return s._id === req.params.id;
  });

  res.json(student);
});
app.listen(5000, function () {
  return console.log("working on port 5000");
});