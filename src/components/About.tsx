import React from 'react';
import { Sparkles, Terminal, Code2, Cpu, CheckCircle2, User, Globe, ArrowRight } from 'lucide-react';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const pillars = [
    {
      title: "Scalable Web Applications",
      description:
        "Architecting clean, modular systems that handle traffic growth, maintain high uptime, and remain effortless to maintain over time.",
      tags: ["Modular Architecture", "API Resilience", "State Management"],
    },
    {
      title: "Responsive & Modern Interfaces",
      description:
        "Building fluid, accessible, and fast web UIs using React, Next.js, and modern CSS frameworks, ensuring seamless experiences on every device.",
      tags: ["Component Systems", "Design Systems", "Web Performance"],
    },
    {
      title: "Intelligent Tech Solutions",
      description:
        "Integrating modern AI models, smart automation pipelines, and data-driven logic to transform complex requirements into intuitive outcomes.",
      tags: ["Workflow Automation", "API Integration", "Algorithmic Logic"],
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-2 tracking-wide uppercase">
            <span>Introduction</span>
            <span aria-hidden="true">·</span>
            <span>About Me</span>
          </div>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering with Passion & Precision
          </h2>
        </div>

        {/* Primary Introduction Banner */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#111624] to-[#0c101a] border border-slate-800 p-8 sm:p-12 mb-12 shadow-xl shadow-black/40">
          <div className="max-w-4xl">
            <div className="text-sky-400 mb-6 font-mono text-sm flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Bio & Mission Statement</span>
            </div>

            {/* Exact Required Prompt Introduction Text */}
            <blockquote className="text-xl sm:text-2xl text-slate-100 font-normal leading-relaxed mb-8">
              &ldquo;I am a passionate software and web developer with a strong focus on building scalable web applications, responsive user interfaces, and intelligent tech solutions. I enjoy turning complex ideas into functional, impactful products.&rdquo;
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-800/80">
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-mono mb-1">Developer</span>
                <span className="text-base font-semibold text-white">Aditya Kumar</span>
                <span className="text-xs text-slate-400 mt-1">Full-Stack & Systems</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-mono mb-1">Methodology</span>
                <span className="text-base font-semibold text-white">Modern Engineering</span>
                <span className="text-xs text-slate-400 mt-1">Type-safe & Test-driven</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-mono mb-1">Primary Objective</span>
                <span className="text-base font-semibold text-white">Impactful Products</span>
                <span className="text-xs text-slate-400 mt-1">High performance & UX</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="rounded-xl bg-[#0f141f] border border-slate-800/90 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-500 tabular-nums">0{idx + 1}</span>
                  <span className="text-xs font-mono text-sky-400/80">Core Focus</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Unboxed tags with dot separators */}
              <div className="text-xs text-slate-400 pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-x-2 gap-y-1">
                {pillar.tags.map((tag, tIdx) => (
                  <React.Fragment key={tag}>
                    <span>{tag}</span>
                    {tIdx < pillar.tags.length - 1 && (
                      <span aria-hidden="true" className="text-slate-600">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between p-6 rounded-xl bg-[#0d111a] border border-slate-800/80 gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-white">
              Interested in collaborating or discussing technical roles?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Available for full-time positions, contracts, and engineering partnerships.
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="px-5 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
