import React from "react";
import { useSetRecoilState } from "recoil";

import { Todo, todosState } from "../../App";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props): JSX.Element => {
  const { id, isDone, text } = todo;
  const setState = useSetRecoilState(todosState);

  const onDelete = (): void => {
    setState((prev) => prev.filter((item) => item.id !== id));
  };

  const onSetDone = (): void => {
    setState((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      })
    );
  };

  return (
    <div className="flex justify-between items-center p-3 mb-3 border rounded-lg border-slate-200">
      <div className="flex items-center">
        <input type="checkbox" className="mr-5" onChange={onSetDone} />
        <p className={`${isDone ? "line-through" : ""}`}>{text}</p>
      </div>
      <button onClick={onDelete}>X</button>
    </div>
  );
};

export default TodoItem;
