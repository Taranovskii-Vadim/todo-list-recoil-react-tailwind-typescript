import { atom } from "recoil";

export interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

export const todosState = atom<Todo[]>({
  key: "todosState",
  default: [
    { id: 1, text: "test1", isDone: true },
    { id: 2, text: "test2", isDone: false },
  ],
});
