import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import TaskItem from './TaskItem';

const ListTask = () => {
  const todos = useSelector(state => state.todos || []);

  return (
    <ListGroup>
      {todos.map(todo => (
        <ListGroup.Item key={todo.id} className="border-0 p-0 mb-2">
          <TaskItem {...todo} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListTask;