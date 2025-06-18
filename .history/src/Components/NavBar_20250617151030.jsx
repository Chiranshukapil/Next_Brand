import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  {
    name: "Product",
    href: "#product",
    dropdown: [
      { name: "Overview", href: "#product-overview" },
      { name: "Features", href: "#product-features" },
      { name: "Pricing", href: "#product-pricing" },
    ],
  },
  {
    name: "Solutions",
    href: "#solutions",
    dropdown: [
      { name: "For Teams", href: "#solutions-teams" },
      { name: "For Individuals", href: "#solutions-individuals" },
    ],
  },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <>
      <nav className="navbar shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-90 transition-all duration-300">
        {/* Logo */}
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl font-bold tracking-tight flex items-center gap-2 hover:text-indigo-600 transition-colors">
            <span className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-indigo-400 rounded-full text-white flex items-center justify-center font-bold shadow-md">
              N
            </span>
            <span>NextBrand</span>
          </a>
        </div>
        {/* Desktop Nav */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                onMouseEnter={() => setDropdownOpen(index)}
                onMouseLeave={() => setDropdownOpen(null)}
                className="relative"
              >
                {link.dropdown ? (
                  <>
                    <a
                      href={link.href}
                      className="text-base font-medium flex items-center gap-1 cursor-pointer text-white/80 hover:text-indigo-600 transition-colors"
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen === index}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </a>
                    {dropdownOpen === index && (
                      <ul className="absolute top-full left-0 mt-1 bg-gray-200 shadow-lg rounded-box p-2 w-48 z-50 transition-all duration-200 ease-in-out">
                        {link.dropdown.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="block px-3 py-1 rounded hover:bg-indigo-50 text-gray-800 transition"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="text-base font-medium text-white/80 hover:text-indigo-600 transition"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* CTA & Hamburger */}
        <div className="navbar-end">
          <a href="#" className="btn btn-primary font-semibold shadow hidden md:inline-flex">
            Get Started
          </a>
          {/* Hamburger for mobile */}
          <button
            aria-label="Toggle menu"
            className="btn btn-ghost md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-6 w-6 text-indigo-600" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            onClick={() => setMenuOpen(false)}
          />
          {/* Slide-in menu */}
          <div
            className={`
              relative bg-white w-72 max-w-full h-full shadow-lg rounded-l-xl p-6 flex flex-col gap-2 z-50
              transition-all duration-300 ease-in-out
              translate-x-0 opacity-100
            `}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-xl flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-indigo-400 rounded-full text-white flex items-center justify-center font-bold shadow-md">
                  N
                </span>
                NextBrand
              </span>
              <button
                aria-label="Close menu"
                className="btn btn-ghost"
                onClick={() => setMenuOpen(false)}
              >
                <X className="h-7 w-7 text-indigo-600" />
              </button>
            </div>
            <ul className="flex-1 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.dropdown ? (
                    <details>
                      <summary className="text-base cursor-pointer flex items-center justify-between text-gray-800">
                        {link.name}
                      </summary>
                      <ul className="p-2">
                        {link.dropdown.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="text-base text-gray-800"
                              onClick={() => setMenuOpen(false)}
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <a
                      href={link.href}
                      className="text-base text-gray-800"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="btn btn-primary w-full mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </>
  );
}
