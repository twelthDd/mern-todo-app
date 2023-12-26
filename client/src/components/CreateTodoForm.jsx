import React, { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import createTodoRequest from "../api/createTodoRequest";

export const CreateTodoForm = () => {
  const [text, setText] = React.useState("");
  const queryClient = useQueryClient();

  const { Mutation: createTodo } = useMutation(
    (newTodo) => createTodoRequest(newTodo),
    {
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createTodo({
          text,
        });
      }}
    >
      <input onChange={(e) => setText(e.target.value)} type="text" />
      <button>Create</button>
    </form>
  );
};
