import { createSlice } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import { State, Todo } from "../type";
import { todosService } from "../services/todos.service";
import { Todostate } from "../type";

const todosInitialState: Todostate = {
  data: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: todosInitialState,
  reducers: {
    addTodos: (state, action) => {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    },
    deleteTodos: (state, action) => {
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== action.payload.id),
      };
    },
    loadTodos: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { addTodos, deleteTodos, loadTodos } = todosSlice.actions;

export const addTodosAsync = (data: Todo) => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  todosService
    .add(data)
    .then((data) => {
      dispatch(addTodos(data));
    })
    .catch((_) => {
      throw new Error("Something went wrong");
    });
};
export const deleteTodosAsync = (data: Todo) => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  todosService
    .delete(data)
    .then((_) => {
      dispatch(deleteTodos(data));
    })
    .catch((_) => {
      throw new Error("Something went wrong");
    });
};

export const loadTodosAsync = () => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  todosService
    .load()
    .then((data) => {
      dispatch(loadTodos(data));
    })
    .catch((_) => {
      throw new Error("Something went wrong");
    });
};

export const selectTodos = (state: State) => state.todos.data;

export default todosSlice.reducer;
