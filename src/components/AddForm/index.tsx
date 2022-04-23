import React, { useRef } from "react";
import { useSetRecoilState } from "recoil";

import { todosState } from "../../store/Todos";

const AddForm = (): JSX.Element => {
  const setState = useSetRecoilState(todosState);
  const inputRef = useRef<HTMLInputElement>(null);

  const addItem = (): void => {
    const text = inputRef.current ? inputRef.current.value : "";

    setState((prev) => [...prev, { id: prev.length + 1, text, isDone: false }]);
  };

  return (
    <div className="flex justify-between mb-5">
      <input
        className="flex-auto border rounded-lg border-slate-400 p-15"
        ref={inputRef}
        type="text"
      />
      <button className="ml-20" onClick={addItem}>
        Добавить
      </button>
    </div>
  );
};

export default AddForm;
