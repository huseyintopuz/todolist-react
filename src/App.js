import React, { useState, useEffect } from 'react'
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';
import { db } from './firebase'
import { InputLabel, FormControl, Input } from '@mui/material';
import Button from '@mui/material/Button';
import { CloseCircleOutlined } from '@ant-design/icons'

import './App.css';

function App() {
  const [todolists, setTodoLists] = useState([])
  const todolistCollectionRef = collection(db, "todolist")

  // const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    const getTodolist = async () => {
      const data = await getDocs(todolistCollectionRef);
      setTodoLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getTodolist();
  });

  const addTodo = async () => {
    await addDoc(todolistCollectionRef, { todo: input })
    setInput("")
  }
  const deleteTodo = async (id) => {
    const todolistDoc = doc(db, "todolist", id)
    await deleteDoc(todolistDoc)
  }

  return (
    <div className="App">
      <div className="column">
        <h1>Hello World!</h1>
        <FormControl size="small">
          <InputLabel className="inputName" color="success">Write a todo</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} ></Input>
          <Button className="vay" color="success" disabled={!input} variant="contained" type="submit" onClick={addTodo} >Add todo</Button>
        </FormControl>
      </div>
      {todolists.map((todolist) => {
        return (
          <div className="column">
            <ul>
              <li>todo: <span>{todolist.todo}</span></li>
              <CloseCircleOutlined
                onClick={() => {
                  deleteTodo(todolist.id)
                }} style={{ color: "red", cursor: "pointer" }} />
            </ul>
          </div>
        )
      })}

    </div>
  );
}

export default App;

