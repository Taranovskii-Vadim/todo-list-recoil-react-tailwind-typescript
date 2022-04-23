import { atom, selector } from "recoil";

import { todosState } from "../Todos";

export const filterState = atom({ key: "filterState", default: "all" });

export const filterSelector = selector({
  key: "filterSelector",
  get: ({ get }) => {
    const filter = get(filterState);
    const list = get(todosState);

    switch (filter) {
      case "completed":
        return list.filter((item) => item.isDone);
      case "uncompleted":
        return list.filter((item) => !item.isDone);
      default:
        return list;
    }
  },
});
