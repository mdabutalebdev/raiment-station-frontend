"use client";

import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import ProductCard from "./ProductCard";

const NewArrivel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/TShirtData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section className="py-10">
      <div className="container mx-auto px-20">
        <Heading title="New Arrivals" />
        <div className="pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivel;
