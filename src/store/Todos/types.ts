export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface Status {
  [key: string]: number;
}
