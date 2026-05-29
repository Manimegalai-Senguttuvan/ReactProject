import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  useContext,
  useState,
} from "react";

import {
  ProductContext,
} from "../context/ProductContext";

export default function EditProduct() {
  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const {
    products,
    updateProduct,
  } = useContext(
    ProductContext
  );

  const product =
    products.find(
      (p) =>
        Number(p.id) ===
        Number(id)
    );

  if (!product)
    return (
      <h2>
        Product Not Found
      </h2>
    );

  const [form, setForm] =
    useState({
      title:
        product.title,
      price:
        product.price,
      image:
        product.image,
      description:
        product.description,
    });

  const handleChange =
    (e) => {
      setForm({
        ...form,
        [e.target.name]:
          e.target.value,
      });
    };

  const handleUpdate =
    () => {
      updateProduct({
        ...form,
        id: product.id,
      });

      alert(
        "Updated Successfully ✅"
      );

      navigate(
        "/admin-home"
      );
    };

  return (
    <div style={styles.page}>
      <div
        className="glass"
        style={styles.card}
      >
        <h1>
          Update Product
        </h1>

        <input
          name="title"
          value={form.title}
          onChange={
            handleChange
          }
          style={
            styles.input
          }
        />

        <input
          name="price"
          value={form.price}
          onChange={
            handleChange
          }
          style={
            styles.input
          }
        />

        <input
          name="image"
          value={form.image}
          onChange={
            handleChange
          }
          style={
            styles.input
          }
        />

        <textarea
          name="description"
          value={
            form.description
          }
          onChange={
            handleChange
          }
          style={
            styles.text
          }
        />

        <button
          className="neon-btn"
          onClick={
            handleUpdate
          }
        >
          Update
        </button>
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
  },

  card: {
    width: 500,
    padding: 30,
    borderRadius: 25,
    display: "flex",
    flexDirection:
      "column",
    gap: 15,
  },

  input: {
    padding: 12,
    borderRadius: 12,
    border: "none",
  },

  text: {
    minHeight: 120,
    padding: 12,
    borderRadius: 12,
    border: "none",
  },
};