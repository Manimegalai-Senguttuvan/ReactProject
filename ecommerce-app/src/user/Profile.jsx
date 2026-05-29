import {
  useContext,
} from "react";

import {
  ProductContext,
} from "../context/ProductContext";

export default function Profile() {
  const role =
    localStorage.getItem(
      "role"
    );

  const username =
    localStorage.getItem(
      "username"
    );

  const purchases =
    JSON.parse(
      localStorage.getItem(
        "orders"
      )
    ) || [];

  const {
    history,
  } = useContext(
    ProductContext
  );

  return (
    <div style={styles.page}>
      <div
        className="glass fade"
        style={styles.card}
      >
        <h1>
          👤 {username}
        </h1>

        <p>
          Role:
          {" "}
          {role}
        </p>

        {role ===
        "user" ? (
          <>
            <h2>
              Purchase
              History
            </h2>

            {purchases.map(
              (
                p,
                i
              ) => (
                <div
                  key={i}
                  style={
                    styles.box
                  }
                >
                  {p.title}
                </div>
              )
            )}
          </>
        ) : (
          <>
            <h2>
              Admin
              Activity
            </h2>

            {history.map(
              (
                h
              ) => (
                <div
                  key={
                    h.id
                  }
                  style={
                    styles.box
                  }
                >
                  <b>
                    {
                      h.type
                    }
                  </b>

                  <p>
                    {
                      h.title
                    }
                  </p>

                  <small>
                    {
                      h.time
                    }
                  </small>
                </div>
              )
            )}
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent:
      "center",
    padding: 40,
    color: "white",
  },

  card: {
    width: 550,
    padding: 30,
    borderRadius: 25,
  },

  box: {
    marginTop: 15,
    padding: 15,
    borderRadius: 15,
    background:
      "rgba(255,255,255,.05)",
  },
};