"use client";

import { FC, useState } from "react";
import Link from "next/link"; 

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white p-4 flex items-center justify-between max-w-[1920px] mx-auto h-[74px]">
      <div className="flex space-x-8 lg:space-x-12 items-center pl-6 hidden sm:flex">
        <Link href="/" className="text-lg font-medium text-[#272343] hover:text-[#029FAE]">
          Home
        </Link>
        <Link href="/shop" className="text-lg font-medium text-[#272343] hover:text-[#029FAE]">
          Shop
        </Link>
        <Link href="/products" className="text-lg font-medium text-[#272343] hover:text-[#029FAE]">
          Product
        </Link>
        <Link href="/shop" className="text-lg font-medium text-[#272343] hover:text-[#029FAE]">
          Pages
        </Link>
        <Link href="/about" className="text-lg font-medium text-[#272343] hover:text-[#029FAE]">
          About
        </Link>
      </div>

      <div className="flex items-center space-x-8 lg:space-x-12">
        <Link href="/contact" className="text-1xl font-medium text-[#272343] hover:text-[#029FAE]">
          Contact
        </Link>
        <span className="text-1xl font-medium text-[#272343] hidden lg:block">
          (808) 555-0111
        </span>
      </div>

      {/* Mobile Navbar - Hamburger menu (hidden on large screens, shown on small screens only) */}
      <div className="sm:block lg:hidden">
        <button onClick={toggleMenu} className="text-[#272343]">
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-50">
          <div className="absolute top-0 left-0 right-0 bg-white p-4 flex flex-col space-y-4">
            <button
              onClick={toggleMenu}
              className="text-right text-2xl text-[#272343] mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Link href="/" className="text-sm font-medium text-[#272343] hover:text-[#029FAE]">
              Home
            </Link>
            <Link href="/shop" className="text-sm font-medium text-[#272343] hover:text-[#029FAE]">
              Shop
            </Link>
            <Link href="/products" className="text-sm font-medium text-[#272343] hover:text-[#029FAE]">
              Product
            </Link>
            <Link href="/pages" className="text-sm font-medium text-[#272343] hover:text-[#029FAE]">
              Pages
            </Link>
            <Link href="/about" className="text-sm font-medium text-[#272343] hover:text-[#029FAE]">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-[#272343] hover:text-[#029FAE]">
              Contact
            </Link>
            <span className="text-sm font-medium text-[#272343]">
              (808) 555-0111
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
