export type Language = 'en' | 'fr' | 'ar';

export interface TranslationData {
  lang: Language;
  direction: 'ltr' | 'rtl';
  nav: {
    home: string;
    projects: string;
    services: string;
    skills: string;
    security: string;
    career: string;
    contact: string;
    availableBadge: string;
    subrole: string;
    startProject: string;
    orderFiverr: string;
  };
  hero: {
    statusPill: string;
    headlinePart1: string;
    headlineHighlight: string;
    subheadline: string;
    exploreProjects: string;
    orderFiverr: string;
    directAudit: string;
    metrics: {
      fps: { title: string; desc: string };
      ai: { title: string; desc: string };
      security: { title: string; desc: string };
      screens: { title: string; desc: string };
    };
    terminal: {
      tabFlutter: string;
      tabNext: string;
      tabSmartTV: string;
      tabWaf: string;
      copy: string;
      copied: string;
      compiledEngine: string;
      typedNotice: string;
      certifiedNotice: string;
      ready: string;
    };
  };
  pillars: {
    pill: string;
    title: string;
    subtitle: string;
    standardPrefix: string;
    guaranteedBadge: string;
    items: {
      title: string;
      tag: string;
      desc: string;
      points: string[];
    }[];
  };
  projects: {
    pill: string;
    title: string;
    subtitle: string;
    filters: {
      all: string;
      mobile: string;
      smartTv: string;
      web: string;
    };
    productionDelivered: string;
    architectureAction: string;
    metricsLabel: string;
    customBanner: {
      title: string;
      desc: string;
      ctaDiscuss: string;
      ctaFiverr: string;
    };
    modal: {
      conceptTitle: string;
      metricsTitle: string;
      techTitle: string;
      featuresTitle: string;
      architectureTitle: string;
      footerNote: string;
      ctaSimilar: string;
      ctaFiverr: string;
    };
  };
  services: {
    pill: string;
    title: string;
    subtitle: string;
    servicePrefix: string;
    deliverablesLabel: string;
    configureBtn: string;
    orderFiverrBtn: string;
    builder: {
      title: string;
      subtitle: string;
      badge: string;
      step1: string;
      step2: string;
      selectedCount: string;
      readyNote: string;
      submitBtn: string;
    };
  };
  skills: {
    pill: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allTech: string;
    cleanArchNote: string;
    skillsListed: string;
  };
  security: {
    pill: string;
    title: string;
    subtitle: string;
    scoreBadge: string;
    diagnosticBtn: string;
    scanningNotice: string;
    terminalFooter: string;
    readyForCritical: string;
    layerPrefix: string;
    productionValidated: string;
    auditBannerText: string;
    auditBannerBtn: string;
  };
  career: {
    pill: string;
    title: string;
    subtitle: string;
  };
  contact: {
    pill: string;
    title: string;
    subtitle: string;
    statusCard: {
      title: string;
      desc: string;
      availabilityTitle: string;
      timezoneMorocco: string;
    };
    fiverrCard: {
      title: string;
      username: string;
      desc: string;
    };
    emailCard: {
      title: string;
    };
    languagesCard: {
      title: string;
      items: { name: string; level: string; flag: string }[];
    };
    form: {
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      serviceLabel: string;
      serviceOptions: string[];
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      successTitle: string;
      successDesc: string;
      sendAnother: string;
      ndaNotice: string;
    };
  };
  footer: {
    role: string;
    bio: string;
    navTitle: string;
    projectsTitle: string;
    servicesTitle: string;
    rights: string;
    operational: string;
    productionGrade: string;
    backToTop: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationData> = {
  en: {
    lang: 'en',
    direction: 'ltr',
    nav: {
      home: 'Home',
      projects: 'Featured Projects',
      services: 'Services & Offers',
      skills: 'Tech Matrix',
      security: 'Security & Cloudflare',
      career: 'Experience',
      contact: 'Contact',
      availableBadge: 'Available',
      subrole: 'Senior Mobile & Web Dev',
      startProject: 'Start a Project',
      orderFiverr: 'Fiverr',
    },
    hero: {
      statusPill: 'Senior Mobile & Full-Stack Architect | Flutter • Next.js • AI • Security',
      headlinePart1: 'Engineering solutions',
      headlineHighlight: 'built for production',
      subheadline: 'Partnering with startups, enterprises, and creators to transform complex concepts into scalable, 60 FPS mobile apps, enterprise web SaaS, and Smart TV streaming ecosystems—protected end-to-end with Cloudflare Full Strict.',
      exploreProjects: 'Explore Projects',
      orderFiverr: 'Order on Fiverr',
      directAudit: 'Security Audit & Contact',
      metrics: {
        fps: { title: '60 FPS', desc: 'Smooth Flutter Mobile' },
        ai: { title: '100% Local', desc: 'On-Device ML Kit & TFLite' },
        security: { title: 'Full Strict', desc: 'Cloudflare & DNS WAF' },
        screens: { title: '3+ TV OS', desc: 'Tizen, webOS & Android' },
      },
      terminal: {
        tabFlutter: 'Flutter/AI',
        tabNext: 'Next/Redis',
        tabSmartTV: 'Smart TV',
        tabWaf: 'WAF/DNS',
        copy: 'Copy',
        copied: 'Copied',
        compiledEngine: 'Engine compiled in production',
        typedNotice: '100% Typed TypeScript & Dart',
        certifiedNotice: 'Keystore / Cloudflare / Docker Certified',
        ready: 'Ready',
      },
    },
    pillars: {
      pill: 'Engineering Standards & Philosophy',
      title: 'The 3 Pillars of Excellence',
      subtitle: 'No flimsy prototypes or half-baked code. Every application is built to rigorous industrial benchmarks for speed, security, and long-term maintainability.',
      standardPrefix: 'Standard #',
      guaranteedBadge: 'Production Guaranteed',
      items: [
        {
          title: 'Surgical Performance',
          tag: '60 FPS & Offline-First',
          desc: 'Locked 60 FPS on mobile, near-instant web load times, asset optimization, and local-first computing with zero server roundtrips.',
          points: [
            'Flutter rendering and state transitions guaranteed at 60 FPS without jank.',
            'On-Device ML (Google ML Kit, TFLite) eliminating slow network roundtrips.',
            'Next.js 16 minimal bundle sizes for sub-0.6s Largest Contentful Paint (LCP).',
            'On-the-fly media compression with FFmpeg Kit and aggressive cache control.'
          ]
        },
        {
          title: 'End-to-End Security',
          tag: 'Cloudflare Strict & Zero-Trust',
          desc: 'Defense-in-depth from the DNS layer (Cloudflare WAF, anti-spoofing SPF/DKIM/DMARC) down to APIs and isolated databases.',
          points: [
            'Impermeable Cloudflare edge: WAF, origin IP cloaking, DDoS mitigation & Full Strict SSL.',
            'Total email deliverability: restrictive SPF (-all), 2048-bit DKIM & DMARC Reject policy.',
            'Application hardening: Argon2 cryptographic hashing, 2FA/TOTP and strict Helmet CSP headers.',
            'Caddy reverse proxy with zero-touch TLS renewal and strict Zod runtime validation.'
          ]
        },
        {
          title: 'Production-Oriented Delivery',
          tag: 'Play Store Bundles & Docker Containers',
          desc: 'No mockups. Cryptographically signed .AAB bundles ready for Google Play, resilient Docker containers, and clean, documented code.',
          points: [
            'Signed .AAB release bundles with Keystore (.jks) validated for Google Play Console.',
            'Google AdMob integration with verified app-ads.txt compliance.',
            'Reproducible Docker & Docker Compose multi-stage setups with reload scripts.',
            'Durable architectures (Clean Architecture, Riverpod, decoupled Monorepos).'
          ]
        }
      ]
    },
    projects: {
      pill: 'Featured Products & Case Studies',
      title: 'Projects Engineered for Performance',
      subtitle: 'From offline computer vision mobile apps to low-latency Smart TV streaming engines and distributed SaaS architectures.',
      filters: {
        all: 'All Projects',
        mobile: 'Mobile & On-Device AI',
        smartTv: 'Smart TV & Streaming',
        web: 'Web Full-Stack & SaaS',
      },
      productionDelivered: 'Delivered to Production',
      architectureAction: 'Architecture & Deep Dive',
      metricsLabel: 'Key Metrics',
      customBanner: {
        title: 'Do you have a custom project or challenging technical specification?',
        desc: 'Flutter mobile application, Tizen/webOS Smart TV port, or Next.js 16 web platform: delivered clean and on time.',
        ctaDiscuss: 'Discuss Your Project',
        ctaFiverr: 'Fiverr Direct',
      },
      modal: {
        conceptTitle: 'Concept & Value Proposition',
        metricsTitle: 'Key Technical Metrics',
        techTitle: 'Technologies & Tools Involved',
        featuresTitle: 'Core Capabilities & Deliverables',
        architectureTitle: 'Architecture Decisions & Technical Challenges Solved',
        footerNote: 'Production Verified • Clean Code & Rigorous Testing Pass',
        ctaSimilar: 'Discuss a Similar Project',
        ctaFiverr: 'Fiverr Direct Order',
      }
    },
    services: {
      pill: 'Production-Ready Services & Offers',
      title: 'Concrete Software Solutions',
      subtitle: 'Battle-tested expertise to turn your product vision into rock-solid mobile apps, streaming clients, and hardened cloud infrastructure.',
      servicePrefix: 'Service 0',
      deliverablesLabel: 'Key Deliverables Included:',
      configureBtn: 'Configure this service',
      orderFiverrBtn: 'Order via Fiverr',
      builder: {
        title: 'Project Scope & Architecture Estimator',
        subtitle: 'Select your target platform and core technical requirements to generate an instant technical scope summary.',
        badge: 'Quote & Study within 24h',
        step1: '1. Choose your primary target platform:',
        step2: '2. Desired technical capabilities & requirements:',
        selectedCount: 'selected feature(s)',
        readyNote: 'Production-ready architecture plan',
        submitBtn: 'Request an Architecture Proposal with this Scope',
      }
    },
    skills: {
      pill: 'Technical Skills Matrix',
      title: 'Mastered Tech Stack from Edge to Database',
      subtitle: 'From 60 FPS Flutter mobile UIs to DNS-level security protocols and Linux server orchestration.',
      searchPlaceholder: 'Filter a technology or skill...',
      allTech: 'All Technologies',
      cleanArchNote: 'Clean Architecture & Modular Design',
      skillsListed: 'skills cataloged',
    },
    security: {
      pill: 'Security & Cloudflare Infrastructure Expertise',
      title: 'Proactive Security & DNS Hardening',
      subtitle: 'A software architecture is only as good as its defenses. Every project is shielded from the edge network down to the persistence layer.',
      scoreBadge: 'Score: 100/100 (A+)',
      diagnosticBtn: 'Re-run Diagnostic Scan',
      scanningNotice: 'Scan in progress',
      terminalFooter: 'Integrity checks verified • Zero injection flaws or leaking headers detected',
      readyForCritical: 'Ready for Critical Deployments',
      layerPrefix: 'Security Layer #',
      productionValidated: 'Production Validated',
      auditBannerText: 'Looking for a comprehensive DNS audit, Cloudflare setup, or anti-spoofing mail hardening?',
      auditBannerBtn: 'Request a Security Audit',
    },
    career: {
      pill: 'Professional Track Record & Milestones',
      title: 'Career Journey & Highlights',
      subtitle: 'A path focused on technically demanding projects, high-throughput systems, and industrial software standards.',
    },
    contact: {
      pill: 'Contact & Project Inquiries',
      title: 'Ready to Build Something Great?',
      subtitle: 'Have a mobile app idea, a SaaS platform, or infrastructure to secure? Let us discuss your goals and find the optimal technical architecture.',
      statusCard: {
        title: 'Availability Status',
        desc: 'Available for freelance missions, milestone-based contracts, or secure international gigs on Fiverr.',
        availabilityTitle: 'Open to Freelance Projects & Long-Term Contracts',
        timezoneMorocco: 'Casablanca, Morocco (GMT+1)',
      },
      fiverrCard: {
        title: 'Official Fiverr Profile',
        username: '@hicham1943',
        desc: 'Escrow-protected payments, verified client reviews, and guaranteed milestones.',
      },
      emailCard: {
        title: 'Direct Business Email',
      },
      languagesCard: {
        title: 'Working Languages',
        items: [
          { name: 'English', level: 'Fluent / Professional', flag: '🇬🇧' },
          { name: 'Français', level: 'Native / Bilingual', flag: '🇫🇷' },
          { name: 'العربية', level: 'Native / Bilingual', flag: '🇲🇦' }
        ]
      },
      form: {
        title: 'Send a Direct Project Inquiry',
        subtitle: 'Guaranteed technical response within 24 hours with preliminary feasibility breakdown.',
        nameLabel: 'Your Name / Company *',
        namePlaceholder: 'e.g. John D. / Studio XYZ',
        emailLabel: 'Your Contact Email *',
        emailPlaceholder: 'name@your-domain.com',
        serviceLabel: 'Primary Service Needed',
        serviceOptions: [
          '1. Mobile App & On-Device AI (Flutter)',
          '2. Next.js 16 Web Development & SaaS',
          '3. Smart TV App (Samsung Tizen / LG webOS)',
          '4. Web Security Audit & Cloudflare Hardening',
          '5. Other Custom Project'
        ],
        messageLabel: 'Project Details & Specifications *',
        messagePlaceholder: 'Describe your idea, desired features, timeline constraints, and target platforms...',
        submitBtn: 'Send Project Inquiry',
        successTitle: 'Inquiry Prepared Successfully',
        successDesc: 'Your email client has been prepared to forward these details to contact@hicham.dev. You can also reach out directly via Fiverr.',
        sendAnother: 'Send another inquiry',
        ndaNotice: 'Confidentiality Guaranteed • Non-Disclosure Agreement (NDA) available upon request',
      }
    },
    footer: {
      role: 'Senior Mobile & Web Developer',
      bio: 'Architecting and building production-grade software solutions uniting 60 FPS surgical performance, end-to-end security, and elite user experiences.',
      navTitle: 'Navigation',
      projectsTitle: 'Featured Projects',
      servicesTitle: 'Services & Standards',
      rights: 'All rights reserved.',
      operational: 'All Systems Operational',
      productionGrade: 'Production Grade',
      backToTop: 'Back to Top',
    }
  },

  fr: {
    lang: 'fr',
    direction: 'ltr',
    nav: {
      home: 'Accueil',
      projects: 'Projets Phares',
      services: 'Services & Offres',
      skills: 'Compétences',
      security: 'Sécurité & Cloudflare',
      career: 'Parcours',
      contact: 'Contact',
      availableBadge: 'Disponible',
      subrole: 'Senior Mobile & Web Dev',
      startProject: 'Démarrer un projet',
      orderFiverr: 'Fiverr',
    },
    hero: {
      statusPill: 'Senior Mobile & Full-Stack Architect | Flutter • Next.js • IA • Sécurité',
      headlinePart1: 'Bâtisseur de solutions',
      headlineHighlight: 'prêtes pour la production',
      subheadline: 'J\'accompagne les startups, entreprises et créateurs dans la transformation de concepts complexes en applications scalables, rapides à 60 FPS, protégées par Cloudflare Full Strict et prêtes pour le Google Play Store & Smart TVs.',
      exploreProjects: 'Explorer mes projets',
      orderFiverr: 'Commander sur Fiverr',
      directAudit: 'Audit & Contact direct',
      metrics: {
        fps: { title: '60 FPS', desc: 'Mobile Flutter fluide' },
        ai: { title: '100% Local', desc: 'IA ML Kit & TFLite' },
        security: { title: 'Full Strict', desc: 'Cloudflare & DNS WAF' },
        screens: { title: '3+ OS TV', desc: 'Tizen, webOS & Android' },
      },
      terminal: {
        tabFlutter: 'Flutter/AI',
        tabNext: 'Next/Redis',
        tabSmartTV: 'Smart TV',
        tabWaf: 'WAF/DNS',
        copy: 'Copier',
        copied: 'Copié',
        compiledEngine: 'Moteur compilé en production',
        typedNotice: '100% Typé TypeScript & Dart',
        certifiedNotice: 'Certifié Keystore / Cloudflare / Docker',
        ready: 'Ready',
      },
    },
    pillars: {
      pill: 'Philosophie & Standards d\'Ingénierie',
      title: 'Les 3 Piliers d\'Excellence',
      subtitle: 'Pas de prototypes instables ou de code abandonné à mi-chemin. Chaque application est forgée selon des critères rigoureux de stabilité, de rapidité et de protection des données.',
      standardPrefix: 'Standard #',
      guaranteedBadge: 'Production Guaranteed',
      items: [
        {
          title: 'Performance Chirurgicale',
          tag: '60 FPS & Offline-First',
          desc: '60 fps constants sur mobile, temps de chargement web instantanés, optimisation des assets et calculs locaux hors-ligne.',
          points: [
            'Animations Flutter et transitions maintenues à 60 FPS constants sans saccades.',
            'Traitement On-Device (Google ML Kit, TFLite) évitant les allers-retours réseau lents.',
            'Optimisation extrême des bundles web Next.js 16 pour un FCP inférieur à 0.6s.',
            'Compression média à la volée avec FFmpeg Kit et gestion fine du cache mémoire.'
          ]
        },
        {
          title: 'Sécurité de Bout en Bout',
          tag: 'Cloudflare Strict & Zero-Trust',
          desc: 'Protection des infrastructures dès le DNS (Cloudflare WAF, anti-spoofing e-mail SPF/DKIM/DMARC) jusqu\'aux APIs et bases de données.',
          points: [
            'Périmètre Cloudflare imperméable : WAF, masquage IP réelle, protection DDoS et SSL Full Strict.',
            'Conformité e-mail absolue : SPF restrictif (-all), signature DKIM 2048 bits et stratégie DMARC (Reject).',
            'Durcissement applicatif : hachage cryptographique Argon2, double facteur 2FA/TOTP et headers Helmet.',
            'Reverse proxy Caddy avec renouvellement automatique de certificats TLS et validation Zod stricte.'
          ]
        },
        {
          title: 'Livraison Orientée Production',
          tag: 'Play Store & Conteneurs Docker',
          desc: 'Bundles .AAB signés pour Google Play Store, conteneurs Docker robustes sous Caddy HTTPS automatique, code propre et modulaire.',
          points: [
            'Livraison de bundles finaux .AAB signés avec Keystore (.jks) conformes pour la Google Play Console.',
            'Intégration validée des bannières et interstitiels AdMob avec fichier app-ads.txt vérifié.',
            'Conteneurisation Docker & Docker Compose multi-environnements avec scripts de déploiement.',
            'Architectures pérennes (Clean Architecture, Riverpod, Monorepos) hautement maintenables.'
          ]
        }
      ]
    },
    projects: {
      pill: 'Réalisations & Produits Phares',
      title: 'Projets Conçus pour la Performance',
      subtitle: 'Des applications mobiles exploitant le Machine Learning local aux lecteurs Smart TV et architectures SaaS distribuées.',
      filters: {
        all: 'Tous les Projets',
        mobile: 'Mobile & IA Embarquée',
        smartTv: 'Smart TV & Streaming',
        web: 'Web Full-Stack & SaaS',
      },
      productionDelivered: 'Livré en Production',
      architectureAction: 'Architecture & Fonctionnalités Clés',
      metricsLabel: 'Métriques Clés',
      customBanner: {
        title: 'Vous avez un projet sur-mesure ou une spécification technique ?',
        desc: 'Application mobile Flutter, portage TV Tizen/webOS ou plateforme web Next.js 16 : livraison rapide et propre garantie.',
        ctaDiscuss: 'Échanger sur votre projet',
        ctaFiverr: 'Fiverr Direct',
      },
      modal: {
        conceptTitle: 'Concept & Proposition de Valeur',
        metricsTitle: 'Métriques Techniques Clés',
        techTitle: 'Technologies & Outils Impliqués',
        featuresTitle: 'Fonctionnalités Clés & Réalisations',
        architectureTitle: 'Choix d\'Architecture & Défis Techniques Résolus',
        footerNote: 'Projet certifié • Code propre & tests de robustesse validés',
        ctaSimilar: 'Discuter d\'un projet similaire',
        ctaFiverr: 'Fiverr Direct',
      }
    },
    services: {
      pill: 'Offres & Services Prêts à Déployer',
      title: 'Des Solutions Logicielles Concrètes',
      subtitle: 'Une expertise éprouvée pour donner vie à vos projets mobiles, web, streaming et sécuriser vos infrastructures.',
      servicePrefix: 'Service 0',
      deliverablesLabel: 'Livrables Clés Inclus :',
      configureBtn: 'Configurer ce service',
      orderFiverrBtn: 'Commander via Fiverr',
      builder: {
        title: 'Simulateur de Périmètre & Stack Recommandée',
        subtitle: 'Sélectionnez votre type de projet et vos spécifications pour générer un résumé technique direct.',
        badge: 'Devis & Étude sous 24h',
        step1: '1. Choisissez la plateforme principale :',
        step2: '2. Spécifications & Exigences Techniques Souhaitées :',
        selectedCount: 'option(s) sélectionnée(s)',
        readyNote: 'Stack prête pour production',
        submitBtn: 'Demander une étude avec ce périmètre',
      }
    },
    skills: {
      pill: 'Matrice des Compétences Techniques',
      title: 'Stack Maîtrisée de Bout en Bout',
      subtitle: 'De l\'UI mobile Flutter 60 FPS jusqu\'aux protocoles réseau de niveau DNS et serveurs Linux.',
      searchPlaceholder: 'Filtrer une technologie...',
      allTech: 'Toutes les Technologies',
      cleanArchNote: 'Architecture Clean & Modulaire',
      skillsListed: 'compétences listées',
    },
    security: {
      pill: 'Expertise Sécurité & Infrastructure Cloudflare',
      title: 'Sécurité Proactive & Durcissement DNS',
      subtitle: 'Une architecture logicielle n\'est viable que si elle est impénétrable. Chaque projet bénéficie d\'un blindage dès la couche réseau jusqu\'à la base de données.',
      scoreBadge: 'Score : 100/100 (A+)',
      diagnosticBtn: 'Relancer le Diagnostic',
      scanningNotice: 'Audit en cours',
      terminalFooter: 'Résultat de conformité vérifié • Aucune brèche d\'injection ou de fuite de header détectée',
      readyForCritical: 'Ready for Critical Deployments',
      layerPrefix: 'Couche #',
      productionValidated: 'Validé Production',
      auditBannerText: 'Besoin d\'un audit complet de vos noms de domaine, configuration Cloudflare ou protection e-mail ?',
      auditBannerBtn: 'Demander un audit de sécurité',
    },
    career: {
      pill: 'Historique Professionnel & Réalisations',
      title: 'Parcours & Expériences Clés',
      subtitle: 'Une trajectoire axée sur les projets à haute exigence technique et les standards industriels.',
    },
    contact: {
      pill: 'Contact & Démarrage de Projet',
      title: 'Prêt à Réaliser Votre Projet ?',
      subtitle: 'Une idée d\'application mobile, une plateforme web SaaS ou une infrastructure à sécuriser ? Discutons de vos objectifs et de la meilleure architecture technique.',
      statusCard: {
        title: 'Statut de Disponibilité',
        desc: 'Missions sous contrat freelance, régie forfaitaire ou commandes sécurisées via la plateforme internationale Fiverr.',
        availabilityTitle: 'Ouvert aux projets Freelance & Contrats Long-Terme',
        timezoneMorocco: 'Casablanca, Maroc (GMT+1)',
      },
      fiverrCard: {
        title: 'Profil Fiverr Officiel',
        username: '@hicham1943',
        desc: 'Paiement sécurisé avec garantie de livraison, jalons protégés et avis vérifiés.',
      },
      emailCard: {
        title: 'Adresse E-mail Directe',
      },
      languagesCard: {
        title: 'Langues de Travail & Échanges',
        items: [
          { name: 'English', level: 'Courant / Fluent', flag: '🇬🇧' },
          { name: 'Français', level: 'Natif / Bilingue', flag: '🇫🇷' },
          { name: 'العربية', level: 'Natif / Bilingue', flag: '🇲🇦' }
        ]
      },
      form: {
        title: 'Envoyer une Demande Directe',
        subtitle: 'Réponse technique garantie sous 24h avec première analyse de faisabilité.',
        nameLabel: 'Votre Nom / Entreprise *',
        namePlaceholder: 'Ex: Alexandre D. / Studio XYZ',
        emailLabel: 'Votre E-mail de Contact *',
        emailPlaceholder: 'contact@votre-domaine.com',
        serviceLabel: 'Type de Prestation Souhaitée',
        serviceOptions: [
          '1. Mobile & IA Embarquée (Flutter)',
          '2. Développement Web Next.js 16 & SaaS',
          '3. Smart TV (Samsung Tizen / LG webOS)',
          '4. Audit Sécurité & Durcissement Cloudflare',
          '5. Autre projet sur-mesure'
        ],
        messageLabel: 'Détails de Votre Projet ou Spécifications *',
        messagePlaceholder: 'Décrivez votre idée, les fonctionnalités souhaitées, les délais envisagés et les contraintes techniques...',
        submitBtn: 'Transmettre la demande de projet',
        successTitle: 'Demande Préparée avec Succès',
        successDesc: 'Votre client de messagerie s\'est ouvert pour transmettre ces éléments à contact@hicham.dev. Vous pouvez également me joindre directement sur Fiverr.',
        sendAnother: 'Envoyer un autre message',
        ndaNotice: 'Confidentialité assurée • Accord de non-divulgation (NDA) disponible sur demande',
      }
    },
    footer: {
      role: 'Senior Mobile & Web Developer',
      bio: 'Concepteur et bâtisseur de solutions logicielles prêtes pour la production, alliant performance chirurgicale 60 FPS, sécurité de bout en bout et expérience utilisateur d\'élite.',
      navTitle: 'Navigation',
      projectsTitle: 'Projets Phares',
      servicesTitle: 'Prestations & Offres',
      rights: 'Tous droits réservés.',
      operational: 'Systèmes 100% Opérationnels',
      productionGrade: 'Production Grade',
      backToTop: 'Haut de page',
    }
  },

  ar: {
    lang: 'ar',
    direction: 'rtl',
    nav: {
      home: 'الرئيسية',
      projects: 'المشاريع المميزة',
      services: 'الخدمات والحلول',
      skills: 'المصفوفة التقنية',
      security: 'الأمان وكلاودفلير',
      career: 'المسار المهني',
      contact: 'تواصل معي',
      availableBadge: 'متاح للعمل',
      subrole: 'مطور تطبيقات وويب أول',
      startProject: 'بدء مشروع',
      orderFiverr: 'فايفر',
    },
    hero: {
      statusPill: 'مهندس ومطور أول تطبيقات جوال وويب شامل | Flutter • Next.js • الذكاء الاصطناعي • الأمان',
      headlinePart1: 'تصميم وبناء حلول برمجية',
      headlineHighlight: 'جاهزة للإنتاج الفعلي',
      subheadline: 'أرافق الشركات الناشئة، المؤسسات ورواد الأعمال لتحويل المفاهيم المعقدة إلى تطبيقات فائقة السرعة والاستقرار بمعدل 60 إطاراً في الثانية، محصنة كلياً بحماية Cloudflare Full Strict وجاهزة للمتاجر وشاشات التلفاز الذكية.',
      exploreProjects: 'استكشاف المشاريع',
      orderFiverr: 'طلب عبر فايفر',
      directAudit: 'تدقيق الأمان وتواصل مباشر',
      metrics: {
        fps: { title: '60 FPS', desc: 'سلاسة تامة مع فلاتر' },
        ai: { title: '100% محلي', desc: 'ذكاء اصطناعي دون إنترنت' },
        security: { title: 'أمان صارم', desc: 'جدار حماية Cloudflare WAF' },
        screens: { title: '+3 شاشات ذكية', desc: 'تايزن، webOS وأندرويد TV' },
      },
      terminal: {
        tabFlutter: 'فلاتر / ذكاء اصطناعي',
        tabNext: 'نكست / ريديس',
        tabSmartTV: 'التلفاز الذكي',
        tabWaf: 'حماية WAF / DNS',
        copy: 'نسخ',
        copied: 'تم النسخ',
        compiledEngine: 'محرك جاهز للإنتاج عالي الكفاءة',
        typedNotice: '100% نمطية صارمة TypeScript و Dart',
        certifiedNotice: 'معتمد برمجياً: Keystore / Cloudflare / Docker',
        ready: 'جاهز',
      },
    },
    pillars: {
      pill: 'فلسفة ومعايير الهندسة البرمجية',
      title: 'أركان التميز الثلاثة',
      subtitle: 'لا نماذج أولية هشة أو أكواد غير مكتملة. كل تطبيق يُبنى وفق معايير صناعية صارمة من حيث السرعة القصوى، الأمان الشامل وحماية البيانات.',
      standardPrefix: 'المعيار #',
      guaranteedBadge: 'جاهزية إنتاجية مضمونة',
      items: [
        {
          title: 'أداء فائق ودقة جراحية',
          tag: '60 إطاراً في الثانية وبلا إنترنت',
          desc: 'ثبات سلس عند 60 FPS على الهواتف، تحميل فوري لصفحات الويب، تحسين الموارد ومعالجة البيانات محلياً دون انتظار الخوادم.',
          points: [
            'حركات وانتقالات Flutter سلسة للغاية بمعدل 60 إطاراً في الثانية بلا أي تقطيع.',
            'معالجة نماذج الذكاء الاصطناعي على الجهاز محلياً (ML Kit, TFLite) لتفادي تأخير الشبكة.',
            'تحسين حزم Next.js 16 لتحقيق زمن ظهور أولي (FCP) أقل من 0.6 ثانية.',
            'ضغط الوسائط الفوري باستخدام FFmpeg Kit وإدارة احترافية لذاكرة التخزين المؤقت.'
          ]
        },
        {
          title: 'أمان شامل من البداية للنهاية',
          tag: 'حماية Cloudflare وصفر ثقة',
          desc: 'حماية البنية التحتية انطلاقاً من سجلات DNS وجدار حماية WAF ومكافحة الانتحال وصولاً لقواعد البيانات والواجهات البرمجية.',
          points: [
            'نطاق حماية Cloudflare منيع: جدار WAF، إخفاء عنوان IP الحقيقي، صد هجمات DDoS وتشفير SSL صارم.',
            'حماية البريد الإلكتروني المطلقة من الانتحال: SPF صارم (-all)، توقيع DKIM 2048-bit وسياسة DMARC (Reject).',
            'تحصين التطبيقات: تشفير كلمات المرور باستخدام Argon2، تحقق بخطوتين 2FA/TOTP وترويسات Helmet محكمة.',
            'خادم Caddy العكسي مع تجديد تلقائي لشهادات TLS وتحقق صارم من البيانات بواسطة Zod.'
          ]
        },
        {
          title: 'تسليم متكامل مخصص للإنتاج',
          tag: 'حزم المتاجر وحاويات دوكر',
          desc: 'تجهيز حزم .AAB الموقعة رقمياً لمتجر Google Play وحاويات Docker معزولة تحت خادم Caddy بأكواد معيارية ونظيفة.',
          points: [
            'تسليم حزم .AAB نهائية وموقعة بشهادات Keystore الرسمية صالحة فوراً للنشر على Google Play.',
            'تكامل موثق لإعلانات Google AdMob مع ضبط ملف app-ads.txt لتحقيق أقصى عائد مالي.',
            'حاويات Docker و Docker Compose متعددة البيئات جاهزة للنشر السحابي الفوري.',
            'بنى برمجية متينة ومستدامة (Clean Architecture, Riverpod, Monorepo).'
          ]
        }
      ]
    },
    projects: {
      pill: 'المشاريع والمنتجات المنجزة',
      title: 'مشاريع مصممة للأداء العالي',
      subtitle: 'من تطبيقات الهواتف الذكية بالذكاء الاصطناعي المحلي إلى مشغلات البث التلفزيوني ومنصات SaaS السحابية.',
      filters: {
        all: 'جميع المشاريع',
        mobile: 'الجوال والذكاء الاصطناعي',
        smartTv: 'التلفاز الذكي والبث',
        web: 'الويب الشامل والـ SaaS',
      },
      productionDelivered: 'تم التسليم للإنتاج الفعلي',
      architectureAction: 'الهندسة المعمارية والتفاصيل',
      metricsLabel: 'المؤشرات الرئيسية',
      customBanner: {
        title: 'هل لديك فكرة مشروع خاص أو متطلبات تقنية دقيقة؟',
        desc: 'تطبيق جوال فلاتر، نقل تطبيق لتلفزيونات Tizen/webOS، أو منصة ويب Next.js 16: تسليم سريع ونظيف مضمون.',
        ctaDiscuss: 'مناقشة تفاصيل مشروعك',
        ctaFiverr: 'طلب عبر فايفر',
      },
      modal: {
        conceptTitle: 'المفهوم والقيمة المضافة للمنتج',
        metricsTitle: 'المؤشرات التقنية القياسية',
        techTitle: 'التقنيات والأدوات المستخدمة',
        featuresTitle: 'الميزات الأساسية والمنجزات',
        architectureTitle: 'القرارات المعمارية والحلول الهندسية',
        footerNote: 'مشروع معتمد • كود نظيف واختبارات متانة مجتازة بنجاح',
        ctaSimilar: 'طلب مشروع مماثل',
        ctaFiverr: 'طلب مباشر عبر فايفر',
      }
    },
    services: {
      pill: 'خدمات برمجية جاهزة للتنفيذ',
      title: 'حلول تقنية عملية وملموسة',
      subtitle: 'خبرة مثبتة لتحويل رؤيتك الرقمية إلى تطبيقات جوال وويب وتلفزيونات ذكية مع تحصين شامل للبنية التحتية.',
      servicePrefix: 'خدمة 0',
      deliverablesLabel: 'المخرجات الأساسية المشمولة:',
      configureBtn: 'تخصيص هذه الخدمة',
      orderFiverrBtn: 'اطلب عبر فايفر',
      builder: {
        title: 'حاسبة النطاق وتحديد البنية التقنية',
        subtitle: 'اختر المنصة المستهدفة والمواصفات التي تحتاجها لتوليد ملخص تقني فوري لمشروعك.',
        badge: 'دراسة وعرض سعر خلال 24 ساعة',
        step1: '1. اختر المنصة الأساسية المستهدفة:',
        step2: '2. المواصفات والمتطلبات التقنية المطلوبة:',
        selectedCount: 'خيار(ات) محددة',
        readyNote: 'بنية معمارية جاهزة للإنتاج الفعلي',
        submitBtn: 'طلب دراسة معمارية بهذا النطاق التقني',
      }
    },
    skills: {
      pill: 'مصفوفة الكفاءات والمهارات التقنية',
      title: 'إتقان تقني شامل من الواجهة حتى الخادم',
      subtitle: 'من واجهات فلاتر السلسة بمعدل 60 إطاراً في الثانية وصولاً إلى بروتوكولات الأمان السحابية وإدارة سيرفرات لينكس.',
      searchPlaceholder: 'تصفية وبحث في التقنيات...',
      allTech: 'كافة التقنيات',
      cleanArchNote: 'هندسة معمارية نظيفة وقابلة للتطوير',
      skillsListed: 'مهارة معتمدة',
    },
    security: {
      pill: 'خبرة الأمان المتقدم والبنية التحتية Cloudflare',
      title: 'أمان استباقي وتحصين شامل لسجلات النطاق',
      subtitle: 'لا قيمة لأي تطبيق دون حماية منيعة. يحصل كل مشروع على تحصين متعدد الطبقات من طبقة الشبكة وحافة السحابة حتى قاعدة البيانات.',
      scoreBadge: 'التقييم: 100/100 (A+)',
      diagnosticBtn: 'إعادة فحص واختبار الأمان',
      scanningNotice: 'جارٍ الفحص والتدقيق',
      terminalFooter: 'تم التحقق من كافة معايير الأمان • لا توجد ثغرات حقن أو تسريب لترويسات السيرفر',
      readyForCritical: 'مهيأ للبيئات الحرجة والإنتاج الفعلي',
      layerPrefix: 'طبقة الحماية #',
      productionValidated: 'معتمد ومحصن للإنتاج',
      auditBannerText: 'هل تحتاج لتدقيق شامل لنطاقاتك، إعدادات Cloudflare أو حماية بريدك المؤسسي من الانتحال؟',
      auditBannerBtn: 'طلب تدقيق أمني متخصص',
    },
    career: {
      pill: 'المسار المهني وأهم الإنجازات',
      title: 'الخبرات والتجارب القيادية',
      subtitle: 'مسيرة مهنية تركز على المشاريع عالية التحدي التقني والأنظمة البرمجية الضخمة.',
    },
    contact: {
      pill: 'التواصل وبدء العمل',
      title: 'جاهز لبدء وتطوير مشروعك القادم؟',
      subtitle: 'هل لديك فكرة تطبيق جوال، منصة ويب SaaS، أو بنية تحتية تحتاج لتحصين؟ دعنا نناقش أهدافك ونحدد البنية البرمجية الأمثل.',
      statusCard: {
        title: 'حالة التفرغ وجاهزية العمل',
        desc: 'متاح للعمل الحر (Freelance)، العقود الممتدة، أو عبر منصة فايفر العالمية الموثوقة.',
        availabilityTitle: 'متاح للمشاريع الحرة والعقود طويلة الأجل',
        timezoneMorocco: 'الدار البيضاء، المغرب (توقيت جرينتش+1)',
      },
      fiverrCard: {
        title: 'الحساب الرسمي على فايفر',
        username: 'hicham1943@',
        desc: 'دفع آمن مع ضمان كامل للتسليم، مراحل دفع محمية، وتقييمات عملاء موثوقة.',
      },
      emailCard: {
        title: 'البريد الإلكتروني المباشر',
      },
      languagesCard: {
        title: 'لغات العمل والتواصل',
        items: [
          { name: 'العربية', level: 'اللغة الأم / ثنائية كاملة', flag: '🇲🇦' },
          { name: 'English', level: 'طلاقة واحترافية كاملة', flag: '🇬🇧' },
          { name: 'Français', level: 'اللغة الأم / ثنائية كاملة', flag: '🇫🇷' }
        ]
      },
      form: {
        title: 'إرسال طلب مشروع مباشر',
        subtitle: 'رد تقني مضمون خلال أقل من 24 ساعة مع دراسة جدوى أولية.',
        nameLabel: 'اسمك الكريم / اسم المؤسسة *',
        namePlaceholder: 'مثال: محمد السعيد / شركة XYZ',
        emailLabel: 'بريدك الإلكتروني للتواصل *',
        emailPlaceholder: 'name@your-domain.com',
        serviceLabel: 'نوع الخدمة المطلوبة',
        serviceOptions: [
          '1. تطبيق جوال وذكاء اصطناعي محلي (Flutter)',
          '2. تطوير ويب ومنصات SaaS بواسطة Next.js 16',
          '3. تطبيقات التلفاز الذكي (Samsung Tizen / LG webOS)',
          '4. تدقيق الأمان وتحصين Cloudflare و DNS',
          '5. مشروع مخصص آخر'
        ],
        messageLabel: 'تفاصيل ومواصفات المشروع *',
        messagePlaceholder: 'يرجى كتابة فكرة المشروع، الميزات المطلوبة، الإطار الزمني المتوقع، والمنصات المستهدفة...',
        submitBtn: 'إرسال تفاصيل المشروع',
        successTitle: 'تم تجهيز طلبك بنجاح',
        successDesc: 'تم فتح برنامج البريد الإلكتروني الخاص بك لإرسال هذه التفاصيل إلى contact@hicham.dev. يمكنك أيضاً التواصل معي مباشرة عبر فايفر.',
        sendAnother: 'إرسال طلب آخر',
        ndaNotice: 'خصوصية وسرية تامة مضمونة • اتفاقية عدم إفصاح (NDA) متاحة عند الطلب',
      }
    },
    footer: {
      role: 'مطور أول تطبيقات جوال وويب وشاشات ذكية',
      bio: 'تصميم وبناء حلول برمجية متكاملة وجاهزة للإنتاج الفعلي، تجمع بين الأداء الجراحي بمعدل 60 FPS، الأمان المنيع، وتجربة المستخدم الراقية.',
      navTitle: 'التنقل والروابط',
      projectsTitle: 'المشاريع البارزة',
      servicesTitle: 'الخدمات والمعايير',
      rights: 'جميع الحقوق محفوظة.',
      operational: 'جميع الأنظمة تعمل بكفاءة 100%',
      productionGrade: 'جاهزية إنتاجية كاملة',
      backToTop: 'العودة للأعلى',
    }
  }
};

