import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Terminal, 
  Play, 
  Cloud, 
  MailCheck, 
  Server, 
  RefreshCw
} from 'lucide-react';
import { SECURITY_AUDIT_DATA } from '../data/portfolioData';

export const SecurityAuditSection: React.FC = () => {
  const [runningScan, setRunningScan] = useState(false);
  const [scanProgress, setScanProgress] = useState(100);

  const startScan = () => {
    setRunningScan(true);
    setScanProgress(0);
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setRunningScan(false);
          return 100;
        }
        return prev + 20;
      });
    }, 250);
  };

  const getLayerIcon = (index: number) => {
    switch (index) {
      case 0: return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 1: return <MailCheck className="w-5 h-5 text-emerald-400" />;
      case 2: return <Server className="w-5 h-5 text-purple-400" />;
      default: return <Lock className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="securite" className="py-24 relative bg-[#090b14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Expertise Sécurité & Infrastructure Cloudflare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Sécurité Proactive & Durcissement DNS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
            Une architecture logicielle n'est viable que si elle est impénétrable. Chaque projet bénéficie d'un blindage dès la couche réseau jusqu'à la base de données.
          </p>
        </div>

        {/* Live Interactive Security Simulator Terminal */}
        <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-16">
          
          {/* Bar */}
          <div className="px-5 py-3.5 bg-[#0d121f] border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="text-xs font-mono text-slate-300 ml-2 font-medium flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                cloudflare-security-audit --strict --domain=hicham.dev
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Score : 100/100 (A+)
              </span>

              <button
                onClick={startScan}
                disabled={runningScan}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all disabled:opacity-50"
              >
                {runningScan ? (
                  <>
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    <span>Audit en cours ({scanProgress}%)...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3" />
                    <span>Relancer le Diagnostic</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Terminal Output */}
          <div className="p-6 bg-[#080b12] font-mono text-xs space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-slate-300 pb-2 border-b border-slate-800">
                  <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                    <Cloud className="w-3.5 h-3.5" /> Edge & WAF
                  </span>
                  <span className="text-emerald-400 font-semibold">Strict</span>
                </div>
                <div className="space-y-1 text-slate-400 text-[11px]">
                  <div>✓ Proxy Actif (IP Origine Masquée)</div>
                  <div>✓ WAF Règles DDoS & Managed Rules</div>
                  <div>✓ SSL/TLS Full Strict (Certifié)</div>
                  <div>✓ HSTS & HTTP/3 Activés</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-slate-300 pb-2 border-b border-slate-800">
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <MailCheck className="w-3.5 h-3.5" /> E-mail Authenticity
                  </span>
                  <span className="text-emerald-400 font-semibold">Zero-Spoof</span>
                </div>
                <div className="space-y-1 text-slate-400 text-[11px]">
                  <div>✓ SPF Record : 'v=spf1 ... -all'</div>
                  <div>✓ Signature DKIM : RSA 2048 bits</div>
                  <div>✓ DMARC Policy : 'p=reject'</div>
                  <div>✓ 100% Délivrabilité Inbox</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-slate-300 pb-2 border-b border-slate-800">
                  <span className="text-purple-400 font-bold flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5" /> Backend & System
                  </span>
                  <span className="text-emerald-400 font-semibold">Hardened</span>
                </div>
                <div className="space-y-1 text-slate-400 text-[11px]">
                  <div>✓ Hachage de mot de passe Argon2</div>
                  <div>✓ Authentification 2FA TOTP active</div>
                  <div>✓ Reverse proxy Caddy SSL Auto</div>
                  <div>✓ En-têtes Helmet & Rate Limiter</div>
                </div>
              </div>

            </div>

            <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-800 flex items-center justify-between">
              <span>Résultat de conformité vérifié • Aucune brèche d'injection ou de fuite de header détectée</span>
              <span className="text-emerald-400 font-semibold">Ready for Critical Deployments</span>
            </div>
          </div>
        </div>

        {/* Detailed 3-Layer Security Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SECURITY_AUDIT_DATA.map((sec, idx) => (
            <div 
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                    {getLayerIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white">
                      {sec.layer}
                    </h3>
                    <p className="text-xs text-slate-400 font-light mt-0.5">
                      {sec.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-800">
                  {sec.items.map((item, iIdx) => (
                    <div key={iIdx} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-white">{item.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Couche #{idx + 1}</span>
                <span className="text-cyan-400 font-semibold">Validé Production</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner for Security Audit */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0e1424] border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-cyan-400 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-300">
              Besoin d'un audit complet de vos noms de domaine, configuration Cloudflare ou protection e-mail ?
            </p>
          </div>
          
          <a
            href="#contact"
            className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shrink-0 text-center"
          >
            Demander un audit de sécurité
          </a>
        </div>

      </div>
    </section>
  );
};
