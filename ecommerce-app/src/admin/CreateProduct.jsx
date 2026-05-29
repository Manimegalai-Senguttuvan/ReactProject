import {
  useState,
  useContext,
} from "react";

import {
  ProductContext,
} from "../context/ProductContext";

import {
  useNavigate,
} from "react-router-dom";

export default function CreateProduct() {
  const navigate =
    useNavigate();

  const {
    createProduct,
  } = useContext(
    ProductContext
  );

  const [form, setForm] =
    useState({
      title: "",
      price: "",
      image: "",
      description:
        "",
    });

  const handleChange =
    (e) => {
      setForm({
        ...form,
        [e.target.name]:
          e.target.value,
      });
    };

  const handleSubmit =
    () => {
      createProduct(form);

      alert(
        "Product Created ✅"
      );

      navigate(
        "/admin-home"
      );
    };

  return (
    <div style={styles.page}>
      <div
        className="glass fade"
        style={styles.card}
      >
        <h1>
          Create Product
        </h1>

        <input
          name="title"
          placeholder="Title"
          style={
            styles.input
          }
          onChange={
            handleChange
          }
        />

        <input
          name="price"
          placeholder="Price"
          style={
            styles.input
          }
          onChange={
            handleChange
          }
        />

        <input
          name="image"
          placeholder="Image URL"
          style={
            styles.input
          }
          onChange={
            handleChange
          }
        />

        <textarea
          name="description"
          placeholder="Description"
          style={
            styles.text
          }
          onChange={
            handleChange
          }
        />

        <button
          className="neon-btn"
          onClick={
            handleSubmit
          }
        >
          Create
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
    width: 450,
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
    padding: 12,
    minHeight: 120,
    borderRadius: 12,
    border: "none",
  },
};