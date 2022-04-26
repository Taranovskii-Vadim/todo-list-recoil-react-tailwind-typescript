import React from "react";
import { useRecoilValue } from "recoil";

import { filterSelector } from "../../store/Filter";
import TodoItem from "./components/TodoItem";

const TodoList = () => {
  const todos = useRecoilValue(filterSelector);

  return (
    <>
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </>
  );
};

export default TodoList;
