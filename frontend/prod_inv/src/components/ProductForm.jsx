import React, { useState, useEffect } from 'react';

const ProductForm = ({ addProduct, editingProduct, updateProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
      setCategory(editingProduct.category);
      setImage(editingProduct.image);
    }
  }, [editingProduct]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result); 
    };

    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { id: editingProduct?.id, name, price, category, image };

    if (editingProduct) {
      updateProduct(newProduct);
    } else {
      addProduct(newProduct);
    }

    setName("");
    setPrice("");
    setCategory("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>{editingProduct ? "Edit Product" : "Add Product"}</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <input
        type="file"
        onChange={handleImageUpload}
        style={{ marginBottom: "10px" }}
      />

      {image && (
        <img
          src={image}
          alt="preview"
          width="100"
          style={{ display: "block", marginBottom: "10px" }}
        />
      )}

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          background: "blue",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        {editingProduct ? "Save Changes" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;