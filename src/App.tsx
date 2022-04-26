import React from "react";

import AddForm from "./components/AddForm";
import FilterForm from "./components/FilterForm";
import StatusBar from "./components/StatusBar";
import TodoList from "./components/TodoList";

const App = () => (
  <div className="w-1/2 m-auto mt-10">
    <AddForm />
    <FilterForm />
    <StatusBar />
    <TodoList />
  </div>
);

export default App;
