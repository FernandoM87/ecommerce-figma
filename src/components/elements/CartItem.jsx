import * as React from 'react';
import styles from '../../App.module.css'; 

export default function CartItem({ shop, setShop, cartShow }) {
    
    
    if (shop.length > 0 && cartShow) {

        const removeItem = () => {
            setShop(undefined, true);
        }

        let totalPrice = 0;
        let totalItems = 0;
        let imgUrl = [];

        shop.forEach(object => {
            totalPrice += object.price;
            totalItems++;
            imgUrl.push(object.imgUrls[0]);
        });
        
        return (
            <div className={styles.openCart}>

                <h2 className={styles.cartHeader}>Cart</h2>

                <div className={styles.cartWrapper}>
                    <img className={styles.productImg} src={imgUrl[0]} alt={shop[0].alt} />
                    <div className={styles.cartPara}>
                        <p>{shop[0].name}</p>
                        <p>${shop[0].price} x {totalItems} <b className={styles.totalPrice}>${totalPrice}</b></p>
                    </div>
                    <img className={styles.trashbin} src="./src/assets/images/trashbin.svg" alt="Delete item" onClick={removeItem} />
                    <button>Checkout</button>
                    
                </div>
            </div>
        )

    }
    else if (cartShow) {
        return (
            <div className={styles.emptyCart}>
                <h2 className={styles.cartHeader}>Cart</h2>
                <p>Your cart is empty.</p>
            </div>
        )
    }
    else return; 
    

}