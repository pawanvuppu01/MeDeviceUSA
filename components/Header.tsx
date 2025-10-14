"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/integrated-solutions" },
    { name: "Training", path: "/training" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold text-blue-800">
          MeDeviceUSA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-gray-700 hover:text-blue-800 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-800 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="bg-white border-t shadow-inner md:hidden">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="block px-6 py-3 text-gray-700 hover:bg-blue-50"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
