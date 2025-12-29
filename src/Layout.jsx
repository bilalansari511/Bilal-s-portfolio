import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function Layout() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 shadow-lg relative
        ${isDark ? "bg-gray-900 text-white" : "bg-indigo-600 text-white"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="text-xl font-bold">
            Mohammad Bilal
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-yellow-300 transition ${
                  isActive ? "text-yellow-400" : ""
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-yellow-300 transition ${
                  isActive ? "text-yellow-400" : ""
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `hover:text-yellow-300 transition ${
                  isActive ? "text-yellow-400" : ""
                }`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-yellow-300 transition ${
                  isActive ? "text-yellow-400" : ""
                }`
              }
            >
              Contact
            </NavLink>
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
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`md:hidden absolute top-full left-0 w-full shadow-lg
            ${isDark ? "bg-gray-900 text-white" : "bg-indigo-700 text-white"}`}
          >
            <ul className="flex flex-col divide-y divide-gray-700 font-medium">

              {["/", "/about", "/projects", "/contact"].map((path, index) => {
                const labels = ["Home", "About", "Projects", "Contact"];
                return (
                  <li key={path}>
                    <NavLink
                      to={path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-6 py-4 transition
                        hover:bg-yellow-400 hover:text-black
                        ${isActive ? "bg-yellow-400 text-black" : ""}`
                      }
                    >
                      {labels[index]}
                    </NavLink>
                  </li>
                );
              })}

            </ul>
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
