"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // Ajout pour les animations

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-r from-white via-blue-50 to-purple-100 min-h-screen relative overflow-hidden">
   
      {/* Mission Section */}
      <section className="relative justify-center items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-screen flex items-center justify-between overflow-hidden perspective-3d">
              {/* Text Content */}

              <div className="flex-1 space-y-8 relative z-10">
                <div className="inline-flex items-center gap-3 mb-8">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    {" "}
                    {/* Ajout de rounded-full */}
                    <Image
                      src="/images/logoabout.png"
                      alt="Logo NeuroFlow"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                  <span className="font-semibold text-emerald-400 tracking-wide uppercase">
                    Neuroflow Consulting
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent uppercase">
                    À propos nous
                  </span>
                </h2>

                <p className="text-lg text-gray-900 leading-8 max-w-2xl">
                  Notre entreprise vous propose une solution innovante pour la
                  création de sites web personnalisés, intégrant les
                  technologies{" "}
                  <span className="font-medium font-bold text-emerald-300">
                    d&apos;intelligence artificielle les plus avancées,
                  </span>{" "}
                  une gestion optimisée des données, ainsi que des services de
                  design créatif (logos, designs graphiques, et bien plus) pour
                  une présence en ligne unique&nbsp;et&nbsp;impactante.
                </p>

                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>

              {/* Image Section - Now a Circle */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="hidden md:block relative w-[400px] h-[400px] rounded-full overflow-hidden" // Ajout de rounded-full pour un cercle
              >
                <Image
                  src="/images/logoabout.png"
                  alt="Logo NeuroFlow Consulting - Création de sites web intelligents"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
