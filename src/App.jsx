import * as React from 'react';
import {
  MenuNav, 
  Products
} from "./components/ComponentsIndex"; 
import styles from './App.module.css'; 

function App() {
  const [cart, setCart] = React.useState([]);

  const addToCart = (item, remove) => {
    if (remove) { 

      if (cart.length >= 1) {

        const newCart = cart.filter((cartItem, index) => index !== 0);
        setCart(newCart);
      }

      return; 

    } else {
      setCart([...cart, item]);
    }
  }

  return (
    <div className={styles.app}>
      
      <MenuNav
        setCart = {addToCart}
        cart={cart}
      />
      
      <Products 
        setCar={addToCart}
        cart={cart}

      />
    </div>
  )
}

export default App
