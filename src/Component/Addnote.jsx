import React from "react";

function Addnote() {
  return (
    <header className="bg-blue-600 text-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">MyLogo</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-gray-200">
            Home
          </a>
          <a href="#about" className="hover:text-gray-200">
            About
          </a>
          <a href="#services" className="hover:text-gray-200">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-200">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white hover:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Addnote;
