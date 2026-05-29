import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

export default function AdminHome() {
  const navigate = useNavigate();

  const {
    products,
    deleteProduct,
  } = useContext(ProductContext);

  return (
    <div style={styles.page}>
     

      <div style={styles.grid}>
        {products.map((p) => (
          <div
            key={p.id}
            className="glass card-hover fade"
            style={styles.card}
          >
            <img
              src={p.image}
              alt={p.title}
              style={styles.img}
            />

            <h3>
              {p.title.slice(0, 35)}
            </h3>

            <h2>
              ₹ {p.price}
            </h2>

            <div style={styles.icons}>
              {/* DELETE */}
              <button
                style={styles.delete}
                onClick={() =>
                  deleteProduct(p.id)
                }
              >
                🗑
              </button>

              {/* EDIT */}
              <button
                style={styles.edit}
                onClick={(e) => {
                  e.stopPropagation();

                  navigate(
                    `/edit-product/${p.id}`
                  );
                }}
              >
                🖉
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: 30,
    color: "white",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(280px,1fr))",
    gap: 25,
  },

  card: {
    padding: 20,
    borderRadius: 25,
    textAlign: "center",
    position: "relative",
  },

  img: {
    width: "100%",
    height: 250,
    objectFit: "contain",
  },

  icons: {
    display: "flex",
    justifyContent:
      "space-between",
    marginTop: 20,
  },

  delete: {
    background: "none",
    border: "none",
    fontSize: 24,
    cursor: "pointer",
    color: "white",
  },

  edit: {
    background: "none",
    border: "none",
    fontSize: 24,
    cursor: "pointer",
    color: "#00eaff",
  },
};