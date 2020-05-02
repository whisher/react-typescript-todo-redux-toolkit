import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { Todo } from "../type";

import {
  addTodosAsync,
  deleteTodosAsync,
  loadTodosAsync,
  selectTodos,
} from "../store/todosSlice";
import TodoForm from "./components/todo.form";
import "./App.scss";

function App() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodosAsync());
  }, []);
  const addTodo = (data: Todo) => {
    dispatch(addTodosAsync(data));
  };
  const handleDelete = (data: Todo) => {
    dispatch(deleteTodosAsync(data));
  };
  return (
    <div className="wrapper">
      <header className="header bg-secondary px-3">
        <h1 className="text-white">Todos Redux</h1>
      </header>
      <main className="main px-3">
        <div className="row justify-content-center mt-5">
          <div className="col-6">
            <TodoForm onSubmit={addTodo}></TodoForm>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-6">
            <ListGroup>
              {todos.map((todo: Todo) => {
                return (
                  <ListGroup.Item
                    key={todo.id}
                    action
                    onClick={() => handleDelete(todo)}
                  >
                    {todo.desc}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </div>
        </div>
      </main>
      <footer className="footer bg-secondary px-3">
        <p className="m-0 text-white"> &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
