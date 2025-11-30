import React from "react";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products added</p>
      ) : (
        <table
          border="1"
          width="100%"
          cellPadding="10"
          style={{ borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>
                  <img src={p.image} alt="" width="60" />
                </td>
                <td>{p.name}</td>
                <td>₹{p.price}</td>
                <td>{p.category}</td>
                <td>
                  <button
                    onClick={() => onEdit(p)}
                    style={{
                      padding: "5px 10px",
                      marginRight: "5px",
                      background: "orange",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(p.id)}
                    style={{
                      padding: "5px 10px",
                      background: "red",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;
