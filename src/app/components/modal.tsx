"use client";

import { motion } from "framer-motion";
import { Service } from "./types";
import { PinIcon } from "lucide-react";

interface ModalProps {
  selectedService: Service;
  onClose: () => void;
  onContact: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

const modalVariants = {
  hidden: { scale: 0.95, opacity: 0, y: 40 },
  visible: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { scale: 0.9, opacity: 0, y: 20, transition: { duration: 0.3, ease: "easeIn" } },
};

const Modal = ({ selectedService, onClose, onContact }: ModalProps) => {
  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4 sm:p-6"
    >
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative bg-white dark:bg-gray-900 w-full max-w-2xl mx-auto rounded-2xl shadow-2xl overflow-hidden border border-purple-300"
      >
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-600 transition"
          aria-label="Close modal"
        >
          ✕
        </motion.button>

        <div className="p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-2xl sm:text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-700 to-pink-500 mb-6"
          >
            {selectedService.title}
          </motion.h2>

          <div className="space-y-3 text-base sm:text-lg text-cyan-900 dark:text-cyan-100">
            {selectedService.description.split("\n").map((line, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4, ease: "easeOut" }}
              >
                <PinIcon className="w-5 h-5 mt-1 text-cyan-600 dark:text-cyan-300 flex-shrink-0" />
                <span>{line}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <motion.a
                href="#contact"
                onClick={() => {
                  onContact();
                  onClose();
                }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(131, 24, 167, 0.6)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-900 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:from-pink-500 hover:to-purple-800 transition duration-300"
            >
              Contactez-nous
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
