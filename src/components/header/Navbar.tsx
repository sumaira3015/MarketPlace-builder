"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  // State to manage whether the mobile menu is open.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to manage whether the "Pages" dropdown menu is open.
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggles the mobile menu open/close state.
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/allproducts", label: "Product" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="border-t border-b border-gray-200">
      <div className="bg-white p-4 flex items-center justify-between max-w-[1920px] mx-auto h-[74px]">
        <div className="hidden sm:flex space-x-8 lg:space-x-12 items-center pl-6">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-[#272343] hover:text-[#029FAE]"
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-lg font-medium text-[#272343] hover:text-[#029FAE]"
            >
              Pages
            </button>

            {isDropdownOpen && (
              <ul className="absolute top-full mt-2 bg-white text-black rounded-lg shadow-lg w-40 z-10">
                {navLinks.slice(3).map((link) => (
                  <li key={link.href} className="hover:bg-gray-100">
                    <Link href={link.href} className="block px-4 py-2 text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="items-center space-x-8 lg:space-x-12">
          <Link
            href="/contact"
            className="text-lg font-medium text-[#272343] hover:text-[#029FAE]"
          >
            Contact
          </Link>
          <span className="text-sm sm:text-base md:text-lg lg:text-md font-medium text-[#272343]">
            (808) 555-0111
          </span>
        </div>

        {/* Mobile menu toggle button */}
        <div className="sm:hidden flex justify-end">
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
      </div>

      {/* Mobile menu (visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 sm:hidden">
          <div className="absolute top-0 left-0 right-0 bg-white p-4 flex flex-col space-y-6">
            <button
              onClick={toggleMenu}
              className="text-right text-2xl text-[#272343] mb-4"
            >
              <div className="w-6 h-6 flex items-center justify-center bg-[#272343] rounded-md">
                <span className="text-white text-2xl font-bold">X</span>
              </div>
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#272343] hover:text-[#029FAE]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
