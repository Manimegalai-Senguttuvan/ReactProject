import {
  useEffect,
  useState,
  useContext,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  CartContext,
} from "../context/CartContext";

import {
  WishlistContext,
} from "../context/WishlistContext";

import {
  ProductContext,
} from "../context/ProductContext";

export default function UserHome() {
  const {
    products,
  } = useContext(
    ProductContext
  );

  const {
    addToCart,
  } = useContext(
    CartContext
  );

  const {
    wishlist,
    toggleWishlist,
  } = useContext(
    WishlistContext
  );

  const [search, setSearch] =
    useState("");

  const filtered =
    products.filter((p) =>
      p.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div style={styles.page}>
      

      {/* SEARCH */}

      <input
        placeholder="Search Products..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        style={styles.search}
      />

      {/* GRID */}

      <div style={styles.grid}>
        {filtered.map((p) => {
          const liked =
            wishlist.some(
              (i) =>
                i.id === p.id
            );

          return (
            <div
              key={p.id}
              className="glass fade"
              style={
                styles.card
              }
            >
              {/* HEART */}

              <button
                onClick={() =>
                  toggleWishlist(
                    p
                  )
                }
                style={{
                  ...styles.heart,
                  color: liked
                    ? "red"
                    : "#aaa",
                }}
              >
                ♥
              </button>

              {/* PRODUCT */}

              <Link
                to={`/product/${p.id}`}
                style={{
                  textDecoration:
                    "none",
                  color:
                    "white",
                }}
              >
                <div
                  style={
                    styles.imageWrap
                  }
                >
                  <img
                    src={
                      p.image
                    }
                    alt={
                      p.title
                    }
                    style={
                      styles.img
                    }
                  />
                </div>

                <h3>
                  {p.title.slice(
                    0,
                    35
                  )}
                </h3>

                <h2>
                  ₹ {p.price}
                </h2>
              </Link>

              {/* BUTTON */}

              <button
                className="neon-btn"
                style={
                  styles.btn
                }
                onClick={() =>
                  addToCart(
                    p
                  )
                }
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: 30,
    minHeight:
      "100vh",
  },

  title: {
    marginBottom: 20,
    fontSize: 34,
    textShadow:
      "0 0 15px #00eaff",
  },

  search: {
    width: "100%",
    padding: 14,
    borderRadius: 15,
    border:
      "1px solid #00eaff",
    background:
      "rgba(255,255,255,.05)",
    color: "white",
    marginBottom: 30,
    outline: "none",
    boxShadow:
      "0 0 15px rgba(0,234,255,.2)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(280px,1fr))",
    gap: 25,
  },

  card: {
    padding: 20,
    borderRadius: 24,
    textAlign: "center",
    position: "relative",
    transition: ".4s",
  },

  imageWrap: {
    overflow:
      "hidden",
    borderRadius: 20,
  },

  img: {
    width: "100%",
    height: 240,
    objectFit: "contain",
    transition:
      ".5s",
  },

  heart: {
    position:
      "absolute",
    top: 15,
    right: 15,
    fontSize: 26,
    border: "none",
    background:
      "transparent",
    cursor: "pointer",
    zIndex: 2,
    transition:
      ".3s",
  },

  btn: {
    marginTop: 15,
    width: "100%",
  },
};