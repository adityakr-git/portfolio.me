import React, { useState } from 'react';
import { 
  Layers, 
  Layout, 
  Server, 
  Database, 
  Brain, 
  Check, 
  ExternalLink, 
  ChevronRight,
  Code2,
  Workflow,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Database' | 'Core'>('All');

  const skillsList: SkillItem[] = [
    {
      id: 'fullstack',
      name: 'Full-Stack Web Development',
      category: 'Full-Stack' as const,
      icon: 'Layers',
      summary:
        'End-to-end web engineering from responsive frontend interfaces to scalable backend services, integrating state, databases, and deployment pipelines.',
      technologies: ['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'RESTful APIs', 'SSR/SSG'],
      strengths: [
        'Complete end-to-end product delivery from idea to production',
        'Bridging seamless user experience with robust system mechanics',
        'State management, client caching, and optimistic UI updates',
        'CI/CD deployment pipelines & cloud hosting architectures'
      ],
    },
    {
      id: 'frontend',
      name: 'Frontend Engineering',
      category: 'Frontend',
      icon: 'Layout',
      summary:
        'Crafting pixel-perfect, highly responsive, and accessible digital experiences using React, Next.js, and Tailwind CSS with fluid animations.',
      technologies: ['React 19', 'Next.js (App Router)', 'Tailwind CSS', 'TypeScript', 'Responsive Design', 'Web Accessibility (a11y)'],
      strengths: [
        'Component-driven architecture and reusable design systems',
        'Advanced CSS layout mastery: Flexbox, CSS Grid, and fluid typography',
        'Web Vitals optimization: fast LCP, zero CLS, and low interaction latency',
        'Cross-browser and multi-device fluid responsiveness'
      ],
    },
    {
      id: 'backend',
      name: 'Backend & APIs',
      category: 'Backend',
      icon: 'Server',
      summary:
        'Designing secure, efficient, and well-documented server architectures and RESTful/GraphQL endpoints powered by Node.js and Express.',
      technologies: ['Node.js', 'Express.js', 'REST APIs', 'Middleware Design', 'Authentication (JWT/OAuth)', 'Error Handling'],
      strengths: [
        'Modular Express routing with centralized error management',
        'Secure authentication, session handling, and authorization scopes',
        'API rate limiting, request validation, and OWASP security best practices',
        'Microservices coordination and external third-party API integrations'
      ],
    },
    {
      id: 'database',
      name: 'Database Architecture',
      category: 'Database',
      icon: 'Database',
      summary:
        'Structuring relational and document-based data models with optimized indexes, data integrity, normalization, and efficient query pipelines.',
      technologies: ['PostgreSQL', 'MongoDB', 'SQL Queries', 'Schema Modeling', 'Indexing & Optimization', 'ORMs & Drivers'],
      strengths: [
        'Entity relationship modeling and schema normalization',
        'Query optimization, query profiling, and index strategies',
        'Data integrity constraints, cascade rules, and ACID transaction safety',
        'Data migration pipelines and scalable caching layers'
      ],
    },
    {
      id: 'problem-solving',
      name: 'Problem Solving',
      category: 'Core',
      icon: 'Brain',
      summary:
        'Analytical breakdown of complex business requirements into elegant algorithmic solutions, clean code abstractions, and reliable implementations.',
      technologies: ['Data Structures & Algorithms', 'System Debugging', 'Time & Space Complexity', 'Edge-Case Analysis', 'Refactoring'],
      strengths: [
        'Systematic debugging and root cause isolation in complex distributed flows',
        'Algorithmic efficiency with minimal computational overhead',
        'Architectural tradeoff analysis (speed vs. maintainability vs. complexity)',
        'Rapid adaptation and mastery of evolving technologies and paradigms'
      ],
    },
  ];

  const filteredSkills = filterCategory === 'All' 
    ? skillsList 
    : skillsList.filter(s => s.category === filterCategory || (filterCategory === 'Frontend' && s.id === 'fullstack'));

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-sky-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-indigo-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-emerald-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-amber-400" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-purple-400" />;
      default:
        return <Code2 className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-2 tracking-wide uppercase">
              <span>Expertise</span>
              <span aria-hidden="true">·</span>
              <span>Capabilities</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills & Strengths
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl">
              Specialized technical competencies across modern web architecture, interface engineering, and algorithmic execution.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Zero-Pill: functional buttons with segmented styling) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#10141f] border border-slate-800/90 rounded-lg self-start md:self-auto">
            {(['All', 'Frontend', 'Backend', 'Database', 'Core'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-slate-800 text-sky-300 shadow-sm border border-slate-700/60'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat === 'All' ? 'All Skills' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Grid of 5 Key Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const isFullSpan = filteredSkills.length === 5 && index === 0;
            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                className={`group relative rounded-xl bg-[#0f1420] border border-slate-800/90 hover:border-slate-700 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5 cursor-pointer ${
                  isFullSpan ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[#141a29] border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(skill.icon)}
                    </div>
                    <span className="text-xs font-mono text-slate-500 group-hover:text-sky-400 transition-colors flex items-center gap-1">
                      <span>Inspect</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Concise Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {skill.summary}
                  </p>

                  {/* Key Strengths Checklist */}
                  <div className="space-y-2 mb-6">
                    {skill.strengths.slice(0, isFullSpan ? 3 : 2).map((strength) => (
                      <div key={strength} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies rendered as clean unboxed text with typographic separators (anti-slop rule) */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Technologies & Concepts:
                  </div>
                  <div className="text-xs text-slate-300 flex flex-wrap items-center gap-x-2 gap-y-1">
                    {skill.technologies.map((tech, tIdx) => (
                      <React.Fragment key={tech}>
                        <span className="font-mono text-slate-300">{tech}</span>
                        {tIdx < skill.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Skill Modal / Drawer */}
        {selectedSkill && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
            onClick={() => setSelectedSkill(null)}
          >
            <div 
              className="bg-[#0e121b] border border-slate-700/80 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#141a29] border border-slate-800 flex items-center justify-center">
                    {getIcon(selectedSkill.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{selectedSkill.name}</h3>
                    <span className="text-xs font-mono text-sky-400">{selectedSkill.category} Domain</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Overview
                  </h4>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {selectedSkill.summary}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Technical Capabilities & Strengths
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedSkill.strengths.map((str) => (
                      <li key={str} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Tooling & Stack
                  </h4>
                  <div className="p-3 bg-[#0a0d14] rounded-lg border border-slate-800/80 flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                    {selectedSkill.technologies.map((t, idx) => (
                      <span key={t} className="text-slate-300">
                        {t}{idx < selectedSkill.technologies.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                  >
                    Close Overview
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
