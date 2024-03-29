import React from "react";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Furniro from "../../../public/assets/all-image/logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between items-center px-4 py-2 mx-[96px] ">
      {/* Left section */}
      <div className="flex items-center">
        {/* Logo and company name */}
        <Image src={Furniro} alt="Furniro" className="h-8 mr-2" />
        <span className="text-[34px] font-bold">Furniro</span>
      </div>

      {/* Center section */}
      <ul className="flex justify-center space-x-6">
        <li>
          <Link href="#" className="text-gray-600 hover:text-black">
            Home
          </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-600 hover:text-black">
            Shop
          </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-600 hover:text-black">
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-600 hover:text-black">
            Contact
          </Link>
        </li>
      </ul>

      {/* Right section */}
      <div className="flex items-center space-x-8">
        <FaUser className="text-gray-600 hover:text-black" />
        <FaSearch className="text-gray-600 hover:text-black" />
        <FaHeart className="text-gray-600 hover:text-black" />
        <FaShoppingCart className="text-gray-600 hover:text-black" />
      </div>
    </nav>
  );
};

export default Navbar;
