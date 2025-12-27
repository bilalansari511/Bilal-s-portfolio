import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function Layout() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `hover:text-yellow-300 transition ${
      isActive ? "text-yellow-400" : ""
    }`;

  return (
    <>
      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 shadow-lg
        ${isDark ? "bg-gray-900 text-white" : "bg-indigo-600 text-white"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="text-xl font-bold">
            Mohammad Bilal
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="bg-gray-400 text-black px-3 py-2 rounded-md font-semibold"
            >
              {isDark ? "☀" : "🌙"}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`md:hidden px-6 pb-4 space-y-3 font-medium
            ${isDark ? "bg-gray-800" : "bg-indigo-700"}`}
          >
            <NavLink onClick={() => setMenuOpen(false)} to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>
        )}
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home isDark={isDark} />} />
        <Route path="/about" element={<About isDark={isDark} />} />
        <Route path="/projects" element={<Projects isDark={isDark} />} />
        <Route path="/contact" element={<Contact isDark={isDark} />} />
      </Routes>
    </>
  );
}

export default Layout;
