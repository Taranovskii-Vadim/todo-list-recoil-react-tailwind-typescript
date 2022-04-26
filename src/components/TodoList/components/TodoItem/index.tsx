import React from "react";
import { useSetRecoilState } from "recoil";

import { todosState } from "../../../../store/Todos";
import { Todo } from "../../../../store/Todos/types";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props): JSX.Element => {
  const { id, completed, title } = todo;
  const setState = useSetRecoilState(todosState);

  const onDelete = (): void => {
    setState((prev) => prev.filter((item) => item.id !== id));
  };

  const onSetDone = (): void => {
    setState((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div className="flex justify-between items-center p-3 mb-3 border rounded-lg border-slate-200">
      <div className="flex items-center">
        <input type="checkbox" className="mr-5" onChange={onSetDone} />
        <p className={`${completed ? "line-through" : ""}`}>{title}</p>
      </div>
      <button onClick={onDelete}>X</button>
    </div>
  );
};

export default TodoItem;
