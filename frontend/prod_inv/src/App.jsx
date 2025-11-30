import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [search, setSearch] = useState("");

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const updateProduct = (updated) => {
    setProducts(products.map(p => p.id === updated.id ? updated : p));
    setEditingProduct(null);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>Product Inventory App</h1>

      <input
        type="text"
        placeholder="Search by name/category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "100%", marginBottom: "20px" }}
      />

      <ProductForm
        addProduct={addProduct}
        editingProduct={editingProduct}
        updateProduct={updateProduct}
      />

      <ProductList
        products={filteredProducts}
        onEdit={setEditingProduct}
        onDelete={deleteProduct}
      />
    </div>
  );
};

export default App;