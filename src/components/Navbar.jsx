"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosGitCompare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="py-5">
      <div className=" shadow bg-white">
        <div className="flex items-center justify-between container mx-auto px-20">
          <div className="flex items-center gap-10">
            {/* <Image 
                  src=""
                /> */}
            <Link href="/" className="">
            <div className=" ">
              <h3 className="font-bold text-3xl">Ratex BD</h3>
            
            </div>
            </Link>
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
                  className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
           
           
            <div className="h-10 w-10 border border-gray-700 rounded-full">
              <FiUser className="flex items-center justify-center h-10 w-5 mx-auto" />
            </div>
             <div className="h-10 w-10 border border-gray-700 rounded-full">
              <CiHeart className="flex items-center justify-center h-10 w-5 mx-auto" />
            </div>
            <div className="h-10 w-24 px-2 flex items-center border border-gray-500 rounded-xl">
              <FiShoppingCart className="flex items-center justify-center w-5 h-10 mx-auto" />
              <p>560.00 </p>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-300 pt-4"></div>
        <div className="flex gap-8 py-5 items-center justify-center container mx-auto px-20">
          <Link href="/">Home</Link>
          <Link href="/">Shop Now</Link>
         
          <Link href="/shirts">Combos</Link>
          <Link href="/accessories">Accessories</Link>
          <Link href="/accessories">Size Guide</Link>
          <Link href="/accessories">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
