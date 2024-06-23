import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItem from "./components/TodoItem"
import './App.css';

import TodoError from "./components/TodoError";
import TodoContextProvider from "./store/TodoContext";

function App() {

  // const [item, setItem] = useState([]);
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



  return (
    <TodoContextProvider>
      <center className='todo-container'>
        <AppName></AppName>
        <AddTodo ></AddTodo>
        <TodoError></TodoError>
        <TodoItem ></TodoItem>

      </center>
    </TodoContextProvider>
  )
}

export default App
