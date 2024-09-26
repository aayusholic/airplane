import React, { useState } from "react";

const ProductCard = ({ product, updateProductQuantity }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    updateProductQuantity(product.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      updateProductQuantity(product.id, quantity - 1);
    }
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} width={500} height={150} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: Rs{product.price}</p>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default ProductCard;
