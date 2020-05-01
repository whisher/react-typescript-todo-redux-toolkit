import { Todo } from "../types/todo";

export enum TodosActions {
  ADD_TODOS = "ADD_TODOS",
  DELETE_TODOS = "DELETE_TODOS",
  LOAD_TODOS = "LOAD_TODOS",
}

interface LoadTodosActionType {
  type: typeof TodosActions.LOAD_TODOS;
  payload: Todo[];
}
export const loadTodosActionCreator = (data: Todo[]): LoadTodosActionType => {
  return {
    type: TodosActions.LOAD_TODOS,
    payload: data,
  };
};

interface AddTodosActionType {
  type: typeof TodosActions.ADD_TODOS;
  payload: Todo;
}
export const addTodosActionCreator = (data: Todo): AddTodosActionType => {
  return {
    type: TodosActions.ADD_TODOS,
    payload: data,
  };
};

interface DeleteTodosActionType {
  type: typeof TodosActions.DELETE_TODOS;
  payload: Todo;
}
export const deleteTodosActionCreator = (data: Todo): DeleteTodosActionType => {
  return {
    type: TodosActions.DELETE_TODOS,
    payload: data,
  };
};

export type TodosActionsType =
  | LoadTodosActionType
  | AddTodosActionType
  | DeleteTodosActionType;
