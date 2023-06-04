import * as React from 'react';
import styles from '../../App.module.css'; 

export default function CartItem({ cart, cartOpen, setCart }) {
    
    
    if (cart.length > 0 && cartOpen) {

        const removeItem = () => {
            setCart(undefined, true);
        }

        let totalPrice = 0;
        let totalItems = 0;
        let imgUrl = [];

        cart.forEach(item => {
            totalPrice += item.price;
            totalItems++;
            imgUrl.push(item.imgUrls[0]);
        });
        
        return (
            <div className={styles.openCart}>

                <h2 className={styles.cartHeader}>Cart</h2>

                <div className={styles.cartWrapper}>
                    <img className={styles.productImg} src={imgUrl[0]} alt={cart[0].alt} />
                    <div className={styles.cartPara}>
                        <p>{cart[0].name}</p>
                        <p>${cart[0].price} x {totalItems} <b className={styles.totalPrice}>${totalPrice}</b></p>
                    </div>
                    <img className={styles.trashbin} src="./src/assets/images/trashbin.svg" alt="Delete item" onClick={removeItem} />
                    <button>Checkout</button>
                    
                </div>
            </div>
        )

    }
    else if (cartOpen) {
        return (
            <div className={styles.emptyCart}>
                <h2 className={styles.cartHeader}>Cart</h2>
                <p>Your cart is empty.</p>
            </div>
        )
    }
    else return; 
    

}