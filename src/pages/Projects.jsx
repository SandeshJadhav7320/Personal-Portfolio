// src/components/Projects.jsx

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React, Tailwind CSS, and Framer Motion for animations.",
      img: "https://via.placeholder.com/400x250", // Replace with your project image
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.com",
    },
    {
      title: "E-Commerce App",
      description:
        "A full-stack e-commerce application using React, Spring Boot, and MySQL with authentication & cart features.",
      img: "https://via.placeholder.com/400x250",
      github: "https://github.com/yourusername/ecommerce-app",
      demo: "#",
    },
    {
      title: "Chat Application",
      description:
        "A real-time chat app built with React, Node.js, and Socket.IO for instant messaging.",
      img: "https://via.placeholder.com/400x250",
      github: "https://github.com/yourusername/chat-app",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="pt-12 pb-16 bg-darkBlue text-white px-6 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full text-center space-y-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-cyan-300"
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#112240] rounded-xl shadow-lg border border-cyan-600 overflow-hidden"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left space-y-4">
                <h3 className="text-xl font-semibold text-cyan-400">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-white flex items-center gap-2"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-white flex items-center gap-2"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
