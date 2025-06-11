"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { MouseEvent } from "react";

const characterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const titlePart1: string[] = "NeuroFlow".split("");
const titlePart2: string[] = "Consulting".split("");

const handleScrollToServices = (e: MouseEvent<HTMLButtonElement>, id: string): void => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.hash = id;
  }
};

const Hero: React.FC = () => {
  return (
    <motion.section
      id="home"
      className="relative h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <Image
        src="/images/bg.png"
        alt="Futuristic neural network background"
        fill
        quality={100}
        priority
        className="object-cover object-center"
      />
      <div className="container h-full flex items-center px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-left space-y-8 max-w-xl"
        >
          {/* Title Split into Two Lines */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.05 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase"
          >
            <motion.div
              variants={characterVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {titlePart1.map((char, index) => (
                <motion.span
                  key={index}
                  variants={characterVariants}
                  className="text-dark-purple text-shadow-lg"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              variants={characterVariants}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              {titlePart2.map((char, index) => (
                <motion.span
                  key={index}
                  variants={characterVariants}
                  className="text-dark-pink text-shadow-lg"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Typewriter Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
            className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-100 tracking-wide"
          >
            <span className="bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent font-medium">
              <Typewriter
                words={[
                  "Vous avez un projet innovant...",
                  "Une idée à développer...",
                  "Transformez vos défis numériques en opportunités stratégiques...",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            </span>
          </motion.div>

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 15px rgba(82, 50, 111, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={(e: MouseEvent<HTMLButtonElement>) => handleScrollToServices(e, "services")}
            className="px-6 py-3 text-lg bg-gradient-to-r from-purple-900 to-pink-400 rounded-full text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 group relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 1.0, ease: "easeOut" }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10">Découvrir nos Services</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 text-xl"
            >
              ↓
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;