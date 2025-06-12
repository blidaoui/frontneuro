"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, ShieldCheck, Sparkles, BrainCircuit } from "lucide-react";

export default function AboutPage() {
  // Palette de couleurs
  const colors = {
    darkPurple: "#4A1D96",
    mediumPurple: "#7E3AF2",
    darkPink: "#C7367D",
    darkBlue: "#1E40AF",
    lightBlue: "#3B82F6",
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: "spring", stiffness: 120 },
    }),
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const teamMembers = [
    {
      id: 1,
      name: "N. BLIDAOUI",
      role: "Fondateur & Visionnaire",
      icon: <Rocket className="w-6 h-6" style={{ color: colors.mediumPurple }} />,
      description:
        "Avec une expertise et une passion pour la technologie, l’innovation et la gestion d’entreprise, N. Blidaoui incarne la vision de NeuroFlow Consulting. Fort de son expérience dans le biomédical, la gestion de projet et l’entrepreneuriat, il structure l’ensemble, donne la direction stratégique, et veille à l’harmonie entre efficacité technique et clarté opérationnelle.",
    },
    {
      id: 2,
      name: "I. BLIDAOUI",
      role: "Développement & Ingénierie digitale",
      icon: <ShieldCheck className="w-6 h-6" style={{ color: colors.darkPink }} />,
      description:
        "Spécialiste du développement sur mesure, I. Blidaoui conçoit des sites web, des applications et des plateformes performantes, adaptées aux besoins réels des clients. Il veille à la stabilité, la sécurité et l’optimisation continue de chaque solution.",
    },
    {
      id: 3,
      name: "A. BLIDAOUI",
      role: "Data & Analyse stratégique",
      icon: <BrainCircuit className="w-6 h-6" style={{ color: colors.darkBlue }} />,
      description:
        "Data analyst méticuleux, A. Blidaoui transforme les données brutes en leviers de performance. De l’analyse exploratoire à la création de dashboards, il rend les données compréhensibles, exploitables et intelligemment présentées.",
    },
    {
      id: 4,
      name: "A. BLIDAOUI",
      role: "Design & Identité visuelle",
      icon: <Sparkles className="w-6 h-6" style={{ color: colors.lightBlue }} />,
      description:
        "Graphiste créatif et innovant, A. Blidaoui imagine des identités visuelles percutantes, des mises en page professionnelles, et des contenus multimédias qui marquent les esprits. Son travail relie esthétique, émotion et impact visuel.",
    },
  ];

  const philosophyItems = [
    {
      text: "Rigueur technique et créativité",
      icon: "💻",
      color: `linear-gradient(135deg, ${colors.darkPurple}, ${colors.darkPink})`,
    },
    {
      text: "Analyse data-driven et intuition humaine",
      icon: "🧠",
      color: `linear-gradient(135deg, ${colors.darkPink}, ${colors.darkBlue})`,
    },
    {
      text: "Design impactant et fonctionnalité optimale",
      icon: "🎨",
      color: `linear-gradient(135deg, ${colors.darkBlue}, ${colors.mediumPurple})`,
    },
    {
      text: "Innovation de pointe et simplicité d'usage",
      icon: "⚡",
      color: `linear-gradient(135deg, ${colors.mediumPurple}, ${colors.darkPink})`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background animé */}
      <motion.div
        className="absolute inset-0 z-0 opacity-15"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <Image
          src="/images/logoabout.png"
          alt="Background"
          fill
          className="object-cover"
          quality={30}
        />
      </motion.div>

      {/* Section Hero */}
      <motion.section
        className="relative pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
          {/* Contenu texte */}
          <motion.div className="flex-1 space-y-6 relative z-10" variants={fadeInUp}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 mb-6">
              <motion.div
                className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2"
                style={{ borderColor: colors.darkPurple }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Image
                  src="/images/logoabout.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <span
                className="font-semibold text-sm md:text-base uppercase tracking-wider"
                style={{ color: colors.darkPurple }}
              >
                NeuroFlow Consulting
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={fadeInUp}
              custom={1}
            >
              <motion.span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.darkPurple}, ${colors.darkPink})`,
                }}
                animate={{ backgroundPosition: ["0%", "100%"] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              >
                La technologie en mouvement
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-gray-700 leading-7 max-w-2xl"
              variants={fadeInUp}
              custom={2}
            >
              Chez NeuroFlow Consulting, nous croyons que l&#39;innovation n&#39;a de
              valeur que si elle est
              <span
                className="font-semibold"
                style={{ color: colors.darkPurple }}
              >
                {" "}
                bien exécutée
              </span>
              ,
              <span
                className="font-semibold"
                style={{ color: colors.darkPink }}
              >
                {" "}
                bien pensée
              </span>{" "}
              et
              <span
                className="font-semibold"
                style={{ color: colors.darkBlue }}
              >
                {" "}
                profondément utile
              </span>
              . Fondée par
              <span
                className="font-semibold"
                style={{ color: colors.darkBlue }}
              >
                {" "}
                N. BLIDAOUI{" "}
              </span>
              , entrepreneur engagé, technicien expérimenté et visionnaire du
              numérique, NeuroFlow Consulting est une société à taille humaine,
              mais aux ambitions larges.
            </motion.p>
          </motion.div>

          {/* Image Hero */}
          <motion.div
            variants={scaleIn}
            className="relative w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-2xl md:rounded-3xl overflow-hidden border-4 bg-white"
            style={{ borderColor: `${colors.darkPurple}20` }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { type: "spring", stiffness: 200 },
            }}
          >
            <Image
              src="/images/logoabout.png"
              alt="NeuroFlow"
              fill
              priority
              className="object-cover saturate-150"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Section Équipe */}
      <section
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 relative"
        style={{
          backgroundColor: `${colors.darkPurple}05`,
          backgroundImage: `radial-gradient(circle at 20% 30%, ${colors.darkPurple}03, transparent 50%)`,
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10 space-y-12">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text mb-4"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.darkPurple}, ${colors.darkPink})`,
                WebkitBackgroundClip: "text",
              }}
              variants={fadeInUp}
            >
              Notre Équipe d&#39;Exception
            </motion.h2>

            <motion.h4
              className="text-xl md:text-2xl font-medium text-transparent bg-clip-text max-w-2xl mx-auto"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.darkPurple}, ${colors.mediumPurple})`,
                WebkitBackgroundClip: "text",
              }}
              variants={fadeInUp}
              custom={1}
            >
              L&#39;équipe NeuroFlow Consulting : une famille, quatre piliers
            </motion.h4>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <AnimatePresence>
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="group relative p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-md transition-all"
                  style={{
                    borderColor: `${colors.darkPurple}10`,
                    willChange: "transform",
                  }}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    boxShadow: `0 10px 20px ${colors.darkPurple}10`,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${colors.darkPurple}05, ${colors.darkPink}05)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  <motion.div
                    className="mb-6 flex justify-center"
                    whileHover={{
                      rotate: [0, -10, 10, -5, 0],
                      scale: 1.2,
                      transition: { duration: 0.8 },
                    }}
                  >
                    <div className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full">
                      {member.icon}
                    </div>
                  </motion.div>

                  <div className="relative space-y-3">
                    <motion.h3
                      className="text-xl md:text-2xl font-bold text-gray-900"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p
                      className="text-sm md:text-base font-semibold"
                      style={{ color: colors.darkPurple }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {member.role}
                    </motion.p>
                    <motion.p
                      className="text-gray-600 text-sm md:text-base leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {member.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Section Philosophie */}
      <section
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 relative"
        style={{ backgroundColor: `${colors.darkPurple}05` }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div className="space-y-6 md:space-y-8" variants={fadeInUp}>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text inline-block mb-12 md:mb-16"
                variants={fadeInUp}
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.darkPurple}, ${colors.darkPink})`,
                  WebkitBackgroundClip: "text",
                }}
              >
                Notre Philosophie Technique
              </motion.h2>

              <motion.ul className="space-y-4 md:space-y-6" variants={staggerContainer}>
                {philosophyItems.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 md:gap-4 text-gray-700 text-base md:text-lg font-medium"
                    variants={fadeInUp}
                    custom={i}
                    whileHover={{
                      x: 10,
                      transition: { type: "spring", stiffness: 200 },
                    }}
                  >
                    <motion.span
                      className="text-xl md:text-2xl flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm"
                      style={{
                        backgroundImage: item.color,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {item.icon}
                    </motion.span>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section CTA */}
      <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 text-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            background: [
              `radial-gradient(circle at 20% 20%, ${colors.darkPurple}10, transparent 50%)`,
              `radial-gradient(circle at 80% 80%, ${colors.darkPink}10, transparent 50%)`,
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:p-8 rounded-xl md:rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-gray-100"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <motion.h3
                className="text-2xl md:text-4xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.span
                  className="text-transparent bg-clip-text inline-block text-center"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${colors.darkPurple}, ${colors.darkPink})`,
                  }}
                >
                  NeuroFlow Consulting
                </motion.span>
                <motion.span
                  className="block mt-4 text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${colors.darkBlue}, ${colors.mediumPurple})`,
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  c&#39;est l&#39;énergie d&#39;un mouvement collectif, la précision d&#39;un expert,
                  <br className="hidden md:block" /> et la promesse d’un
                  digital plus fluide, plus beau, et plus efficace.
                </motion.span>
              </motion.h3>

              <motion.div
                className="absolute left-1/2 -translate-x-1/2 -top-8 mb-14 flex items-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}
              >
                <motion.div
                  className="w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-pink-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                />
                <motion.span
                  className="mx-4 text-2xl sm:text-3xl"
                  style={{
                    color: colors.darkPurple,
                    filter: `
                      drop-shadow(0 0 12px ${colors.darkPurple}40)
                      drop-shadow(0 0 6px ${colors.darkPink}30)
                    `,
                  }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  ♥
                </motion.span>
                <motion.div
                  className="w-12 h-0.5 bg-gradient-to-r from-pink-500 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}