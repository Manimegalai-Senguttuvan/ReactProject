import {
  createContext,
  useState,
  useEffect,
} from "react";

export const ProductContext =
  createContext();

export function ProductProvider({
  children,
}) {
  const [products, setProducts] =
    useState([]);

  const [history, setHistory] =
    useState([]);

  useEffect(() => {
    fetch(
      "https://fakestoreapi.com/products"
    )
      .then((res) => res.json())
      .then((data) =>
        setProducts(data)
      );
  }, []);

  const addHistory = (
    type,
    product
  ) => {
    setHistory((prev) => [
      {
        id: Date.now(),
        type,
        title: product.title,
        time:
          new Date().toLocaleString(),
      },
      ...prev,
    ]);
  };

  const createProduct = (
    product
  ) => {
    const newProduct = {
      ...product,
      id: Date.now(),
    };

    setProducts((prev) => [
      newProduct,
      ...prev,
    ]);

    addHistory(
      "Created",
      newProduct
    );
  };

  const deleteProduct = (
    id
  ) => {
    const item =
      products.find(
        (p) => p.id === id
      );

    setProducts((prev) =>
      prev.filter(
        (p) => p.id !== id
      )
    );

    if (item) {
      addHistory(
        "Deleted",
        item
      );
    }
  };

  const updateProduct = (
    updated
  ) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === updated.id
          ? updated
          : p
      )
    );

    addHistory(
      "Updated",
      updated
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        history,
        createProduct,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}