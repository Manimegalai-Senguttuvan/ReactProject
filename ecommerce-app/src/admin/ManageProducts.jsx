import { useEffect, useState } from "react";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const save = () => {
    if (editId) {
      setProducts(
        products.map((p) =>
          p.id === editId ? { ...p, title, price } : p
        )
      );
      setEditId(null);
    } else {
      setProducts([
        ...products,
        { id: Date.now(), title, price },
      ]);
    }

    setTitle("");
    setPrice("");
  };

  const del = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const edit = (p) => {
    setTitle(p.title);
    setPrice(p.price);
    setEditId(p.id);
  };

  return (
    <div>
      <h1>Manage Products</h1>

      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={price} onChange={(e) => setPrice(e.target.value)} />

      <button onClick={save}>
        {editId ? "Update" : "Add"}
      </button>

      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.price}</p>

          <button onClick={() => edit(p)}>Edit</button>
          <button onClick={() => del(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}