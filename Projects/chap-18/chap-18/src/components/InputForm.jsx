import styles from './InputForm.module.css'
import FormHeader from './FormHeader';
import { useState } from 'react';

function InputForm(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

        function ShowData(){
            alert(`Email: ${email} \n Name: ${name}`)
        }

    return (
        <form className={styles.form}>
            <FormHeader header="Form Handling"></FormHeader>
            <label className={styles.label}>Name</label><br />
            <input className={styles.inputField} value={name} type="text" name="name" id="name" onChange={(event)=>setName(event.target.value)} /> <br />
            <label className={styles.label}>Email</label><br />
            <input className={styles.inputField} value={email}  type="email" name="email" id="email" onChange={(event)=>setEmail(event.target.value)}/> <br />
            <label className={styles.label}>Password</label> <br />
            <input className={styles.inputField} value={password} type="password" name="password" id="password" onChange={(event)=>setPassword(event.target.value)} /> <br />
            <br />
            <button onClick={ShowData} >Submit</button>

        </form>
    )
}



export default InputForm;


