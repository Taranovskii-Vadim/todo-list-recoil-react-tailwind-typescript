import React from "react";
import { useRecoilValue } from "recoil";

import { filterSelector } from "./store/Filter";

import AddForm from "./components/AddForm";
import FilterForm from "./components/FilterForm";
import TodoItem from "./components/TodoItem";
import Status from "./components/Status";

// TODO think about recoil types

const App = () => {
  const todos = useRecoilValue(filterSelector);

  return (
    <div className="w-1/2 m-auto mt-10">
      <AddForm />
      <FilterForm />
      <Status />
      {/* TODO according to tutorial, better way to create List component in my opinion*/}
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </div>
  );
};

export default App;
