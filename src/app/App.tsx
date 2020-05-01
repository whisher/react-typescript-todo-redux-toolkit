import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { Todo } from "../types/todo";
import { RootState } from "../index";
import { addTodos, loadTodos, deleteTodos } from "../store/effects";
import TodoForm from "./components/todo.form";
import "./App.scss";

function App() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodos());
  }, []);
  const addTodo = (data: Todo) => {
    dispatch(addTodos(data));
  };
  const handleDelete = (data: Todo) => {
    dispatch(deleteTodos(data));
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
              {todos.data.map((todo: Todo) => {
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
