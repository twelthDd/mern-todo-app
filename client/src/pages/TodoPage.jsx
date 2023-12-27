import React from "react";
import { useQuery } from "react-query";
import ClipLoader from "react-spinners/ClipLoader";

import "../App.css";
import readTodosRequest from "../api/readTodosRequest.js";
import { TodoItem } from "../components/TodoItem.jsx";
import { CreateTodoForm } from "../components/CreateTodoForm.jsx";

export const TodoPage = () => {
  const { isLoading, data: todos } = useQuery("todos", readTodosRequest);

  return (
    <div>
      <h1>MERN TODO APP</h1>
      {isLoading ? (
        <ClipLoader size={150} />
      ) : (
        todos.map((todo) => <TodoItem todo={todo} key={todo._id} />)
      )}
      <CreateTodoForm />
    </div>
  );
};
