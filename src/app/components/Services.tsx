"use client";

import { Dispatch, SetStateAction, useEffect } from "react";
import { motion } from "framer-motion";
import { Service } from "@/app/components/types";
import { services } from "../pages/Data/services";
import Modal from "./modal";

interface ServicesProps {
  selectedService: Service | null;
  setSelectedService: Dispatch<SetStateAction<Service | null>>;
}

const colors = {
  darkPurple: "#4A1D96",
  mediumPurple: "#7E3AF2",
  darkPink: "#C7367D",
  darkBlue: "#1E40AF",
  lightBlue: "#3B82F6",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      type: "spring",
      stiffness: 100,
    },
  }),
};



const titleAnimation = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] },
  },
};

const Services = ({ selectedService, setSelectedService }: ServicesProps) => {
  const animationConfig = {
    stiffness: 120,
    damping: 12,
    type: "spring" as const,
  };

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
  };

  useEffect(() => {
    document.body.style.overflow = selectedService ? "hidden" : "auto";
    const nav = document.querySelector("nav");
    if (nav) nav.style.display = selectedService ? "none" : "flex";

    return () => {
      document.body.style.overflow = "auto";
      if (nav) nav.style.display = "flex";
    };
  }, [selectedService]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header Section with Enhanced Title Design and Transitions */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-12 relative"
          variants={titleAnimation}
          custom={0}
          whileHover={{
            scale: 1.02,
            color: "#C7367D",
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span
            className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-500 bg-clip-text text-transparent inline-block px-4 py-2 rounded-lg"
            style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
          >
            Nos Services
          </span>
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-purple-900 to-pink-500 rounded-full mt-3"
            variants={fadeInUp}
            custom={0.2}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="absolute -bottom-1 left-0 w-full h-2 bg-transparent"
              style={{
                clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
              }}
              animate={{
                backgroundColor: [
                  "transparent",
                  colors.darkPink,
                  "transparent",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.h1>

        {/* Descriptive Text with Heart and Lines */}
        <motion.h3
          className="text-l sm:text-xl lg:text-xl font-medium text-center max-w-3xl mx-auto mb-10 relative"
          variants={fadeInUp}
          custom={0.3}
        >
          <motion.span
            className="block mt-4 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              backgroundImage: `linear-gradient(135deg, ${colors.darkPurple}, ${colors.mediumPurple})`,
            }}
          >
            Découvrez nos services, où l&#39;expertise technique rencontre la
            créativité pour offrir des solutions numériques fluides, élégantes
            et performantes
          </motion.span>
        </motion.h3>

     <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
  {services.map((service, index) => (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { ...animationConfig, delay: index * 0.15 },
      }}
      whileHover={{ scale: 1.05 }}
      className={`group relative w-72 h-72 bg-white rounded-full shadow-xl border border-purple-200 overflow-hidden cursor-pointer transition-all duration-300
      ${
        index % 3 === 0
          ? "mt-0 ml-0"
          : index % 3 === 1
          ? "mt-6 md:mt-8 ml-2 md:ml-4"
          : "mt-12 md:mt-16 -ml-2 md:-ml-4"
      }`}
    >
      {/* Background color animation on hover */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ backgroundColor: "#ffffff" }}
        whileHover={{
          backgroundColor: "#fbe7f9",
        }}
        transition={{ duration: 0.4 }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center space-y-3">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-20 h-20 rounded-full object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
        />
        <h3 className="text-lg font-semibold text-gray-800">
          {service.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3 px-2">
          {service.description}
        </p>
        <motion.button
          onClick={() => handleSelectService(service)}
          className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-900 to-pink-400 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
          whileHover={{
            boxShadow: "0 0 15px rgba(82, 50, 111, 0.7)",
            scale: 1.1,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 1.0, ease: "easeOut" }}
        >
          Plus de détails
        </motion.button>
      </div>
    </motion.div>
  ))}
  {selectedService && (
    <Modal
      selectedService={selectedService}
      onClose={() => setSelectedService(null)}
      onContact={() => setSelectedService(null)}
    />
  )}
</div>
      </motion.div>
    </section>
  );
};
export default Services;
