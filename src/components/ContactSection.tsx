import React, { useState, useEffect } from 'react';
import { 
  Send, 
  ExternalLink, 
  Clock, 
  CheckCircle2, 
  MessageSquare,
  MapPin,
  Languages,
  Phone,
  MessageCircle,
  ShieldCheck,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PROFILE_CONSTANTS } from '../data/portfolioData';

interface ContactSectionProps {
  prefilledMessage: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledMessage }) => {
  const { language, t, isRtl } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: t.contact.form.serviceOptions[0],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
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
    // Keep default service option synced with language change
    setFormData((prev) => ({
      ...prev,
      serviceType: t.contact.form.serviceOptions[0]
    }));
  }, [t]);

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
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Direct recipient encoded to prevent web scraping
      const recipient = atob('aGljaGFtYW1hbmUyQGdtYWlsLmNvbQ==');

      const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.serviceType,
          message: formData.message,
          _subject: `[Portfolio Demande] ${formData.serviceType} - ${formData.name}`,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok || data.success === 'true' || data.success === true || (data.message && data.message.includes('Activation'))) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          serviceType: t.contact.form.serviceOptions[0],
          message: ''
        });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage(t.contact.form.errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090c14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.contact.pill}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-light">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contacts & Status */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{t.contact.statusCard.title}</span>
              </div>
              <h3 className="text-lg font-display font-bold text-white">
                {t.contact.statusCard.availabilityTitle}
              </h3>
              <p className="text-xs text-slate-300 mt-2 font-light leading-relaxed">
                {t.contact.statusCard.desc}
              </p>

              {/* Local Time Morocco */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {t.contact.statusCard.timezoneMorocco}
                </span>
                <span className="text-white font-semibold flex items-center gap-1" dir="ltr">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  {currentTime || '11:15'}
                </span>
              </div>
            </div>

            {/* WhatsApp & Mobile Direct Card */}
            <div className="glass-panel rounded-2xl p-6 border border-emerald-500/30 bg-emerald-950/10 hover:border-emerald-500/60 transition-all shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="w-5 h-5 fill-[#25D366]/20" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      WhatsApp & Mobile
                    </h4>
                    <span className="text-xs font-mono text-emerald-400 font-semibold" dir="ltr">
                      {PROFILE_CONSTANTS.phoneDisplay}
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {language === 'ar' ? 'رد فوري' : 'Direct'}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                {language === 'ar' 
                  ? 'تواصل فوري وسريع لمناقشة أفكار المشاريع والجدوى التقنية.' 
                  : language === 'fr' 
                  ? 'Échange direct et rapide pour discuter de vos projets, délais et tarifs.'
                  : 'Fast and direct discussion regarding your project requirements, scope, and deadlines.'}
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={PROFILE_CONSTANTS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-[#25D366] hover:bg-[#20ba5a] text-black shadow-md shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>{language === 'ar' ? 'محادثة واتساب مباشرة' : language === 'fr' ? 'Discuter sur WhatsApp' : 'Chat on WhatsApp'}</span>
                </a>
                <a
                  href={`tel:${PROFILE_CONSTANTS.phone}`}
                  className="inline-flex items-center justify-center p-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                  title="Appeler"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                </a>
              </div>
            </div>

            {/* Confidential Inquiry & Direct Dispatch Card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 bg-slate-900/40">
              <div className="flex items-center gap-2 text-cyan-400 mb-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  {t.contact.privacyCard.title}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed mb-3">
                {t.contact.privacyCard.desc}
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
                <span className="px-2 py-0.5 rounded-md bg-slate-800/90 border border-slate-700/60 text-cyan-300">
                  ✓ NDA Available
                </span>
                <span className="px-2 py-0.5 rounded-md bg-slate-800/90 border border-slate-700/60 text-emerald-300">
                  ✓ 24h SLA Turnaround
                </span>
              </div>
            </div>

            {/* Fiverr Official Banner */}
            <a
              href={PROFILE_CONSTANTS.fiverrUrl}
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
                      {t.contact.fiverrCard.title}
                    </h4>
                    <span className="text-xs font-mono text-slate-400" dir="ltr">
                      {t.contact.fiverrCard.username}
                    </span>
                  </div>
                </div>
                <ExternalLink className={`w-4 h-4 text-[#1dbf73] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                {t.contact.fiverrCard.desc}
              </p>
            </a>

            {/* Languages spoken */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                <Languages className="w-3.5 h-3.5 text-cyan-400" />
                {t.contact.languagesCard.title}
              </span>
              <div className="grid grid-cols-3 gap-2">
                {t.contact.languagesCard.items.map((lang, idx) => (
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
                  {t.contact.form.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {t.contact.form.subtitle}
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">{t.contact.form.successTitle}</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    {t.contact.form.successDesc}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white"
                  >
                    {t.contact.form.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1.5">
                        {t.contact.form.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.form.namePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1.5">
                        {t.contact.form.emailLabel}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.form.emailPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">
                      {t.contact.form.serviceLabel}
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs text-white focus:outline-none focus:border-cyan-500"
                    >
                      {t.contact.form.serviceOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">
                      {t.contact.form.messageLabel}
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono text-[12px] leading-relaxed"
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
                      <div className="flex-1">
                        <p>{errorMessage}</p>
                        <a
                          href={PROFILE_CONSTANTS.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp Direct ({PROFILE_CONSTANTS.phoneDisplay})</span>
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.01]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>{t.contact.form.sendingBtn}</span>
                        </>
                      ) : (
                        <>
                          <Send className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                          <span>{t.contact.form.submitBtn}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 font-mono mt-3">
                    {t.contact.form.ndaNotice}
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
