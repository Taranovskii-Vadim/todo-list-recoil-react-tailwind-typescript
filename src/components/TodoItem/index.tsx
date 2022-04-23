import React from "react";

import { Todo } from "../../App";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props): JSX.Element => {
  const { id, text, isDone } = todo;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        border: "1px solid gray",
        padding: "10px",
        borderRadius: 5,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <input type="checkbox" />
        <p style={{ margin: 0 }}>{text}</p>
      </div>
      <button>delete</button>
    </div>
  );
};

export default TodoItem;
