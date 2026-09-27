/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { ToastMessage } from './types';

export default function App() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (text: string, type: 'success' | 'info' = 'success') => {
    const id = `${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const topOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kr.adi.work@gmail.com');
    addToast('Copied kr.adi.work@gmail.com to clipboard!', 'success');
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 flex flex-col selection:bg-sky-500/20 selection:text-sky-300">
      {/* Navigation */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onContactClick={scrollToContact}
          onCopyEmail={handleCopyEmail}
        />

        {/* 2. About Me / Introduction Section */}
        <About onContactClick={scrollToContact} />

        {/* 3. Skills & Strengths Section */}
        <Skills />

        {/* Architectural Showcase */}
        <FeaturedProjects />

        {/* 4. Contact Details Section */}
        <Contact onNotify={addToast} />
      </main>

      {/* Footer */}
      <Footer onContactClick={scrollToContact} />

      {/* Floating Notifications */}
      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
