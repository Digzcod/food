import React, { useEffect, useState } from "react";

const useCartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems)

  const itemQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

//   useEffect(() => {}, [cartItems]);

  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id).quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setCartItems((currItem) => {
      if (currItem.find((item) => item.id === id) == null) {
        return [...currItem, { id, quantity: 1 }];
      } else {
        return currItem.map((item) => {
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
    setCartItems((currItem) => {
      if (currItem.find((item) => item.id === id).quantity === 1) {
        return currItem.filter((item) => item.id !== id);
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  return {
    cartItems,
    itemQuantity,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  };
};

export default useCartItems;
