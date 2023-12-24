const express = require("express");
const isLoggedIn = require("./middleware/isLoggedIn.js");

const updateTodoRoute = require("./routes/updateTodoRoute.js");
const createTodoRoute = require("./routes/createTodoRoute.js");
const readTodosRoute = require("./routes/readTodosRoute.js");
const deleteTodosRoute = require("./routes/deleteTodoRoute.js");

const router = express.Router();

router.post("/login", require("./routes/loginRoute.js"));

router.post("/todos", isLoggedIn, createTodoRoute);
router.get("/todos", isLoggedIn, readTodosRoute);
router.put("/todos/:id", isLoggedIn, updateTodoRoute);
router.delete("/todos/:id", isLoggedIn, deleteTodosRoute);
// TODO: delete

module.exports = router;
