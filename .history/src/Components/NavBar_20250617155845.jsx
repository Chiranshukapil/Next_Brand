import React, { useState, useEffect } from "react";
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
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setMenuVisible(true); // Show instantly when opened
    } else {
      // Delay hiding after animation
      const timeout = setTimeout(() => setMenuVisible(false), 300); // match your transition duration
      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  return (
    <nav className="navbar shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-90 transition-all duration-300">
      {/* ...start & center same as before... */}

      {/* Right Section: CTA & Mobile Menu */}
      <div className="navbar-end">
        <a href="#" className="btn btn-primary font-semibold shadow hidden md:inline-flex">
          Get Started
        </a>

        {/* Hamburger Icon */}
        <div className="dropdown md:hidden">
          <button
            aria-label="Toggle menu"
            className="btn btn-ghost md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-indigo-600" />
            ) : (
              <Menu className="h-6 w-6 text-indigo-600" />
            )}
          </button>

          {/* Mobile Menu with Smooth Close */}
          {menuVisible && (
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-white rounded-box w-56 right-0 left-auto transition-all duration-300 ease-in-out transform origin-top ${
                menuOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
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
          )}
        </div>
      </div>
    </nav>
  );
}
