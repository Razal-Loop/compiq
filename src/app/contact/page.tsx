"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Clock, CheckCircle2, AlertCircle, ChevronDown, Send, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Are you a law firm or notified body?",
    answer: "No. ComplDoc is a technical writing and documentation consultancy. We draft and structure evidence files from primary regulations. We do not provide legal interpretations or compliance certifications.",
  },
  {
    question: "What is your typical turnaround time?",
    answer: "Core Annex IV packs for high-risk systems are delivered in 15 business days. Tenders and grants are aligned with the issuing entity&rsquo;s deadline schedule, agreed upon during scoping.",
  },
  {
    question: "Do you sign non-disclosure agreements?",
    answer: "Yes, standard mutual non-disclosure agreements are executed before you share system architectures, technical requirements, or draft manuals.",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("EU AI Act — Annex IV Documentation");
  const [project, setProject] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !project) {
      setError("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="relative bg-white dark:bg-[#0B0B0F] transition-colors duration-300 min-h-screen">
      
      {/* Subtle Engineering Grid Header */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 border-b border-border blueprint-grid blueprint-grid-fine">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-primary dark:text-[#7C4DFF] bg-primary/5 border border-primary/10">
            SECURE INTAKE DESK
          </div>
          <h1 className="font-serif font-light tracking-tight text-foreground leading-[1.1] max-w-2xl mx-auto" style={{ fontSize: 'var(--text-h1)' }}>
            Initiate a project scope.
          </h1>
          <p className="font-sans text-base sm:text-lg text-text-body leading-relaxed max-w-2xl mx-auto">
            Submit an intake request to schedule a 60-minute classification and scoping call. Non-disclosure agreements are executed prior to the meeting.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column: Details & FAQs */}
          <div className="lg:col-span-5 space-y-10 sm:space-y-12">
            
            {/* Contact details card */}
            <div className="border border-border p-6 sm:p-8 bg-white dark:bg-[#18181F] space-y-6 sm:space-y-8 shadow-premium">
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-foreground">Direct Access</h3>
              
              <div className="space-y-6">
                <a href="mailto:compliancedocumentationeuaiact@gmail.com" className="flex items-start gap-4 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-[#F7F7FA] dark:bg-[#111117] text-primary dark:text-[#7C4DFF] group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-text-subtle uppercase tracking-wider block mb-1">Email Intake</span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors break-all">compliancedocumentationeuaiact@gmail.com</span>
                  </div>
                </a>

                <a href="https://wa.me/923315280689" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-[#F7F7FA] dark:bg-[#111117] text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-text-subtle uppercase tracking-wider block mb-1">WhatsApp Secure</span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-emerald-600 transition-colors">+92 331 5280689</span>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-[#F7F7FA] dark:bg-[#111117] text-primary dark:text-[#7C4DFF]">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-text-subtle uppercase tracking-wider block mb-1">Intake SLA</span>
                    <span className="text-sm text-text-body font-normal leading-relaxed">Guaranteed 48-hour response for audited applications.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-foreground mb-4 sm:mb-6">Common Questions</h3>
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    className={`border transition-all duration-300 ${
                      isOpen ? "border-primary bg-white dark:bg-[#18181F] shadow-premium" : "border-border bg-white dark:bg-[#18181F] hover:border-primary"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    >
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-text-subtle shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-primary" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 border-t border-border/40 text-xs text-text-muted leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7">
            <div className="border border-border p-6 sm:p-8 md:p-10 bg-white dark:bg-[#18181F] shadow-premium relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <div className="w-12 h-12 border border-emerald-500 bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-3xl font-normal text-foreground mb-4">Dossier Initialized</h3>
                    <p className="font-sans text-xs text-text-muted leading-relaxed max-w-sm mx-auto">
                      Your intake request has been registered. An email containing our standard mutual NDA will be dispatched to your address within 48 hours.
                    </p>
                    <button 
                      onClick={() => { setIsSuccess(false); setName(""); setCompany(""); setEmail(""); setProject(""); }}
                      className="mt-8 text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary-dark transition-colors"
                    >
                      New Submission
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 flex items-start gap-3 text-red-600">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <p className="text-xs font-semibold">{error}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-[10px] font-mono font-semibold uppercase tracking-wider text-text-subtle">Full Name *</label>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-white dark:bg-[#0B0B0F] border border-border px-4 py-3 text-xs text-foreground focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-text-subtle rounded-none"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-[10px] font-mono font-semibold uppercase tracking-wider text-text-subtle">Company</label>
                        <input
                          id="company"
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full bg-white dark:bg-[#0B0B0F] border border-border px-4 py-3 text-xs text-foreground focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-text-subtle rounded-none"
                          placeholder="Acme Corp"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-[10px] font-mono font-semibold uppercase tracking-wider text-text-subtle">Work Email *</label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white dark:bg-[#0B0B0F] border border-border px-4 py-3 text-xs text-foreground focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-text-subtle rounded-none"
                        placeholder="jane@company.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="block text-[10px] font-mono font-semibold uppercase tracking-wider text-text-subtle">Engagement Area</label>
                      <div className="relative">
                        <select
                          id="service"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full appearance-none bg-white dark:bg-[#0B0B0F] border border-border px-4 py-3 text-xs text-foreground focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer rounded-none"
                        >
                          <option className="bg-white dark:bg-[#0B0B0F] text-foreground">EU AI Act — Annex IV Documentation</option>
                          <option className="bg-white dark:bg-[#0B0B0F] text-foreground">ISO/IEC 42001 AI Governance</option>
                          <option className="bg-white dark:bg-[#0B0B0F] text-foreground">RFP & RFQ Technical Writing</option>
                          <option className="bg-white dark:bg-[#0B0B0F] text-foreground">Aviation Expositions & Manuals</option>
                          <option className="bg-white dark:bg-[#0B0B0F] text-foreground">Other Regulatory Brief</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-subtle pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="project" className="block text-[10px] font-mono font-semibold uppercase tracking-wider text-text-subtle">Technical Specs Summary *</label>
                      <textarea
                        id="project"
                        rows={4}
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                        className="w-full bg-white dark:bg-[#0B0B0F] border border-border px-4 py-3 text-xs text-foreground focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-text-subtle resize-none rounded-none"
                        placeholder="Briefly state target audit standard, timeline, and current draft readiness..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary inline-flex justify-center items-center gap-2 text-xs font-semibold uppercase tracking-wider py-4 px-6 rounded-none disabled:opacity-75 disabled:cursor-not-allowed mt-2"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Initialize Intake Scope
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-[9px] text-text-subtle font-mono mt-4">
                      SECURED SOCKET ENCRYPTED // MUTUAL NDA AUTOMATIC GENERATION
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
