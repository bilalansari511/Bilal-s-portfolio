function Contact({ isDark }) {
  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4
      ${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}
    >
      <div
        className={`max-w-3xl w-full p-8 rounded-2xl transition
        ${
          isDark
            ? "bg-gray-800 shadow-lg shadow-black/40"
            : "bg-white shadow-xl"
        }`}
      >
        <h1 className="text-3xl font-bold text-center mb-2">Get In Touch</h1>
        <p className="text-center text-gray-400 mb-8">
          Feel free to contact me for any project or collaboration
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className={`w-full px-4 py-3 rounded-md outline-none transition
                ${
                  isDark
                    ? "bg-gray-700 focus:ring-2 focus:ring-yellow-400"
                    : "bg-gray-100 focus:ring-2 focus:ring-yellow-400"
                }`}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-3 rounded-md outline-none transition
                ${
                  isDark
                    ? "bg-gray-700 focus:ring-2 focus:ring-yellow-400"
                    : "bg-gray-100 focus:ring-2 focus:ring-yellow-400"
                }`}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className={`w-full px-4 py-3 rounded-md outline-none resize-none transition
                ${
                  isDark
                    ? "bg-gray-700 focus:ring-2 focus:ring-yellow-400"
                    : "bg-gray-100 focus:ring-2 focus:ring-yellow-400"
                }`}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded-md font-semibold
                       hover:bg-yellow-500 transition transform hover:scale-[1.02]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
