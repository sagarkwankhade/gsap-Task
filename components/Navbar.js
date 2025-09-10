import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 shadow-2xl py-3"
          : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="/"
            className="text-white font-extrabold text-2xl tracking-wide hover:scale-105 transform transition"
          >
            MyProduct
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-white font-medium">
            <a href="/" className="hover:text-pink-300 transition">
              Home
            </a>
            <a href="#features" className="hover:text-pink-300 transition">
              Features
            </a>
            <a href="#about" className="hover:text-pink-300 transition">
              About
            </a>
            <a href="#contact" className="hover:text-pink-300 transition">
              Contact
            </a>

            {/* Buttons */}
            <a
              href="/signin"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white shadow transition"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white shadow transition"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <span className="text-2xl">✖</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-4 space-y-3 text-white font-medium">
          <a href="/" className="block hover:text-pink-300 transition">
            Home
          </a>
          <a href="#features" className="block hover:text-pink-300 transition">
            Features
          </a>
          <a href="#about" className="block hover:text-pink-300 transition">
            About
          </a>
          <a href="#contact" className="block hover:text-pink-300 transition">
            Contact
          </a>
          <a
            href="/signin"
            className="block px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white shadow transition"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="block px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white shadow transition"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
}
