// src/components/Projects.jsx

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import portfolioHome from "../assets/PortfolioHome.png"; // adjust path
import carrerhome from "../assets/carrerhome.png";
import HosImg from "../assets/HspImg.png";


function Projects() {
  const projects = [
     
    {
      title: "Personal Portfolio",
      description:
        "A full-stack e-commerce application using React, Spring Boot, and MySQL with authentication & cart features.",
      img: portfolioHome,
      github: "https://github.com/SandeshJadhav7320/Personal-Portfolio",
      demo: "#",
    },
    {
      title: "Carrer Guidance",
      description:
        "The AI-Powered Career Guidance Platform is a web-based tool designed to help individuals make informed career decisions using artificial intelligence. It enables users to assess their strengths, explore suitable career paths, access learning resources, and discover job opportunities",
      img: carrerhome,
      github: "https://github.com/SandeshJadhav7320/Career-Guidance-Platform",
      demo: "https://career-guidance-platform.vercel.app/",
    },
    {
      title: "Hospital Managment System",
      description:
        "Hospital Management System is a software application used for hospital managment. It helps in managing patient records, appointments, view appointments,doctor schedules. The system typically allows users to easily access patient details and doctors details.",
      img: HosImg,
      github: "https://github.com/SandeshJadhav7320/SandeshJadhav7320-Hospital-Management-System",
      demo: "http://localhost:8080/Hospital_Manegament/",
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
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.05}
                transitionSpeed={250}
                className="rounded-xl"
              >
                <div className="bg-[#112240] rounded-xl shadow-lg border border-cyan-600 overflow-hidden hover:shadow-cyan-500/30 transition-shadow duration-300">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 text-left space-y-4">
                    <h3 className="text-xl font-semibold text-cyan-400">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {project.description}
                    </p>
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
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
