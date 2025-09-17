// src/components/Skills.jsx

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaReact, FaJava, FaGithub, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiMysql } from "react-icons/si";
import Navbar from "./Navbar";
import Footer from "../pages/Footer";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", icon: <FaReact />, percentage: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 85 },
        { name: "HTML & CSS", icon: "💻", percentage: 95 },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Java", icon: <FaJava />, percentage: 88 },
        { name: "Spring Boot", icon: <SiSpringboot />, percentage: 82 },
        { name: "REST APIs", icon: "🔗", percentage: 80 },
      ],
    },
    {
      title: "Tools & Database",
      icon: "🛠️",
      skills: [
        { name: "MySQL", icon: <SiMysql />, percentage: 85 },
        { name: "Git & GitHub", icon: <FaGithub />, percentage: 90 },
        { name: "Database Design", icon: <FaDatabase />, percentage: 75 },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <section
        id="skills"
        className="py-28 bg-darkBlue text-white px-6 flex items-center justify-center -mb-4"
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
                  glareMaxOpacity={0.25}
                  scale={1.05}
                  transitionSpeed={250}
                  className="rounded-xl"
                >
                  <div className="bg-[#112240] p-6 rounded-xl shadow-lg border border-cyan-600 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-shadow duration-300">
                    {/* Category Title */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl">{category.icon}</span>
                      <h3 className="text-xl font-semibold text-cyan-400">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skill List */}
                    <ul className="space-y-5">
                      {category.skills.map((skill, i) => (
                        <li key={i} className="space-y-2">
                          <div className="flex items-center gap-3 text-gray-200">
                            <span className="text-cyan-400 text-lg">
                              {skill.icon}
                            </span>
                            <span>{skill.name}</span>
                          </div>

                          {/* Progress bar */}
                          <div className="w-full bg-gray-700 h-3 rounded-full">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.percentage}%` }}
                              transition={{ duration: 1.5, delay: 0.3 }}
                              className="h-3 bg-cyan-400 rounded-full"
                            />
                          </div>
                          <p className="text-sm text-cyan-300">
                            {skill.percentage}% Proficiency
                          </p>
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
      <Footer />
    </>
  );
}

export default Skills;
