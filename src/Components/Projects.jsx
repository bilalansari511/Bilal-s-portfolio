import { ExternalLink } from "lucide-react";

function Projects({ isDark }) {
  const projectData = [
    {
      title: "E-Commerce Website",
      desc: "Modern and responsive e-commerce frontend featuring product listing, categories, and clean UI design.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://bilalansari511.github.io/Shopify-Ecommerce/",
    },
    {
      title: "Calculator App",
      desc: "A fast and interactive calculator built using React hooks with smooth UI and accurate calculations.",
      tech: ["React", "JavaScript", "Hooks"],
      link: "https://bilalansari511.github.io/react-calculator/",
    },
  ];

  return (
    <div
      className={`min-h-screen px-6 py-12
      ${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="text-gray-400 mt-2">
          Showcasing some of my best frontend work
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectData.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-7 rounded-2xl cursor-pointer
              transition-all duration-300 hover:-translate-y-2
              ${isDark
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white shadow-lg hover:shadow-2xl"}`}
          >
            {/* External Icon */}
            <div className="flex justify-end mb-2">
              <ExternalLink
                size={20}
                className="text-gray-400 group-hover:text-yellow-400"
              />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold mb-3">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold bg-yellow-400 text-black px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
