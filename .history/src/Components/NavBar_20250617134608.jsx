import React, { useState } from "react";

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
  { name: "Developers", href: "#developers" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

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
            {/* Minimal hamburger icon using unicode */}
            {menuOpen ? "✕" : "☰"}
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
                {link.dropdown ? (
                  <details>
                    <summary className="text-base cursor-pointer">
                      {link.name}
                    </summary>
                    <ul className="p-2">
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base"
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
                    className="text-base"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
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
          {/* Minimal logo: just text with colored background circle */}
          <span className="w-8 h-8 bg-indigo-600 rounded-full text-white flex items-center justify-center font-bold">
            N
          </span>
          <span className="ml-2">NextBrand</span>
        </a>
      </div>
      {/* Center: Desktop Nav Links */}
      <div className="navbar-center hidden lg:flex">
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
                    className="text-base font-medium flex items-center gap-1 cursor-pointer"
                  >
                    {link.name}
                    <span className="text-xs">▼</span>
                  </a>
                  {dropdownOpen === index && (
                    <ul className="absolute top-full left-0 mt-1 bg-base-100 shadow rounded-box p-2 w-48 z-50">
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="block px-3 py-1 rounded hover:bg-indigo-50"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a href={link.href} className="text-base font-medium">
                  {link.name}
                </a>
              )}
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
