import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
// import data
import { listProducts } from "./ProductsService";

import { useLocation } from "react-router";

const ProductsIndex = () => {
  const { state } = useLocation();
  console.log(location);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (state) {
      console.warn(`Nothing found for ${state.id}`);
    }
  });

  useEffect(() => {
    (async () => {
      const data = await listProducts();
      //   console.log(data);
      setProducts(data);
    })();
  }, []);

  if (products === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map((item) => (
        <ProductCard product={item} key={item.name} />
      ))}
    </div>
  );
};

export default ProductsIndex;
