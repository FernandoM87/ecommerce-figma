import * as React from 'react'
import styles from '../../App.module.css'; 
import { CartItem } from '.././ComponentsIndex'

export default function Cart({ cart, setCar }) {
    const [cartShow, setCartShow] = React.useState(false);

    return (
        <div
            className={styles.cartIconWrapper}
            onMouseEnter={() => setCartShow(true)}
            onMouseLeave={() => setCartShow(false)}            
        >
            <img src="./src/assets/images/shape-nav.svg" alt="Cart icon" styles={styles.cartIcon} />
            
            {cart.length > 0 ? <span className={styles.cartNum}>{cart.length}</span> : null}
            
            <CartItem
                cartOpen={cartShow}
                cart={cart}
                setCar={setCar}
            />
        </div>
    )
}