import React from "react";

import { Todo } from "../../App";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props): JSX.Element => {
  const { id, text, isDone } = todo;

  return (
    <div className="flex justify-between items-center p-3 border rounded-lg border-slate-200">
      <div className="flex items-center">
        <input type="checkbox" className="mr-5" />
        <p>{text}</p>
      </div>
      <button>delete</button>
    </div>
  );
};

export default TodoItem;
