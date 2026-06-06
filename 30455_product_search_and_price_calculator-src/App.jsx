import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import ProductItem from "./ProductItem";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 1000 },
    { id: 3, name: "Keyboard", price: 2000 },
    { id: 4, name: "Monitor", price: 12000 },
  ]);

  const [search, setSearch] = useState("");

  const searchRef = useRef(null);

  // Update title with search text
  useEffect(() => {
    document.title = `Search: ${search}`;
  }, [search]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  // Total price
  const totalPrice = useMemo(() => {
    return filteredProducts.reduce(
      (sum, product) => sum + product.price,
      0
    );
  }, [filteredProducts]);

  // useCallback
  const removeProduct = useCallback((id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  }, []);

  return (
    <div>
      <h1>Product Search and Price Calculator</h1>

      <input
        ref={searchRef}
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => searchRef.current.focus()}>
        Focus Search
      </button>

      <h3>Total Price: ₹{totalPrice}</h3>

      <ul>
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onRemove={removeProduct}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;