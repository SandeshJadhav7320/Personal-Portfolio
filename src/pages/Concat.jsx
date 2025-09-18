// src/components/Contact.jsx

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "../pages/Footer";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();

  // Send message to yourself
  emailjs
    .sendForm(
      "service_t73cgzq",
      "template_99kj96p", // Your main template
      formRef.current,
      "s7uz6wlqfR00ta4LD"
    )
    .then(
      (result) => {
        console.log("Message sent to me:", result.text);

        // Auto-reply to user
        emailjs.sendForm(
          "service_t73cgzq",
          "template_3hb49xi", // Your auto-reply template ID
          formRef.current,
          "s7uz6wlqfR00ta4LD"
        );

        setDone(true);
        e.target.reset();
      },
      (error) => {
        console.log("Error:", error.text);
      }
    );
};


  return (
    <>
      <Navbar />
      <section
        id="contact"
        className="py-28 bg-darkBlue text-white px-6 flex items-center justify-center"
      >
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
          
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-cyan-300">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-300">
              Interested in collaborating or just want to say hi?  
              Drop me a message and I’ll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <p className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-cyan-400 text-xl" /> sandeshj9995@gmail.com
              </p>
              <p className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-cyan-400 text-xl" /> Kolhapur, India
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mt-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 text-2xl hover:text-white transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 text-2xl hover:text-white transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:sandeshjadhav@gmail.com"
                className="text-cyan-400 text-2xl hover:text-white transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-[#112240] p-8 rounded-xl shadow-lg border border-cyan-600 space-y-6"
            >
              <div>
                <label className="block text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Your Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-cyan-400"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-cyan-400 text-darkBlue font-semibold hover:bg-cyan-500 transition"
              >
                Send Message
              </motion.button>

              {done && (
                <p className="text-green-400 text-sm mt-3">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
