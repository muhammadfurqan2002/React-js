import styles from './display.module.css'

let Display = ({value}) => {
    return (<>
        <input type="text" value={value} className={styles.displayModule} placeholder='enter value' />
    </>)
}

export default Display;