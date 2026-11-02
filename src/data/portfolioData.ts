export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'mobile-ai' | 'smart-tv' | 'web-saas' | 'media';
  categoryLabel: string;
  stack: string[];
  description: string;
  features: string[];
  architectureHighlights: string[];
  metrics: { label: string; value: string }[];
  icon: string;
  gradient: string;
  badgeColor: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  technologies: string[];
  gradient: string;
  icon: string;
}

export interface TechCategory {
  category: string;
  icon: string;
  skills: { name: string; level: string; highlight?: boolean }[];
  details: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  status: string;
  responsibilities: string[];
  technologies: string[];
}

export const PROFILE_DATA = {
  name: "Hicham A.",
  role: "Senior Mobile & Web Developer",
  tagline: "Senior Mobile and Web Developer — Flutter • Next.js • On-Device AI • Web Security",
  username: "@hicham1943",
  location: "Maroc (Disponible à l'international / Remote)",
  languages: [
    { name: "Français", level: "Natif / Bilingue", flag: "🇫🇷" },
    { name: "English", level: "Courant / Fluent", flag: "🇬🇧" },
    { name: "العربية", level: "Natif / Bilingue", flag: "🇲🇦" }
  ],
  fiverrUrl: "https://www.fiverr.com/hicham1943",
  email: "contact@hicham.dev",
  availability: "Ouvert aux projets Freelance & Contrats Long-Terme",
  heroDescription: "Concepteur et bâtisseur de solutions logicielles prêtes pour la production, alliant performance chirurgicale, sécurité de bout en bout et expérience utilisateur d'élite.",
  pillars: [
    {
      title: "Performance Chirurgicale",
      tag: "60 FPS & Offline-First",
      desc: "60 fps constants sur mobile, temps de chargement web instantanés, optimisation des assets et calculs locaux hors-ligne.",
      icon: "Zap",
      accent: "from-cyan-500 to-blue-600"
    },
    {
      title: "Sécurité de Bout en Bout",
      tag: "Cloudflare Strict & Zero-Trust",
      desc: "Protection des infrastructures dès le DNS (Cloudflare WAF, anti-spoofing e-mail SPF/DKIM/DMARC) jusqu'aux APIs et bases de données.",
      icon: "ShieldCheck",
      accent: "from-emerald-500 to-teal-600"
    },
    {
      title: "Livraison Orientée Production",
      tag: "Play Store & Conteneurs Docker",
      desc: "Bundles .AAB signés pour Google Play Store, conteneurs Docker robustes sous Caddy HTTPS automatique, code propre et modulaire.",
      icon: "Rocket",
      accent: "from-purple-500 to-indigo-600"
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "passport-photo-ai",
    title: "Passport & Visa Photo AI Maker",
    tagline: "Studio photo biométrique mobile intelligent 100% hors-ligne",
    category: "mobile-ai",
    categoryLabel: "Mobile & IA Embarquée",
    stack: ["Flutter", "Dart", "Google ML Kit", "Selfie Segmentation", "PDF/Printing API", "Google AdMob"],
    description: "Application mobile utilitaire de haute précision permettant la génération automatique de photos d'identité et de visas conformes aux normes internationales (OACI/ICAO) sans aucun serveur externe.",
    features: [
      "Détection faciale automatique et segmentation du portrait 100% hors-ligne (confidentialité totale des données).",
      "Recadrage biométrique et conformité automatisée par pays (passeports, visas, cartes de séjour).",
      "Génération instantanée de planches d'impression PDF haute résolution prêtes à imprimer en magasin ou chez soi.",
      "Monétisation publicitaire intégrée via Google AdMob (bannières, interstitiels récompensés)."
    ],
    architectureHighlights: [
      "Traitement d'image sur le thread d'arrière-plan sans blocage de l'interface graphique (60 FPS).",
      "Modèles ML Kit exécutés directement sur le GPU/NPU du smartphone via les accélérateurs matériels.",
      "Conformité stricte RGPD : 0 photo transmise à un serveur cloud, zéro empreinte réseau."
    ],
    metrics: [
      { label: "Traitement IA", value: "< 350ms" },
      { label: "Latence Réseau", value: "0ms (Offline)" },
      { label: "Précision Détection", value: "99.4%" },
      { label: "Publication", value: "Google Play" }
    ],
    icon: "Camera",
    gradient: "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/30"
  },
  {
    id: "video-mp3-convertx",
    title: "Video to MP3 ConvertX & AppConvert Mobile",
    tagline: "Station de conversion multimédia locale haute performance & IA",
    category: "media",
    categoryLabel: "Média & Conversion",
    stack: ["Flutter", "FFmpeg Kit Full-GPL", "TensorFlow Lite", "Riverpod", "File Picker", "Google Play v7.x"],
    description: "Suite d'outils mobile de traitement audio et vidéo intensif exploitant FFmpeg Kit et TensorFlow Lite pour découper, transcoder et détourer localement sans bande passante serveur.",
    features: [
      "Extraction audio haute fidélité (MP3, AAC, FLAC), découpe vidéo sans réencodage et fusion multi-flux.",
      "Moteur de détourage d'images par IA embarquée (TFLite) pour suppression d'arrière-plan instantanée.",
      "Architecture d'état réactive Riverpod assurant une navigation fluide pendant les conversions lourdes.",
      "Pipeline complet de publication Google Play Store (Keystore .jks, conformité app-ads.txt, bundles AAB v7.x)."
    ],
    architectureHighlights: [
      "FFmpeg compilé avec support matériel OpenSL ES et MediaCodec pour maximiser l'efficacité énergétique.",
      "Gestion des tâches asynchrones en arrière-plan avec notifications de progression en temps réel.",
      "Architecture Clean Architecture séparant le domaine métier des bindings natifs C/C++."
    ],
    metrics: [
      { label: "Moteur", value: "FFmpeg Full-GPL" },
      { label: "Détourage IA", value: "TFLite Local" },
      { label: "Bundle", value: "AAB Signé v7.x" },
      { label: "Monétisation", value: "AdMob Validé" }
    ],
    icon: "Music",
    gradient: "from-amber-500/20 via-orange-500/10 to-red-500/20",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  {
    id: "oxy-player",
    title: "Oxy Player — Multi-Écrans IPTV & Streaming",
    tagline: "Plateforme vidéo fluide pour Smart TV Samsung Tizen, LG webOS & Android TV",
    category: "smart-tv",
    categoryLabel: "Smart TV & Streaming Vidéo",
    stack: ["Samsung Tizen OS", "LG webOS", "Android TV", "Flutter", "libmpv (media_kit)", "Node.js", "Express", "SQLite"],
    description: "Écosystème unifié de streaming vidéo haute fidélité pour téléviseurs connectés et mobiles, prenant en charge les protocoles de diffusion directs, multi-pistes audio et formats IPTV complexes.",
    features: [
      "Moteur vidéo haute performance gérant les flux IPTV, HLS, MPEG-TS avec décodage matériel natif.",
      "Prise en charge intégrale des télécommandes Smart TV (D-Pad, touches directionnelles, événements Luna Bus).",
      "Architecture unifiée avec scripts de synchronisation automatique et packaging automatisé de fichiers .ipk et .wgt.",
      "API backend Node.js ultra-rapide avec appairage fluide par QR Code et persistance locale SQLite."
    ],
    architectureHighlights: [
      "Intégration poussée des APIs natives : Tizen AVPlay API et webOS Luna Bus Service calls.",
      "Gestion du buffer vidéo adaptatif évitant les saccades sur les réseaux à débit variable.",
      "Optimisation mémoire stricte pour les processeurs limités des téléviseurs de salon."
    ],
    metrics: [
      { label: "Plateformes", value: "Tizen, webOS, Android" },
      { label: "Moteur", value: "libmpv / AVPlay" },
      { label: "Contrôle", value: "D-Pad 100%" },
      { label: "Packaging", value: ".ipk & .wgt auto" }
    ],
    icon: "Tv",
    gradient: "from-purple-500/20 via-violet-500/10 to-pink-500/20",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30"
  },
  {
    id: "solux-energy",
    title: "SoluxEnergy.ma — Portail Commercial & Énergétique",
    tagline: "Plateforme web d'ingénierie énergétique bilingue RTL/LTR et haute conversion",
    category: "web-saas",
    categoryLabel: "Web Full-Stack & Entreprise",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Docker Compose", "Caddy Server", "Cloudflare WAF"],
    description: "Site vitrine et portail commercial nouvelle génération pour un acteur de l'énergie solaire, combinant simulateurs techniques dynamiques et architecture ultra-sécurisée.",
    features: [
      "Site vitrine haute conversion avec simulateurs de devis dynamiques et formulaires automatisés.",
      "Architecture bilingue complète avec support natif et parfait de la lecture RTL (Arabe) et LTR (Français).",
      "Déploiement conteneurisé Docker sous reverse-proxy Caddy avec certificats Let's Encrypt automatisés.",
      "Sécurisation Cloudflare de niveau bancaire : SSL Full Strict, masquage IP et WAF personnalisé."
    ],
    architectureHighlights: [
      "Next.js App Router avec Server Components pour un premier affichage (FCP) inférieur à 0.6s.",
      "Moteur de calcul de rentabilité énergétique exécuté côté client pour une réactivité instantanée.",
      "Pipeline CI/CD Docker Compose avec zero-downtime reload via Caddy."
    ],
    metrics: [
      { label: "Score Performance", value: "98/100" },
      { label: "Bilingue", value: "RTL (Ar) / LTR (Fr)" },
      { label: "Sécurité Edge", value: "Cloudflare Strict" },
      { label: "Conteneur", value: "Docker + Caddy" }
    ],
    icon: "SunMedium",
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
  },
  {
    id: "video-ai-platform",
    title: "Video AI Platform — Architecture Distribuée",
    tagline: "SaaS génératif distribué avec files de traitement asynchrone lourdes",
    category: "web-saas",
    categoryLabel: "SaaS Génératif & Microservices",
    stack: ["Next.js 16", "Express 5", "Prisma ORM", "PostgreSQL", "Redis", "BullMQ", "Fal.ai API", "Argon2", "2FA TOTP"],
    description: "Plateforme SaaS modulaire de génération et manipulation vidéo par intelligence artificielle conçue pour absorber des flux de travail massifs sans saturer l'API principale.",
    features: [
      "Architecture découplée en Monorepo : Frontend Web, API REST sécurisée et Workers de calcul indépendants.",
      "Traitement asynchrone résilient piloté par BullMQ et Redis avec reprise sur erreur et webhook d'avancement.",
      "Sécurité d'accès durcie : hachage de mot de passe Argon2, double authentification (2FA TOTP) et validation Zod.",
      "Intégration d'APIs IA haute capacité (Fal.ai) avec mise en mémoire cache des modèles récurrents."
    ],
    architectureHighlights: [
      "File d'attente Redis BullMQ capable d'orchestrer des centaines de rendus vidéo concurrents.",
      "Protection contre les injections et attaques par force brute grâce à Helmet et au rate limiter distribué.",
      "Base de données relationnelle PostgreSQL orchestrée avec Prisma ORM et migrations typées."
    ],
    metrics: [
      { label: "Architecture", value: "Workers BullMQ" },
      { label: "Auth Sécurité", value: "Argon2 + 2FA" },
      { label: "Base de Données", value: "PostgreSQL Prisma" },
      { label: "Scalabilité", value: "Monorepo Découplé" }
    ],
    icon: "Sparkles",
    gradient: "from-fuchsia-500/20 via-purple-500/10 to-blue-500/20",
    badgeColor: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30"
  }
];

export const SERVICES: Service[] = [
  {
    id: "mobile-ai",
    title: "Développement Mobile & IA Embarquée",
    shortDesc: "Applications natives iOS & Android sous Flutter, dotées de modèles d'IA sur l'appareil pour un coût serveur nul et une confidentialité absolue.",
    deliverables: [
      "Architecture Clean Architecture sous Flutter (Dart) & Riverpod",
      "Intégration Google ML Kit & TensorFlow Lite 100% hors-ligne",
      "Configuration publicitaire AdMob & conformité app-ads.txt",
      "Génération du bundle signé .AAB & accompagnement Google Play Console"
    ],
    technologies: ["Flutter", "Dart", "ML Kit", "TFLite", "AdMob", "Riverpod", "Clean Arch"],
    gradient: "from-sky-500/20 to-blue-600/20",
    icon: "Smartphone"
  },
  {
    id: "web-saas",
    title: "Développement Web Next.js 16 & Applications SaaS",
    shortDesc: "Conception d'applications web ultra-rapides, responsives, bilingues RTL/LTR et orchestrées avec des files asynchrones pour traitements lourds.",
    deliverables: [
      "Frontend Next.js 16 (App Router, React 19, Tailwind CSS v4)",
      "Backends Express 5 ou Server Actions avec validation stricte Zod",
      "Gestion de files d'attente asynchrones Redis / BullMQ",
      "Internationalisation complète (Français, Anglais, Arabe avec RTL parfait)"
    ],
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Redis", "BullMQ", "PostgreSQL"],
    gradient: "from-emerald-500/20 to-teal-600/20",
    icon: "Globe"
  },
  {
    id: "smart-tv",
    title: "Portage & Création d'Apps Smart TV (Samsung & LG)",
    shortDesc: "Création et portage d'applications de streaming optimisées pour les téléviseurs de salon Samsung Tizen et LG webOS avec navigation fluide à la télécommande.",
    deliverables: [
      "Interface 100% pilotable au D-Pad / télécommande Smart TV",
      "Intégration des APIs natives : Samsung Tizen AVPlay & LG Luna Bus",
      "Support des flux IPTV, HLS, MPEG-TS, multi-audio et sous-titres",
      "Automatisation du packaging des livrables installables (.ipk et .wgt)"
    ],
    technologies: ["Samsung Tizen", "LG webOS", "Android TV", "libmpv", "HLS / IPTV", "IPK Packaging"],
    gradient: "from-purple-500/20 to-indigo-600/20",
    icon: "Tv"
  },
  {
    id: "security-cloudflare",
    title: "Audit de Sécurité Web & Durcissement Cloudflare",
    shortDesc: "Protection intégrale de votre infrastructure : masquage IP d'origine, pare-feu WAF, délivrabilité e-mail irréprochable et serveurs Linux renforcés.",
    deliverables: [
      "Configuration Cloudflare : WAF, proxy IP, SSL/TLS Full Strict, DDoS",
      "Anti-spoofing e-mail : durcissement SPF (-all), DKIM 2048-bit, DMARC",
      "Sécurisation backend : en-têtes Helmet, Rate Limiter, Argon2, 2FA TOTP",
      "Mise en place Caddy Server HTTPS automatique et isolation Docker"
    ],
    technologies: ["Cloudflare WAF", "SSL Strict", "SPF/DKIM/DMARC", "Caddy", "Docker", "Argon2", "Helmet"],
    gradient: "from-amber-500/20 to-orange-600/20",
    icon: "ShieldAlert"
  }
];

export const TECH_MATRIX: TechCategory[] = [
  {
    category: "Mobile & Multiplateforme",
    icon: "Smartphone",
    details: "Maîtrise complète du cycle de vie mobile, du code source au déploiement Play Store avec 60 FPS garantis.",
    skills: [
      { name: "Flutter & Dart", level: "Senior / Expert", highlight: true },
      { name: "React Native (Expo Router)", level: "Avancé" },
      { name: "Riverpod & Bloc", level: "Expert", highlight: true },
      { name: "Clean Architecture", level: "Expert" },
      { name: "FFmpeg Kit (Full-GPL)", level: "Avancé", highlight: true },
      { name: "Google ML Kit (Offline)", level: "Expert", highlight: true },
      { name: "TensorFlow Lite (TFLite)", level: "Avancé" },
      { name: "Google Play Store / AAB", level: "Expert" },
      { name: "Google AdMob & Monétisation", level: "Expert" }
    ]
  },
  {
    category: "Web & Full-Stack",
    icon: "Code2",
    details: "Architectures modernes à rendu hybride, API asynchrones résilientes et support bilingue RTL natif.",
    skills: [
      { name: "Next.js 16 (App Router)", level: "Senior / Expert", highlight: true },
      { name: "React 19 & TypeScript", level: "Expert", highlight: true },
      { name: "Tailwind CSS v4", level: "Expert" },
      { name: "Node.js & Express 5", level: "Senior", highlight: true },
      { name: "PostgreSQL & Prisma ORM", level: "Avancé" },
      { name: "Redis & BullMQ", level: "Avancé", highlight: true },
      { name: "SQLite (better-sqlite3)", level: "Expert" },
      { name: "WebSockets (ws)", level: "Avancé" },
      { name: "Internationalisation RTL/LTR", level: "Expert", highlight: true }
    ]
  },
  {
    category: "Smart TV & Streaming",
    icon: "Tv",
    details: "Spécialisation rare dans le développement pour téléviseurs connectés et protocoles de streaming lourds.",
    skills: [
      { name: "Samsung Tizen OS", level: "Expert", highlight: true },
      { name: "LG webOS", level: "Expert", highlight: true },
      { name: "Android TV / Google TV", level: "Avancé" },
      { name: "Tizen AVPlay API", level: "Expert", highlight: true },
      { name: "webOS Luna Bus Service", level: "Avancé" },
      { name: "Flux IPTV & HLS / MPEG-TS", level: "Expert", highlight: true },
      { name: "libmpv (media_kit)", level: "Avancé" },
      { name: "Packaging .ipk / .wgt", level: "Expert" }
    ]
  },
  {
    category: "Sécurité & Infrastructure",
    icon: "Shield",
    details: "Protection multicouche des serveurs et noms de domaine contre les attaques, fraudes et pannes.",
    skills: [
      { name: "Cloudflare WAF & Proxy", level: "Expert", highlight: true },
      { name: "SSL/TLS Full (Strict)", level: "Expert" },
      { name: "Anti-Spoofing SPF / DKIM 2048 / DMARC", level: "Expert", highlight: true },
      { name: "Caddy Server (HTTPS Auto)", level: "Senior", highlight: true },
      { name: "Docker & Docker Compose", level: "Senior" },
      { name: "Argon2 & 2FA TOTP", level: "Expert" },
      { name: "En-têtes Helmet & Rate Limiting", level: "Expert" },
      { name: "Serveurs Linux VPS", level: "Avancé" }
    ]
  }
];

export const SECURITY_AUDIT_DATA = [
  {
    layer: "Périmètre Edge Cloudflare",
    description: "Protection externe et masquage complet de l'infrastructure d'origine.",
    items: [
      { name: "Proxy Actif (Nuage Orange)", status: "Sécurisé", desc: "Adresse IP du serveur masquée des requêtes DNS directes." },
      { name: "WAF & Mitigation DDoS", status: "Actif", desc: "Filtrage des bots malveillants et blocage des scanners automatiques." },
      { name: "Always Use HTTPS", status: "Actif", desc: "Redirection automatique de toutes les requêtes HTTP non sécurisées." },
      { name: "SSL/TLS Full (Strict)", status: "Certifié", desc: "Chiffrement de bout en bout avec certificat d'origine valide." }
    ]
  },
  {
    layer: "Délivrabilité & Anti-Usurpation E-mail",
    description: "Conformité stricte contre le spoofing et garantie d'arrivée en boîte de réception.",
    items: [
      { name: "Enregistrement SPF Strict", status: "Sécurisé", desc: "Politique '-all' bloquant tout serveur d'envoi non autorisé." },
      { name: "Signature DKIM RSA 2048-bit", status: "Crypté", desc: "Validation de l'intégrité du message par clé cryptographique robuste." },
      { name: "Politique DMARC (Reject)", status: "Conforme", desc: "Instruction aux récepteurs (Gmail, Outlook) de rejeter les e-mails falsifiés." },
      { name: "Alignement de Domaine", status: "100% Validé", desc: "Correspondance parfaite entre l'en-tête 'From' et les signatures." }
    ]
  },
  {
    layer: "Protection Applicative & Serveur",
    description: "Défense en profondeur au niveau du code, des données et du système d'exploitation.",
    items: [
      { name: "Hachage Mot de Passe Argon2", status: "Militaire", desc: "Algorithme résistant aux attaques par GPU et FPGA." },
      { name: "Authentification 2FA / TOTP", status: "Actif", desc: "Génération de jetons temporels avec Speakeasy et QR Code." },
      { name: "En-têtes Helmet & CSP", status: "Renforcé", desc: "Blocage des attaques XSS, Clickjacking et fuite de referrer." },
      { name: "Reverse Proxy Caddy & Docker", status: "Isolé", desc: "Conteneurisation sécurisée et renouvellement zéro-touch des certificats SSL." }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Senior Mobile & Web Developer",
    company: "Indépendant / Freelance",
    period: "2023 – Présent",
    status: "En cours • Projets Internationaux",
    responsibilities: [
      "Conception d'architectures logicielles complètes pour des clients internationaux et développement de produits propriétaires.",
      "Développement d'applications mobiles Flutter cumulant IA embarquée hors-ligne, monétisation AdMob et publication Google Play Store.",
      "Création de plateformes web Next.js 16 à forte charge avec traitement en arrière-plan asynchrone (BullMQ / Redis / PostgreSQL)."
    ],
    technologies: ["Flutter", "Dart", "Next.js 16", "React 19", "ML Kit", "BullMQ", "Redis", "AdMob", "Cloudflare"]
  },
  {
    role: "Full-Stack Developer & Security Consultant",
    company: "Solutions Digitales & Cloud",
    period: "2021 – 2023",
    status: "Missions réussies",
    responsibilities: [
      "Développement de lecteurs de streaming vidéo et portage multi-TV (Samsung Tizen, LG webOS, Android TV).",
      "Réalisation d'audits de sécurité web, durcissement d'infrastructures DNS et déploiement de protocoles de messagerie sécurisés (SPF/DKIM/DMARC).",
      "Déploiement et conteneurisation de micro-services backend sous Docker et reverse proxy Caddy HTTPS automatique."
    ],
    technologies: ["Samsung Tizen", "LG webOS", "Node.js", "Docker", "Caddy", "Cloudflare WAF", "IPTV/HLS", "Argon2"]
  }
];
