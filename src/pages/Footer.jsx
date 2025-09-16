// src/pages/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-darkBlue text-white py-8 mt-12 relative">
      {/* Gradient border at the top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>

      <div className="max-w-6xl mx-auto text-center space-y-4">
        {/* Heading */}
        <h2 className="text-xl font-semibold text-cyan-300">Let’s Connect</h2>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 text-3xl">
          <a
            href="https://github.com/SandeshJadhav7320"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white transition duration-300 hover:scale-125 animate-bounce"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sandesh-jadhav-08b19132a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white transition duration-300 hover:scale-125 animate-bounce"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sandeshj9995@gmail.com"
            className="text-cyan-400 hover:text-white transition duration-300 hover:scale-125 animate-bounce"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-gray-400 text-sm mt-4">
          © {new Date().getFullYear()} Sandesh Jadhav | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
