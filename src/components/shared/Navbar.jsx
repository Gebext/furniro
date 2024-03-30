"use client";

import React, { useState } from "react";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Furniro from "../../../public/assets/all-image/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpenSidebar, setIsOpenSideBar] = useState(false);

  return (
    <nav className="bg-white flex justify-between items-center px-4 py-2 mx-4 lg:mx-[96px]">
      {/* Left section */}
      <div className="flex items-center">
        {/* Logo and company name */}
        <Image src={Furniro} alt="Furniro" className="h-8 mr-2" />
        <span className="text-[34px] font-bold">Furniro</span>
      </div>

      {/* Center section */}
      <ul className="md:flex justify-center space-x-6 hidden">
        <li>
          <Link href="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
        </li>
        <li>
          <Link href="/shop" className="text-gray-600 hover:text-black">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-gray-600 hover:text-black">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-600 hover:text-black">
            Contact
          </Link>
        </li>
      </ul>

      {/* Right section */}
      <div className="flex items-center lg:space-x-8 space-x-4">
        <FaUser className="text-gray-600 hover:text-black " />
        <FaSearch className="text-gray-600 hover:text-black md:block hidden" />
        <FaHeart className="text-gray-600 hover:text-black md:block hidden" />
        <FaShoppingCart className="text-gray-600 hover:text-black" />
        <GiHamburgerMenu
          className="text-gray-600 hover:text-black md:hidden"
          onClick={() => setIsOpenSideBar(true)}
        />
      </div>

      {/* Sidebar */}
      {isOpenSidebar && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-64 bg-white shadow">
            <IoMdClose
              size={24}
              className="absolute top-4 right-4 text-gray-600 hover:text-black cursor-pointer"
              onClick={() => setIsOpenSideBar(false)}
            />
            <ul className="mt-12 text-center">
              <li className="py-4">
                <Link href="/" className="text-gray-600 hover:text-black">
                  Home
                </Link>
              </li>
              <li className="py-4">
                <Link href="/shop" className="text-gray-600 hover:text-black">
                  Shop
                </Link>
              </li>
              <li className="py-4">
                <Link href="/about" className="text-gray-600 hover:text-black">
                  About
                </Link>
              </li>
              <li className="py-4">
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-black"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
