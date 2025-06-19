import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Product",
    dropdown: [
      { name: "Overview", href: "/product/overview" },
      { name: "Features", href: "/product/features" },
    ],
  },
  {
    name: "Solutions",
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
    <nav className="sticky top-0 z-50 bg-gradient-to-br from-gray-900 via-gray-950 to-indigo-950 backdrop-blur-md bg-opacity-80 border-b border-indigo-800/30 shadow-lg flex justify-between items-center md:px-6 py-3">
      
      <div className="navbar-start">
        <Link
          to="/"
          className="btn btn-ghost text-xl font-bold tracking-tight flex items-center gap-2 hover:text-indigo-500 transition-colors"
        >
          <span className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-indigo-400 rounded-full text-white flex items-center justify-center font-bold shadow-md">
            N
          </span>
          <span>NextBrand</span>
        </Link>
      </div>

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
                  <Link
                    to={link.href}
                    className="text-base font-medium flex items-center gap-1 cursor-pointer text-white/80 hover:text-indigo-500 transition-colors"
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen === index}
                    onClick={() => setDropdownOpen(null)}
                  >
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  {dropdownOpen === index && (
                    <ul className="absolute top-full left-0 mt-1 bg-gray-200 shadow-lg rounded-box p-2 w-48 z-50 animate-fade-in">
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="block px-3 py-1 rounded hover:bg-indigo-50 text-gray-800 transition"
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
                  className="text-base font-medium text-white/80 hover:text-indigo-500 transition"
                  onClick={() => setDropdownOpen(null)}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end flex items-center">
        <Link
          to="/get-started"
          className="btn btn-primary font-semibold shadow hidden md:inline-flex"
        >
          Get Started
        </Link>
        <button
          aria-label="Toggle menu"
          className="btn btn-ghost md:hidden ml-2"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-indigo-600" />
          ) : (
            <Menu className="h-6 w-6 text-indigo-600" />
          )}
        </button>

        <div
          className={`absolute top-full right-2 left-2 z-40 md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-box shadow-lg ${
            menuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul tabIndex={0} className="menu menu-sm p-2 w-full">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.dropdown ? (
                  <details>
                    <summary className="text-base cursor-pointer flex items-center justify-between text-gray-800">
                      <Link
                        to={link.href}
                        className="flex items-center gap-1"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </summary>
                    <ul className="p-2">
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="text-base text-gray-800"
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
                    className="text-base text-gray-800"
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
                className="btn btn-primary w-full"
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
