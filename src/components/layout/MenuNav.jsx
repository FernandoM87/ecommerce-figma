import * as React from 'react'
import {
    Navbar,
    Cart
} from '../ComponentsIndex.jsx';
import styles from '../../App.module.css'; 

export default function MenuNav({ shop, setShop }) {
    return (
        <header className={styles.header}>
            <h1 className={styles.pagesTitle}>sneakers</h1>
            <Navbar />
            <Cart
                setShop={setShop}
                shop={shop}
            />
            <img src="./src/assets/images/profile.png" alt="Profile picture" className={styles.profileImg} />
        </header>
    )
}