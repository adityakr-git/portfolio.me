import React, { useState } from 'react';
import { ArrowRight, Github, Mail, Copy, Check, Terminal, Code2, Sparkles, Layers } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onCopyEmail: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onCopyEmail }) => {
  const [activeTab, setActiveTab] = useState<'stack' | 'architecture' | 'ai'>('stack');
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippets = {
    stack: `// Aditya's Primary Engineering Ecosystem
const engineerProfile = {
  name: "Aditya Kumar",
  title: "Full-Stack Developer",
  focus: ["Scalable Web Apps", "Robust APIs", "AI Workflows"],
  coreStack: {
    frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    backend: ["Node.js", "Express", "RESTful & GraphQL APIs"],
    database: ["PostgreSQL", "MongoDB", "Redis", "Schema Design"],
    principles: ["Clean Code", "High Availability", "Intuitive UX"]
  },
  availableForWork: true
};`,
    architecture: `// Production Architecture Pattern
interface ApplicationArchitecture {
  clientLayer: "Responsive React / Next.js SPA with Optimistic UI";
  apiGateway: "Type-safe Express / Node.js Microservices";
  dataPersistence: "Relational Models + Scalable Indexing";
  security: "JWT / OAuth2, Rate Limiting, OWASP Hardened";
  deployment: "Containerized, Automated CI/CD, Zero Downtime";
}`,
    ai: `// AI Integration & Modern Intelligence Layer
async function synthesizeIntelligentWorkflow(prompt: string) {
  const contextPipeline = await loadUserContext({ strictPrivacy: true });
  const modelResponse = await executeModelInference({
    pipeline: contextPipeline,
    streaming: true,
    structuredOutput: true
  });
  return modelResponse.hydrateUserView();
}`
  };

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background subtle ambient radial gradients */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 -right-20 w-[400px] h-[350px] bg-indigo-500/8 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subheading, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Indicator (Unboxed, clean text) */}
            <div className="flex items-center gap-2.5 text-xs text-slate-400 mb-6 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300">Available for innovative software projects & roles</span>
            </div>

            {/* Required Heading: 'Aditya Kumar' */}
            <h1 className="font-['Syne'] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance mb-5">
              Aditya Kumar
            </h1>

            {/* Required Subheading: 'Full-Stack Developer | Software & AI Enthusiast' */}
            <p className="text-xl sm:text-2xl font-medium text-sky-400/95 tracking-normal mb-6 text-balance">
              Full-Stack Developer | Software & AI Enthusiast
            </p>

            {/* Concise Value Statement */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8 font-normal">
              Specialized in engineering robust, high-performance web systems and intelligent digital products. Dedicated to clean architecture, modern frontend elegance, and resilient backend design.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* Primary CTA: 'Get in Touch' */}
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-lg transition-all duration-150 flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 active:scale-[0.98] cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA: 'View GitHub' */}
              <a
                href="https://github.com/adityakr-git"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-[#121622] hover:bg-[#182030] border border-slate-700/80 hover:border-slate-600 rounded-lg transition-all duration-150 flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>View GitHub</span>
              </a>

              {/* Quick email copy button */}
              <button
                onClick={onCopyEmail}
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5 py-2 px-3 rounded-md hover:bg-slate-800/50 transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-mono">kr.adi.work@gmail.com</span>
              </button>
            </div>

            {/* Discipline metadata: Unboxed with typographic separators (anti-slop rule) */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-400 border-t border-slate-800/80 pt-6 w-full">
              <span className="text-slate-300 font-medium">Core Focus:</span>
              <span>Full-Stack Engineering</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Modern React & Next.js</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Scalable APIs & Node.js</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Database Design</span>
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Inspector */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-xl border border-slate-800 bg-[#0e121a] shadow-2xl shadow-black/80 overflow-hidden">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-[#0a0d14]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-slate-500" />
                    developer-spec.ts
                  </span>
                </div>

                <button
                  onClick={handleCopySnippet}
                  className="text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1 py-1 px-2 rounded hover:bg-slate-800/60 cursor-pointer"
                  title="Copy code snippet"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Interactive Segmented Selector Tabs */}
              <div className="flex items-center gap-1 p-2 bg-[#0c0f17] border-b border-slate-800/60">
                <button
                  onClick={() => setActiveTab('stack')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'stack'
                      ? 'bg-slate-800 text-sky-400 shadow-sm border border-slate-700/60'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Stack</span>
                </button>
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'architecture'
                      ? 'bg-slate-800 text-sky-400 shadow-sm border border-slate-700/60'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Architecture</span>
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'ai'
                      ? 'bg-slate-800 text-sky-400 shadow-sm border border-slate-700/60'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Logic</span>
                </button>
              </div>

              {/* Code Pane */}
              <div className="p-4 sm:p-5 overflow-x-auto text-[13px] leading-relaxed font-mono text-slate-300">
                <pre className="text-slate-300 whitespace-pre font-mono">
                  {codeSnippets[activeTab]}
                </pre>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-4 py-2.5 bg-[#0a0d14] border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>UTF-8 · TypeScript 5+</span>
                <span className="text-slate-400">Aditya Kumar Portfolio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
