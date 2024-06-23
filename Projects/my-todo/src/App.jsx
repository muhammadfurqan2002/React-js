import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItem from "./components/TodoItem"
import './App.css';
import { useState } from "react";
import Error from "./components/Error";
import { todo } from "./storage";
function App() {

  // var itemList = [
  //   {
  //     name: "Go to school",
  //     date: "04/11/2024"
  //   },
  //   {
  //     name: "Gujranwala",
  //     date: "04/11/2024"
  //   }
  // ]


  const [item, setItem] = useState([]);

  // function clickHandler(name, date) {
  //   const arr = [...item, { name: name, date: date }]
  //   console.log(arr)
  //   if (name === '' || date === '') {
  //     alert("Invalid Data");
  //   } else {
  //     setItem(arr);
  //   }

  // }
  // function clickHandler(name, date) {
  //   if (name === '' || date === '') {
  //     alert("Invalid Data");
  //   } else {
  //     setItem((curValue)=> [...curValue, { name: name, date: date }]);
  //   }
  // }

  function clickHandler(name, date) {
    if (name === '' || date === '') {
      alert("Invalid Data");
    } else {
      setItem((curValue) => {
        const arr = [...curValue, { name: name, date: date }];
        return arr;
      });
    }
  }

  function Delete(name) {
    let arr = item.filter((e) => e.name !== name);
    setItem(arr);
  }


  return (
    <todo.Provider value={{items:item,clickHandler,Delete}}>
      <center className='todo-container'>
        <AppName></AppName>
        <AddTodo ></AddTodo>
        <TodoItem ></TodoItem>
        <Error></Error>
      </center>
    </todo.Provider>
  )
}

export default App
