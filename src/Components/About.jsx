function About({ isDark }) {

  const skills = [
    { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Bootstrap", link: "https://getbootstrap.com/" },
    { name: "Tailwind", link: "https://tailwindcss.com/" },
    { name: "React.js", link: "https://react.dev/" }
  ];

  return (
    <div
      className={`min-h-screen flex items-center justify-center
      ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <div
        className={`max-w-4xl p-8 rounded-xl
        ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
      >
        <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>

        <p className="mb-4">
          I am a <b>BSc Computer Science graduate</b> and a passionate
          <b> Frontend React.js Developer</b>.
        </p>

        <p className="mb-6">
          I love creating clean UI, responsive layouts, and modern web
          applications using React.
        </p>

        <h2 className="text-xl font-semibold mb-3">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {skills.map(skill => (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-yellow-400 text-black rounded-full text-sm
                         hover:bg-yellow-500 transition cursor-pointer"
            >
              {skill.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
