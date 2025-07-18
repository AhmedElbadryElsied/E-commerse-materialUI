import { createContext, useContext, useEffect, useState } from "react";
import { cardsContent, cardsContentWishList,sliderProduct } from "../db";

const ShoppingCartContext = createContext({});

const AllCardsContent = cardsContent.concat(cardsContentWishList , sliderProduct);

const ShpingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  //  Syncs cartItems state when localStorage changes in another tab (cross-tab synchronization)

  useEffect(() => {
    const handleStorageChange = () => {
      setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const itemsShowes = AllCardsContent.filter((item) => {
    return cartItems.some((cartItem) => cartItem.id === item.id);
  });

  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      return currItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const removeFromCart = (id) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  const totalPrice = itemsShowes.reduce((total, item) => {
    return (
      total + Number.parseFloat(item.price) * getItemQuantity(item.id)
    );
  }, 0);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        itemsShowes,
        totalPrice,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShpingCartProvider;

export const useShopingCart = () => useContext(ShoppingCartContext);
