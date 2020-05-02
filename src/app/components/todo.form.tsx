import React, { ChangeEvent, FormEvent, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v1 as uuidv1 } from "uuid";
import { Todo } from "../../type";

export interface FormTodoProps {
  onSubmit: (data: Todo) => void;
}

const TodoForm: React.FC<FormTodoProps> = ({ onSubmit }) => {
  const [newTodoInput, setNewTodoInput] = useState<string>("");
  const handleCreateNewTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit({ id: uuidv1(), desc: newTodoInput, isComplete: false });
  };
  const handleNewInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewTodoInput(e.target.value);
  };
  return (
    <Form onSubmit={handleCreateNewTodo} noValidate>
      <div className="row no-gutters">
        <div className="col-9">
          <Form.Group>
            <Form.Control
              onChange={handleNewInputChange}
              value={newTodoInput}
              size="lg"
              type="text"
              placeholder="what should I do ?"
            />
          </Form.Group>
        </div>
        <div className="col-3">
          <Button variant="primary" size="lg" type="submit">
            Create
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default TodoForm;
