import styles from './button.module.css'

let ButtonContainer = ({inputHandler}) => {
    var list = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."]
    return (<>

        <div className={styles.buttonContainer}>
            {list.map((e) => <button onClick={()=>inputHandler(e)} className={styles.button}>{e}</button>
            )}

        </div>

    </>)
}


export default ButtonContainer;