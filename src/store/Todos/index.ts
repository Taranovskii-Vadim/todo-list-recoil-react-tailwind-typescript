import { atom, selector } from "recoil";
import { Status, Todo } from "./types";

export const todosState = atom<Todo[]>({
  key: "todosState",
  default: [
    { id: 1, text: "test1", isDone: true },
    { id: 2, text: "test2", isDone: false },
  ],
});

export const statusSelector = selector<Status>({
  key: "statusSelector",
  get: ({ get }) => {
    const list = get(todosState);
    const totalNum = list.length;
    const totalCompleted = list.filter((item) => item.isDone).length;
    const totalUnCompleted = list.filter((item) => !item.isDone).length;
    const percentCompleted =
      totalNum === 0 ? 0 : Math.floor((totalCompleted / totalNum) * 100);

    return { totalNum, totalCompleted, totalUnCompleted, percentCompleted };
  },
});
