import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Send, 
  ExternalLink, 
  Clock, 
  CheckCircle2, 
  Copy, 
  Check, 
  MessageSquare,
  MapPin,
  Languages
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  prefilledMessage: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'Mobile & IA Embarquée (Flutter)',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    if (prefilledMessage) {
      setFormData((prev) => ({
        ...prev,
        message: prefilledMessage
      }));
    }
  }, [prefilledMessage]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Morocco time (UTC+1)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Casablanca',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setCurrentTime(new Intl.DateTimeFormat('fr-FR', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Construct mailto as a reliable direct fallback
    const subject = encodeURIComponent(`[Nouveau Projet] ${formData.serviceType} - ${formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nService souhaité: ${formData.serviceType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090c14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contact & Démarrage de Projet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Prêt à Réaliser Votre Projet ?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-light">
            Une idée d'application mobile, une plateforme web SaaS ou une infrastructure à sécuriser ? Discutons de vos objectifs et de la meilleure architecture technique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contacts & Status */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Statut de Disponibilité</span>
              </div>
              <h3 className="text-lg font-display font-bold text-white">
                {PROFILE_DATA.availability}
              </h3>
              <p className="text-xs text-slate-300 mt-2 font-light leading-relaxed">
                Missions sous contrat freelance, régie forfaitaire ou commandes sécurisées via la plateforme internationale Fiverr.
              </p>

              {/* Local Time Morocco */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Casablanca, Maroc (GMT+1)
                </span>
                <span className="text-white font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  {currentTime || '10:30'}
                </span>
              </div>
            </div>

            {/* Fiverr Official Banner */}
            <a
              href={PROFILE_DATA.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl bg-[#1dbf73]/10 border border-[#1dbf73]/30 hover:border-[#1dbf73]/60 transition-all shadow-lg hover:shadow-[#1dbf73]/10"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#1dbf73] text-black font-extrabold flex items-center justify-center text-sm font-sans">
                    fi
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#1dbf73] transition-colors">
                      Profil Fiverr Officiel
                    </h4>
                    <span className="text-xs font-mono text-slate-400">
                      {PROFILE_DATA.username}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#1dbf73] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Paiement sécurisé avec garantie de livraison, jalons protégés et avis vérifiés.
              </p>
            </a>

            {/* Direct Email Card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                Adresse E-mail Directe
              </span>
              <div className="flex items-center justify-between bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-white truncate">
                    {PROFILE_DATA.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 ml-2"
                  title="Copier l'adresse email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Languages spoken */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                <Languages className="w-3.5 h-3.5 text-cyan-400" />
                Langues de Travail & Échanges
              </span>
              <div className="grid grid-cols-3 gap-2">
                {PROFILE_DATA.languages.map((lang, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
                    <span className="text-base">{lang.flag}</span>
                    <div className="text-xs font-semibold text-white mt-1">{lang.name}</div>
                    <div className="text-[10px] text-slate-400">{lang.level.split('/')[0]}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative">
              
              <div className="pb-6 mb-6 border-b border-slate-800">
                <h3 className="text-xl font-display font-bold text-white">
                  Envoyer une Demande Directe
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Réponse technique garantie sous 24h avec première analyse de faisabilité.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Demande Préparée avec Succès</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Votre client de messagerie s'est ouvert pour transmettre ces éléments à <strong>{PROFILE_DATA.email}</strong>. Vous pouvez également me joindre directement sur Fiverr.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1.5">
                        Votre Nom / Entreprise *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Alexandre D. / Studio XYZ"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1.5">
                        Votre E-mail de Contact *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@votre-domaine.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">
                      Type de Prestation Souhaitée
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="Mobile & IA Embarquée (Flutter)">1. Application Mobile & IA Embarquée (Flutter)</option>
                      <option value="Développement Web Next.js 16 & SaaS">2. Application Web Next.js 16 & SaaS</option>
                      <option value="Smart TV (Samsung Tizen / LG webOS)">3. Application Smart TV (Samsung Tizen / LG webOS)</option>
                      <option value="Audit Sécurité & Durcissement Cloudflare">4. Audit Sécurité Web & Durcissement Cloudflare</option>
                      <option value="Autre projet sur-mesure">5. Autre projet sur-mesure</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">
                      Détails de Votre Projet ou Spécifications *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez votre idée, les fonctionnalités souhaitées, les délais envisagés et les contraintes techniques..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono text-[12px] leading-relaxed"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.01]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmettre la demande de projet</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 font-mono mt-3">
                    Confidentialité assurée • Accord de non-divulgation (NDA) disponible sur demande
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
