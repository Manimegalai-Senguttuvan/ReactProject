import {
  createContext,
  useState,
} from "react";

export const CartContext =
  createContext();

export function CartProvider({
  children,
}) {
  const [cart, setCart] =
    useState([]);

  // ADD TO CART
  const addToCart = (
    product
  ) => {
    const exists =
      cart.find(
        (item) =>
          item.id ===
          product.id
      );

    if (exists) {
      setCart(
        cart.map(
          (item) =>
            item.id ===
            product.id
              ? {
                  ...item,
                  quantity:
                    item.quantity +
                    1,
                }
              : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }

    alert(
      "Added to Cart ✅"
    );
  };

  // REMOVE
  const removeFromCart = (
    id
  ) => {
    setCart(
      cart.filter(
        (item) =>
          item.id !== id
      )
    );
  };

  // +
  const increaseQty = (
    id
  ) => {
    setCart(
      cart.map(
        (item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity +
                  1,
              }
            : item
      )
    );
  };

  // -
  const decreaseQty = (
    id
  ) => {
    setCart(
      cart.map(
        (item) =>
          item.id === id &&
          item.quantity >
            1
            ? {
                ...item,
                quantity:
                  item.quantity -
                  1,
              }
            : item
      )
    );
  };

  // CLEAR
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}