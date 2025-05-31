"use client";
import { motion } from "framer-motion";
//import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
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

export default function page() {
 /* const socialMedia = [
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "https://twitter.com/neuroflow",
      delay: 0.2,
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/company/neuroflow",
      delay: 0.4,
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      href: "https://facebook.com/neuroflow",
      delay: 0.6,
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://instagram.com/neuroflow",
      delay: 0.2,
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "https://gmail.com/neuroflow",
      delay: 0.2,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      href: "https://whatsapp.com/neuroflow",
      delay: 0.2,
    },
  ];*/
  return (
    <section className="bg-gradient-to-r ">
      <ParticleSystem />

      <div className="max-w-screen-xl px-4  mx-auto overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-2 -my-2 mb-2">
          <div className="px-2 py-2">
            <a
              href="#home"
              className="text-base leading-6  text-purple-900 hover:text-pink-200 "
            >
              Accueil
            </a>
          </div>

          <div className="px-2 py-2">
            <a
              href="#services"
              className="text-base leading-6  text-purple-900 hover:text-pink-200 "
            >
              Services
            </a>
          </div>
          <div className="px-2 py-2">
            <a
              href="#about"
              className="text-base leading-6  text-purple-900 hover:text-pink-200 "
            >
              À propos
            </a>
          </div>

          <div className="px-2 py-2">
            <a
              href="#contact"
              className="text-base leading-6  text-purple-900 hover:text-pink-200 "
            >
              Contact
            </a>
          </div>
        </nav>

        <motion.div
          className=" border-t justify-center items-center border-purple-900/20  text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col items-center gap-4">
           {/* <motion.div
              className="flex gap-2 relative"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              <div className="absolute justify-center inset-0 blur-2xl bg-purple-400/10 rounded-full " />
              {socialMedia.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2  mt-2 rounded-full bg-white/5 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 text-slate-400 hover:text-purple-400 transition-all "
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.4 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div> */}
            <motion.div
              className="flex items-center gap-3 text-slate-400 hover:text-purple-400 transition-colors "
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logoabout.png"
                  alt="Logo Neuroflow"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-medium bg-gradient-to-r mt-0 from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Neuroflow v3.1
              </span>
            </motion.div>

            <div className="text-slate-500 text-sm font-light mb-2">
              © {new Date().getFullYear()} Neuroflow Intelligence. Tous droits
              réservés.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
