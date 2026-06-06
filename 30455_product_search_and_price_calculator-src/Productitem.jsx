import React from "react";

function ProductItem({ product, onRemove }) {
  return (
    <li>
      {product.name} - ₹{product.price}
      <button onClick={() => onRemove(product.id)}>
        Remove
      </button>
    </li>
  );
}

export default React.memo(ProductItem);