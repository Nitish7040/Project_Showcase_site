import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-blue-900 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <h2>Logo</h2>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-blue-300 transition duration-300"
              >
                Home
              </Link>
            </li>
         
            <li>
              <Link
                href="#"
                className="hover:text-blue-300 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-blue-300 transition duration-300"
              >
                Logout
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-blue-300 transition duration-300"
              >
                Username
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
