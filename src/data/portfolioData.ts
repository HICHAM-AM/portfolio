import type { Language } from './translations';

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

export interface SecurityAuditLayer {
  layer: string;
  description: string;
  items: { name: string; status: string; desc: string }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  status: string;
  responsibilities: string[];
  technologies: string[];
}

export const PROFILE_CONSTANTS = {
  name: "Hicham AM.",
  username: "@hicham1943",
  fiverrUrl: "https://www.fiverr.com/hicham1943",
  phone: "+212697659597",
  phoneDisplay: "+212 697-659597",
  whatsappUrl: "https://wa.me/212697659597",
};

export const getPortfolioData = (lang: Language = 'en') => {
  if (lang === 'fr') {
    return {
      profile: {
        name: "Hicham AM.",
        role: "Senior Mobile & Web Developer",
        tagline: "Senior Mobile and Web Developer — Flutter • Next.js • On-Device AI • Web Security",
        username: "@hicham1943",
        location: "Maroc (Disponible à l'international / Remote)",
        availability: "Ouvert aux projets Freelance & Contrats Long-Terme",
      },
      projects: [
        {
          id: "passport-photo-ai",
          title: "Générateur Mobile de Photos d'Identité & Visas (IA)",
          tagline: "Studio photo biométrique mobile intelligent 100% hors-ligne",
          category: "mobile-ai" as const,
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
          title: "Convertisseur Multimédia & Traitement Audio/Vidéo Mobile",
          tagline: "Station de conversion multimédia locale haute performance & IA",
          category: "media" as const,
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
          id: "smart-tv-iptv-player",
          title: "Lecteur IPTV & Streaming Multi-Écrans",
          tagline: "Solution de lecture vidéo fluide pour Smart TV Samsung Tizen, LG webOS & Android TV",
          category: "smart-tv" as const,
          categoryLabel: "Smart TV & Streaming Vidéo",
          stack: ["Samsung Tizen", "LG webOS", "Android TV", "Flutter", "HLS / MPEG-TS", "D-Pad Navigation", "Hardware Acceleration"],
          description: "Application de streaming multimédia haute performance conçue pour les téléviseurs connectés et mobiles, optimisée pour la fluidité de navigation à la télécommande et la lecture de flux directs haute définition.",
          features: [
            "Moteur de lecture fluide gérant les flux IPTV, HLS et flux directs avec décodage matériel natif.",
            "Navigation ergonomique 100% adaptée aux télécommandes de télévision (D-Pad, raccourcis).",
            "Prise en charge multi-écrans : téléviseurs connectés de salon, boîtiers Android et appareils mobiles.",
            "Interface utilisateur moderne, réactive et optimisée pour les écrans 4K et Full HD."
          ],
          architectureHighlights: [
            "Intégration poussée avec les environnements Tizen et webOS pour des performances maximales.",
            "Optimisation rigoureuse de la mémoire vive pour préserver la fluidité sur tous types de processeurs TV.",
            "Gestion de mise en cache adaptative réduisant les temps de chargement des flux et des chaînes."
          ],
          metrics: [
            { label: "Plateformes", value: "Tizen, webOS, Android" },
            { label: "Contrôle", value: "D-Pad 100%" },
            { label: "Décodage", value: "Matériel Natif" },
            { label: "Résolution", value: "Full HD & 4K" }
          ],
          icon: "Tv",
          gradient: "from-purple-500/20 via-violet-500/10 to-pink-500/20",
          badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30"
        },
        {
          id: "solux-energy",
          title: "Portail Web d'Ingénierie Solaire & Simulateur Énergétique",
          tagline: "Plateforme web d'ingénierie énergétique bilingue RTL/LTR et haute conversion",
          category: "web-saas" as const,
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
          title: "Plateforme SaaS Distribuée de Génération Vidéo par IA",
          tagline: "SaaS génératif distribué avec files de traitement asynchrone lourdes",
          category: "web-saas" as const,
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
      ],
      services: [
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
      ],
      techMatrix: [
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
      ],
      securityAudit: [
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
      ],
      experiences: [
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
      ]
    };
  }

  if (lang === 'ar') {
    return {
      profile: {
        name: "هشام ع.م (Hicham AM.)",
        role: "مطور أول تطبيقات جوال وويب وشاشات ذكية",
        tagline: "مطور أول تطبيقات الجوال والويب الشامل — Flutter • Next.js • الذكاء الاصطناعي • أمان الويب",
        username: "@hicham1943",
        location: "المغرب (متاح للعمل عن بُعد دولياً)",
        availability: "متاح للمشاريع الحرة والعقود طويلة الأجل",
      },
      projects: [
        {
          id: "passport-photo-ai",
          title: "تطبيق الذكاء الاصطناعي لصور وثائق الهوية والتأشيرات",
          tagline: "استوديو صور جوازات وتأشيرات بيومترية يعمل 100% دون إنترنت",
          category: "mobile-ai" as const,
          categoryLabel: "الجوال والذكاء الاصطناعي",
          stack: ["Flutter", "Dart", "Google ML Kit", "Selfie Segmentation", "PDF/Printing API", "Google AdMob"],
          description: "تطبيق جوال فائق الدقة يتيح التوليد التلقائي لصور الهوية والتأشيرات الرسمية المطابقة للمواصفات الدولية (ICAO/OACI) دون الحاجة لأي خادم خارجي.",
          features: [
            "كشف تلقائي للوجه وعزل دقيق للشخصية 100% محلياً على الجهاز (حفاظ مطلق على خصوصية الصور).",
            "قص بيومتري ومطابقة معيارية فورية حسب متطلبات كل دولة (جوازات سفر، تأشيرات، بطاقات إقامة).",
            "توليد فوري للوحات طباعة PDF عالية الدقة جاهزة للطباعة المنزلية أو في المتاجر.",
            "تكامل إعلاني متطور عبر Google AdMob (إعلانات بانر وإعلانات بمكافأة)."
          ],
          architectureHighlights: [
            "معالجة متقدمة للصور في مسار خلفي مستقل يضمن ثبات واجهة المستخدم عند 60 إطاراً في الثانية.",
            "تشغيل نماذج ML Kit مباشرة على رقاقات NPU و GPU في الهواتف لتفادي استهلاك الإنترنت.",
            "مطابقة كاملة للخصوصية واللوائح التنظيمية (GDPR): صفر صور تُرسل لأي خادم سحابي."
          ],
          metrics: [
            { label: "زمن المعالجة الذكية", value: "< 350ms" },
            { label: "تأخير الشبكة", value: "0ms (Offline)" },
            { label: "دقة الاقتطاع", value: "99.4%" },
            { label: "النشر الرسمي", value: "Google Play" }
          ],
          icon: "Camera",
          gradient: "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
          badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/30"
        },
        {
          id: "video-mp3-convertx",
          title: "منظومة معالجة وتحويل الوسائط والصوتيات عالية الأداء",
          tagline: "منظومة معالجة وتحويل الوسائط بالذكاء الاصطناعي على الهاتف",
          category: "media" as const,
          categoryLabel: "الوسائط والتحويل",
          stack: ["Flutter", "FFmpeg Kit Full-GPL", "TensorFlow Lite", "Riverpod", "File Picker", "Google Play v7.x"],
          description: "حزمة أدوات جوال لمعالجة وتحويل ملفات الفيديو والصوت المكثفة باستخدام FFmpeg Kit و TensorFlow Lite للاقتصاص والتحويل بدون استهلاك باندويث السيرفر.",
          features: [
            "استخراج فائق النقاء للصوت (MP3, AAC, FLAC)، قص فوري دون إعادة تشفير، ودمج متعدد المسارات.",
            "محرك عزل وتفريغ خلفيات الصور بالذكاء الاصطناعي (TFLite) محلياً دون رفع للسيرفر.",
            "بنية إدارة حالة رشيقة عبر Riverpod تضمن بقاء التطبيق سريعاً وسلساً أثناء التحويلات الثقيلة.",
            "خط إنتاج متكامل للنشر في متجر Google Play مع توافق app-ads.txt وحزم AAB v7.x."
          ],
          architectureHighlights: [
            "تجميع مخصص لـ FFmpeg مع تسريع العتاد عبر OpenSL ES و MediaCodec لتوفير طاقة البطارية.",
            "إدارة المهام غير المتزامنة في الخلفية مع إشعارات تقدم حية وفورية.",
            "فصل معماري صارم (Clean Architecture) بين منطق العمل وروابط C/C++ الأصلية."
          ],
          metrics: [
            { label: "محرك المعالجة", value: "FFmpeg Full-GPL" },
            { label: "تفريغ الصور", value: "TFLite محلي" },
            { label: "حزمة الإنتاج", value: "AAB موقع v7.x" },
            { label: "الربح الإعلاني", value: "AdMob معتمد" }
          ],
          icon: "Music",
          gradient: "from-amber-500/20 via-orange-500/10 to-red-500/20",
          badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30"
        },
        {
          id: "smart-tv-iptv-player",
          title: "مشغل البث التلفزيوني الذكي متعدد الشاشات",
          tagline: "محرك تشغيل فيديو سلس وعالي الكفاءة لشاشات Samsung Tizen و LG webOS و Android TV",
          category: "smart-tv" as const,
          categoryLabel: "التلفاز الذكي والبث",
          stack: ["Samsung Tizen", "LG webOS", "Android TV", "Flutter", "HLS / MPEG-TS", "D-Pad Navigation", "Hardware Acceleration"],
          description: "تطبيق متطور لتشغيل الوسائط والبث المباشر مصمم خصيصاً لأجهزة التلفاز الذكية والشاشات الكبيرة، يوفر سلاسة فائقة في التحكم عبر الريموت كنترول وتشغيل موثوق لقنوات البث عالي الدقة.",
          features: [
            "تشغيل سلس لتدفقات IPTV وقنوات البث المباشر (HLS, MPEG-TS) بفك تشفير عتادي أصيل.",
            "دعم كامل ومريح لأجهزة التحكم عن بُعد (ريموت التلفاز D-Pad) مع استجابة فورية للأزرار.",
            "توافق شامل عبر الشاشات الذكية من تلفزيونات الصالون وأجهزة Android TV والهواتف.",
            "واجهة مستخدم احترافية وحديثة مصممة خصيصاً لتناسب شاشات العرض بدقة 4K و Full HD."
          ],
          architectureHighlights: [
            "تكامل وثيق مع أنظمة تشغيل التلفاز (Tizen OS و LG webOS) لتحقيق أعلى أداء ممكن.",
            "إدارة صارمة لاستهلاك الذاكرة لتفادي التباطؤ على معالجات شاشات التلفاز المحدودة.",
            "تخزين مؤقت متكيف يقلل من وقت التبديل بين القنوات والتدفقات المباشرة."
          ],
          metrics: [
            { label: "المنصات المدعومة", value: "Tizen, webOS, Android" },
            { label: "التحكم بالريموت", value: "100% D-Pad" },
            { label: "فك التشفير", value: "عتادي أصيل" },
            { label: "الدقة", value: "Full HD & 4K" }
          ],
          icon: "Tv",
          gradient: "from-purple-500/20 via-violet-500/10 to-pink-500/20",
          badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30"
        },
        {
          id: "solux-energy",
          title: "بوابة هندسة الطاقة الشمسية والمحاكاة التفاعلية",
          tagline: "منصة ويب متطورة ثنائية اللغة تدعم العربية والفرنسية بمعدل تحويل عالٍ",
          category: "web-saas" as const,
          categoryLabel: "الويب الشامل والمؤسسات",
          stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Docker Compose", "Caddy Server", "Cloudflare WAF"],
          description: "موقع تجاري وبوابة مؤسسية لشركة رائدة في قطاع الطاقة الشمسية، تجمع بين محاكيات التكلفة التفاعلية والبنية السحابية فائقة الأمان.",
          features: [
            "واجهة احترافية عالية التحويل مزودة بنماذج محاكاة أسعار وحساب عائد الاستثمار تلقائياً.",
            "بنية ثنائية اللغة متكاملة تدعم القراءة من اليمين إلى اليسار (RTL للعربية) واليسار لليمين (LTR للفرنسية).",
            "نشر معزول في حاويات Docker تحت خادم Caddy العكسي مع تجديد آلي لشهادات الحماية Let's Encrypt.",
            "تحصين شامل من Cloudflare: تشفير SSL Full Strict، إخفاء عنوان IP، وقواعد WAF مخصصة."
          ],
          architectureHighlights: [
            "اعتماد Next.js App Router و Server Components لسرعة تحميل قياسية تقل عن 0.6 ثانية.",
            "محرك حسابات هندسي ينفذ فوراً على متصفح العميل لتجربة مستخدم لحظية.",
            "خط أتمتة مستمر Docker Compose مع إعادة تحميل سلسة دون توقف الخدمة (Zero-Downtime)."
          ],
          metrics: [
            { label: "مؤشر الأداء", value: "98/100" },
            { label: "اللغات", value: "عربي (RTL) / فرنسي" },
            { label: "الأمان السحابي", value: "Cloudflare Strict" },
            { label: "الحاويات", value: "Docker + Caddy" }
          ],
          icon: "SunMedium",
          gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
          badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
        },
        {
          id: "video-ai-platform",
          title: "منصة سحابية موزعة لتوليد ومعالجة الفيديو بالذكاء الاصطناعي",
          tagline: "منظومة SaaS موزعة لتوليد الفيديو ومعالجة الطوابير الحوسبية الثقيلة",
          category: "web-saas" as const,
          categoryLabel: "الـ SaaS التوليدي والأنظمة الموزعة",
          stack: ["Next.js 16", "Express 5", "Prisma ORM", "PostgreSQL", "Redis", "BullMQ", "Fal.ai API", "Argon2", "2FA TOTP"],
          description: "منصة SaaS مرنة لتوليد ومعالجة الفيديو بالذكاء الاصطناعي صُممت لاستيعاب طوابير عمل ضخمة دون التأثير على استجابة الخادم الأساسي.",
          features: [
            "بنية معمارية مفصولة بنظام Monorepo: واجهة أمامية، خادم API محمي، وعمال معالجة (Workers) مستقلون.",
            "معالجة غير متزامنة قوية عبر BullMQ و Redis مع استئناف فوري عند الأخطاء وتحديثات فورية بالخطوات.",
            "أمان نفاذ عالي المستوى: تشفير كلمات المرور عبر Argon2، تحقق بخطوتين (2FA TOTP) وتحقق صارم Zod.",
            "تكامل مباشر مع واجهات الذكاء الاصطناعي (Fal.ai) مع تخزين مؤقت متقدم للنماذج المتكررة."
          ],
          architectureHighlights: [
            "طوابير Redis BullMQ قادرة على تنظيم مئات عمليات تصيير الفيديو المتزامنة في آن واحد.",
            "حماية قصوى ضد هجمات القوة الغاشمة والحقن عبر Helmet ومحدد الطلبات الموزع.",
            "قاعدة بيانات PostgreSQL منظمة وموثقة بالكامل مع هجرات أنواع Prisma ORM."
          ],
          metrics: [
            { label: "البنية الموزعة", value: "عمال BullMQ" },
            { label: "المصادقة والأمان", value: "Argon2 + 2FA" },
            { label: "قاعدة البيانات", value: "PostgreSQL Prisma" },
            { label: "قابلية التوسع", value: "Monorepo مستقل" }
          ],
          icon: "Sparkles",
          gradient: "from-fuchsia-500/20 via-purple-500/10 to-blue-500/20",
          badgeColor: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30"
        }
      ],
      services: [
        {
          id: "mobile-ai",
          title: "تطوير تطبيقات الجوال والذكاء الاصطناعي المحلي",
          shortDesc: "تطبيقات أصلية لأنظمة iOS و Android بإطار عمل Flutter، مدمجة بنماذج ذكاء اصطناعي على الهاتف لتوفير تكاليف الخوادم وحماية الخصوصية كلياً.",
          deliverables: [
            "بنية معمارية نظيفة (Clean Architecture) بلغة Dart وإدارة حالة متينة مع Riverpod",
            "تضمين Google ML Kit و TensorFlow Lite للعمل 100% دون إنترنت",
            "تهيئة إعلانات Google AdMob وضبط ملف app-ads.txt لتحقيق الأرباح",
            "توليد حزمة .AAB الموقعة رقمياً والمرافقة في متجر Google Play Console"
          ],
          technologies: ["Flutter", "Dart", "ML Kit", "TFLite", "AdMob", "Riverpod", "Clean Arch"],
          gradient: "from-sky-500/20 to-blue-600/20",
          icon: "Smartphone"
        },
        {
          id: "web-saas",
          title: "تطوير تطبيقات الويب ومنصات الـ SaaS بـ Next.js 16",
          shortDesc: "بناء تطبيقات ويب فائقة السرعة، متجاوبة، ثنائية اللغة تدعم العربية والإنجليزية ومنظمة بطوابير معالجة غير متزامنة للمهام الثقيلة.",
          deliverables: [
            "واجهات أمامية حديثة مع Next.js 16 (App Router, React 19, Tailwind CSS v4)",
            "خوادم Express 5 و Server Actions مع تحقق صارم للمدخلات عبر Zod",
            "إدارة احترافية للمهام المعقدة في الخلفية عبر Redis و BullMQ",
            "دعم لغوي أصيل ومثالي (عربي مع اتجاه RTL سليم، وإنجليزية وفرنسية LTR)"
          ],
          technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Redis", "BullMQ", "PostgreSQL"],
          gradient: "from-emerald-500/20 to-teal-600/20",
          icon: "Globe"
        },
        {
          id: "smart-tv",
          title: "تطوير ونقل تطبيقات التلفاز الذكي (Samsung & LG)",
          shortDesc: "تصميم ونقل تطبيقات البث المتطورة لتلفزيونات الصالون Samsung Tizen و LG webOS مع تحكم مريح وسلس عبر جهاز التحكم عن بُعد (الريموت).",
          deliverables: [
            "واجهة مستخدم متناسقة 100% مع أزرار ريموت التلفاز (D-Pad)",
            "تكامل مع مكتبات التلفاز الأصلية: Tizen AVPlay و LG webOS Luna Bus",
            "دعم شامل لبثوث IPTV و HLS و MPEG-TS وتعدد القنوات الصوتية والترجمات",
            "أتمتة تجميع وتصدير ملفات التثبيت الجاهزة للشاشات (.ipk و .wgt)"
          ],
          technologies: ["Samsung Tizen", "LG webOS", "Android TV", "libmpv", "HLS / IPTV", "IPK Packaging"],
          gradient: "from-purple-500/20 to-indigo-600/20",
          icon: "Tv"
        },
        {
          id: "security-cloudflare",
          title: "تدقيق أمان الويب وتحصين البنية التحتية Cloudflare",
          shortDesc: "حماية شاملة لخوادمك ومواقعك: إخفاء عنوان السيرفر الحقيقي، جدار ناري WAF، وصول البريد للوارد بدون سبام وسيرفرات لينكس محصنة.",
          deliverables: [
            "ضبط متقدم لـ Cloudflare: جدار WAF، إخفاء IP، تشفير SSL Full Strict وصد هجمات DDoS",
            "منع انتحال البريد: تقييد صارم SPF (-all)، توقيع DKIM 2048-bit، وسياسة DMARC حازمة",
            "تحصين الواجهات الخلفية: ترويسات Helmet، محدد معدل الطلبات، تشفير Argon2 و 2FA",
            "تنصيب خادم Caddy العكسي بتجديد شهادات تلقائي مع عزل حاويات Docker"
          ],
          technologies: ["Cloudflare WAF", "SSL Strict", "SPF/DKIM/DMARC", "Caddy", "Docker", "Argon2", "Helmet"],
          gradient: "from-amber-500/20 to-orange-600/20",
          icon: "ShieldAlert"
        }
      ],
      techMatrix: [
        {
          category: "الجوال والأنظمة المتعددة",
          icon: "Smartphone",
          details: "إتقان كامل لدورة حياة تطبيقات الجوال من الكود وحتى الإطلاق على Google Play بمعدل 60 إطاراً مضموناً.",
          skills: [
            { name: "Flutter & Dart", level: "خبير / Senior", highlight: true },
            { name: "React Native (Expo Router)", level: "متقدم" },
            { name: "Riverpod & Bloc", level: "خبير", highlight: true },
            { name: "Clean Architecture", level: "خبير" },
            { name: "FFmpeg Kit (Full-GPL)", level: "متقدم", highlight: true },
            { name: "Google ML Kit (Offline)", level: "خبير", highlight: true },
            { name: "TensorFlow Lite (TFLite)", level: "متقدم" },
            { name: "Google Play Store / AAB", level: "خبير" },
            { name: "Google AdMob والربح", level: "خبير" }
          ]
        },
        {
          category: "الويب والتطوير الشامل (Full-Stack)",
          icon: "Code2",
          details: "بنى برمجية حديثة برندر هجين، واجهات غير متزامنة مرنة، ودعم أصيل للغة العربية من اليمين لليسار.",
          skills: [
            { name: "Next.js 16 (App Router)", level: "خبير / Senior", highlight: true },
            { name: "React 19 & TypeScript", level: "خبير", highlight: true },
            { name: "Tailwind CSS v4", level: "خبير" },
            { name: "Node.js & Express 5", level: "Senior", highlight: true },
            { name: "PostgreSQL & Prisma ORM", level: "متقدم" },
            { name: "Redis & BullMQ", level: "متقدم", highlight: true },
            { name: "SQLite (better-sqlite3)", level: "خبير" },
            { name: "WebSockets (ws)", level: "متقدم" },
            { name: "التعريب ودعم RTL/LTR", level: "خبير", highlight: true }
          ]
        },
        {
          category: "التلفاز الذكي والبث المباشر",
          icon: "Tv",
          details: "تخصص نوعي ونادر في برمجة شاشات التلفاز الذكية وبروتوكولات الفيديو عالية التدفق.",
          skills: [
            { name: "Samsung Tizen OS", level: "خبير", highlight: true },
            { name: "LG webOS", level: "خبير", highlight: true },
            { name: "Android TV / Google TV", level: "متقدم" },
            { name: "Tizen AVPlay API", level: "خبير", highlight: true },
            { name: "webOS Luna Bus Service", level: "متقدم" },
            { name: "تدفقات IPTV و HLS / MPEG-TS", level: "خبير", highlight: true },
            { name: "libmpv (media_kit)", level: "متقدم" },
            { name: "تصدير حزم .ipk و .wgt", level: "خبير" }
          ]
        },
        {
          category: "الأمان المتقدم والبنية التحتية",
          icon: "Shield",
          details: "حماية متعددة الطبقات للسيرفرات والنطاقات ضد الاختراق، انتحال الشخصية، وتوقف الخدمات.",
          skills: [
            { name: "Cloudflare WAF & Proxy", level: "خبير", highlight: true },
            { name: "SSL/TLS Full (Strict)", level: "خبير" },
            { name: "مكافحة الانتحال SPF / DKIM / DMARC", level: "خبير", highlight: true },
            { name: "Caddy Server (تشفير تلقائي)", level: "Senior", highlight: true },
            { name: "Docker & Docker Compose", level: "Senior" },
            { name: "Argon2 & 2FA TOTP", level: "خبير" },
            { name: "ترويسات Helmet وتحديد الطلبات", level: "خبير" },
            { name: "خوادم لينكس VPS", level: "متقدم" }
          ]
        }
      ],
      securityAudit: [
        {
          layer: "حافة السحابة وجدار حماية Cloudflare",
          description: "حماية خارجية عازلة وإخفاء تام لعنوان الخادم الأصلي.",
          items: [
            { name: "البروكسي النشط (السحابة البرتقالية)", status: "محمي", desc: "إخفاء عنوان IP الحقيقي للسيرفر عن أي استعلام DNS مباشر." },
            { name: "جدار WAF وصد هجمات DDoS", status: "نشط", desc: "فلترة الروبوتات الضارة والتصدي للماسحات التلقائية للثغرات." },
            { name: "فرض استخدام HTTPS دائماً", status: "نشط", desc: "إعادة توجيه إلزامية وآمنة لكافة الطلبات المشفرة." },
            { name: "SSL/TLS Full (Strict)", status: "معتمد", desc: "تشفير تام بين العميل والخادم بشهادات موثوقة ومفحوصة." }
          ]
        },
        {
          layer: "موثوقية البريد ومنع الانتحال والسبام",
          description: "مطابقة معيارية صارمة لضمان وصول الرسائل للبريد الوارد بدون تزوير.",
          items: [
            { name: "سجل SPF الصارم", status: "محمي", desc: "سياسة '-all' التي تمنع أي سيرفر غير معتمد من إرسال بريد باسمك." },
            { name: "توقيع DKIM RSA 2048-bit", status: "مشفر", desc: "تأكيد موثوقية الرسالة بواسطة مفتاح تشفير عالي القوة." },
            { name: "سياسة DMARC (Reject)", status: "مطابق", desc: "إلزام مزودي البريد (Gmail, Outlook) برفض أي بريد منتحل فوراً." },
            { name: "محاذاة كاملة للنطاق", status: "معتمد 100%", desc: "تطابق تام وموثق بين عنوان الإرسال والشهادات الرقمية." }
          ]
        },
        {
          layer: "حماية الأنظمة والواجهات الخلفية",
          description: "دفاع معمق على مستوى الكود البرمجي، البيانات ونظام التشغيل.",
          items: [
            { name: "تشفير كلمات المرور Argon2", status: "عسكري", desc: "الخوارزمية الأقوى لمقاومة هجمات كروت الشاشة والمعالجات الموزعة." },
            { name: "التحقق الثنائي 2FA / TOTP", status: "نشط", desc: "توليد رموز مؤقتة متغيرة عبر تطبيقات مثل Google Authenticator." },
            { name: "ترويسات Helmet و CSP", status: "محصن", desc: "منع هجمات XSS وحقن الإطارات وسرقة جلسات المستخدمين." },
            { name: "خادم Caddy وحاويات Docker", status: "معزول", desc: "عزل تام للتطبيقات وتجديد شهادات الأمان تلقائياً بدون تدخل يدوي." }
          ]
        }
      ],
      experiences: [
        {
          role: "Senior Mobile & Web Developer",
          company: "مستقل / فريلانس (Freelance)",
          period: "2023 – حتى الآن",
          status: "مشاريع دولية مستمرة",
          responsibilities: [
            "تصميم بنى معمارية متكاملة لعملاء دوليين وتطوير منتجات رقمية خاصة جاهزة للربح والإنتاج.",
            "برمجة تطبيقات جوال Flutter تجمع بين الذكاء الاصطناعي المحلي، إعلانات AdMob والنشر على Google Play.",
            "تطوير منصات ويب Next.js 16 سريعة مدعومة بطوابير مهام غير متزامنة (BullMQ / Redis / PostgreSQL)."
          ],
          technologies: ["Flutter", "Dart", "Next.js 16", "React 19", "ML Kit", "BullMQ", "Redis", "AdMob", "Cloudflare"]
        },
        {
          role: "Full-Stack Developer & Security Consultant",
          company: "حلول رقمية وحوسبة سحابية",
          period: "2021 – 2023",
          status: "مشاريع ناجحة ومسلمة",
          responsibilities: [
            "تطوير مشغلات بث الفيديو وتطويعها لتعمل على شاشات التلفاز الذكية (Samsung Tizen, LG webOS, Android TV).",
            "إجراء تدقيقات أمنية لمواقع الويب، تحصين خوادم DNS ونشر بروتوكولات حماية البريد المؤسسي (SPF/DKIM/DMARC).",
            "نشر وتجميع الخدمات المصغرة داخل حاويات Docker وخوادم Caddy السحابية."
          ],
          technologies: ["Samsung Tizen", "LG webOS", "Node.js", "Docker", "Caddy", "Cloudflare WAF", "IPTV/HLS", "Argon2"]
        }
      ]
    };
  }

  // Default: English ('en')
  return {
    profile: {
      name: "Hicham AM.",
      role: "Senior Mobile & Web Developer",
      tagline: "Senior Mobile and Web Developer — Flutter • Next.js • On-Device AI • Web Security",
      username: "@hicham1943",
      location: "Morocco (Available Worldwide / Remote)",
      availability: "Open to Freelance Projects & Long-Term Contracts",
    },
    projects: [
      {
        id: "passport-photo-ai",
        title: "On-Device AI Passport & Visa Photo Generator",
        tagline: "Intelligent on-device biometric photo studio 100% offline",
        category: "mobile-ai" as const,
        categoryLabel: "Mobile & On-Device AI",
        stack: ["Flutter", "Dart", "Google ML Kit", "Selfie Segmentation", "PDF/Printing API", "Google AdMob"],
        description: "High-precision mobile utility app generating international-standard biometric passport and visa photos (ICAO/ISO) entirely on-device with zero external cloud dependencies.",
        features: [
          "Automatic face detection and portrait segmentation running 100% offline (absolute user data privacy).",
          "Biometric auto-cropping calibrated for multi-country passport, visa, and residency requirements.",
          "Instant high-resolution PDF print sheet generation ready for print shops or home photo printers.",
          "Integrated advertising monetization with Google AdMob (banner, interstitial, and rewarded ads)."
        ],
        architectureHighlights: [
          "Background thread image computation preventing any main-thread UI jank, maintaining stable 60 FPS.",
          "Hardware-accelerated ML Kit neural models utilizing mobile GPU/NPU for near-instant inference.",
          "Strict GDPR compliance: zero photos leave the physical device, zero cloud network footprint."
        ],
        metrics: [
          { label: "AI Inference", value: "< 350ms" },
          { label: "Network Latency", value: "0ms (Offline)" },
          { label: "Detection Accuracy", value: "99.4%" },
          { label: "Store Status", value: "Google Play" }
        ],
        icon: "Camera",
        gradient: "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
        badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/30"
      },
      {
        id: "video-mp3-convertx",
        title: "High-Performance Mobile Audio & Video Processing Suite",
        tagline: "High-performance local media processing & AI background removal",
        category: "media" as const,
        categoryLabel: "Media & Conversion",
        stack: ["Flutter", "FFmpeg Kit Full-GPL", "TensorFlow Lite", "Riverpod", "File Picker", "Google Play v7.x"],
        description: "Heavy-duty mobile multimedia tool suite leveraging custom-built FFmpeg Kit and TensorFlow Lite to extract, transcode, and segment media locally with zero server bandwidth costs.",
        features: [
          "High-fidelity audio extraction (MP3, AAC, FLAC), loss-less video clipping, and multi-track audio merging.",
          "On-device TensorFlow Lite (TFLite) segmentation engine for instant local image background cutout.",
          "Reactive Riverpod state management ensuring smooth background processing with live progress updates.",
          "Full Google Play deployment pipeline (Keystore .jks, verified app-ads.txt, optimized AAB v7.x bundles)."
        ],
        architectureHighlights: [
          "Custom FFmpeg build optimized with native OpenSL ES and MediaCodec hardware decoders.",
          "Reliable background isolate tasks with foreground persistent progress notifications.",
          "Clean Architecture strictly isolating business domains from low-level C/C++ native bindings."
        ],
        metrics: [
          { label: "Core Engine", value: "FFmpeg Full-GPL" },
          { label: "AI Cutout", value: "Local TFLite" },
          { label: "Store Artifact", value: "Signed AAB v7.x" },
          { label: "Monetization", value: "AdMob Verified" }
        ],
        icon: "Music",
        gradient: "from-amber-500/20 via-orange-500/10 to-red-500/20",
        badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30"
      },
      {
        id: "smart-tv-iptv-player",
        title: "Multi-Screen IPTV & Streaming Player",
        tagline: "Smooth video playback engine for Samsung Tizen, LG webOS & Android TV",
        category: "smart-tv" as const,
        categoryLabel: "Smart TV & Video Streaming",
        stack: ["Samsung Tizen", "LG webOS", "Android TV", "Flutter", "HLS / MPEG-TS", "D-Pad Navigation", "Hardware Acceleration"],
        description: "High-performance multimedia streaming application tailored for connected Smart TVs and mobile devices, engineered for smooth remote control navigation and reliable high-definition stream playback.",
        features: [
          "High-throughput playback engine orchestrating live IPTV feeds, HLS, and VOD with native hardware decoding.",
          "Full Smart TV remote control ergonomics with fluid D-Pad direction navigation and shortcuts.",
          "Cross-screen compatibility covering living room Smart TVs, Android TV boxes, and mobile clients.",
          "Responsive high-fidelity user interface built for 4K and Full HD display standards."
        ],
        architectureHighlights: [
          "Deep integration with native Smart TV operating systems (Tizen OS and LG webOS).",
          "Strict memory management avoiding resource throttling on living room TV chipsets.",
          "Adaptive network buffering delivering instant channel switching and minimal latency."
        ],
        metrics: [
          { label: "Platforms", value: "Tizen, webOS, Android" },
          { label: "Navigation", value: "100% D-Pad Ready" },
          { label: "Decoding", value: "Native Hardware" },
          { label: "Resolution", value: "Full HD & 4K" }
        ],
        icon: "Tv",
        gradient: "from-purple-500/20 via-violet-500/10 to-pink-500/20",
        badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30"
      },
      {
        id: "solux-energy",
        title: "Commercial Solar Engineering & Energy Estimator Portal",
        tagline: "Bilingual RTL/LTR high-conversion engineering & solar estimation platform",
        category: "web-saas" as const,
        categoryLabel: "Enterprise Web & Full-Stack",
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Docker Compose", "Caddy Server", "Cloudflare WAF"],
        description: "Modern commercial portal and lead generator for a premier solar engineering enterprise, featuring interactive ROI energy simulators and high-security infrastructure.",
        features: [
          "High-converting vitrine with interactive photovoltaic ROI calculators and automated quote generators.",
          "Flawless bilingual architecture with native RTL (Arabic) and LTR (French/English) typographic support.",
          "Containerized Docker Compose deployment behind Caddy reverse proxy with automatic zero-touch Let's Encrypt TLS.",
          "Bank-grade Cloudflare perimeter: Full (Strict) SSL, origin IP obfuscation, and custom WAF rules."
        ],
        architectureHighlights: [
          "Next.js 16 App Router with React Server Components achieving a sub-0.6s First Contentful Paint (FCP).",
          "Client-side solar computation engine delivering instant feedback without roundtrip delay.",
          "Continuous zero-downtime containerized reload pipeline via Caddy."
        ],
        metrics: [
          { label: "Lighthouse Score", value: "98/100" },
          { label: "International", value: "RTL (Ar) / LTR (Fr/En)" },
          { label: "Edge Security", value: "Cloudflare Strict" },
          { label: "Containers", value: "Docker + Caddy" }
        ],
        icon: "SunMedium",
        gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
        badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
      },
      {
        id: "video-ai-platform",
        title: "Distributed Generative Video SaaS & Render Queue Engine",
        tagline: "Scalable generative AI SaaS with heavy asynchronous background workers",
        category: "web-saas" as const,
        categoryLabel: "Generative SaaS & Distributed Architecture",
        stack: ["Next.js 16", "Express 5", "Prisma ORM", "PostgreSQL", "Redis", "BullMQ", "Fal.ai API", "Argon2", "2FA TOTP"],
        description: "Modular AI video rendering SaaS engineered to withstand heavy generative loads and concurrent compute jobs without throttling the user-facing web API.",
        features: [
          "Decoupled Monorepo architecture: responsive web frontend, authenticated REST API, and autonomous workers.",
          "Fault-tolerant asynchronous job queue powered by Redis and BullMQ with automatic retries and webhook dispatch.",
          "Enterprise authentication: Argon2 password hashing, two-factor authentication (2FA TOTP), and Zod validation.",
          "Scalable integration with high-throughput AI providers (Fal.ai) and recurrent model asset caching."
        ],
        architectureHighlights: [
          "Redis BullMQ queue system capable of dispatching hundreds of concurrent video rendering jobs.",
          "Protection against brute-force and injection attacks via Helmet headers and distributed rate limiting.",
          "PostgreSQL database managed with Prisma ORM and type-safe schema migrations."
        ],
        metrics: [
          { label: "Architecture", value: "BullMQ Workers" },
          { label: "Auth Security", value: "Argon2 + 2FA" },
          { label: "Database", value: "PostgreSQL Prisma" },
          { label: "Scalability", value: "Decoupled Monorepo" }
        ],
        icon: "Sparkles",
        gradient: "from-fuchsia-500/20 via-purple-500/10 to-blue-500/20",
        badgeColor: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30"
      }
    ],
    services: [
      {
        id: "mobile-ai",
        title: "Mobile App Development & On-Device AI",
        shortDesc: "End-to-end iOS & Android apps crafted in Flutter, embedded with neural models for zero server compute costs and absolute user data privacy.",
        deliverables: [
          "Clean Architecture under Flutter (Dart) & Riverpod",
          "Google ML Kit & TensorFlow Lite 100% offline integration",
          "AdMob monetization setup & verified app-ads.txt compliance",
          "Signed .AAB store release bundle & Google Play Console onboarding"
        ],
        technologies: ["Flutter", "Dart", "ML Kit", "TFLite", "AdMob", "Riverpod", "Clean Arch"],
        gradient: "from-sky-500/20 to-blue-600/20",
        icon: "Smartphone"
      },
      {
        id: "web-saas",
        title: "Next.js 16 Web Development & SaaS Applications",
        shortDesc: "Ultra-fast, high-converting web applications engineered with server components, bilingual RTL/LTR ergonomics, and asynchronous job queues.",
        deliverables: [
          "Next.js 16 App Router (React 19, TypeScript, Tailwind CSS v4)",
          "Express 5 or Server Actions backends with strict Zod validation",
          "Asynchronous worker queues powered by Redis & BullMQ",
          "Native multilingual internationalization (English, French, Arabic RTL)"
        ],
        technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Redis", "BullMQ", "PostgreSQL"],
        gradient: "from-emerald-500/20 to-teal-600/20",
        icon: "Globe"
      },
      {
        id: "smart-tv",
        title: "Smart TV App Porting & Creation (Samsung & LG)",
        shortDesc: "Native-grade living room media apps crafted for Samsung Tizen OS and LG webOS, designed for fluid D-Pad remote navigation and IPTV/HLS streaming.",
        deliverables: [
          "Ergonomic 100% D-Pad remote-first user interface",
          "Native TV API integration: Samsung Tizen AVPlay & LG Luna Bus",
          "Multi-stream support: IPTV, HLS, MPEG-TS, multi-audio, and subtitles",
          "Automated build scripts for ready-to-install packages (.ipk and .wgt)"
        ],
        technologies: ["Samsung Tizen", "LG webOS", "Android TV", "libmpv", "HLS / IPTV", "IPK Packaging"],
        gradient: "from-purple-500/20 to-indigo-600/20",
        icon: "Tv"
      },
      {
        id: "security-cloudflare",
        title: "Web Security Audit & Cloudflare Hardening",
        shortDesc: "Complete defense-in-depth for your online infrastructure: origin IP cloaking, custom WAF rules, anti-spoofing email delivery, and hardened servers.",
        deliverables: [
          "Cloudflare hardening: WAF, origin cloaking, Full Strict SSL/TLS, DDoS",
          "Email anti-spoofing: strict SPF (-all), 2048-bit DKIM, and DMARC Reject",
          "Backend defense: Helmet headers, rate limiters, Argon2, and 2FA TOTP",
          "Automated Caddy reverse proxy HTTPS and isolated Docker networking"
        ],
        technologies: ["Cloudflare WAF", "SSL Strict", "SPF/DKIM/DMARC", "Caddy", "Docker", "Argon2", "Helmet"],
        gradient: "from-amber-500/20 to-orange-600/20",
        icon: "ShieldAlert"
      }
    ],
    techMatrix: [
      {
        category: "Mobile & Multiplatform",
        icon: "Smartphone",
        details: "Complete mastery of the mobile application lifecycle, from clean codebase architecture to signed Play Store releases with guaranteed 60 FPS.",
        skills: [
          { name: "Flutter & Dart", level: "Senior / Expert", highlight: true },
          { name: "React Native (Expo Router)", level: "Advanced" },
          { name: "Riverpod & Bloc", level: "Expert", highlight: true },
          { name: "Clean Architecture", level: "Expert" },
          { name: "FFmpeg Kit (Full-GPL)", level: "Advanced", highlight: true },
          { name: "Google ML Kit (Offline)", level: "Expert", highlight: true },
          { name: "TensorFlow Lite (TFLite)", level: "Advanced" },
          { name: "Google Play Store / AAB", level: "Expert" },
          { name: "Google AdMob & Monetization", level: "Expert" }
        ]
      },
      {
        category: "Web & Full-Stack",
        icon: "Code2",
        details: "Modern hybrid rendering architectures, resilient asynchronous APIs, and native RTL Arabic support.",
        skills: [
          { name: "Next.js 16 (App Router)", level: "Senior / Expert", highlight: true },
          { name: "React 19 & TypeScript", level: "Expert", highlight: true },
          { name: "Tailwind CSS v4", level: "Expert" },
          { name: "Node.js & Express 5", level: "Senior", highlight: true },
          { name: "PostgreSQL & Prisma ORM", level: "Advanced" },
          { name: "Redis & BullMQ", level: "Advanced", highlight: true },
          { name: "SQLite (better-sqlite3)", level: "Expert" },
          { name: "WebSockets (ws)", level: "Advanced" },
          { name: "RTL / LTR Internationalization", level: "Expert", highlight: true }
        ]
      },
      {
        category: "Smart TV & Streaming",
        icon: "Tv",
        details: "Rare specialization in connected TV ecosystems, low-resource hardware decoders, and heavy streaming protocols.",
        skills: [
          { name: "Samsung Tizen OS", level: "Expert", highlight: true },
          { name: "LG webOS", level: "Expert", highlight: true },
          { name: "Android TV / Google TV", level: "Advanced" },
          { name: "Tizen AVPlay API", level: "Expert", highlight: true },
          { name: "webOS Luna Bus Service", level: "Advanced" },
          { name: "IPTV & HLS / MPEG-TS Feeds", level: "Expert", highlight: true },
          { name: "libmpv (media_kit)", level: "Advanced" },
          { name: ".ipk / .wgt Packaging", level: "Expert" }
        ]
      },
      {
        category: "Security & Infrastructure",
        icon: "Shield",
        details: "Multi-layered perimeter defense protecting servers and domain assets from attacks, spoofing, and downtime.",
        skills: [
          { name: "Cloudflare WAF & Proxy", level: "Expert", highlight: true },
          { name: "SSL/TLS Full (Strict)", level: "Expert" },
          { name: "Anti-Spoofing SPF / DKIM 2048 / DMARC", level: "Expert", highlight: true },
          { name: "Caddy Server (Auto HTTPS)", level: "Senior", highlight: true },
          { name: "Docker & Docker Compose", level: "Senior" },
          { name: "Argon2 & 2FA TOTP", level: "Expert" },
          { name: "Helmet Headers & Rate Limiting", level: "Expert" },
          { name: "Linux VPS Servers", level: "Advanced" }
        ]
      }
    ],
    securityAudit: [
      {
        layer: "Cloudflare Edge Perimeter",
        description: "External shielding and complete origin server IP obfuscation.",
        items: [
          { name: "Active Cloudflare Proxy (Orange Cloud)", status: "Secured", desc: "Origin server IP cloaked from public DNS lookups." },
          { name: "WAF & DDoS Mitigation", status: "Active", desc: "Automated threat filtering and zero-day scanner mitigation." },
          { name: "Always Use HTTPS", status: "Active", desc: "Strict automatic redirect for all unencrypted HTTP traffic." },
          { name: "SSL/TLS Full (Strict)", status: "Certified", desc: "End-to-end encryption authenticated with valid origin certificates." }
        ]
      },
      {
        layer: "Email Deliverability & Anti-Spoofing",
        description: "Rigorous SPF/DKIM/DMARC protocols ensuring 100% inbox placement and brand protection.",
        items: [
          { name: "Strict SPF Record (-all)", status: "Secured", desc: "Authoritative policy immediately rejecting unauthorized sender servers." },
          { name: "DKIM 2048-Bit RSA Signature", status: "Encrypted", desc: "Cryptographic message verification proving body authenticity." },
          { name: "DMARC Enforcement (Reject Policy)", status: "Compliant", desc: "Instructs recipient mailboxes (Gmail, Outlook) to block spoofed emails." },
          { name: "Strict Domain Alignment", status: "100% Verified", desc: "Flawless alignment between visible 'From' headers and cryptographic keys." }
        ]
      },
      {
        layer: "Application & Server Hardening",
        description: "Deep defense at the codebase, persistence, and operating system layers.",
        items: [
          { name: "Argon2 Password Hashing", status: "Military-Grade", desc: "State-of-the-art password hashing resistant to GPU/FPGA brute-force." },
          { name: "2FA / TOTP Authentication", status: "Active", desc: "Time-based one-time password generation compatible with Google Authenticator." },
          { name: "Helmet Headers & Strict CSP", status: "Hardened", desc: "Shields against Cross-Site Scripting (XSS), clickjacking, and mime-sniffing." },
          { name: "Caddy Server & Docker Isolation", status: "Isolated", desc: "Containerized isolation with zero-touch automatic TLS certificate renewal." }
        ]
      }
    ],
    experiences: [
      {
        role: "Senior Mobile & Web Developer",
        company: "Independent / Freelance",
        period: "2023 – Present",
        status: "Active • Worldwide Clients",
        responsibilities: [
          "Designing full-lifecycle software architectures for international startups and shipping high-converting proprietary apps.",
          "Engineering Flutter mobile apps integrating offline on-device AI, AdMob monetization, and Google Play Store delivery.",
          "Building high-throughput Next.js 16 web platforms with resilient asynchronous worker queues (BullMQ / Redis / PostgreSQL)."
        ],
        technologies: ["Flutter", "Dart", "Next.js 16", "React 19", "ML Kit", "BullMQ", "Redis", "AdMob", "Cloudflare"]
      },
      {
        role: "Full-Stack Developer & Security Consultant",
        company: "Digital Solutions & Cloud Agency",
        period: "2021 – 2023",
        status: "Successfully Delivered",
        responsibilities: [
          "Developed video streaming players and cross-ported clients to Smart TV systems (Samsung Tizen, LG webOS, Android TV).",
          "Conducted comprehensive web security audits, DNS perimeter hardening, and anti-spoofing email implementations (SPF/DKIM/DMARC).",
          "Containerized and deployed backend microservices using Docker and automated HTTPS Caddy reverse proxies."
        ],
        technologies: ["Samsung Tizen", "LG webOS", "Node.js", "Docker", "Caddy", "Cloudflare WAF", "IPTV/HLS", "Argon2"]
      }
    ]
  };
};

export const getPlatformOptions = (lang: Language) => {
  if (lang === 'fr') {
    return [
      { id: 'mobile', name: 'Application Mobile Flutter (iOS & Android)', icon: 'Smartphone' },
      { id: 'web', name: 'Application Web & SaaS Next.js 16', icon: 'Globe' },
      { id: 'smart-tv', name: 'App Smart TV (Samsung Tizen & LG webOS)', icon: 'Tv' },
      { id: 'security', name: 'Audit Sécurité & Durcissement Cloudflare', icon: 'ShieldAlert' }
    ];
  }
  if (lang === 'ar') {
    return [
      { id: 'mobile', name: 'تطبيق جوال فلاتر (iOS & Android)', icon: 'Smartphone' },
      { id: 'web', name: 'تطبيق ويب ومنصة SaaS بواسطة Next.js 16', icon: 'Globe' },
      { id: 'smart-tv', name: 'تطبيق التلفاز الذكي (Samsung Tizen & LG webOS)', icon: 'Tv' },
      { id: 'security', name: 'تدقيق الأمان وتحصين Cloudflare', icon: 'ShieldAlert' }
    ];
  }
  return [
    { id: 'mobile', name: 'Mobile App Flutter (iOS & Android)', icon: 'Smartphone' },
    { id: 'web', name: 'Next.js 16 Web Application & SaaS', icon: 'Globe' },
    { id: 'smart-tv', name: 'Smart TV App (Samsung Tizen & LG webOS)', icon: 'Tv' },
    { id: 'security', name: 'Security Audit & Cloudflare Hardening', icon: 'ShieldAlert' }
  ];
};

export const getFeatureOptions = (lang: Language): Record<string, { id: string; label: string; desc: string }[]> => {
  if (lang === 'fr') {
    return {
      mobile: [
        { id: 'ia-offline', label: 'IA Embarquée Hors-Ligne (ML Kit / TFLite)', desc: 'Zéro coût API serveur et confidentialité totale' },
        { id: 'playstore-aab', label: 'Bundle .AAB Signé Google Play Console', desc: 'Prêt pour la publication immédiate' },
        { id: 'admob', label: 'Monétisation Google AdMob & app-ads.txt', desc: 'Bannières, interstitiels et rewarded ads' },
        { id: 'media-ffmpeg', label: 'Traitement Vidéo/Audio FFmpeg Kit', desc: 'Transcodage et découpe en local' },
      ],
      web: [
        { id: 'next16-app', label: 'Next.js 16 App Router & Server Components', desc: 'Performance maximale et SEO technique' },
        { id: 'rtl-arabic', label: 'Support Bilingue RTL (Arabe) & LTR', desc: 'Direction de lecture fluide et typographie adaptée' },
        { id: 'bullmq-redis', label: 'Files Asynchrones Redis / BullMQ', desc: 'Pour les calculs lourds sans ralentir l\'API' },
        { id: 'caddy-docker', label: 'Déploiement Docker & Caddy HTTPS Auto', desc: 'Environnement isolé et sécurisé' },
      ],
      'smart-tv': [
        { id: 'dpad-nav', label: 'Navigation 100% Télécommande (D-Pad)', desc: 'Ergonomie salon naturelle' },
        { id: 'iptv-stream', label: 'Moteur Vidéo IPTV / HLS / MPEG-TS', desc: 'Décodage matériel ultra-fluide' },
        { id: 'ipk-packaging', label: 'Scripts de Packaging Automatique (.ipk / .wgt)', desc: 'Installation directe sur TV' },
        { id: 'qr-pairing', label: 'Appairage Compte par QR Code', desc: 'Connexion instantanée sans clavier' },
      ],
      security: [
        { id: 'cloudflare-waf', label: 'Pare-feu Cloudflare WAF & Masquage IP', desc: 'Bloque bots et attaques ciblées' },
        { id: 'email-anti-spoof', label: 'Anti-Usurpation SPF (-all) / DKIM 2048 / DMARC', desc: '100% de délivrabilité sans spam' },
        { id: 'argon2-2fa', label: 'Protection Backend Argon2 & 2FA TOTP', desc: 'Sécurité de niveau institutionnel' },
        { id: 'audit-rapport', label: 'Rapport d\'Audit & Recommandations DevOps', desc: 'Plan d\'action étape par étape' },
      ]
    };
  }

  if (lang === 'ar') {
    return {
      mobile: [
        { id: 'ia-offline', label: 'ذكاء اصطناعي محلي دون إنترنت (ML Kit / TFLite)', desc: 'صفر تكلفة سيرفر وحماية كاملة للخصوصية' },
        { id: 'playstore-aab', label: 'حزمة .AAB موقعة جاهزة لـ Google Play', desc: 'صالحة للنشر المباشر في المتجر' },
        { id: 'admob', label: 'الربح الإعلاني من Google AdMob وضبط app-ads.txt', desc: 'إعلانات بنر وإعلانات بمكافأة' },
        { id: 'media-ffmpeg', label: 'معالجة الفيديو والصوت عبر FFmpeg Kit', desc: 'قص وتحويل مباشر على الهاتف' },
      ],
      web: [
        { id: 'next16-app', label: 'Next.js 16 App Router ومكونات السيرفر', desc: 'سرعة قصوى وأفضل أداء في محركات البحث' },
        { id: 'rtl-arabic', label: 'دعم كامل ومثالي للعربية (اتجاه RTL)', desc: 'محاذاة طبيعية وخطوط عربية راقية' },
        { id: 'bullmq-redis', label: 'طوابير معالجة غير متزامنة Redis / BullMQ', desc: 'للمهام الحسابية الثقيلة دون تأخير الواجهة' },
        { id: 'caddy-docker', label: 'نشر آمن بحاويات Docker وسيرفر Caddy', desc: 'بيئة تشغيل سحابية معزولة ومحمية' },
      ],
      'smart-tv': [
        { id: 'dpad-nav', label: 'تحكم كامل بنسبة 100% بريموت التلفاز (D-Pad)', desc: 'تجربة مريحة وسلسة في الصالون' },
        { id: 'iptv-stream', label: 'محرك فيديو لتدفقات IPTV / HLS / MPEG-TS', desc: 'فك تشفير عتادي أصلي فائق النقاء' },
        { id: 'ipk-packaging', label: 'تجميع وتصدير آلي لحزم التثبيت (.ipk / .wgt)', desc: 'جاهزة للتنصيب المباشر على الشاشات' },
        { id: 'qr-pairing', label: 'تسجيل الدخول وربط الحساب عبر QR Code', desc: 'اقتران فوري دون الحاجة لكتابة كلمات مرور' },
      ],
      security: [
        { id: 'cloudflare-waf', label: 'جدار حماية Cloudflare WAF وإخفاء IP', desc: 'حجب الروبوتات والهجمات الخبيثة' },
        { id: 'email-anti-spoof', label: 'حماية البريد SPF (-all) و DKIM و DMARC', desc: 'ضمان الوصول لصندوق الوارد 100%' },
        { id: 'argon2-2fa', label: 'حماية وتشفير Argon2 والتحقق الثنائي 2FA', desc: 'معايير أمان معتمدة ومتقدمة' },
        { id: 'audit-rapport', label: 'تقرير تدقيق أمني شامل وخارطة طريق DevOps', desc: 'خطة عمل دقيقة لتحصين السيرفرات' },
      ]
    };
  }

  // English
  return {
    mobile: [
      { id: 'ia-offline', label: 'On-Device Offline AI (ML Kit / TFLite)', desc: 'Zero cloud API costs and absolute user data privacy' },
      { id: 'playstore-aab', label: 'Signed .AAB Bundle for Google Play Console', desc: 'Ready for immediate store submission' },
      { id: 'admob', label: 'Google AdMob & app-ads.txt Monetization', desc: 'Banners, interstitials, and rewarded video ads' },
      { id: 'media-ffmpeg', label: 'Local Audio/Video Processing with FFmpeg Kit', desc: 'Fast on-device transcoding and trimming' },
    ],
    web: [
      { id: 'next16-app', label: 'Next.js 16 App Router & Server Components', desc: 'Sub-second speeds and optimal technical SEO' },
      { id: 'rtl-arabic', label: 'Bilingual RTL (Arabic) & LTR Support', desc: 'Flawless typography and bi-directional layout' },
      { id: 'bullmq-redis', label: 'Asynchronous Redis / BullMQ Task Queues', desc: 'Handle heavy background compute without API lag' },
      { id: 'caddy-docker', label: 'Docker & Auto-HTTPS Caddy Deployment', desc: 'Isolated, production-grade cloud setup' },
    ],
    'smart-tv': [
      { id: 'dpad-nav', label: '100% Remote D-Pad Navigation', desc: 'Natural living room TV UX ergonomics' },
      { id: 'iptv-stream', label: 'IPTV / HLS / MPEG-TS High-Bitrate Engine', desc: 'Smooth native hardware video decoding' },
      { id: 'ipk-packaging', label: 'Automated Package Generation (.ipk / .wgt)', desc: 'Ready for direct installation on TV hardware' },
      { id: 'qr-pairing', label: 'Instant Mobile QR Code Account Pairing', desc: 'Effortless login without on-screen keyboards' },
    ],
    security: [
      { id: 'cloudflare-waf', label: 'Cloudflare WAF & Origin IP Obfuscation', desc: 'Block zero-day exploits and bad bots' },
      { id: 'email-anti-spoof', label: 'Anti-Spoofing SPF (-all) / DKIM 2048 / DMARC', desc: '100% inbox deliverability with zero spoofing' },
      { id: 'argon2-2fa', label: 'Backend Argon2 Hashing & 2FA TOTP', desc: 'Enterprise-grade credentials protection' },
      { id: 'audit-rapport', label: 'Comprehensive Security Audit & DevOps Plan', desc: 'Step-by-step infrastructure hardening roadmap' },
    ]
  };
};
