"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const FeaturedCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/data/CategoryData.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section className="py-10 bg-[#F4F2EE]">
      <div className="container mx-auto px-6 lg:px-20">
        <h3 className="text-5xl font-bold  ">Featured Categories</h3>
        <p className="text-base font-normal pt-3 text-gray-600">Explore our most popular categories handpicked for you</p>
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center">
              {/* Circle Image */}
              <div className="h-50 w-50 mt-10 rounded-full overflow-hidden bg-gray-50 relative">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-content"
                />
              </div>

              {/* Category Name & Products */}
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-lg">{category.name}</h3>
                <p className="text-gray-500 text-sm">
                  {category.products} Products
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategory;
