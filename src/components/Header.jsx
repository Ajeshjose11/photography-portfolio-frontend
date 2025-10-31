import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#1e293b] text-white py-9 px-8 flex justify-between items-center relative z-50">
      <h1 className="text-xl font-semibold tracking-wide">Robert Lean</h1>

      <nav className="flex gap-8">
        <a href="/" className="hover:text-blue-400">Home</a>
        <a href="/about" className="hover:text-blue-400">About</a>
        <a href="/portfolio" className="hover:text-blue-400">Portfolio</a>
        <a href="/gallery" className="hover:text-blue-400">Gallery</a>
        <a href="/services" className="hover:text-blue-400">Services</a>
        <a href="/contact" className="hover:text-blue-400">Contact</a>
      </nav>

      <div className="flex items-center gap-4">
        <Link to="/">
          <button className="bg-red-500 hover:bg-red-600 px-4 py-1 text-white transition-transform duration-300 hover:scale-105">
            Log Out
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
