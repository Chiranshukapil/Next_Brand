import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// Fade-in animation for dropdowns (add this to your global CSS or Tailwind config)
const fadeInStyle = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px);}
  to { opacity: 1; transform: translateY(0);}
}
.animate-fade-in {
  animation: fadeIn 0.18s cubic-bezier(.4,0,.2,1) both;
}
`;

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
    <>
      {/* Inject fade-in animation style */}
      <style>{fadeInStyle}</style>
      <nav className="navbar shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-90 transition-all duration-300">
        {/* Start: Logo & Hamburger */}
        <div className="navbar-start">
          {/* Hamburger for mobile */}
          <div className="dropdown lg:hidden">
            <button
              aria-label="Toggle menu"
              className="btn btn-ghost lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? (
                <X className="h-6 w-6 text-indigo-600" />
              ) : (
                <Menu className="h-6 w-6 text-indigo-600" />
              )}
            </button>
            {/* Mobile Menu */}
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 p-2 shadow-lg transparent rounded-box w-56 transition-all duration-300 ease-in-out ${
                menuOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
              style={{
                transform: menuOpen ? "scale(1)" : "scale(0.95)",
                opacity: menuOpen ? 1 : 0,
                pointerEvents: menuOpen ? "auto" : "none",
              }}
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.dropdown ? (
                    <details>
                      <summary className="text-base cursor-pointer flex items-center justify-between font-medium text-gray-800">
                        {link.name} <ChevronDown className="h-4 w-4 ml-1" />
                      </summary>
                      <ul className="p-2">
                        {link.dropdown.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="text-base text-white/80"
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
          </div>
          {/* Logo */}
          <a className="btn btn-ghost text-xl font-bold tracking-tight flex items-center gap-2 hover:text-indigo-600 transition-colors">
            <span className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-indigo-400 rounded-full text-white flex items-center justify-center font-bold shadow-md">
              N
            </span>
            <span>NextBrand</span>
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
                      className="text-base font-medium flex items-center gap-1 cursor-pointer text-gray-800 hover:text-indigo-600 transition-colors"
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen === index}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </a>
                    {dropdownOpen === index && (
                      <ul className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-box p-2 w-48 z-50 animate-fade-in">
                        {link.dropdown.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="block px-3 py-1 rounded hover:bg-indigo-50 text-white/80 transition-colors"
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
                    className="text-base font-medium text-gray-800 hover:text-indigo-600 transition-colors"
                  >
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
    </>
  );
}
