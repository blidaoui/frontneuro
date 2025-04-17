"use client";

import Form from "@/app/components/Form";
import { motion } from "framer-motion";

const NeuroflowContact = () => {
  return (
    <div className="bg-gradient-to-r from-white via-blue-50 to-purple-100 min-h-screen flex items-center justify-center ">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className=" text-3xl md:text-5xl font-bold leading-tight mb-6 space-y-6">
            <h2 className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent uppercase">
              Contactez-nous
            </h2>
          </div>

          <p className="text-lg text-gray-900 leading-8 max-w-2xl">
            Vous avez une question, un projet ou besoin de plus dinformations 
            Remplissez le formulaire et nous vous répondrons dans les plus brefs
            délais.
          </p>
        </motion.div>

        {/* Right content - Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full mb-2 mt-2"
        >
          <Form />
        </motion.div>
      </div>
    </div>
  );
};

export default NeuroflowContact;
