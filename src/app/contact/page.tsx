"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Calendar, Clock, CheckCircle2, AlertCircle, ChevronDown, Sparkles, Send, MessageCircle } from "lucide-react";

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
    answer: "Core Annex IV packs for high-risk systems are delivered in 15 business days. Tenders and grants are aligned with the issuing entity's deadline schedule, agreed upon during scoping.",
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
    }, 1500);
  };

  return (
    <div className="relative overflow-hidden bg-background min-h-screen">
      
      {/* ── Background Glow ────────────────────────────── */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="badge-primary inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" /> Intake Desk
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            Initiate a project scope.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-text-body leading-relaxed max-w-2xl mx-auto"
          >
            Submit an intake request to schedule a 60-minute classification and scoping call. Non-disclosure agreements are executed prior to the meeting.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* ── Left Column: Contact Info & FAQ ───────── */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-5 space-y-12"
          >
            {/* Contact Details */}
            <div className="bg-card border border-border p-8 rounded-card shadow-premium space-y-8">
              <h3 className="font-serif text-2xl font-bold text-foreground">Direct Contact</h3>
              
              <div className="space-y-6">
                <a href="mailto:compliancedocumentationeuaiact@gmail.com" className="flex items-start gap-4 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:text-primary-light group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-text-subtle uppercase tracking-wider block mb-1">Email</span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">compliancedocumentationeuaiact@gmail.com</span>
                  </div>
                </a>

                <a href="https://wa.me/923315280689" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-text-subtle uppercase tracking-wider block mb-1">WhatsApp</span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">+92 331 5280689</span>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:text-primary-light">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-text-subtle uppercase tracking-wider block mb-1">Response SLA</span>
                    <span className="text-sm font-semibold text-foreground">Guaranteed 48-hour response for new inquiries.</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:text-primary-light">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-text-subtle uppercase tracking-wider block mb-1">Scoping Calls</span>
                    <span className="text-sm font-semibold text-foreground">Monday – Friday<br />09:00 – 17:00 UTC</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Common Questions</h3>
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    className={`border rounded-xl bg-card overflow-hidden transition-all duration-300 ${
                      isOpen ? "border-primary/40 shadow-sm" : "border-border/60 hover:border-primary/25"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    >
                      <span className="text-sm font-bold text-foreground">
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-text-muted shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-5 pb-5 pt-2 border-t border-border/50 text-sm text-text-body leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ── Right Column: Form ─────────────────────── */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="bg-card border border-border p-8 md:p-10 rounded-card shadow-premium relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-foreground mb-4">Request Received</h3>
                    <p className="text-text-body leading-relaxed max-w-md mx-auto">
                      Our intake team will review your submission. You will receive an NDA and calendar link via email within 48 hours.
                    </p>
                    <button 
                      onClick={() => { setIsSuccess(false); setName(""); setCompany(""); setEmail(""); setProject(""); }}
                      className="mt-8 text-sm font-semibold text-primary hover:text-primary-dark transition-colors link-underline"
                    >
                      Submit another inquiry
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
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3 text-red-600 dark:text-red-400">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <p className="text-sm font-medium">{error}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-text-muted">Full Name *</label>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-background border border-border rounded-input px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-subtle"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-xs font-mono font-bold uppercase tracking-wider text-text-muted">Company</label>
                        <input
                          id="company"
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full bg-background border border-border rounded-input px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-subtle"
                          placeholder="Acme Corp"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-text-muted">Work Email *</label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-background border border-border rounded-input px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-subtle"
                        placeholder="jane@company.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="block text-xs font-mono font-bold uppercase tracking-wider text-text-muted">Inquiry Type</label>
                      <div className="relative">
                        <select
                          id="service"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full appearance-none bg-background border border-border rounded-input px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all cursor-pointer"
                        >
                          <option className="bg-background text-foreground">EU AI Act — Annex IV Documentation</option>
                          <option className="bg-background text-foreground">NIS2 Cybersecurity Governance</option>
                          <option className="bg-background text-foreground">SOC 2 Readiness Narratives</option>
                          <option className="bg-background text-foreground">RFP & RFQ Response Writing</option>
                          <option className="bg-background text-foreground">Government Grant Applications</option>
                          <option className="bg-background text-foreground">Aviation Operating Manuals</option>
                          <option className="bg-background text-foreground">Other / General Inquiry</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="project" className="block text-xs font-mono font-bold uppercase tracking-wider text-text-muted">Project Overview *</label>
                      <textarea
                        id="project"
                        rows={4}
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                        className="w-full bg-background border border-border rounded-input px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-subtle resize-none"
                        placeholder="Briefly describe the system, timeline, and current stage of your technical documentation..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary inline-flex justify-center items-center gap-2 text-sm font-semibold py-4 px-6 rounded-btn group disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Submit Request
                          <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-[11px] text-text-subtle font-mono mt-4">
                      By submitting, you agree to our privacy policy. Information is transmitted securely.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
