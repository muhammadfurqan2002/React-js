import Header from "./components/Header"
import UlList from "./components/List"
import ErrorMsg from "./components/ErrorMsg"
import FoodInput from "./components/FoodInput"
import InputForm from "./components/InputForm"
import MainContainer from "./components/MainContainer"
import { useState } from "react"

function App() {
  let [array, setArray] = useState(["pakistan", "india", "china", "iran", "bangladesh"]);


  // let [userInput,setUserInput]= useState('this is user input item') ;

  // if(array.length===0){
  //   return <h1>Array is empty</h1>
  // }
  let inputHandle = (event) => {
    //  / // alert()
    //   setUserInput(event.target.value)
    //   console.log(event)
    //   console.log("this is console",userInput)
    if (event.key ==='Enter') {
      let newArray = [...array, event.target.value];
      setArray(newArray);
      event.target.value=''
    }
  }
  return (
    <>

      <MainContainer>

        <Header header="List Rendering"></Header>

        <FoodInput inputHandler={inputHandle}></FoodInput>
        <br />
        {/* {userInput} */}
        <br /><br />
        <UlList array={array}></UlList>
        <ErrorMsg array={array}></ErrorMsg>
      </MainContainer>
      {/* conditional rendering */}
      {/* {array.length===0 && <h1>Array is empty</h1>} */}
      {/* <InputForm></InputForm> */}
    </>
  )
}

export default App
