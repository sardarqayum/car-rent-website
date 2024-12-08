import React from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-2 bg-white shadow-md border-b">
      {/* Left Section: Logo */}
      <div className="text-blue-600 text-2xl font-bold">MORENT</div>

      {/* Center Section: Search bar */}
      <div className=" mt-[40px] ml-[20px]  flex items-center w-[490px] px-4 py-2 border rounded-[70px] justify-between text-[14px] ">
        <CiSearch className="w-[24px] h-[24px] text-[#F5F5] " />
          <input
          type="text"
          placeholder="Search something here"
          className="w-full px-2 py-1  "
         />
          <div>
         <Image src="/1.png" alt="logo" width={1000} height={1000} className="w-[24px] h-[24px] " />
        </div> 
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-blue-600">
          ❤️
        </button>
        <button className="relative text-gray-600 hover:text-blue-600">
          🔔
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="text-gray-600 hover:text-blue-600">⚙️</button>
        <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
