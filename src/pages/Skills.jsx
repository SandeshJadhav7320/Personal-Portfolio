// src/components/Skills.jsx

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaReact, FaJava, FaGithub, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiMysql } from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "HTML & CSS", icon: "💻" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "REST APIs", icon: "🔗" },
      ],
    },
    {
      title: "Tools & Database",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Git & GitHub", icon: <FaGithub /> },
        { name: "Database Design", icon: <FaDatabase /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="pt-6 pb-6 min-h-screen bg-darkBlue text-white px-6 flex items-center justify-center"
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
          Skills
        </motion.h2>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.05}
                transitionSpeed={250}
                className="rounded-xl"
              >
                <div className="bg-[#112240] p-6 rounded-xl shadow-lg border border-cyan-600 hover:shadow-cyan-500/30 transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-gray-200"
                      >
                        <span className="text-cyan-400 text-lg">{skill.icon}</span>
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
