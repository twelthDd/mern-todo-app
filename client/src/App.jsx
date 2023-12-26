import "./App.css";
// import { useEffect, useState } from "react";
import readTodosRequest from "./api/readTodosRequest.js";
import { useQuery } from "react-query";
import ClipLoader from "react-spinners/ClipLoader";
import { TodoItem } from "./components/TodoItem.jsx";
import { CreateTodoForm } from "./components/CreateTodoForm.jsx";

function App() {
  const { isLoading, data: todos } = useQuery("todos", readTodosRequest);

  return (
    <div className="App">
      {isLoading ? (
        <ClipLoader size={150} />
      ) : (
        todos.map((todo) => <TodoItem todo={todo} key={todo._id} />)
      )}
      <CreateTodoForm />
    </div>
  );
}

export default App;
