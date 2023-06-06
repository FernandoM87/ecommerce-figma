import * as React from 'react'
import styles from '../../App.module.css'; 
import { CartItem } from '.././ComponentsIndex'

export default function Cart({ shop, setShop }) {
    const [cartShow, setCartShow] = React.useState(false);

    return (
        <div
            className={styles.cartIconWrapper}
            onMouseEnter={() => setCartShow(true)}
            onMouseLeave={() => setCartShow(false)}            
        >
            <img src="./src/assets/images/shape-nav.svg" alt="Cart icon" styles={styles.cartIcon} />
            
            {shop.length > 0 ? <span className={styles.cartNum}>{shop.length}</span> : null}
            
            <CartItem
                cartShow={cartShow}
                shop={shop}
                setShop={setShop}
            />
        </div>
    )
}