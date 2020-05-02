export interface Todo {
  id: string;
  desc: string;
  isComplete: boolean;
}

export interface Todostate {
  data: Todo[];
}

export interface State {
  todos: Todostate;
}
