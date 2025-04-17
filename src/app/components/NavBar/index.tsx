"use client";

import {
  AnimatePresence,
  motion,

} from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import "./style.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden] = useState(false);

  const links = [
    { name: "Accueil", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "À propos", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];
  const handleSmoothScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    
    setIsOpen(false); // Fermeture immédiate
    
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = id; // Gestion de secours
    }
  };
  useEffect(() => {
    if(!isOpen) return;
    
    const closeOnOutsideClick = (e: MouseEvent) => {
      if(!(e.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };
  
    document.addEventListener('click', closeOnOutsideClick);
    return () => document.removeEventListener('click', closeOnOutsideClick);
  }, [isOpen]);
  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={hidden ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed "
    >
      <div className="container ">
        <div className="flex items-center justify-between  h-20">
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "home")}
          
          >
            <div className="mr-5">
              {" "}
              <Image
                src="/images/logoabout.png"
                alt="Logo"
                width={100}
                height={100}
                
                className="h-20 w-20"
                priority={true}
              />
            </div>
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href.slice(1))}
                className="text-purple-900  font-sans font-medium tracking-wide  dark:text-purple-600 hover:text-pink-300  hover:underline  transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 items-center justify-center text-dark-purple dark:text-dark-purple"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
     

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
       <motion.div
       key="mobile-menu"
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -20, transition: { duration: 0.1 } }} // Animation accélérée
       transition={{ type: "tween", duration: 0 }} // Remplacement du spring
       className="mobile-menu md:hidden dark:bg-custom-color"
     >
            <div className=" pb-4 space-y-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href.slice(1))}
                  className="block text-dark-purple dark:text-dark-purple hover:bg-custom-color dark:hover:text-light-pink px-3 py-2 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </motion.nav>

  );
}