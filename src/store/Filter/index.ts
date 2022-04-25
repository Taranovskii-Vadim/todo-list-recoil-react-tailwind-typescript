import { atom, selector } from "recoil";

import { todosState } from "../Todos";
import { Todo } from "../Todos/types";

import { FilterKey } from "./types";

export const filterState = atom<FilterKey>({
  key: "filterState",
  default: "all",
});

export const filterSelector = selector<Todo[]>({
  key: "filterSelector",
  get: async ({ get }) => {
    const filter = get(filterState);
    const list = get(todosState);

    // const response = await fetch("http://jsonplaceholder.typicode.com/todos");
    // const result = (await response.json()) as Todo[];

    switch (filter) {
      case "completed":
        return list.filter((item) => item.completed);
      case "uncompleted":
        return list.filter((item) => !item.completed);
      default:
        return list;
    }
  },
});
