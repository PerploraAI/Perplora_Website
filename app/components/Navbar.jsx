"use client";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { MenuIcon, XIcon } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking anywhere outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".mobile-menu") && !event.target.closest(".menu-button")) {
        setMenuOpen(false);
      }
    };
    
    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <nav className="bg-primary shadow-xl">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 md:px-12 lg:px-24">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <a href="#about" className="text-white text-xl hover:scale-105  font-bold transiton ease-in-out hover:text-black transition ease-in-out">
            About Us
          </a>
          <a className="text-white text-xl hover:scale-105  font-bold transiton ease-in-out hover:text-black" href="#products"> Products </a>
          <a className="text-white text-xl hover:scale-105  font-bold transiton ease-in-out hover:text-black" href="#services"> Services </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu-button md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed inset-x-0 top-16 bg-white shadow-lg z-50 p-5 transition-all duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="block text-black text-lg hover:text-primary transition ease-in-out"
        >
          About Us
        </a>

        <a
          href="#products"
          onClick={() => setMenuOpen(false)}
          className="block text-black text-lg hover:text-primary transition ease-in-out"
        >
          Products
        </a>

        <a
          href="#services"
          onClick={() => setMenuOpen(false)}
          className="block text-black text-lg hover:text-primary transition ease-in-out"
        >
          Services
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
