import { motion } from "framer-motion";
import Navbar from "/src/pages/Navbar";

function Home() {
  return (

    <>
    <Navbar></Navbar>
          <section className="pt-20 min-h-screen w-full bg-darkBlue text-white flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold"
        >
          Welcome to My Portfolio
        </motion.h1>
      </section>
    </>

  );
}

export default Home;
