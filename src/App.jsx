import * as React from 'react';
import {
  MenuNav, 
  Products
} from "./components/ComponentsIndex"; 
import styles from './App.module.css'; 

function App() {
  const [shop, setShop] = React.useState([]);

  const addToCart = (object, remove) => {
    if (remove) { 

      if (shop.length >= 1) {

        const newCart = shop.filter((cartItem, index) => index !== 0);
        setShop(newCart);
      }

      return; 

    } else {
      setShop([...shop, object]);
    }
  }

  return (
    <div className={styles.app}>
      
      <MenuNav
        setShop = {addToCart}
        shop={shop}
      />
      
      <Products 
        setShop={addToCart}
        shop={shop}

      />
    </div>
  )
}

export default App
