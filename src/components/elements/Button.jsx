import * as React from 'react'
import styles from '../../App.module.css'; 

export default function Button({ setShop, object }) {
    const handleClick = () => {
        setShop(object)
    }

    return (
        <button className={styles.cartBtn} onClick={handleClick}>
            <div className={styles.cartBtnWrapper}>
                <img src="./src/assets/images/shape-white.svg" alt="Cart icon" className={styles.cartBtnIcon} />
                <p className={styles.cartBtnText}>Add to cart</p>
            </div>
        </button>
    )
}