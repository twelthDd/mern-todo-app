const TodoModel = require("../models/TodoModel");

module.exports = async (req, res) => {
  const { text } = req.body;
  console.log(text);
  const todo = new TodoModel({
    text,
    completed: false,
  });
  const newTodo = await todo.save();
  res.json(newTodo);
};
