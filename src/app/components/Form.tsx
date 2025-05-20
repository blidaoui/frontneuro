"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

const ParticleSystem = dynamic(
  () =>
    import("@/app/components/ParticleSystem/ParticleSystem").then(
      (mod) => mod.ParticleSystem
    ),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-cyan-900/20" />
    ),
  }
);

const NeuroflowContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [number_phone, setNumber_phone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requiredFields = [
      { value: name, field: "Nom" },
      { value: last_name, field: "Prénom" },
      { value: email, field: "Email" },
      { value: number_phone, field: "Téléphone" },
      { value: message, field: "Message" },
    ];

    const missingField = requiredFields.find((f) => !f.value.trim());
    if (missingField) {
      return toast.error(`Le champ '${missingField.field}' est requis.`);
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://localhost:8000/neuroBackend/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            last_name,
            number_phone,
            email,
            message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response data:", data);

      setTimeout(() => {
        setIsSubmitting(false);
        toast.success("Votre message a été envoyé avec succès!");
        setName("");
        setLast_name("");
        setEmail("");
        setNumber_phone("");
        setMessage("");
      }, 1600);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        error instanceof Error
          ? `Échec de l'envoi : ${error.message}`
          : "Erreur inconnue lors de la soumission"
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative from-pink-900 to-blue-900 overflow-hidden">
      <ParticleSystem />
      <ToastContainer position="top-center" autoClose={3000} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative flex justify-center"
      >
        <StyledFormContainer>
          {!isSubmitting ? (
            <form className="form " onSubmit={handleSubmit}>
              <div className="form-group h-8  ">
                <label htmlFor="name ">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Entrez votre nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group h-8 ">
                <label htmlFor="last_name">Prénom</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Entrez votre prénom"
                  value={last_name}
                  onChange={(e) => setLast_name(e.target.value)}
                  required
                />
              </div>
              <div className="form-group h-8">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Entrez votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group h-8 ">
                <label htmlFor="number_phone">Téléphone</label>
                <input
                  type="tel"
                  id="number_phone"
                  name="number_phone"
                  placeholder="+1234567890"
                  pattern="^\+?[0-9]{7,15}$"
                  value={number_phone}
                  onChange={(e) => setNumber_phone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group h-30">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Décrivez votre demande"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button
                className="form-submit-btn"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  "Envoyer"
                )}
              </button>
            </form>
          ) : (
            <div className="form-success-message">
              <svg
                className="w-16 h-16 text-green-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <h3 className="text-2xl font-bold text-center text-purple-900 mb-2">
                Message envoyé!
              </h3>
              <p className="text-center text-purple/80">
                Nous vous contacterons bientôt.
              </p>
            </div>
          )}
        </StyledFormContainer>
      </motion.div>
    </div>
  );
};

const StyledFormContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  padding: 20px;

  .form-group {
  
    margin-bottom: 45px;
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 0.2rem;
    font-weight: 600;
    color: #65225d;
    font-size: 0.95rem;
  }

  input,
  textarea {
    padding: 0.75rem 1rem;
    background: rgb(148 84 124 / 9%);
    color:rgb(64, 14, 64);
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: rgba(57, 19, 55, 0.5);
      box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.1);
    }

    &::placeholder {
      color:rgb(66, 9, 66);
    }
  }

  .form-submit-btn { 
   margin-bottom:1rem; 

    padding: 1rem;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    background: linear-gradient(
      135deg,
      rgb(245 111 245) 0%,
      rgb(53, 14, 59) 100%
    );
    color: #ddd6e8;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(222, 104, 177, 0.1);

    &:hover {
      background: linear-gradient(
        135deg,
        rgb(182, 98, 181) 0%,
        rgb(182, 75, 182) 100%
      );
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    &:disabled {
      background: linear-gradient(
        135deg,
        rgb(190, 181, 204) 0%,
        rgb(187, 74, 174) 100%
      );
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  .form-success-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
  }
`;

export default NeuroflowContact;
