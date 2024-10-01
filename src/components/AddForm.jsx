import React, { useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import {addTodo} from '../redux/todosSlice';

import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
function AddForm() {
  const [title,setTitle]=useState('');
  const dispatch=useDispatch();

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(title.trim()){
      dispatch(addTodo(title))
      setTitle('');
    }
  }
  return (
    <Form style={{ width: "30rem" }} >
      <Form.Label>Add new task</Form.Label>
      <InputGroup className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" onChange={(e)=>setTitle(e.target.value)}/>
        <Button variant="secondary" onClick={handleSubmit}>Add</Button>
      </InputGroup>
    </Form>
  );
}

export default AddForm;
