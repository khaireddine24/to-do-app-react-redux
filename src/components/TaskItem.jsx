import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, updateTodo } from '../redux/todosSlice';
import { Form, Button, InputGroup } from 'react-bootstrap';

const TaskItem = ({ id, title, isDone }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    if (editedTitle.trim() !== '') {
      dispatch(updateTodo({ id, title: editedTitle }));
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <InputGroup>
        <Form.Control
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <Button variant="success" onClick={handleUpdate}>Save</Button>
        <Button variant="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
      </InputGroup>
    );
  }

  return (
    <div className="d-flex align-items-center">
      <Form.Check
        type='checkbox'
        id={`task-${id}`}
        label={title}
        checked={isDone}
        onChange={() => dispatch(toggleTodo(id))}
        className={`flex-grow-1 ${isDone ? 'text-success' : 'text-danger'}`}
      />
      <Button variant="outline-primary" size="sm" className="ms-2" onClick={() => setIsEditing(true)}>
        Edit
      </Button>
      <Button variant="outline-danger" size="sm" className="ms-2" onClick={() => dispatch(deleteTodo(id))}>
        Delete
      </Button>
    </div>
  );
};

export default TaskItem;