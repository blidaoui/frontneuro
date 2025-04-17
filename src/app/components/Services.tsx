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
    if (selectedService) {
      document.body.style.overflow = "hidden";
      const nav = document.querySelector("nav");
      if (nav) nav.style.display = "none";
    } else {
      document.body.style.overflow = "auto";
      const nav = document.querySelector("nav");
      if (nav) nav.style.display = "flex"; // or "block", depends on your nav layout
    }

    return () => {
      document.body.style.overflow = "auto";
      const nav = document.querySelector("nav");
      if (nav) nav.style.display = "flex";
    };
  }, [selectedService]);

  return (
    <section className="z-1000 min-h-screen bg-gradient-to-r from-white via-blue-50 to-purple-100  overflow-hidden">
      <div className="flex items-center flex-col gap-5 sm:flex-row sm:flex-wrap sm:justify-center sm:items-stretch mt-8">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-7 ">
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent uppercase">
          nos services
        </span>
        
      </h2>
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center flex-col gap-5 sm:flex-row sm:flex-wrap sm:justify-center sm:items-stretch mt-8 mb-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { ...animationConfig, delay: index * 0.15 },
              }}
              className="group relative w-72 h-72 bg-pink-100/50 rounded-full shadow-2xl overflow-hidden border border-2  border-purple-900/10 hover:border-pink-400/50 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-soft-light" />
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              <motion.div className="flex flex-col items-center justify-center h-full p-8 space-y-4 text-center">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <motion.h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  {service.title}
                </motion.h2>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    background: `linear-gradient(45deg, ${service.gradient.split(' ')[1]}, ${service.gradient.split(' ')[3]})`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelectService(service)}
                  className="relative px-6 py-2 text-sm font-medium text-white rounded-full bg-pink-600/30 backdrop-blur-lg overflow-hidden"
                >
                  Plus de détails
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-600/20 animate-shine" />
                </motion.button>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
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
