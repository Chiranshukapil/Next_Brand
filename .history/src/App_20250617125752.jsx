import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-indigo-600">
              MyLogo
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="hover:text-indigo-600">
              Features
            </a>
            <a href="#pricing" className="hover:text-indigo-600">
              Pricing
            </a>
            <a href="#docs" className="hover:text-indigo-600">
              Docs
            </a>
            <a href="#about" className="hover:text-indigo-600">
              About
            </a>
            <a
              href="#get-started"
              className="btn btn-primary bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          transform
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
          transition-all duration-300 ease-in-out
          bg-white shadow-md
        `}
      >
        <div className="px-2 pt-2 pb-4 space-y-1">
          <a
            href="#features"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
          >
            Pricing
          </a>
          <a
            href="#docs"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
          >
            Docs
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#get-started"
            className="block w-full text-center btn btn-primary bg-indigo-600 text-white hover:bg-indigo-700 mt-2"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
