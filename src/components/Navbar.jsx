"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosGitCompare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";


const Navbar = () => {
  const [query, setQuery] = useState("");
  return (
    <section>
      <div className="container mx-auto px-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* <Image 
                  src=""
                /> */}
          <h3 className="font-bold text-3xl">Raiment</h3>
          <div className="w-230">
            <div className="relative">
              {/* Search Icon */}
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <FiSearch size={18} />
              </span>

              {/* Input */}
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="h-10 w-10 border border-gray-500 rounded-full">
            <IoIosGitCompare className="flex items-center justify-center h-10 mx-auto"/>
          </div>
          <div className="h-10 w-10 border border-gray-500 rounded-full">
            <CiHeart className="flex items-center justify-center h-10 mx-auto"/>
           

          </div>
          <div className="h-10 w-10 border border-gray-500 rounded-full">
            <FiUser className="flex items-center justify-center h-10 mx-auto"/>
           

          </div>
          <div className="h-10 w-24 px-2 flex items-center border border-gray-500 rounded-xl">
            <FiShoppingCart className="flex items-center justify-center h-10 mx-auto"/>
            <p>560.00 </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Navbar;
