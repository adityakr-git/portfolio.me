import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'hero' | 'about' | 'skills' | 'projects' | 'contact'>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['contact', 'projects', 'skills', 'about', 'hero'] as const;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#090b10]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-left font-['Syne'] text-xl font-bold tracking-tight text-white hover:text-sky-400 transition-colors cursor-pointer"
          >
            Aditya Kumar
          </button>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors cursor-pointer ${
                activeSection === 'about'
                  ? 'text-sky-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`transition-colors cursor-pointer ${
                activeSection === 'skills'
                  ? 'text-sky-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`transition-colors cursor-pointer ${
                activeSection === 'projects'
                  ? 'text-sky-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors cursor-pointer ${
                activeSection === 'contact'
                  ? 'text-sky-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/adityakr-git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1 py-2 px-1 cursor-pointer"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
            <button
              onClick={onContactClick}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-sm active:scale-[0.98]"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0c1017]/95 backdrop-blur-lg px-6 py-6 transition-all duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-slate-200 hover:text-sky-400 py-1"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-left text-slate-200 hover:text-sky-400 py-1"
            >
              Skills & Strengths
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-left text-slate-200 hover:text-sky-400 py-1"
            >
              Featured Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-slate-200 hover:text-sky-400 py-1"
            >
              Contact Information
            </button>

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors"
              >
                Get in Touch
              </button>
              <a
                href="https://github.com/adityakr-git"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 text-sm font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
