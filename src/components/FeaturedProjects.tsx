import React from 'react';
import { ExternalLink, Github, ArrowUpRight, Code2, Layers, Cpu, Database } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      title: "OmniFlow Cloud Platform",
      role: "Full-Stack Web Architecture",
      description:
        "An enterprise-ready workflow automation platform with reactive UI, distributed job queues, real-time status syncing, and strict RBAC security.",
      stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com/adityakr-git",
      metrics: "Sub-100ms API latency · Zero-downtime schema migrations",
    },
    {
      title: "Nexus AI Synthesizer",
      role: "Intelligent Tech Solutions",
      description:
        "High-performance AI model orchestration interface featuring streaming token responses, dynamic prompt caching, and custom document analysis pipelines.",
      stack: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Streaming APIs"],
      githubUrl: "https://github.com/adityakr-git",
      metrics: "Real-time streaming · 45% reduced token latency",
    },
    {
      title: "DataMesh Query Engine",
      role: "Database & Backend Engineering",
      description:
        "A relational database query profiling and optimization tool that analyzes execution plans, detects indexing bottlenecks, and suggests schema refactoring.",
      stack: ["Node.js", "Express", "PostgreSQL", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/adityakr-git",
      metrics: "Optimized complex analytical queries by 3.8x",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-2 tracking-wide uppercase">
              <span>Selected Work</span>
              <span aria-hidden="true">·</span>
              <span>Architectural Systems</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl">
              Concrete implementations of scalable web architectures, AI integrations, and responsive user interfaces.
            </p>
          </div>

          <a
            href="https://github.com/adityakr-git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-slate-200 hover:text-white bg-[#111624] hover:bg-[#161d30] border border-slate-800 px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
          >
            <Github className="w-3.5 h-3.5" />
            <span>View All on GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group rounded-xl bg-[#0f1420] border border-slate-800/90 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-500 tabular-nums">0{idx + 1}</span>
                  <span className="text-xs font-mono text-sky-400/90">{project.role}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="text-[11px] font-mono text-slate-400 mb-4 pb-4 border-b border-slate-800/80">
                  <span className="text-slate-500 block mb-1">Key Impact / Metric:</span>
                  <span className="text-slate-300">{project.metrics}</span>
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-400 mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono">
                  {project.stack.map((item, sIdx) => (
                    <React.Fragment key={item}>
                      <span className="text-slate-400">{item}</span>
                      {sIdx < project.stack.length - 1 && (
                        <span aria-hidden="true" className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-[#141a27] hover:bg-[#1a2334] border border-slate-800/90 text-xs font-medium text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5 text-slate-400" />
                  <span>Inspect Source on GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
