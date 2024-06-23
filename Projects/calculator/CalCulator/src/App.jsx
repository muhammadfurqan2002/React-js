import { useState } from 'react'
import styles from './App.module.css'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'
function App() {
    let [calValue,setCalValue]=useState("");
    let [input,setInput]=useState("");
    function inputHandler(button){
        // console.log(event.target.innerHTML);
        // let m=event.target.innerHTML;
        // setCalValue(m)
        // alert(button);
        if(button==="C"){
          setCalValue("")
        }else if(button==="="){
            const result=eval(calValue);
            setCalValue(result);
        }else{
          const newValue=calValue+button;
          setCalValue(newValue)
        }
    }
  return (
    <>
     <div className={styles.container}>
          <Display value={calValue}></Display>
          <ButtonContainer inputHandler={inputHandler}></ButtonContainer>
        
        </div>
        
    </>
  )
}

export default App
