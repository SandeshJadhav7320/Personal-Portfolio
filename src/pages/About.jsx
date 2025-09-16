// src/components/About.jsx

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaCode, FaDatabase, FaTools } from "react-icons/fa";
import CountUp from "react-countup";
import Navbar from "./Navbar";
import self2 from "../assets/self2.jpeg";

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
    <>
      <Navbar />
      <section
        id="about"
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
            About Me
          </motion.h2>

          {/* Image + Text Side by Side */}
<div className="flex flex-col md:flex-row items-center md:items-start gap-10 text-left">
  
  {/* Profile Image with animation */}
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="relative w-84 h-80 md:w-[600px] md:h-[400px] lg:w-[550px] lg:h-[450px] flex items-center justify-center"
  >
    <div className="absolute inset-0 rounded-full 
                    bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
                    bg-[length:200%_200%] animate-gradientWave 
                    blur-3xl opacity-80"></div>

    <img
      src={self2}
      alt="Profile"
      className="relative w-72 h-72 md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] 
                 rounded-full object-cover z-10 border-[6px] border-white shadow-2xl"
    />
  </motion.div>

  {/* Bio Text with animation */}
  <motion.div
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    viewport={{ once: true }}
    className="space-y-6 text-lg sm:text-xl leading-relaxed max-w-xl"
  >
    <p>
      I'm <strong>Sandesh Jadhav</strong>, a passionate <strong>Java Developer</strong> 
      and <strong>Full-Stack Enthusiast</strong> with experience in building scalable 
      and efficient web applications.
    </p>
    <p>
      Skilled in <strong>React</strong>, <strong>Spring Boot</strong>, and <strong>MySQL</strong>, 
      I specialize in transforming ideas into real-world solutions with clean and maintainable code.
    </p>
    <p>
      I’m always eager to explore <strong>new frameworks</strong>, optimize performance, and 
      leverage technology to solve impactful problems.
    </p>
    <p>
      My goal is to grow as a versatile developer and contribute to innovative projects that matter.
    </p>

    {/* CV Buttons with animation */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row gap-6 mt-6"
    >
      <motion.a
        href="/CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-6 py-3 text-lg font-semibold text-cyan-400 
                   border-2 border-cyan-400 rounded-lg 
                   hover:bg-cyan-400 hover:text-white 
                   transition-colors duration-300"
      >
        👀 View Online
      </motion.a>
    </motion.div>
  </motion.div>
</div>


          {/* Skill Cards */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mt-16">
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
    </>
  );
}

export default About;
