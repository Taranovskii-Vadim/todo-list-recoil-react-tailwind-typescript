import { atom, selector } from "recoil";
import { Status, Todo } from "./types";

export const todosState = atom<Todo[]>({
  key: "todosState",
  default: selector({
    key: "todosState/Default",
    get: async () => {
      const response = await fetch("http://jsonplaceholder.typicode.com/todos");
      const data = await response.json();

      return data;
    },
  }),
});

export const statusSelector = selector<Status>({
  key: "statusSelector",
  get: ({ get }) => {
    const list = get(todosState);
    const totalNum = list.length;
    const totalCompleted = list.filter((item) => item.completed).length;
    const totalUnCompleted = list.filter((item) => !item.completed).length;
    const percentCompleted =
      totalNum === 0 ? 0 : Math.floor((totalCompleted / totalNum) * 100);

    return { totalNum, totalCompleted, totalUnCompleted, percentCompleted };
  },
});
