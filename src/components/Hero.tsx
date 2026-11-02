import React, { useState } from 'react';
import { 
  Code2, 
  ArrowRight, 
  ExternalLink, 
  Copy, 
  Check, 
  Terminal,
  Lock
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flutter' | 'nextjs' | 'smarttv' | 'security'>('flutter');
  const [copied, setCopied] = useState(false);

  const snippets = {
    flutter: {
      title: "Flutter + On-Device ML Kit",
      file: "biometric_segmenter.dart",
      badge: "60 FPS • 100% Hors-Ligne",
      code: `// Traitement d'image 100% local sans serveur
final selfieSegmenter = SelfieSegmenter(
  options: SegmenterOptions(
    mode: SegmenterMode.single,
    enableRawSizeMask: true,
  ),
);

// Exécution sur le GPU/NPU matériel
final mask = await selfieSegmenter.processImage(inputImage);
final normalizedPassport = await PassportEngine.cropToStandard(
  image: originalBytes,
  mask: mask,
  countrySpec: ICAOStandards.iso3166_1,
  dpi: 300,
);`
    },
    nextjs: {
      title: "Next.js 16 + Redis BullMQ",
      file: "video-worker.service.ts",
      badge: "Distributed Async Architecture",
      code: `// Worker asynchrone découplé pour charges lourdes
export const videoQueue = new Queue('video-processing', {
  connection: redisConnection,
  defaultJobOptions: {
    attempts: 3,
    backoff: { type: 'exponential', delay: 1500 },
    removeOnComplete: true,
  },
});

export const worker = new Worker('video-processing', async (job) => {
  const { prompt, resolution, model } = job.data;
  const result = await falClient.run("fal-ai/fast-svd", {
    input: { prompt, aspect_ratio: "16:9" }
  });
  return await persistAndNotify(result);
});`
    },
    smarttv: {
      title: "Smart TV Engine (Tizen & webOS)",
      file: "tizen-avplay.controller.js",
      badge: "AVPlay & Luna Bus Native",
      code: `// Initialisation lecteur Tizen AVPlay haute cadence
webapis.avplay.open(streamUrl);
webapis.avplay.setDisplayRect(0, 0, 1920, 1080);
webapis.avplay.setDisplayMethod('PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO');

// Écoute des flux IPTV / MPEG-TS
webapis.avplay.setListener({
  onbufferingcomplete: () => console.log('Buffer ready'),
  oncurrentplaytime: (time) => syncDpadUI(time),
  onerror: (err) => fallbackLunaBus(err)
});
webapis.avplay.prepareAsync(() => webapis.avplay.play());`
    },
    security: {
      title: "Cloudflare Strict & Anti-Spoofing",
      file: "cloudflare-waf.rule.tf",
      badge: "Full Strict • Zero-Trust",
      code: `// Durcissement Edge & En-têtes HTTP
resource "cloudflare_waf_rule" "strict_defense" {
  zone_id     = var.cloudflare_zone_id
  mode        = "block"
  expression  = "(http.request.uri.path contains '/wp-login' or cf.threat_score gt 25)"
}

// DNS Anti-Spoofing & DMARC Strict
// TXT @ "v=spf1 include:_spf.google.com -all"
// TXT default._domainkey "v=DKIM1; k=rsa; p=MIIBIjANBgkq..."
// TXT _dmarc "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;"`
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="accueil" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cyber-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/15 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Identity Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-lg shadow-cyan-500/10 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs font-mono font-medium text-cyan-300 tracking-wide">
                Senior Mobile & Full-Stack Architect
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs text-slate-400 font-mono">
                Flutter • Next.js • IA • Sécurité
              </span>
            </div>

            {/* Main Punchy Title */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Bâtisseur de solutions <br />
              <span className="gradient-text-cyan">
                prêtes pour la production
              </span>
            </h1>

            {/* Subtitle / Pitch */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-light">
              J'accompagne les startups, entreprises et créateurs dans la transformation de concepts complexes en applications scalables, rapides à 
              <span className="text-cyan-400 font-medium"> 60 FPS</span>, protégées par 
              <span className="text-emerald-400 font-medium"> Cloudflare Full Strict</span> et prêtes pour le 
              <span className="text-purple-400 font-medium"> Google Play Store & Smart TVs</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projets"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02]"
              >
                <span>Explorer mes projets</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PROFILE_DATA.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-[#1dbf73]/15 text-[#1dbf73] hover:bg-[#1dbf73]/25 border border-[#1dbf73]/30 transition-all hover:scale-[1.02]"
              >
                <span className="font-black text-sm">fi</span>
                <span>Commander sur Fiverr</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all"
              >
                <span>Audit & Contact direct</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-cyan-400">60 FPS</span>
                <span className="text-xs text-slate-400">Mobile Flutter fluide</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-emerald-400">100% Local</span>
                <span className="text-xs text-slate-400">IA ML Kit & TFLite</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-purple-400">Full Strict</span>
                <span className="text-xs text-slate-400">Cloudflare & DNS WAF</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-amber-400">3+ OS TV</span>
                <span className="text-xs text-slate-400">Tizen, webOS & Android</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code & Architecture Terminal */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
              
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d121f] border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    production_runtime.env
                  </span>
                </div>
                
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800/60 hover:bg-slate-700/60 transition-colors"
                  title="Copier le code"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>

              {/* Tab Selectors */}
              <div className="grid grid-cols-4 bg-[#090d16] border-b border-slate-800/80 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('flutter')}
                  className={`py-2 px-2 text-center transition-all ${
                    activeTab === 'flutter' 
                      ? 'bg-cyan-500/10 text-cyan-400 border-b-2 border-cyan-400 font-semibold' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Flutter/AI
                </button>
                <button
                  onClick={() => setActiveTab('nextjs')}
                  className={`py-2 px-2 text-center transition-all ${
                    activeTab === 'nextjs' 
                      ? 'bg-purple-500/10 text-purple-400 border-b-2 border-purple-400 font-semibold' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Next/Redis
                </button>
                <button
                  onClick={() => setActiveTab('smarttv')}
                  className={`py-2 px-2 text-center transition-all ${
                    activeTab === 'smarttv' 
                      ? 'bg-amber-500/10 text-amber-400 border-b-2 border-amber-400 font-semibold' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Smart TV
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`py-2 px-2 text-center transition-all ${
                    activeTab === 'security' 
                      ? 'bg-emerald-500/10 text-emerald-400 border-b-2 border-emerald-400 font-semibold' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  WAF/DNS
                </button>
              </div>

              {/* Code Snippet Content */}
              <div className="p-4 bg-[#080b12] text-xs font-mono leading-relaxed overflow-x-auto min-h-[290px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/60 text-[11px]">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-blue-400" />
                      {snippets[activeTab].file}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-cyan-300 border border-slate-700">
                      {snippets[activeTab].badge}
                    </span>
                  </div>

                  <pre className="text-slate-300 font-mono text-[11px] leading-5 whitespace-pre">
                    <code>{snippets[activeTab].code}</code>
                  </pre>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    Moteur compilé en production
                  </span>
                  <span>100% Typé TypeScript & Dart</span>
                </div>
              </div>

              {/* Bottom Quick Feature Pill */}
              <div className="px-4 py-2.5 bg-[#0e1424] border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-300 font-medium flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-cyan-400" />
                  Certifié Keystore / Cloudflare / Docker
                </span>
                <span className="text-cyan-400 font-mono font-semibold">Ready</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
