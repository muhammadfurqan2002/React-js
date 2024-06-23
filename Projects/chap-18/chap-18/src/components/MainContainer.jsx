import styles from './MainContainer.module.css'

let MainContainer = (props) => {
    return <div className={styles.container}>
            {props.children}
    </div>
}



export default MainContainer; 