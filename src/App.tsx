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

export const todosState = atom<Todo[]>({
  key: "todosState",
  default: [{ id: 1, text: "test", isDone: false }],
});

const App = () => {
  const todos = useRecoilValue(todosState);

  return (
    <div className="w-1/2 m-auto">
      <AddForm />
      {/* TODO according to tutorial, better way to create List component in my opinion*/}
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </div>
  );
};

export default App;
