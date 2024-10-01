import React from 'react'
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const ListTask = () => {
    const todos=useSelector(state=>state.todos || []);
    console.log(todos);
  return (
    <ul>
        {
            todos.map(todo=>(
                <li key={todo.id}>
                    <TaskItem {...todo}/>
                </li>
            ))}
    </ul>
  )
}

export default ListTask
