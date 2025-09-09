import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/frontend_assets/assets";
food_list;

export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  useEffect(()=>{
    console.log(cartItems)
  }, [cartItems])

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
  setCartItems((prev) => {
    if (!prev[itemId]) return prev;

    if (prev[itemId] === 1) {
      const updatedCart = { ...prev };
      delete updatedCart[itemId];
      return updatedCart;
    }

    return { ...prev, [itemId]: prev[itemId] - 1 };
  });
};


  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
