import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo } from '../redux/todosSlice'
import { Form } from 'react-bootstrap'

const TaskItem = ({id,title,isDone}) => {
    console.log(id,title,isDone);
    const dispatch=useDispatch();

  return (
    <Form.Check
        type='checkbox'
        id={`task-${id}`}
        label={title}
        checked={isDone}
        onChange={()=>dispatch(toggleTodo(id))}
        style={{color: isDone ? 'green': 'red'}}
    />
  );
}

export default TaskItem;
