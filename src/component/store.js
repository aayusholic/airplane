import React from "react";

const Store = ({ products }) => {
  return (
    <div className="store">
      <h1>Store Inventory</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Quantity: {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Store;
