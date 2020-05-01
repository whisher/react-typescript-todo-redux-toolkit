import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import { Todo } from "../types/todo";
import { todosService } from "../services/todos.service";
import {
  loadTodosActionCreator,
  addTodosActionCreator,
  deleteTodosActionCreator,
} from "./actions";

export const loadTodos = () => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    todosService
      .load()
      .then((data) => {
        dispatch(loadTodosActionCreator(data));
      })
      .catch((_) => {
        throw new Error("Something went wrong");
      });
  };
};

export const addTodos = (data: Todo) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    todosService
      .add(data)
      .then((data) => {
        dispatch(addTodosActionCreator(data));
      })
      .catch((_) => {
        throw new Error("Something went wrong");
      });
  };
};

export const deleteTodos = (data: Todo) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    todosService
      .delete(data)
      .then((_) => {
        dispatch(deleteTodosActionCreator(data));
      })
      .catch((_) => {
        throw new Error("Something went wrong");
      });
  };
};
