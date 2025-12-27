import { Link } from "react-router-dom";

function Home({ isDark }) {
  return (
    <div
      className={`min-h-screen flex items-center
      ${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full
            bg-yellow-400 text-black font-semibold">
             Welcome to my portfolio
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            I'm{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500
              bg-clip-text text-transparent">
              Mohammad Bilal
            </span>
          </h1>

          {/* Role */}
          <h2 className="mt-4 text-xl md:text-2xl text-gray-400">
            Frontend React.js Developer
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
            BSc Computer Science graduate passionate about crafting
            <span className="text-yellow-400 font-medium"> clean UI</span>,
            responsive layouts, and modern web applications using
            <span className="text-yellow-400 font-medium"> React.js</span>.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="px-7 py-3 rounded-md bg-yellow-400 text-black
              font-semibold shadow-lg hover:bg-yellow-500
              transition transform hover:-translate-y-1"
            >
               View Projects
            </Link>

            <Link
              to="/contact"
              className="px-7 py-3 rounded-md border border-yellow-400
              font-semibold hover:bg-yellow-400 hover:text-black
              transition transform hover:-translate-y-1"
            >
              ✉️ Contact Me
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div
            className="relative w-72 h-72 rounded-2xl p-1
            bg-gradient-to-tr from-yellow-400 to-orange-500"
          >
            <div
              className={`w-full h-full rounded-2xl overflow-hidden
              ${isDark ? "bg-gray-800" : "bg-white"}`}
            >
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
