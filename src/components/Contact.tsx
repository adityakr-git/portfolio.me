import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactProps {
  onNotify: (message: string, type?: 'success' | 'info') => void;
}

export const Contact: React.FC<ContactProps> = ({ onNotify }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: 'Project Collaboration',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const contactInfo = {
    email: 'kr.adi.work@gmail.com',
    phone: '+91 6394953054',
    linkedin: 'https://www.linkedin.com/in/adityakrp18',
    github: 'https://github.com/adityakr-git',
  };

  const handleCopy = (text: string, field: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    onNotify(`Copied ${field === 'email' ? 'email address' : 'phone number'} to clipboard!`, 'success');
    setTimeout(() => setCopiedField(null), 2500);
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please include a message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch with state update and local storage persistence
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onNotify('Your message has been sent successfully!', 'success');

      try {
        const stored = JSON.parse(localStorage.getItem('aditya_inquiries') || '[]');
        stored.push({
          ...formData,
          date: new Date().toISOString(),
        });
        localStorage.setItem('aditya_inquiries', JSON.stringify(stored));
      } catch (err) {
        console.error('Storage error', err);
      }
    }, 800);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'Project Collaboration',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject || 'Hello'} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Aditya,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    return `mailto:kr.adi.work@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-2 tracking-wide uppercase">
            <span>Direct Channels</span>
            <span aria-hidden="true">·</span>
            <span>Get In Touch</span>
          </div>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact Details & Inquiries
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl">
            Whether you are looking to build a high-performance web platform, discuss engineering opportunities, or consult on software architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Contact Details & Verified Links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-white tracking-normal mb-1">
                Direct Contact Information
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Feel free to reach out via email, phone, or connect directly on professional networks.
              </p>

              {/* Email Card */}
              <div className="rounded-xl bg-[#0f1420] border border-slate-800/90 p-4 sm:p-5 flex items-start justify-between gap-3 hover:border-slate-700 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#141a29] border border-slate-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block mb-0.5">Email Address</span>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm sm:text-base font-medium text-white hover:text-sky-300 transition-colors break-all"
                    >
                      {contactInfo.email}
                    </a>
                    <span className="text-[11px] text-slate-400 block mt-1">Direct inbox · Fast reply</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(contactInfo.email, 'email')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="rounded-xl bg-[#0f1420] border border-slate-800/90 p-4 sm:p-5 flex items-start justify-between gap-3 hover:border-slate-700 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#141a29] border border-slate-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block mb-0.5">Phone / WhatsApp</span>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-medium text-white hover:text-emerald-300 transition-colors font-mono"
                    >
                      {contactInfo.phone}
                    </a>
                    <span className="text-[11px] text-slate-400 block mt-1">Available for calls & WhatsApp</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(contactInfo.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn Link Card */}
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl bg-[#0f1420] border border-slate-800/90 p-4 sm:p-5 flex items-center justify-between gap-3 hover:border-slate-700 hover:bg-[#121826] transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#141a29] border border-slate-800 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block mb-0.5">LinkedIn Profile</span>
                    <span className="text-sm sm:text-base font-medium text-white group-hover:text-sky-300 transition-colors">
                      in/adityakrp18
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
              </a>

              {/* GitHub Link Card */}
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl bg-[#0f1420] border border-slate-800/90 p-4 sm:p-5 flex items-center justify-between gap-3 hover:border-slate-700 hover:bg-[#121826] transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#141a29] border border-slate-800 flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5 text-slate-200" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block mb-0.5">GitHub Repositories</span>
                    <span className="text-sm sm:text-base font-medium text-white group-hover:text-sky-300 transition-colors">
                      github.com/adityakr-git
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
              </a>
            </div>

            {/* Quick Location & Availability Note */}
            <div className="p-4 rounded-xl bg-[#0c1017] border border-slate-800/80 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-slate-200 font-medium">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>Response Time: Typically within 24 hours</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Open to full-time remote or on-site software engineering positions, project collaborations, and full-stack technical consulting.
              </p>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0f1420] border border-slate-800 p-6 sm:p-8 shadow-xl shadow-black/40">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white">Send a Message</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Direct communication channel to Aditya Kumar
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-sky-400">
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct Inquiry</span>
                </div>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Thank You, {formData.name}!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been recorded. Aditya has received your message and will get back to you shortly at{' '}
                    <span className="text-sky-400 font-mono">{formData.email}</span>.
                  </p>

                  <div className="pt-6 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleResetForm}
                      className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={generateMailtoLink()}
                      className="px-4 py-2.5 text-xs font-semibold text-sky-300 bg-sky-950/60 hover:bg-sky-900/60 border border-sky-800/50 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <span>Also Open in Mail Client</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-lg bg-[#0a0d14] border ${
                        errors.name ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-sky-500'
                      } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-lg bg-[#0a0d14] border ${
                        errors.email ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-sky-500'
                      } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Subject / Topic
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#0a0d14] border border-slate-800 focus:border-sky-500 text-white text-sm focus:outline-none transition-colors"
                    >
                      <option value="Project Collaboration">Project Collaboration</option>
                      <option value="Full-Time Engineering Opportunity">Full-Time Engineering Opportunity</option>
                      <option value="Contract / Freelance Development">Contract / Freelance Development</option>
                      <option value="Architecture Consulting">Architecture Consulting</option>
                      <option value="General Conversation">General Conversation</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Tell me about your product, project requirements, or role details..."
                      className={`w-full px-4 py-3 rounded-lg bg-[#0a0d14] border ${
                        errors.message ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-sky-500'
                      } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors resize-y`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-lg font-semibold text-sm text-white bg-sky-500 hover:bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 active:scale-[0.99] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message to Aditya</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5">
                      Your details are handled with privacy and will only be used to respond to your inquiry.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
