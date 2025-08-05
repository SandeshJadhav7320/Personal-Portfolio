import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "/src/pages/Navbar";
import self from "../assets/self.jpeg";
import About from "./About";
import Skills from "./Skills";

function Home() {
  return (
    <>
      <Navbar />
      <section className="pt-20 min-h-screen w-full bg-darkBlue text-white flex items-center justify-center px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-6xl">

          {/* Left Side - Text and About Me */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-xl sm:text-2xl"
            >
              Hello, It's Me
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-4xl sm:text-5xl font-bold text-cyan-300"
            >
              Sandesh Jadhav
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1.2 }}
              className="text-lg sm:text-xl font-medium"
            >
              And I'm a{" "}
              <span className="text-pink-400">
                <Typewriter
                  words={[
                    "Java Developer",
                    "Frontend Developer",
                    "Full-Stack Learner",
                    "Spring Boot Enthusiast",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-sm sm:text-base md:text-lg max-w-xl"
            >
              I'm a passionate Java Developer working with React, Spring Boot, and MySQL. I build websites and applications that are responsive, fast, and user-friendly. I'm also experienced with GitHub for managing and sharing code. Always learning, always building!
            </motion.p>

            {/* Social icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-cyan-400 hover:text-white text-xl"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-cyan-400 hover:text-white text-xl"><i className="fab fa-whatsapp"></i></a>
              <a href="#" className="text-cyan-400 hover:text-white text-xl"><i className="fab fa-github"></i></a>
            </div>
          </div>

          {/* Right Side - Image with Animated Background */}
          <div className="relative w-84 h-80 md:w-[600px] md:h-[400px] lg:w-[550px] lg:h-[450px] flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-3xl opacity-80 animate-spinSlow"></div>

            <img
              src={self}
              alt="Profile"
              className="relative w-72 h-72 md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full object-cover z-10 border-[6px] border-white shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ✅ About Section */}
      <About />
      <Skills />
    </>
  );
}
export default Home;
