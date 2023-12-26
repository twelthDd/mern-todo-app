// import React from "react";
import { useQueryClient, useMutation } from "react-query";
import updateTodoRequest from "../api/updateTodoRequest";
import DeleteTodoRequest from "../api/DeleteTodoRequest";
export const TodoItem = ({ todo }) => {
  const queryClient = useQueryClient();

  const { mutate: updateTodo } = useMutation(
    (updatedTodo) => updateTodoRequest(updatedTodo),
    {
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  const { mutate: deleteTodo } = useMutation(
    (updatedTodo) => DeleteTodoRequest(updatedTodo),
    {
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  return (
    <div>
      <input
        checked={todo.completed}
        type="checkbox"
        onChange={() =>
          updateTodo({
            ...todo,
            completed: !todo.completed,
          })
        }
      />
      <input
        type="text"
        value={todo.text}
        onChange={(e) =>
          updateTodo({
            ...todo,
            text: e.target.value,
          })
        }
      />
      <button onClick={() => deleteTodo(todo)}>Delete</button>
    </div>
  );
};
