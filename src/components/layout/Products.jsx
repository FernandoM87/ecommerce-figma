import * as React from 'react';
import { Button, Counter, ImageSlider } from '../ComponentsIndex';
import styles from '../../App.module.css';

export default function Products({ setCart, cart }) {

    const sneakers = {
        name: "Fall Limited Edition Sneakers",
        price: 125,
        sale: "50%",
        oldPrice: 250,
        imgUrls: [
            "./src/assets/images/Sneakers 1.png",
            "./src/assets/images/Sneakers 2.png",
            "./src/assets/images/Sneakers 3.png",
            "./src/assets/images/Sneakers 4.png"
        ],
        alt: "A pair of sneakers",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
    };
    
    return (
        

        <section className={styles.productPageWrapper}>
            <section>
                <img src={sneakers.imgUrls[0]} alt={sneakers.alt} />

                <div className={styles.imgSliderWrapper}>
                    <ImageSlider
                        imgSrc={sneakers.imgUrls[0]}
                        imgAlt={sneakers.alt}
                        isActive={true} 
                    />
                    <ImageSlider
                        imgSrc={sneakers.imgUrls[1]}
                        imgAlt={sneakers.alt}
                        isActive={false}
                    />
                    <ImageSlider
                        imgSrc={sneakers.imgUrls[2]}
                        imgAlt={sneakers.alt}
                        isActive={false}
                    />
                    <ImageSlider
                        imgSrc={sneakers.imgUrls[3]}
                        imgAlt={sneakers.alt}
                        isActive={false}
                    />
                </div>
            </section>
            <section className={styles.productPresentation}>
                <h2 className={styles.productMiniHeader}>Sneaker Company</h2>
                <h3 className={styles.productHeader}>{sneakers.name}</h3>
                <p className={styles.productPara}>{sneakers.description}</p>
                
                <div className={styles.priceWrapper}>
                    <h4 className={styles.priceTag}>${sneakers.price}</h4>
                    <h5 className={styles.sale}>{sneakers.sale}</h5>
                    <h6 className={styles.oldPrice}>${sneakers.oldPrice}</h6>
                </div>
                
                <div className={styles.buttonAndCounterWrapper}>
                    <Counter
                        cart={cart}
                        setCart={setCart}
                    />
                    <Button
                        setCart={setCart}
                        item={sneakers}
                    />
                </div>
            </section>
        </section>
    )
}