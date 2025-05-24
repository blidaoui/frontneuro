"use client";

import Form from "@/app/components/Form";
import { motion } from "framer-motion";

const Contact = () => {
  const colors = {
    darkPurple: "#4A1D96",
    mediumPurple: "#7E3AF2",
    darkPink: "#C7367D",
    darkBlue: "#1E40AF",
    lightBlue: "#3B82F6",
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen bg-gradient-to-tr from-white  py-10 px-6 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-xl overflow-hidden grid md:grid-cols-2">
        {/* Left Contact Info */}
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 text-white p-10 flex flex-col justify-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text inline-block  md:mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              backgroundImage: `linear-gradient(135deg, ${colors.darkPurple}, ${colors.darkPink})`,
              WebkitBackgroundClip: "text",
            }}
          >
            Contactez-nous
          </motion.h2>
          <h3 className="mb-6 text-l font-bold  text-purple-900">
            Vous avez une question, un projet ou besoin de plus d'informations
            Remplissez le formulaire et nous vous répondrons dans les plus brefs
            délais.{" "}
          </h3>
          <ul className="space-y-3 text-purple-900 text-sm">
            <li>📞 +33 6 12 34 56 78</li>
            <li>📧 contact@neuroflow.com</li>
            <li>📍 42 rue de l’Innovation, Paris</li>
          </ul>
        </div>
        <div className="">
          <Form />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
