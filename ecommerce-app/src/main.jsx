import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
} from "react-router-dom";

import "./index.css";

import App from "./App";

import {
  CartProvider,
} from "./context/CartContext";

import {
  WishlistProvider,
} from "./context/WishlistContext";

import {
  ProductProvider,
} from "./context/ProductContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>
    <ProductProvider>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  </BrowserRouter>
);