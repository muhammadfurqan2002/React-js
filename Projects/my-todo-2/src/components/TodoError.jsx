import React from 'react'
import {useContext} from 'react'
import {todo} from '../store/TodoContext'

function TodoError() {
    const {todoItems}=useContext(todo)
  return todoItems.length===0 && <h1>Add Todo</h1> 
}

export default TodoError
