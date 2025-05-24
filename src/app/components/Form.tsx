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


const validatePhone = (number: string) => {
  const cleaned = number.replace(/\s+/g, "");
  const france = /^(\+33|0033|0)[1-9]\d{8}$/;
  const tunisie = /^(\+216|00216)[2-9]\d{7}$/;
  const europe = /^\+[\d]{10,14}$/;
  return france.test(cleaned) || tunisie.test(cleaned) || europe.test(cleaned);
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

    if (!validatePhone(phone)) {
      setError("Numéro invalide. Ex : +33 6 12 34 56 78 ou +216 20 123 456");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:8000/neuroBackend/email/send", {
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
            { isSubmitting ? "Merci pour votre message !" :"Formulaire de contact"}
              </motion.h4>

        {!isSubmitting ? (
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
              required
              className="w-full p-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="text"
              name="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Votre prénom"
              required
              className="w-full p-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              required
              className="w-full p-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Votre numéro (ex: +33 6 12 34 56 78)"
              required
              className="w-full p-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-400"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Votre message"
              required
              className="w-full p-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-400"
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
