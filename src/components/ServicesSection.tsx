import React, { useState } from 'react';
import { 
  Briefcase, 
  Smartphone, 
  Globe, 
  Tv, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  Check, 
  Settings2,
  FileCheck
} from 'lucide-react';
import { SERVICES, PROFILE_DATA } from '../data/portfolioData';

interface ServicesSectionProps {
  onConfigureProject: (configSummary: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onConfigureProject }) => {
  // Interactive Project Builder State
  const [selectedPlatform, setSelectedPlatform] = useState<string>('mobile');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'ia-offline',
    'playstore-aab'
  ]);

  const platformOptions = [
    { id: 'mobile', name: 'Application Mobile Flutter (iOS & Android)', icon: 'Smartphone' },
    { id: 'web', name: 'Application Web & SaaS Next.js 16', icon: 'Globe' },
    { id: 'smart-tv', name: 'App Smart TV (Samsung Tizen & LG webOS)', icon: 'Tv' },
    { id: 'security', name: 'Audit Sécurité & Durcissement Cloudflare', icon: 'ShieldAlert' }
  ];

  const featureOptions: Record<string, { id: string; label: string; desc: string }[]> = {
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

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const handleSendScope = () => {
    const platformObj = platformOptions.find(p => p.id === selectedPlatform);
    const activeFeats = (featureOptions[selectedPlatform] || [])
      .filter(f => selectedFeatures.includes(f.id))
      .map(f => f.label)
      .join(', ');

    const summary = `Bonjour Hicham, je souhaite échanger au sujet de mon projet :
- Plateforme cible : ${platformObj?.name}
- Fonctionnalités & Spécifications clés : ${activeFeats || 'Standard'}
Merci de m'indiquer vos disponibilités pour échanger sur la faisabilité et le devis.`;

    onConfigureProject(summary);
  };

  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-sky-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-emerald-400" />;
      case 'Tv': return <Tv className="w-6 h-6 text-purple-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-amber-400" />;
      default: return <Briefcase className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#090c14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Offres & Services Prêts à Déployer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Des Solutions Logicielles Concrètes
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
            Une expertise éprouvée pour donner vie à vos projets mobiles, web, streaming et sécuriser vos infrastructures.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              className="glass-panel rounded-2xl p-7 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center shadow-md">
                    {getServiceIcon(srv.icon)}
                  </div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    Service 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {srv.shortDesc}
                </p>

                {/* Deliverables list */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Livrables Clés Inclus :
                  </span>
                  {srv.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-5">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/70">
                  {srv.technologies.map((t, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-cyan-300 border border-slate-700/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedPlatform(srv.id === 'security-cloudflare' ? 'security' : srv.id);
                    const element = document.getElementById('configurateur');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Configurer ce service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={PROFILE_DATA.fiverrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-emerald-400 hover:underline"
                >
                  Commander via Fiverr
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Solution Builder / Estimator Widget */}
        <div id="configurateur" className="glass-panel-glow rounded-3xl p-6 sm:p-10 border border-cyan-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <Settings2 className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  Simulateur de Périmètre & Stack Recommandée
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Sélectionnez votre type de projet et vos spécifications pour générer un résumé technique direct.
                </p>
              </div>
            </div>

            <span className="self-start md:self-auto px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Devis & Étude sous 24h
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Platform Selection */}
            <div className="lg:col-span-5 space-y-3">
              <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                1. Choisissez la plateforme principale :
              </label>
              
              <div className="space-y-2.5">
                {platformOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setSelectedPlatform(opt.id);
                      setSelectedFeatures([]);
                    }}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${
                      selectedPlatform === opt.id
                        ? 'bg-cyan-500/15 border-cyan-500/50 text-white font-semibold shadow-md shadow-cyan-500/10'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span>{opt.name}</span>
                    {selectedPlatform === opt.id && (
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Middle: Feature Checkboxes */}
            <div className="lg:col-span-7 space-y-3">
              <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                2. Spécifications & Exigences Techniques Souhaitées :
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(featureOptions[selectedPlatform] || []).map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                        isChecked
                          ? 'bg-gradient-to-r from-blue-950/40 to-cyan-950/40 border-cyan-500/40 text-white'
                          : 'bg-slate-900/40 border-slate-800/80 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-semibold">{feat.label}</span>
                        <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                          isChecked ? 'bg-cyan-500 border-cyan-500 text-black' : 'border-slate-600'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                      <span className="text-[11px] text-slate-400 mt-1.5 leading-snug">
                        {feat.desc}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Action Banner */}
              <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  <span className="text-cyan-400 font-mono font-semibold">
                    {selectedFeatures.length}
                  </span> option(s) sélectionnée(s) • Stack prête pour production
                </div>

                <button
                  onClick={handleSendScope}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Demander une étude avec ce périmètre</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
