"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

  const colors = {
    darkPurple: "#4A1D96",
    mediumPurple: "#7E3AF2",
    darkPink: "#C7367D",
    darkBlue: "#1E40AF",
    lightBlue: "#3B82F6",
  };



const NeuroflowContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!name.trim() || !lastName.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      return;
    }


    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.neuroflowconsulting.com/neuroBackend/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          last_name: lastName,
          number_phone: phone,
          email,
          message,
        }),
      });

      if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`);

      await response.json();
      setName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");

      setTimeout(() => setIsSubmitting(false), 1600);
    } catch (err) {
      console.error("Erreur:", err);
      setIsSubmitting(false);
    }
  };

  return (
           <div className="p-10">
              <motion.h4
                className="text-xl md:text-2xl font-bold text-center text-transparent bg-clip-text inline-block  md:mb-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.darkPurple}, ${colors.darkPink})`,
                  WebkitBackgroundClip: "text",
                }}
              >
            { isSubmitting ? "Merci pour votre message !" :""}
              </motion.h4>

        {!isSubmitting ? (
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nom"
              required
  className="w-full p-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-400 text-[#4A1D96] placeholder-[#4A1D96]"
            />

            <input
              type="text"
              name="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Prénom"
              required
  className="w-full p-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-400 text-[#4A1D96] placeholder-[#4A1D96]"
            />

            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
  className="w-full p-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-400 text-[#4A1D96] placeholder-[#4A1D96]"
            />

            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Numéro (ex: +33 6 12 34 56 78)"
              required
  className="w-full p-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-400 text-[#4A1D96] placeholder-[#4A1D96]"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Message ... "
              required
  className="w-full p-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-400 text-[#4A1D96] placeholder-[#4A1D96]"
            ></textarea>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold transition-transform"
            >
              Envoyer
            </motion.button>
          </form>
        ) : (
         
            <p className="text-purple-700">Nous vous contacterons bientôt.</p>
        )}
    </div>
  );
};

export default NeuroflowContact;
