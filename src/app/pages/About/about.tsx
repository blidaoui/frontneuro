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



  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 },
    }),
  };

  const teamMembers = [
    {
      id: 1,
      name: "N. BLIDAOUI",
      role: "Fondateur & Visionnaire",
      icon: (
        <Rocket className="w-6 h-6" style={{ color: colors.mediumPurple }} />
      ),
      description:
        "Avec une expertise et une passion pour la technologie, l’innovation et la gestion d’entreprise, N. Blidaoui incarne la vision de NeuroFlow Consulting. Fort de son expérience dans le biomédical, la gestion de projet et l’entrepreneuriat, il structure l’ensemble, donne la direction stratégique, et veille à l’harmonie entre efficacité technique et clarté opérationnelle.",
    },
    {
      id: 2,

      name: "I. BLIDAOUI",
      role: "Développement & Ingénierie digitale",
      icon: (
        <ShieldCheck className="w-6 h-6" style={{ color: colors.darkPink }} />
      ),
      description:
        "Spécialiste du développement sur mesure, I. Blidaoui conçoit des sites web, des applications et des plateformes performantes, adaptées aux besoins réels des clients. Il veille à la stabilité, la sécurité et l’optimisation continue de chaque solution.",
    },
    {
      id: 3,

      name: "A. BLIDAOUI",
      role: "Data & Analyse stratégique",
      icon: (
        <BrainCircuit className="w-6 h-6" style={{ color: colors.darkBlue }} />
      ),
      description:
        "Data analyst méticuleux, A. Blidaoui transforme les données brutes en leviers de performance. De l’analyse exploratoire à la création de dashboards, il rend les données compréhensibles, exploitables et intelligemment présentées.",
    },
    {
      id: 4,

      name: "A. BLIDAOUI",
      role: "Design & Identité visuelle",
      icon: (
        <Sparkles className="w-6 h-6" style={{ color: colors.lightBlue }} />
      ),
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
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
      <motion.section className="relative pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
          {/* Contenu texte */}
          <div className="flex-1 space-y-6 relative z-10">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div
                className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2"
                style={{ borderColor: colors.darkPurple }}
              >
                <Image
                  src="/images/logoabout.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
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
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.darkPurple}, ${colors.darkPink})`,
                }}
              >
                La technologie en mouvement
              </span>
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
          </div>

          {/* Image Hero */}
          <motion.div
            initial={{ rotate: -15, scale: 0.9, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            className="relative w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-2xl md:rounded-3xl overflow-hidden border-4 bg-white"
            style={{ borderColor: `${colors.darkPurple}20` }}
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
        {/* Conteneur principal */}
        <div className="max-w-7xl mx-auto relative z-10 space-y-12">
          {/* En-tête avec animations */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text mb-4"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.darkPurple}, ${colors.darkPink})`,
                WebkitBackgroundClip: "text",
              }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Notre Équipe d&#39;Exception
            </motion.h2>

            <motion.h4
              className="text-xl md:text-2xl font-medium text-transparent bg-clip-text max-w-2xl mx-auto"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.darkPurple}, ${colors.mediumPurple})`,
                WebkitBackgroundClip: "text",
              }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              L&#39;équipe NeuroFlow Consulting : une famille, quatre piliers
            </motion.h4>
          </motion.div>

          {/* Grille des membres */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <AnimatePresence>
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="group relative p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-md transition-all"
                  style={{
                    borderColor: `${colors.darkPurple}10`,
                    willChange: "transform",
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    },
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  {/* Fond au hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${colors.darkPurple}05, ${colors.darkPink}05)`,
                    }}
                  />

                  {/* Avatar animé */}
                  <motion.div
                    className="mb-6 flex justify-center"
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.6 },
                    }}
                  >
                    <div className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full">
                      {member.icon}
                    </div>
                  </motion.div>

                  {/* Contenu texte */}
                  <div className="relative space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p
                      className="text-sm md:text-base font-semibold"
                      style={{ color: colors.darkPurple }}
                    >
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Section Philosophie */}
      <section
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 relative"
        style={{ backgroundColor: `${colors.darkPurple}05` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text inline-block mb-12 md:mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.darkPurple}, ${colors.darkPink})`,
                  WebkitBackgroundClip: "text",
                }}
              >
                Notre Philosophie Technique{" "}
              </motion.h2>

              <motion.ul
                className="space-y-4 md:space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {philosophyItems.map((item, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={fadeInUp}
                    className="flex items-center gap-3 md:gap-4 text-gray-700 text-base md:text-lg font-medium"
                  >
                    <motion.span
                      className="text-2xl flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm"
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {item.icon}
                    </motion.span>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section CTA avec Sparkles en haut */}
      <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 text-center relative overflow-hidden">
        {/* Fond avec dégradés animés */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background: `
        radial-gradient(circle at 70% 30%, ${colors.darkPurple}15, transparent 50%),
        radial-gradient(circle at 30% 70%, ${colors.darkPink}10, transparent 60%)
      `,
          }}
        />

        {/* Contenu principal */}
        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Carte avec animations */}
          <motion.div
            initial={{ scale: 0.98, opacity: 0, y: 20 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:p-8 rounded-xl md:rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-gray-100"
          >
            <div className="px-6 py-12 md:px-12 md:py-16 relative">
              {/* Titre avec dégradé */}
              <h3 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
                <motion.span
                  className="text-transparent bg-clip-text inline-block"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${colors.darkPurple}, ${colors.darkPink})`,
                  }}
                >
                  NeuroFlow Consulting
                </motion.span>

                {/* Texte descriptif */}
                <motion.span
                  className="block mt-4 text-transparent bg-clip-text"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${colors.darkPurple}, ${colors.mediumPurple})`,
                  }}
                >
                  c&#39;est l&#39;énergie d&#39;un collectif, la précision d&#39;un expert,
                  <br className="hidden md:block" /> et la promesse d&#39;un
                  numérique plus fluide, plus beau, et plus efficace.
                </motion.span>
              </h3>

              {/* Animation Sparkles */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 -top-8 mb-5"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{
                  rotate: [0, 15, -15, 0],
                  y: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              >
                <Sparkles
                  className="w-14 h-14 mt-8 md:w-16 md:h-16" 
                  style={{
                    color: colors.darkPurple,
                    filter: `
                drop-shadow(0 0 12px ${colors.darkPurple}40)
                drop-shadow(0 0 6px ${colors.darkPink}30)
              `,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
