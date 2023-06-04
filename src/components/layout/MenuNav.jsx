import * as React from 'react'
import {
    Navbar,
    Cart
} from '../ComponentsIndex.jsx';
import styles from '../../App.module.css'; 

export default function MenuNav({ cart, setCart }) {
    return (
        <header className={styles.header}>
            <h1 className={styles.pageTitle}>sneakers</h1>
            <Navbar />
            <Cart
                setCart={setCart}
                cart={cart}
            />
            <img src="./src/assets/images/profile.png" alt="Profile picture" className={styles.profileImg} />
        </header>
    )
}