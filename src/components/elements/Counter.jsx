import * as React from 'react'
import styles from '../../App.module.css'; 

export default function Counter({ cart, setCart, item }) {

    const removeItem = () => {
        setCart(item, true);
    }
    const addItem = () => { 
        setCart(item, false);
    }

    return (
        <div className={styles.counter}>
            <img className={styles.minus} src="./src/assets/images/minus.svg" onClick={removeItem} />
            <span className={styles.numOfItems}>{cart.length}</span>
            <img className={styles.plus} src="./src/assets/images/plus.svg" onClick={addItem} />
        </div>
    )
}