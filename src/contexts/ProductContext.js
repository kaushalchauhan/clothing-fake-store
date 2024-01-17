import React, { createContext, useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);
  if (loading) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
