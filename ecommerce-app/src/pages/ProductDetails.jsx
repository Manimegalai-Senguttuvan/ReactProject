import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

export default function ProductDetails() {
  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const [product, setProduct] =
    useState(null);

  useEffect(() => {
    fetch(
      `https://fakestoreapi.com/products/${id}`
    )
      .then((res) => res.json())
      .then((data) =>
        setProduct(data)
      );
  }, [id]);

  if (!product)
    return <h2>Loading...</h2>;

  return (
    <div style={styles.page}>
      <button
        onClick={() =>
          navigate(-1)
        }
      >
        ← Back
      </button>

      <div style={styles.card}>
        <img
          src={product.image}
          style={styles.img}
        />

        <div>
          <h1>
            {product.title}
          </h1>

          <p>
            {product.description}
          </p>

          <h2>
            ₹ {product.price}
          </h2>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: 30,
  },

  card: {
    display: "flex",
    gap: 30,
    background: "white",
    padding: 30,
    borderRadius: 20,
  },

  img: {
    width: 250,
    height: 250,
    objectFit: "contain",
  },
};