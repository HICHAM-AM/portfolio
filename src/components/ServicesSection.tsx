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
import { useLanguage } from '../context/LanguageContext';
import { 
  getPortfolioData, 
  getPlatformOptions, 
  getFeatureOptions, 
  PROFILE_CONSTANTS 
} from '../data/portfolioData';

interface ServicesSectionProps {
  onConfigureProject: (configSummary: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onConfigureProject }) => {
  const { language, t, isRtl } = useLanguage();

  const { services } = getPortfolioData(language);
  const platformOptions = getPlatformOptions(language);
  const featureOptions = getFeatureOptions(language);

  // Interactive Project Builder State
  const [selectedPlatform, setSelectedPlatform] = useState<string>('mobile');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'ia-offline',
    'playstore-aab'
  ]);

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

    let summary = '';
    if (language === 'ar') {
      summary = `مرحباً هشام، أود مناقشة مشروعي معك:\n- المنصة المستهدفة: ${platformObj?.name}\n- المواصفات والمتطلبات التقنية: ${activeFeats || 'قياسية'}\nأرجو إخباري بتفرغك لمناقشة الجدوى وتقدير التكلفة.`;
    } else if (language === 'fr') {
      summary = `Bonjour Hicham, je souhaite échanger au sujet de mon projet :\n- Plateforme cible : ${platformObj?.name}\n- Spécifications clés : ${activeFeats || 'Standard'}\nMerci de m'indiquer vos disponibilités pour échanger sur la faisabilité et le devis.`;
    } else {
      summary = `Hello Hicham, I would like to discuss my project with you:\n- Target platform: ${platformObj?.name}\n- Technical specifications: ${activeFeats || 'Standard'}\nPlease let me know your availability to discuss technical feasibility and quote.`;
    }

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
            <span>{t.services.pill}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
            {t.services.subtitle}
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((srv, idx) => (
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
                    {t.services.servicePrefix}{idx + 1}
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
                    {t.services.deliverablesLabel}
                  </span>
                  {srv.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-5">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/70" dir="ltr">
                  {srv.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-cyan-300 border border-slate-700/80"
                    >
                      {tech}
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
                  <span>{t.services.configureBtn}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>

                <a
                  href={PROFILE_CONSTANTS.fiverrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-emerald-400 hover:underline"
                >
                  {t.services.orderFiverrBtn}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Scope Builder / Estimator Widget */}
        <div id="configurateur" className="glass-panel-glow rounded-3xl p-6 sm:p-10 border border-cyan-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <Settings2 className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  {t.services.builder.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  {t.services.builder.subtitle}
                </p>
              </div>
            </div>

            <span className="self-start md:self-auto px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {t.services.builder.badge}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Platform Selection */}
            <div className="lg:col-span-5 space-y-3">
              <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                {t.services.builder.step1}
              </label>
              
              <div className="space-y-2.5">
                {platformOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setSelectedPlatform(opt.id);
                      setSelectedFeatures([]);
                    }}
                    className={`w-full text-start p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${
                      selectedPlatform === opt.id
                        ? 'bg-cyan-500/15 border-cyan-500/50 text-white font-semibold shadow-md shadow-cyan-500/10'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span>{opt.name}</span>
                    {selectedPlatform === opt.id && (
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mx-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Middle: Feature Checkboxes */}
            <div className="lg:col-span-7 space-y-3">
              <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                {t.services.builder.step2}
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
                  </span> {t.services.builder.selectedCount} • {t.services.builder.readyNote}
                </div>

                <button
                  onClick={handleSendScope}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>{t.services.builder.submitBtn}</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
