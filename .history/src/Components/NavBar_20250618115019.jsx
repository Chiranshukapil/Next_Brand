import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

// Route-based navLinks
const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Product",
    href: "/product",
    dropdown: [
      { name: "Overview", href: "/product/overview" },
      { name: "Features", href: "/product/features" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    dropdown: [
      { name: "For Teams", href: "/solutions/teams" },
      { name: "For Individuals", href: "/solutions/individuals" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-br from-gray-900 via-gray-950 to-indigo-950 backdrop-blur-md bg-oy-80 shadow-lg flex justify-between items-center px-6 py-3">
      {/* Brand/Logo */}
      <div className="navbar-start">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors"
        >
          <span className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-indigo-400 rounded-full text-white flex items-center justify-center font-bold shadow-md">
            N
          </span>
          <span>NextBrand</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="flex gap-2 items-center">
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              onMouseEnter={() => setDropdownOpen(index)}
              onMouseLeave={() => setDropdownOpen(null)}
              className="relative"
            >
              {link.dropdown ? (
                <>
                  <Link
                    to={link.href}
                    className="px-4 py-2 rounded-lg text-base font-medium flex items-center gap-1 cursor-pointer text-indigo-100 hover:text-white hover:bg-indigo-700/30 transition-colors"
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen === index}
                    onClick={() => setDropdownOpen(null)}
                  >
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  {dropdownOpen === index && (
                    <ul className="absolute top-full left-0 mt-2 bg-white/95 shadow-xl rounded-xl p-2 w-52 z-50 animate-fade-in">
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 rounded-lg hover:bg-indigo-100 text-gray-900 font-medium transition"
                            onClick={() => setDropdownOpen(null)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={link.href}
                  className="px-4 py-2 rounded-lg text-base font-medium text-indigo-100 hover:text-white hover:bg-indigo-700/30 transition"
                  onClick={() => setDropdownOpen(null)}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side: CTA + Mobile Menu Button */}
      <div className="navbar-end flex items-center">
        <Link
          to="/get-started"
          className="btn btn-primary font-semibold shadow hidden md:inline-flex bg-indigo-600 text-white hover:bg-indigo-700 border-none rounded-lg px-6 py-2 transition"
        >
          Get Started
        </Link>
        <button
          aria-label="Toggle menu"
          className="btn btn-ghost md:hidden ml-2 text-indigo-200"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full right-2 left-2 z-40 md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/95 rounded-xl shadow-lg ${
            menuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul tabIndex={0} className="flex flex-col gap-1 p-3 w-full">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.dropdown ? (
                  <details>
                    <summary className="text-base cursor-pointer flex items-center justify-between text-gray-900 font-semibold px-2 py-2 rounded-lg hover:bg-indigo-100 transition">
                      {link.name}
                    </summary>
                    <ul className="p-2">
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 rounded-lg text-gray-900 hover:bg-indigo-100 transition"
                            onClick={() => setMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    to={link.href}
                    className="block px-4 py-2 rounded-lg text-gray-900 font-semibold hover:bg-indigo-100 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="mt-2">
              <Link
                to="/get-started"
                className="btn btn-primary w-full bg-indigo-600 text-white hover:bg-indigo-700 border-none rounded-lg px-6 py-2 transition"
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
