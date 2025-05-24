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

const Services = ({ selectedService, setSelectedService }: ServicesProps) => {
  const animationConfig = {
    stiffness: 150,
    damping: 15,
    mass: 0.5,
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
    <section className="min-h-screen bg-gradient-to-r from-white  py-12 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold uppercase bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Nos Services
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
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
              ${index % 3 === 0 ? "mt-0 ml-0"
                : index % 3 === 1 ? "mt-10 md:mt-14 ml-5 md:ml-10"
                : "mt-20 md:mt-28 -ml-4 md:-ml-8"}`}
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
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
                whileHover={{ backgroundColor: "#e879f9", scale: 1.1 }}
              >
                Plus de détails
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedService && (
        <Modal
          selectedService={selectedService}
          onClose={() => setSelectedService(null)}
          onContact={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default Services;
