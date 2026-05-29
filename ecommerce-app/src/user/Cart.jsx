import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    if (cart.length === 0) {
      alert(
        "Add at least one product"
      );
      return;
    }

    const confirmPay =
      window.confirm(
        `Confirm Payment ₹ ${total.toFixed(
          2
        )}?`
      );

    if (!confirmPay) return;

    const oldOrders =
      JSON.parse(
        localStorage.getItem(
          "orders"
        )
      ) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([
        ...oldOrders,
        ...cart,
      ])
    );

    alert(
      "Payment Successful ✅"
    );

    clearCart();
  };

  return (
    <div style={styles.page}>
      <h1>Cart</h1>

      <div style={styles.grid}>
        {cart.map((item) => (
          <div
            key={item.id}
            className="glass card-hover fade"
            style={styles.card}
          >
            <img
              src={item.image}
              style={styles.img}
            />

            <h3>
              {item.title.slice(
                0,
                35
              )}
            </h3>

            <h2>
              ₹ {item.price}
            </h2>

            <div style={styles.qty}>
              <button
                onClick={() =>
                  decreaseQty(
                    item.id
                  )
                }
              >
                -
              </button>

              <span>
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  increaseQty(
                    item.id
                  )
                }
              >
                +
              </button>
            </div>

            <button
              className="neon-btn"
              onClick={() =>
                removeFromCart(
                  item.id
                )
              }
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <h2
        style={{
          marginTop: 30,
        }}
      >
        Total ₹{" "}
        {total.toFixed(2)}
      </h2>

      <button
        className="neon-btn"
        style={{
          marginTop: 15,
        }}
        onClick={placeOrder}
      >
        Place Order
      </button>
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
      "repeat(auto-fit,minmax(260px,1fr))",
    gap: 25,
    marginTop: 20,
  },

  card: {
    padding: 20,
    borderRadius: 22,
    textAlign: "center",
  },

  img: {
    width: "100%",
    height: 220,
    objectFit: "contain",
    marginBottom: 15,
  },

  qty: {
    display: "flex",
    justifyContent:
      "center",
    gap: 10,
    margin: "15px 0",
  },
};