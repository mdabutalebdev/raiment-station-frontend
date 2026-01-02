import Image from 'next/image';
import React from 'react';

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-white text-black shadow-md overflow-hidden max-w-xs mx-auto   transition-shadow duration-300">
      
      {/* Product Image */}
      <div className="relative w-[320px] h-64 bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-105 rounded-md "
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col justify-between h-40">
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 font-medium mb-4">৳{price}</p>
        </div>

        {/* Button */}
        <button className="bg-black text-white w-full py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
