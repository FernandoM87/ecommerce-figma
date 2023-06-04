import * as React from 'react'
import styles from '../../App.module.css'; 

export default function Navbar() {
    return (
        <nav>
            <ul className={styles.navbar}>
                <li className={styles.menuItem}>Collections</li>
                <li className={styles.menuItem}>Men</li>
                <li className={styles.menuItem}>Women</li>
                <li className={styles.menuItem}>About</li>
                <li className={styles.menuItem}>Contact</li>
            </ul>
        </nav>
    )
}