import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodo } from '../redux/todosSlice';

function AddForm() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group controlId="addTodoForm">
        <Form.Label>Add new task</Form.Label>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Button variant="primary" type="submit">
            Add
          </Button>
        </InputGroup>
      </Form.Group>
    </Form>
  );
}

export default AddForm;