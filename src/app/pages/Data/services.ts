// app/data/services.ts

import { Service } from "@/app/components/types";

export const services: Service[] = [
  {
    id: 1,
    title: "Intelligence Artificielle (IA)",
    description: `Créer des chatbots intelligents pour le support client: ces chatbots peuvent répondre aux questions fréquentes, résoudre des problèmes simples et orienter les clients vers des agents humains si nécessaire.
         L'intégration de l'intelligence artificielle (IA) pour la recommandation de produits est une stratégie puissante pour personnaliser l'expérience utilisateur et augmenter les ventes.          Permet la génération automatique de contenu (textes, images, vidéos). 
        Des systèmes de reconnaissance vocale ou d'image.
        Créer un chatbot pour une entreprise de e-commerce répondant aux questions.`,
    gradient: "from-cyan-500 to-blue-600",
    image: "/images/ai.png",
  },
  {
    id: 2,
    title: "Big Data & Analytics",
    description: `Analyse exploratoire des données: On vous aide à comprendre vos données grâce à des visualisations claires et des statistiques descriptives.
      Création de tableaux de bord interactifs: Conception de tableaux de bord dynamiques pour suivre vos indicateurs clés (KPIs) en temps réel.
      Nettoyage et préparation des données: On transforme vos données brutes en données exploitables : gestion des valeurs manquantes, formatage, détection des anomalies.
      Automatisation de rapports: Gain de temps assuré avec des rapports automatisés et actualisés régulièrement.
      Réalisation d’analyses statistiques: Tests A/B, corrélations, régressions linéaires… pour tirer des conclusions solides à partir de vos données.
      Conception et mise en place d’une base de données ou d’un data warehouse.
      Extraction et manipulation de données via des bases de données: Requêtage de vos bases de données pour extraire les informations pertinentes.`,
    gradient: "from-cyan-500 to-blue-600",
    image: "/images/bd.png",
  },
  {
    id: 3,
    title: "Développement Full-Stack",
    description: `Créer des interfaces utilisateur responsives et intuitives en utilisant des technologies comme HTML, CSS, JavaScript, et des frameworks tels que React, Angular ou Next.js...
    Assurer que les applications sont optimisées pour différents appareils (mobile, tablette, desktop).
    Collaborer avec les designers pour traduire les maquettes en code fonctionnel.
    Développer et maintenir les serveurs, les API et la logique métier avec des langages comme JavaScript (Node.js), PHP...
    Gérer les bases de données (SQL comme PostgreSQL) pour stocker et récupérer les données efficacement.
    Assurer la sécurité des données et des connexions (authentification, cryptage).
    Optimiser les performances de l'application (temps de chargement, gestion des ressources).
    Mettre à jour les technologies et frameworks pour rester compétitif.`,
    gradient: "from-cyan-500 to-blue-600",
    image: "/images/dev.png",
  },
  {
    id: 4,
    title: "Web Design",
    description: `Conception de livres : Création de mises en page et de couvertures de livres visuellement attrayantes qui améliorent la lisibilité et reflètent le thème du livre.
Conception de magazines : Élaboration de mises en page de magazines captivantes.
Identité de marque : Élaboration d'une identité visuelle unique, incluant des logos, des palettes de couleurs et des typographies, pour créer une présence de marque forte et mémorable.
Profil d'entreprise : Conception de profils d'entreprise professionnels qui mettent efficacement en valeur votre entreprise, vos services et vos valeurs avec une mise en page moderne et épurée.
Contenu multimédia et numérique : Animation vidéo / Vidéo IA, production d'animations dynamiques et de vidéos générées par IA qui donnent vie aux idées grâce à des graphiques animés captivants.
Codes QR personnalisés : Création de codes QR personnalisés intégrant des éléments de l'identité de marque.
Filtres et lentilles Snapchat : Conception de filtres et de lentilles AR interactifs et engageants pour Snapchat afin d'améliorer l'engagement des utilisateurs et la visibilité de la marque. `,
    gradient: "from-cyan-500 to-blue-600",
    image: "/images/desgin.png",
  },
];
