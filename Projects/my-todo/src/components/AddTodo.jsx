import { useState, useRef, useContext } from 'react';
import styles from '../components/AddTodo.module.css'
import { todo } from '../storage';
function AddTodo() {

    const {clickHandler}=useContext(todo);
    // const [name,setName]=useState("");
    // const [date,setDate]=useState("");
    // function F1(event){
    //         setName(event.target.value);
    // }
    // function F2(event){
    //         setDate(event.target.value);
    // }

    const date = useRef();
    const name = useRef();

    function F3(event) {
        event.preventDefault();
        clickHandler(name.current.value, date.current.value);
        date.current.value="";
        name.current.value="";
    }


    return (
        <div classNameName="container text-start">
            <form onSubmit={F3}>
                <div className="row kg-row" style={{ "justifyContent": "start", "alignItems": "start" }}>

                    <div className="col-6 "><input className={styles.addInput} ref={name} type="text" name="todo" id="todo" placeholder="Enter Todo" /></div>
                    <div className="col-4 "><input className={styles.addInput} ref={date} type="date" name="date" id="date" /></div>

                    {/* -----------------------------------using useState---------------------------------- */}
                    {/* <div className="col-6 "><input className={styles.addInput} onChange={F1} type="text" name="todo" id="todo" placeholder="Enter Todo" /></div> */}
                    {/* <div className="col-4 "><input className={styles.addInput} onChange={F2} type="date" name="date" id="date" /></div> */}
                    <div className="col-1">
                        {/* <button onClick={F3} type="button" name="button" className="btn btn-success">Add</button> */}
                        <button type="submit" name="button" className="btn btn-success">Add</button>
                    </div>

                </div>
            </form>

        </div>
    )

}

export default AddTodo;