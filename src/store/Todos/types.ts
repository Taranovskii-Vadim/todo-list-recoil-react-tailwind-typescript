export interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

export interface Status {
  [key: string]: number;
}
