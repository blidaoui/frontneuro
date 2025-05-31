"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "../Card/card";

import "./hero.css";

// FloatingParticles component with hydration fix
const FloatingParticles = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {Array(30)
        .fill(0)
        .map((_, i) => {
          // Generate stable positions based on index
          const stableSeed = i * 1000;
          const stableRandom = (seedOffset: number) => {
            const x = Math.sin(stableSeed + seedOffset) * 10000;
            return x - Math.floor(x);
          };

          const width = stableRandom(1) * 10 + 5;
          const height = stableRandom(2) * 10 + 5;
          const left = stableRandom(3) * 100;
          const top = stableRandom(4) * 100;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-pink-400 opacity-20"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [
                  (stableRandom(5) - 0.5) * 100,
                  (stableRandom(6) - 0.5) * 100,
                ],
                x: [(stableRandom(7) - 0.5) * 50, (stableRandom(8) - 0.5) * 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: stableRandom(9) * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          );
        })}
    </div>
  );
};

const handleScrollToServices = () => {
  const servicesSection = document.getElementById("services");
  if (servicesSection) {
    const offset = 80; // Adjust this value based on your navbar height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = servicesSection.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
const Hero = () => {
  return (
    <motion.section
      id="home"
      className=" h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <FloatingParticles />

      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 z-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 75% 25%,rgb(102, 158, 248), transparent 60%)",
            "radial-gradient(circle at 25% 75%, #8b5cf6, transparent 60%)",
            "radial-gradient(circle at 50% 50%,rgb(214, 45, 130), transparent 60%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 lg:px-12 relative z-10">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className=" text-left space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 uppercase"
          >
            <div className="color-change">
            NeuroFlow Consulting
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg sm:text-xl md:text-2xl text-light-pink max-w-l leading-relaxed"
          >
            Transformez vos défis numériques en opportunités stratégiques.
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollToServices}
            className="px-10 py-4 text-lg bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative text-light-pink z-10 tracking-wide ">
              Découvrir nos services
            </span>
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 text-2xl"
            >
              ↓
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Right Side - Optional 3D Model Placeholder */}
        <motion.div
          className="hidden md:block h-[400px] lg:h-[500px] relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400">
              <Card />
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
