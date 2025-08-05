// src/components/About.jsx

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaCode, FaDatabase, FaTools } from "react-icons/fa";
import CountUp from "react-countup";

function About() {
  const skills = [
    {
      title: "Frontend",
      content: "React, HTML, CSS, Tailwind",
      icon: <FaCode className="text-3xl text-cyan-300" />,
      percentage: 90,
    },
    {
      title: "Backend",
      content: "Java, Spring Boot, REST APIs",
      icon: <FaDatabase className="text-3xl text-cyan-300" />,
      percentage: 85,
    },
    {
      title: "Tools & DB",
      content: "MySQL, Git, GitHub",
      icon: <FaTools className="text-3xl text-cyan-300" />,
      percentage: 80,
    },
  ];

  return (
    <section
      id="about"
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
          About Me
        </motion.h2>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg sm:text-xl leading-relaxed"
        >
          <p>
            I'm <strong>Sandesh Jadhav</strong>, a Java developer passionate about full-stack
            development using <strong>React</strong>, <strong>Spring Boot</strong>, and{" "}
            <strong>MySQL</strong>.
          </p>
          <p>
            I use <strong>GitHub</strong> for version control and enjoy learning new
            technologies while turning ideas into real projects.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-10">
          {skills.map((item, index) => (
            <Tilt glareEnable={true} glareColor="#00ffff" glareMaxOpacity={0.2} glarePosition="all" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#112240] p-6 rounded-xl shadow-lg border border-cyan-600 w-full md:w-80 space-y-4"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-cyan-400">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.content}</p>

                {/* Progress bar */}
                <div className="w-full bg-gray-700 h-3 rounded-full mt-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-3 bg-cyan-400 rounded-full"
                  />
                </div>

                {/* Counter */}
                <div className="text-sm text-cyan-300 mt-1">
                  <CountUp end={item.percentage} duration={2} />% Proficiency
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
