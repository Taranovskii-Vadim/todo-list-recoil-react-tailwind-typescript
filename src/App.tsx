import React from "react";
import { atom, useRecoilValue } from "recoil";

import AddForm from "./components/AddForm";
import TodoItem from "./components/TodoItem";

// TODO think about recoil types
// TODO think about recoil folder structure
// TODO fix exports

export interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

const todosState = atom<Todo[]>({
  key: "todosState",
  default: [{ id: 1, text: "test", isDone: false }],
});

const App = () => {
  const todos = useRecoilValue(todosState);
  return (
    <div className="w-1/2 m-auto">
      <AddForm />
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </div>
  );
};

export default App;
