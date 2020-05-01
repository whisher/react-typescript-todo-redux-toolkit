import { Todo } from "../types/todo";
import { TodosActions, TodosActionsType } from "./actions";

export interface Todostate {
  data: Todo[];
}

const initialState: Todostate = {
  data: [],
};

export const todoReducer = (
  state: Todostate = initialState,
  action: TodosActionsType
) => {
  switch (action.type) {
    case TodosActions.LOAD_TODOS:
      return {
        ...state,
        data: action.payload,
      };
    case TodosActions.ADD_TODOS:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case TodosActions.DELETE_TODOS:
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};
/*
 */
