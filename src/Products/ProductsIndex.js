import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
// import data
import { listProducts } from "./ProductsService";

const ProductsIndex = () => {
  const [products, setProducts] = useState(null);

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
