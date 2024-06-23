import React, { useContext } from 'react'
import { todo } from '../storage'
function Error() {
    const {items}=useContext(todo);
  return (
    items.length===0 && <h1>No Item Exist</h1>
  )
}

export default Error
