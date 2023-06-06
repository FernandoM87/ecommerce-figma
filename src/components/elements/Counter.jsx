import * as React from 'react'
import styles from '../../App.module.css'; 

export default function Counter({ shop, setShop, object }) {

    const removeItem = () => {
        setShop(object, true);
    }
    const addItem = () => { 
        setShop(object, false);
    }

    return (
        <div className={styles.counter}>
            <img className={styles.minus} src="./src/assets/images/minus.svg" onClick={removeItem} />
            <span className={styles.numOfItems}>{shop.length}</span>
            <img className={styles.plus} src="./src/assets/images/plus.svg" onClick={addItem} />
        </div>
    )
}