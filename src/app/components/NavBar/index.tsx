"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState, useEffect, MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious();
    if (typeof previous === "number" && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links: NavLink[] = [
    { name: "Accueil", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "À propos", href: "#about" },
  ];

  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string): void => {
    e.preventDefault();
    const element = document.getElementById(id);
    setIsOpen(false);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = id;
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const closeOnOutsideClick = (e: Event): void => {
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
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 bg-white backdrop-blur-md shadow-lg z-50"
    >
      <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" onClick={(e) => handleSmoothScroll(e, "home")} className="flex items-center">
            <Image src="/images/logoabout.png" alt="Logo" width={70} height={70} className="h-20 w-auto" priority />
          </a>
          <div className="hidden md:flex space-x-6 items-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href.slice(1))}
                className="text-purple-900 font-medium hover:text-purple-400 transition-colors duration-200 relative"
                onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) =>
                  ((e.currentTarget.querySelector("span") as HTMLSpanElement).style.width = "100%")
                }
                onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) =>
                  ((e.currentTarget.querySelector("span") as HTMLSpanElement).style.width = "0")
                }
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-0.5 bg-purple-400 transition-all duration-300" style={{ width: "0" }} />
              </a>
            ))}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(82, 50, 111, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={(e: MouseEvent<HTMLButtonElement>) => handleSmoothScroll(e, "contact")}
              className="mx-auto px-4 py-2 text-lg bg-gradient-to-r from-purple-900 to-pink-400 rounded-full text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 group relative overflow-hidden"
            >
              <motion.span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Contactez nous</span>
            </motion.button>
          </div>
          <button
            className="md:hidden p-2 text-dark-purple hover:text-purple-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden bg-white backdrop-blur-md shadow-lg absolute top-16 left-0 w-full max-w-2xl mx-auto px-4 py-2 mobile-menu"
            >
              <div className="space-y-2">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href.slice(1))}
                    className="block text-dark-purple hover:text-purple-400 px-3 py-1 rounded-md transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(82, 50, 111, 0.7)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e: MouseEvent<HTMLButtonElement>) => handleSmoothScroll(e, "contact")}
                  className="mx-auto px-4 py-2 text-lg bg-gradient-to-r from-purple-900 to-pink-400 rounded-full text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 group relative overflow-hidden"
                >
                  <motion.span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Contactez nous</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;