import * as React from 'react'
import styles from '../../App.module.css'; 
import { CartItem } from '.././ComponentsIndex'

export default function Cart({ cart, setCar }) {
    const [cartOpen, setCartOpen] = React.useState(false);

    return (
        <div
            className={styles.cartIconWrapper}
            onMouseEnter={() => setCartOpen(true)}
            onMouseLeave={() => setCartOpen(false)}            
        >
            <img src="./src/assets/images/shape-nav.svg" alt="Cart icon" styles={styles.cartIcon} />
            
            {cart.length > 0 ? <span className={styles.cartNum}>{cart.length}</span> : null}
            
            <CartItem
                cartOpen={cartOpen}
                cart={cart}
                setCar={setCar}
            />
        </div>
    )
}