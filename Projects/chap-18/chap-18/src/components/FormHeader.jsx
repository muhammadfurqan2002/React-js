import styles from './InputForm.module.css'

let FormHeader=({header})=>{
    return <h3 className={styles.header}>{header}</h3>
}


export default FormHeader;