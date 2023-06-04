import * as React from 'react';
import styles from '../../App.module.css';

export default function Products({isActive, imgSrc, imgAlt}) {
    return (
        <div>
            <img className={isActive ? styles.imgSliderActive : styles.imgSlider} src={imgSrc} alt={imgAlt} />
        </div>
    )
}