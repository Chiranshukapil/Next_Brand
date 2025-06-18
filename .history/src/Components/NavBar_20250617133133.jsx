import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Product", href: "#product" },
  { name: "Solutions", href: "#solutions" },
  { name: "Developers", href: "#devleopers" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar bg-base-100 shadow-sm sticky top-0 z-50 transition-all duration-300">
      {/* Start: Logo & Hamburger */}
      <div className="navbar-start">
        {/* Hamburger for mobile */}
        <div className="dropdown lg:hidden">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                // X icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </label>
          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 transition-all duration-300 ease-in-out ${
              menuOpen
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-base"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#"
                className="btn btn-primary w-full"
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
        {/* Logo */}
        <a className="btn btn-ghost text-xl font-bold tracking-tight">
          <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#6366f1" />
            <text x="16" y="22" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">N</text>
          </svg>
          <span className="ml-2">NextBrand</span>
        </a>
      </div>
      {/* Center: Desktop Nav Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-base font-medium">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* End: CTA Button */}
      <div className="navbar-end hidden lg:flex">
        <a href="#" className="btn btn-primary font-semibold shadow">
          Get Started
        </a>
      </div>
    </nav>
  );
}
