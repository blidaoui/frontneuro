// app/data/services.ts

import { Service } from "@/app/components/types";

export const services: Service[] = [
    {
      id: 1,
      title: "Intelligence Artificielle (IA)",
      description:
        `Créer des chatbots intelligents pour le support client: ces chatbots peuvent répondre aux questions fréquentes, résoudre des problèmes simples et orienter les clients vers des agents humains si nécessaire.
         L'intégration de l'intelligence artificielle (IA) pour la recommandation de produits est une stratégie puissante pour personnaliser l'expérience utilisateur et augmenter les ventes.          Permet la génération automatique de contenu (textes, images, vidéos). 
        Des systèmes de reconnaissance vocale ou d'image.`,
      gradient: "from-cyan-500 to-blue-600",
      image: "/images/ai.png",
    },
    {
      id: 2,
      title: "Big Data & Analytics",
      description:
      `Analyse exploratoire des données.
      Création de tableaux de bord interactifs.
      Nettoyage et préparation des données.
      Automatisation de rapports.
      Réalisation d’analyses statistiques.
      Conception et mise en place d’une base de données ou d’un data warehouse.
      Extraction et manipulation de données via des bases de données.
      Requêtage de vos bases de données pour extraire les informations pertinentes.`,
      gradient: "from-cyan-500 to-blue-600",
      image: "/images/bd.png",
    },
    {
      id: 3,
      title: "Développement Full-Stack",
      description:
        `création des sites web, applications ou plateformes digitales adaptés spécifiquement aux besoins d’un client, plutôt que d’utiliser des solutions prêtes à l’emploi ou des modèles standards.
         Mettre à jour les sites web en fonction des nouvelles technologies et des tendances du marché.
         Améliorer la performance des applications en optimisant le code et les bases de données.
        Gestion de bases de données.`,
      gradient: "from-cyan-500 to-blue-600",
      image: "/images/dev.png",
    },
    {
      id: 4,
      title: "Web Design",
      description:
        `Book Design: Creating visually appealing book layouts and covers that enhance readability and reflect the book’s theme.
         Magazine Design: Designing engaging magazine layouts. 
         Brand Identity: Crafting a unique visual identity, including logos, color palettes, and typography, to create a strong and memorable brand presence.    
        	Company Profile: Designing professional company profiles that effectively showcase your business, services, and values with a clean, modern layout.
         Multimedia & Digital Content:	Video Animation / AI Video, producing dynamic animations and AI-generated videos that bring ideas to life with engaging motion graphics.
        Custom QR Codes : Creating personalized QR codes that integrate brand identity elements.
Snapchat Lenses & Filters : Designing interactive and engaging AR filters and lenses for Snapchat to enhance user engagement and brand visibility. `, 
       gradient: "from-cyan-500 to-blue-600",
      image: "/images/desgin.png",
    },
  ];