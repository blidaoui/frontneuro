"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import "./style.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (typeof previous === "number" && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { name: "Accueil", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "À propos", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = id;
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const closeOnOutsideClick = (e: MouseEvent) => {
      if (!(e.target as Element).closest(".mobile-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeOnOutsideClick);
    return () => document.removeEventListener("click", closeOnOutsideClick);
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={hidden ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed z-50 w-full backdrop-blur-md bg-[#f1ecff] shadow-md dark:bg-gray-900"
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleSmoothScroll(e, "home")}>
          <Image src="/images/logoabout.png" alt="Logo" width={60} height={60} priority />
        </a>

        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href.slice(1))}
              className="text-purple-800 hover:text-pink-400 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-purple-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mobile-menu md:hidden px-6 pb-4 bg-[#f1ecff] dark:bg-gray-900"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href.slice(1))}
                className="block py-2 text-purple-800 hover:text-pink-500 font-medium"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

