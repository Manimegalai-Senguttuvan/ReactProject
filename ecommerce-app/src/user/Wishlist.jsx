import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

export default function Wishlist() {
  const {
    wishlist,
    toggleWishlist,
  } = useContext(WishlistContext);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>
        Wishlist
      </h1>

      <div style={styles.grid}>
        {wishlist.length === 0 ? (
          <h2>No Wishlist Items</h2>
        ) : (
          wishlist.map((p) => (
            <div
              key={p.id}
              style={styles.card}
              className="glass card-hover fade"
            >
              <img
                src={p.image}
                alt={p.title}
                style={styles.img}
              />

              <h3 style={styles.name}>
                {p.title.slice(0, 35)}
              </h3>

              <h2 style={styles.price}>
                ₹ {p.price}
              </h2>

              <button
                className="neon-btn"
                style={styles.btn}
                onClick={() =>
                  toggleWishlist(p)
                }
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: 30,
    color: "white",
  },

  title: {
    marginBottom: 25,
  },

  grid: {
    display: "grid",
   gridTemplateColumns:
"repeat(auto-fill,minmax(280px,280px))",
justifyContent:"center",
    gap: 25,
  },

  card: {
    borderRadius: 22,
    padding: 20,
    textAlign: "center",
  },

  img: {
    width: "100%",
    height: 250,
    objectFit: "contain",
    marginBottom: 15,
  },

  name: {
    minHeight: 50,
  },

  price: {
    color: "#00eaff",
    margin: "10px 0",
  },

  btn: {
    width: "100%",
  },
};