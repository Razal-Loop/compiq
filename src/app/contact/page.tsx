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
    answer: "Core Annex IV packs for high-risk systems are delivered in 15 business days. Tenders and grants are aligned with the issuing entity's deadline schedule, agreed upon during scoping.",
  },
  {
    question: "Do you sign non-disclosure agreements?",
    answer: "Yes, standard mutual non-disclosure agreements are executed before you share system architectures, technical requirements, or draft manuals.",
  },
];

const NAVY = "#0F1A2E";
const PURPLE = "#6B4FBB";
const PAPER = "#F7F3EC";
const PAPER_DARK = "#EDE9E2";

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
    <div className="relative min-h-screen" style={{ backgroundColor: PAPER }}>
      
      {/* Subtle Engineering Grid Header with hero-bg.jpg background */}
      <section 
        className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 border-b"
        style={{
          borderColor: "rgba(15,26,46,0.1)",
          backgroundImage: `linear-gradient(rgba(247,243,236,0.82), rgba(247,243,236,0.82)), url('/hero-.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 blueprint-grid blueprint-grid-fine opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase border"
            style={{ color: PURPLE, backgroundColor: "rgba(107,79,187,0.07)", borderColor: "rgba(107,79,187,0.2)" }}
          >
            SECURE INTAKE DESK
          </div>
          <h1 
            className="font-serif font-light tracking-tight leading-[1.1] max-w-2xl mx-auto" 
            style={{ fontSize: 'var(--text-h1)', color: NAVY }}
          >
            Initiate a project scope.
          </h1>
          <p 
            className="font-sans text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(15,26,46,0.7)" }}
          >
            Submit an intake request to schedule a 60-minute classification and scoping call. Non-disclosure agreements are executed prior to the meeting.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column: Details & FAQs */}
          <div className="lg:col-span-5 space-y-10 sm:space-y-12">
            
            {/* Contact details card */}
            <div 
              className="border p-6 sm:p-8 space-y-6 sm:space-y-8"
              style={{ backgroundColor: PAPER, borderColor: "rgba(15,26,46,0.15)" }}
            >
              <h3 className="font-serif text-xl sm:text-2xl font-normal" style={{ color: NAVY }}>Direct Access</h3>
              
              <div className="space-y-6">
                <a href="mailto:compliancedocumentationeuaiact@gmail.com" className="flex items-start gap-4 group">
                  <div 
                    className="flex h-10 w-10 shrink-0 items-center justify-center border transition-colors"
                    style={{ borderColor: "rgba(15,26,46,0.15)", backgroundColor: "rgba(15,26,46,0.03)", color: PURPLE }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = PURPLE;
                      e.currentTarget.style.color = PAPER;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = "rgba(15,26,46,0.03)";
                      e.currentTarget.style.color = PURPLE;
                    }}
                  >
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span 
                      className="text-[10px] font-mono font-semibold uppercase tracking-wider block mb-1"
                      style={{ color: "rgba(15,26,46,0.4)" }}
                    >
                      Email Intake
                    </span>
                    <span 
                      className="text-sm font-semibold transition-colors break-all"
                      style={{ color: NAVY }}
                    >
                      compliancedocumentationeuaiact@gmail.com
                    </span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/923315280689" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-4 group"
                >
                  <div 
                    className="flex h-10 w-10 shrink-0 items-center justify-center border transition-colors text-emerald-600"
                    style={{ borderColor: "rgba(15,26,46,0.15)", backgroundColor: "rgba(15,26,46,0.03)" }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = "#25D366";
                      e.currentTarget.style.color = PAPER;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = "rgba(15,26,46,0.03)";
                      e.currentTarget.style.color = "#1ead52";
                    }}
                  >
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <span 
                      className="text-[10px] font-mono font-semibold uppercase tracking-wider block mb-1"
                      style={{ color: "rgba(15,26,46,0.4)" }}
                    >
                      WhatsApp Secure
                    </span>
                    <span 
                      className="text-sm font-semibold transition-colors"
                      style={{ color: NAVY }}
                    >
                      +92 331 5280689
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div 
                    className="flex h-10 w-10 shrink-0 items-center justify-center border"
                    style={{ borderColor: "rgba(15,26,46,0.15)", backgroundColor: "rgba(15,26,46,0.03)", color: PURPLE }}
                  >
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span 
                      className="text-[10px] font-mono font-semibold uppercase tracking-wider block mb-1"
                      style={{ color: "rgba(15,26,46,0.4)" }}
                    >
                      Intake SLA
                    </span>
                    <span 
                      className="text-sm font-normal leading-relaxed"
                      style={{ color: "rgba(15,26,46,0.7)" }}
                    >
                      Guaranteed 48-hour response for audited applications.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl font-normal mb-4 sm:mb-6" style={{ color: NAVY }}>Common Questions</h3>
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="border transition-all duration-300"
                    style={{ 
                      backgroundColor: isOpen ? PAPER_DARK : PAPER, 
                      borderColor: isOpen ? PURPLE : "rgba(15,26,46,0.15)" 
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: NAVY }}>
                        {faq.question}
                      </span>
                      <ChevronDown 
                        className="w-4 h-4 shrink-0 transition-transform duration-200" 
                        style={{ 
                          transform: isOpen ? "rotate(180deg)" : "none",
                          color: isOpen ? PURPLE : "rgba(15,26,46,0.4)" 
                        }} 
                      />
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
                          <div 
                            className="px-5 pb-5 pt-1 border-t text-xs leading-relaxed font-sans"
                            style={{ 
                              borderColor: "rgba(15,26,46,0.08)",
                              color: "rgba(15,26,46,0.7)"
                            }}
                          >
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
            <div 
              className="border p-6 sm:p-8 md:p-10 relative overflow-hidden"
              style={{ backgroundColor: PAPER, borderColor: "rgba(15,26,46,0.15)" }}
            >
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <div 
                      className="w-12 h-12 border flex items-center justify-center mb-6"
                      style={{ borderColor: "#22C55E", backgroundColor: "rgba(34,197,94,0.1)", color: "#22C55E" }}
                    >
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-3xl font-normal mb-4" style={{ color: NAVY }}>Dossier Initialized</h3>
                    <p 
                      className="font-sans text-xs leading-relaxed max-w-sm mx-auto"
                      style={{ color: "rgba(15,26,46,0.6)" }}
                    >
                      Your intake request has been registered. An email containing our standard mutual NDA will be dispatched to your address within 48 hours.
                    </p>
                    <button 
                      onClick={() => { setIsSuccess(false); setName(""); setCompany(""); setEmail(""); setProject(""); }}
                      className="mt-8 text-xs font-semibold uppercase tracking-wider transition-colors"
                      style={{ color: PURPLE }}
                      onMouseEnter={e => e.currentTarget.style.color = NAVY}
                      onMouseLeave={e => e.currentTarget.style.color = PURPLE}
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
                      <div 
                        className="p-4 border flex items-start gap-3 text-red-600"
                        style={{ backgroundColor: "rgba(220,38,38,0.1)", borderColor: "rgba(220,38,38,0.2)" }}
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <p className="text-xs font-semibold">{error}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                      <div className="space-y-2">
                        <label 
                          htmlFor="name" 
                          className="block text-[10px] font-mono font-semibold uppercase tracking-wider"
                          style={{ color: "rgba(15,26,46,0.5)" }}
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full border px-4 py-3 text-xs outline-none transition-all rounded-none"
                          style={{ 
                            backgroundColor: PAPER, 
                            borderColor: "rgba(15,26,46,0.15)",
                            color: NAVY
                          }}
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label 
                          htmlFor="company" 
                          className="block text-[10px] font-mono font-semibold uppercase tracking-wider"
                          style={{ color: "rgba(15,26,46,0.5)" }}
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full border px-4 py-3 text-xs outline-none transition-all rounded-none"
                          style={{ 
                            backgroundColor: PAPER, 
                            borderColor: "rgba(15,26,46,0.15)",
                            color: NAVY
                          }}
                          placeholder="Acme Corp"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label 
                        htmlFor="email" 
                        className="block text-[10px] font-mono font-semibold uppercase tracking-wider"
                        style={{ color: "rgba(15,26,46,0.5)" }}
                      >
                        Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border px-4 py-3 text-xs outline-none transition-all rounded-none"
                        style={{ 
                          backgroundColor: PAPER, 
                          borderColor: "rgba(15,26,46,0.15)",
                          color: NAVY
                        }}
                        placeholder="jane@company.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label 
                        htmlFor="service" 
                        className="block text-[10px] font-mono font-semibold uppercase tracking-wider"
                        style={{ color: "rgba(15,26,46,0.5)" }}
                      >
                        Engagement Area
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full appearance-none border px-4 py-3 text-xs outline-none transition-all cursor-pointer rounded-none"
                          style={{ 
                            backgroundColor: PAPER, 
                            borderColor: "rgba(15,26,46,0.15)",
                            color: NAVY
                          }}
                        >
                          <option className="bg-[#F7F3EC] text-[#0F1A2E]">EU AI Act — Annex IV Documentation</option>
                          <option className="bg-[#F7F3EC] text-[#0F1A2E]">ISO/IEC 42001 AI Governance</option>
                          <option className="bg-[#F7F3EC] text-[#0F1A2E]">RFP & RFQ Technical Writing</option>
                          <option className="bg-[#F7F3EC] text-[#0F1A2E]">Aviation Expositions & Manuals</option>
                          <option className="bg-[#F7F3EC] text-[#0F1A2E]">Other Regulatory Brief</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: "rgba(15,26,46,0.4)" }} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label 
                        htmlFor="project" 
                        className="block text-[10px] font-mono font-semibold uppercase tracking-wider"
                        style={{ color: "rgba(15,26,46,0.5)" }}
                      >
                        Technical Specs Summary *
                      </label>
                      <textarea
                        id="project"
                        rows={4}
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                        className="w-full border px-4 py-3 text-xs outline-none transition-all resize-none rounded-none"
                        style={{ 
                          backgroundColor: PAPER, 
                          borderColor: "rgba(15,26,46,0.15)",
                          color: NAVY
                        }}
                        placeholder="Briefly state target audit standard, timeline, and current draft readiness..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary inline-flex justify-center items-center gap-2 text-xs font-semibold uppercase tracking-widest py-4 px-6 rounded-none disabled:opacity-75 disabled:cursor-not-allowed mt-2"
                      style={{ backgroundColor: NAVY, color: PAPER, borderColor: NAVY }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = NAVY;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = NAVY;
                        e.currentTarget.style.color = PAPER;
                      }}
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
                    
                    <p className="text-center text-[9px] font-mono mt-4" style={{ color: "rgba(15,26,46,0.4)" }}>
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
