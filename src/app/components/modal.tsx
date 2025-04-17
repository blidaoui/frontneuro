"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Service } from "./types";
import { PinIcon } from "lucide-react";

interface ModalProps {
  selectedService: Service;
  onClose: () => void;
  onContact: () => void;
}

const Modal = ({ selectedService, onClose, onContact }: ModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className="relative bg-pink-50 w-full max-w-xl h-auto
 overflow-hidden rounded-2xl shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition"
        >
          ✕
        </button>

        <div className=" p-8 justify-center items-center h-full overflow-y-auto">
          <div>
            <motion.h2 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-600 mb-7 ">
              {selectedService.title}
            </motion.h2>

            <motion.div className="font-medium text-base/5 text-cyan-900 space-y-3">
              {selectedService.description.split("\n").map((line, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <PinIcon className="w-5 h-4 mt-0.5 text-cyan-600 flex-shrink-0" />
                  <span>{line}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-7">
              <Link
                href="#contact"
                onClick={() => {
                  onContact();
                  onClose();
                }}
                className="px-6 py-3 bg-pink-700 hover:bg-pink-200 text-light-pink rounded-full transition"
              >
                contactez Nous
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
