import {
  createContext,
  useState,
} from "react";

export const WishlistContext =
  createContext();

export function WishlistProvider({
  children,
}) {
  const [wishlist, setWishlist] =
    useState([]);

  const toggleWishlist = (
    product
  ) => {
    setWishlist((prev) => {
      const exists = prev.find(
        (item) =>
          item.id === product.id
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.id !== product.id
        );
      }

      return [...prev, product];
    });
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}