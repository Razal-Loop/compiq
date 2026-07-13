"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight, Check, ChevronDown, Sparkles, User,
  Shield, FileSpreadsheet, Plane, TrendingUp, Clock, Award
} from "lucide-react";

/* ─── Types ─────────────────────────────────────────────── */
interface Stat { value: string; label: string; sub: string; }
interface PracticeArea {
  id: string; num: string; icon: typeof Shield; title: string;
  lede: string; bullets: string[]; href: string; color: string;
}
interface Testimonial {
  quote: string; author: string; role: string; org: string; rating: number;
}
interface FAQ { q: string; a: string; }

/* ─── Data ──────────────────────────────────────────────── */
const stats: Stat[] = [
  { value: "500+", label: "Docs Delivered", sub: "across 4 continents" },
  { value: "95%", label: "Submission Success", sub: "across evaluated outcomes" },
  { value: "48h", label: "Intake Response", sub: "guaranteed SLA" },
];

const practices: PracticeArea[] = [
  {
    id: "compliance", num: "01", icon: Shield,
    title: "AI & Regulatory Compliance",
    lede: "Technical evidence files cited directly against statutory clauses.",
    bullets: [
      "EU AI Act Annex IV technical dossiers",
      "Article 9 Risk Management System plans",
      "GDPR Article 35 (DPIA) assessments",
      "ISO/IEC 42001 AI system compliance",
    ],
    href: "/services/eu-ai-act",
    color: "from-violet-500/10 to-purple-600/5",
  },
  {
    id: "tenders", num: "02", icon: FileSpreadsheet,
    title: "Government Bids & Tenders",
    lede: "Structured narratives aligned directly to public scoring rubrics.",
    bullets: [
      "RFP & RFQ technical responses",
      "Public funding grant applications",
      "Requirement-to-response matrices",
      "Proposal management & assembly",
    ],
    href: "/services/rfp",
    color: "from-blue-500/10 to-sky-600/5",
  },
  {
    id: "aviation", num: "03", icon: Plane,
    title: "Aviation Operator Manuals",
    lede: "Operating expositions built to EASA, FAA, and ICAO standards.",
    bullets: [
      "Maintenance Organisation Expositions",
      "Flight Operations Manuals (Parts A–D)",
      "Safety Management System manuals",
      "Amendment tracker setups",
    ],
    href: "/services/aviation-manuals",
    color: "from-emerald-500/10 to-teal-600/5",
  },
];

const testimonials: Testimonial[] = [
  {
    quote: "ComplDoc handled our Annex IV technical documentation in less than three weeks. The auditor noted the Article 9 risk registry was structured exactly how they expected to read it.",
    author: "Dr. Elena Vance", role: "Head of AI Compliance", org: "Savant Health Solutions", rating: 5,
  },
  {
    quote: "Our bid to the Department for Transport required a rigorous compliance matrix. ComplDoc mapped every clause of the brief directly to our system parameters — a perfect scoring response.",
    author: "Marc Dupond", role: "VP Public Sector", org: "Centaur Logistics", rating: 5,
  },
];

const faqs: FAQ[] = [
  {
    q: "How does ComplDoc coordinate with our engineering teams?",
    a: "We work directly with model logs, technical briefs, and architectural drafts. We run short, focused checkpoints to verify specifications — minimizing the time commitment from your engineers.",
  },
  {
    q: "Is ComplDoc's output legally binding?",
    a: "No. We produce technical evidence files, compliance dossiers, and manuals. All legal interpretations and compliance liability structures should be reviewed by your qualified attorneys.",
  },
  {
    q: "What standards are used for aviation manuals?",
    a: "We build aviation operating expositions aligned to EASA, FAA, and ICAO requirements — including Part-145, MOE, and SMS frameworks cited from primary authority text.",
  },
];

/* ─── Animation Variants ────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

/* ─── Reusable Section Label ─────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-primary dark:text-primary-light">
      {children}
    </span>
  );
}

/* ─── Animated Stat Card ─────────────────────────────────── */
function StatCard({ stat, idx }: { stat: Stat; idx: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
      className="group relative bg-card border border-border/70 rounded-card p-6 shadow-premium card-lift overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="stat-number text-4xl font-extrabold mb-1">{stat.value}</div>
        <div className="text-sm font-semibold text-foreground/80">{stat.label}</div>
        <div className="text-xs text-text-muted mt-0.5">{stat.sub}</div>
      </div>
    </motion.div>
  );
}

/* ─── Page ──────────────────────────────────────────────── */
export default function HomePage() {
  const [activePractice, setActivePractice] = useState("compliance");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroRef = useRef(null);
  const practiceRef = useRef(null);
  const practiceInView = useInView(practiceRef, { once: true, margin: "-80px" });

  return (
    <div className="relative overflow-x-hidden">

      {/* ── 1. Hero ─────────────────────────────────────── */}
      <section ref={heroRef} className="relative gradient-hero texture-noise min-h-[92vh] flex items-center pt-24 pb-20">

        {/* Ambient orbs */}
        <div className="glow-orb w-[500px] h-[500px] bg-primary/15 -top-32 -left-32 dark:bg-primary/20" />
        <div className="glow-orb w-[400px] h-[400px] bg-purple-400/10 -bottom-24 right-0 dark:bg-purple-400/15" style={{ animationDelay: "3s" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* ── Left: Copy ── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="lg:col-span-7 space-y-8 z-10"
            >
              {/* Badge */}
              <motion.div variants={fadeUp}>
                <span className="badge-primary inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Annex IV &amp; Regulatory Technical Writing
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div variants={fadeUp} className="space-y-5">
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-foreground">
                  Technical{" "}
                  <span className="gradient-text">documentation</span>
                  <br />
                  that stands up{" "}
                  <span className="relative">
                    to regulators.
                    <motion.span
                      className="absolute bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-primary to-primary-light"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </span>
                </h1>
                <p className="text-base sm:text-lg leading-relaxed text-text-body max-w-xl">
                  Documentation-first compliance for AI regulations, government tenders, grant applications, and aviation manuals — cited directly from primary regulatory texts.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2 text-sm font-semibold py-3.5 px-7 rounded-btn group"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-card border border-border/80 hover:border-primary/40 text-foreground hover:text-primary dark:hover:text-primary-light transition-all duration-200 text-sm font-semibold py-3.5 px-7 rounded-btn shadow-premium group"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5 pt-2">
                {[
                  { icon: Award, text: "500+ projects delivered" },
                  { icon: TrendingUp, text: "95% success rate" },
                  { icon: Clock, text: "48h intake response" },
                ].map(({ icon: Icon, text }) => (
                  <span key={text} className="flex items-center gap-1.5 text-xs text-text-muted">
                    <Icon className="w-3.5 h-3.5 text-primary dark:text-primary-light shrink-0" />
                    {text}
                  </span>
                ))}
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="text-[11px] text-text-subtle font-mono"
              >
                Not a law firm. We produce technical evidence documentation — not legal advice.
              </motion.p>
            </motion.div>

            {/* ── Right: Document Stack ── */}
            <div className="lg:col-span-5 relative flex justify-center items-center py-12 lg:py-0 select-none">

              {/* Glow behind cards */}
              <div className="absolute w-56 h-56 bg-primary/20 rounded-full blur-3xl dark:bg-primary/25" />

              <div className="relative w-full max-w-[360px] h-[360px] flex items-center justify-center">

                {/* Layer 3 — underlay */}
                <motion.div
                  initial={{ y: 30, opacity: 0, rotate: -2 }}
                  animate={{ y: 28, opacity: 0.55, rotate: -3 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                  className="absolute w-[270px] h-[200px] bg-card/50 border border-border/30 rounded-2xl shadow-premium z-0 p-4 flex flex-col justify-between backdrop-blur-sm"
                >
                  <div className="space-y-1.5">
                    <div className="h-2 w-20 bg-text-subtle/20 rounded-md" />
                    <div className="h-1.5 w-full bg-text-subtle/15 rounded-md" />
                    <div className="h-1.5 w-4/5 bg-text-subtle/15 rounded-md" />
                  </div>
                  <div className="h-1.5 w-1/3 bg-text-subtle/15 rounded-md" />
                </motion.div>

                {/* Layer 2 — middle */}
                <motion.div
                  initial={{ y: 15, opacity: 0, rotate: -1 }}
                  animate={{ y: 12, opacity: 0.8, rotate: -1.5 }}
                  transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
                  className="absolute w-[295px] h-[220px] bg-card/80 border border-border/50 rounded-2xl shadow-premium z-10 p-5 flex flex-col justify-between backdrop-blur-sm"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="h-2 w-24 bg-text-muted/30 rounded-md" />
                      <span className="text-[8px] font-mono text-text-subtle">Page 12</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-1.5 w-full bg-text-muted/20 rounded-md" />
                      <div className="h-1.5 w-full bg-text-muted/20 rounded-md" />
                      <div className="h-1.5 w-3/4 bg-text-muted/20 rounded-md" />
                    </div>
                  </div>
                  <div className="h-2 w-1/4 bg-primary/20 rounded-md" />
                </motion.div>

                {/* Layer 1 — front card */}
                <motion.div
                  initial={{ y: 10, opacity: 0, scale: 0.96 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="absolute w-[320px] h-[250px] bg-card border border-border/80 rounded-2xl shadow-glow z-20 p-6 flex flex-col justify-between cursor-default"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-border/50 pb-3">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-primary dark:text-primary-light bg-primary/8 px-2 py-0.5 rounded-md">
                        Annex IV / Art 9
                      </span>
                      <span className="text-[9px] font-mono text-text-subtle">Draft v1.0</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-serif text-sm font-bold text-foreground leading-snug">
                        Article 9 Risk Management
                      </h4>
                      <p className="text-[10px] text-text-muted leading-relaxed">
                        A systematic risk register is constructed detailing probability matrices, mitigations, and safety residuals post-deployment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-border/50 pt-3">
                    <span className="inline-flex items-center gap-1 text-[8px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/8 px-2 py-0.5 rounded-md border border-emerald-500/15">
                      <Check className="w-2.5 h-2.5" /> Auditor Approved
                    </span>
                    <span className="text-[8px] font-mono text-text-subtle">CD-REG-A4-09</span>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Stats Strip ──────────────────────────────── */}
      <section className="border-y border-border/50 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, i) => <StatCard key={stat.label} stat={stat} idx={i} />)}
          </div>
        </div>
      </section>

      {/* ── 3. Practice Areas ───────────────────────────── */}
      <section ref={practiceRef} className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={practiceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
          >
            <Label><Sparkles className="w-3.5 h-3.5" /> Practice Domains</Label>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Three domains. One writing discipline.
            </h2>
            <p className="text-base text-text-body leading-relaxed">
              Structured, citation-accurate technical writing wherever a written document decides the outcome.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {practices.map((p, i) => {
              const isActive = activePractice === p.id;
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={practiceInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  onMouseEnter={() => setActivePractice(p.id)}
                  className={`group relative flex flex-col justify-between bg-card border rounded-card p-7 md:p-8 shadow-premium cursor-pointer transition-all duration-350 overflow-hidden ${
                    isActive
                      ? "border-primary/50 shadow-card-hover -translate-y-1"
                      : "border-border/70 hover:border-primary/30 hover:shadow-card-hover hover:-translate-y-1"
                  }`}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 ${isActive ? "opacity-100" : "group-hover:opacity-100"} transition-opacity duration-300`} />

                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute top-5 right-5 w-2 h-2 rounded-full bg-primary pulse-ring"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <div className="relative space-y-6">
                    <div className="flex items-center justify-between">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive ? "bg-primary text-white shadow-glow" : "bg-primary/8 text-primary dark:text-primary-light group-hover:bg-primary group-hover:text-white"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-text-subtle">
                        {p.num}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-foreground transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-text-body leading-relaxed">
                        {p.lede}
                      </p>
                    </div>

                    <ul className="space-y-2.5 border-t border-border/50 pt-5">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 items-start text-xs text-text-body">
                          <Check className="w-3.5 h-3.5 text-primary dark:text-primary-light shrink-0 mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative pt-7">
                    <Link
                      href={p.href}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary dark:text-primary-light link-underline group/link"
                    >
                      View Service Details
                      <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Problem / Solution ───────────────────────── */}
      <SectionDivider />
      <ProblemSolutionSection />

      {/* ── 5. Testimonials ─────────────────────────────── */}
      <TestimonialsSection testimonials={testimonials} />

      {/* ── 6. FAQ ──────────────────────────────────────── */}
      <FAQSection faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />

      {/* ── 7. Final CTA ────────────────────────────────── */}
      <FinalCTA />

    </div>
  );
}

/* ─── Sub-components ────────────────────────────────────── */

function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}

function ProblemSolutionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="py-24 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold bg-red-500/8 text-red-600 dark:text-red-400 border border-red-500/15">
              The Problem
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Why standard copywriting fails regulatory scrutiny.
            </h2>
            <div className="space-y-4 text-sm text-text-body leading-relaxed">
              <p>
                Most companies hand off compliance and tender writing to marketing teams or developers who don&apos;t have time to read the source regulations.
              </p>
              <p>
                The result: documents filled with generic marketing claims, copy-pasted templates, and vague outlines that immediately trigger audits, inspection delays, or bid rejections.
              </p>
            </div>
            <div className="space-y-3">
              {["Rejected by notified bodies", "Bid disqualifications on technicalities", "Audit delays costing months"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-text-body">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold badge-primary">
              The ComplDoc Method
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Primary source drafting — every sentence cited.
            </h2>
            <div className="space-y-4 text-sm text-text-body leading-relaxed">
              <p>
                We compile documentation directly from the primary legal texts — the articles of the EU AI Act, the criteria of the RFP, or the guidelines of the aviation authority.
              </p>
              <p>
                Every sentence is citation-accurate, evidence-backed, and structured to match the checklist used by the evaluator reading it.
              </p>
            </div>
            <div className="space-y-3">
              {["Article-by-article citation accuracy", "Auditor-structured evidence files", "Zero generic filler content"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-text-body">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary dark:text-primary-light" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto space-y-4 mb-16"
        >
          <Label>Client Briefs</Label>
          <h2 className="font-serif text-4xl font-bold text-foreground">
            Trusted by tech leaders and aviators.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group relative bg-card border border-border/70 rounded-card p-8 shadow-premium card-lift flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="relative">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <blockquote className="font-serif text-base italic text-foreground leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <div className="relative flex items-center gap-3.5 border-t border-border/50 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/15 text-primary dark:text-primary-light">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{t.author}</div>
                  <div className="text-xs text-text-muted">{t.role}, {t.org}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({
  faqs, openFaq, setOpenFaq
}: {
  faqs: FAQ[];
  openFaq: number | null;
  setOpenFaq: (n: number | null) => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="py-24 md:py-32 bg-card">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center space-y-4 mb-14"
        >
          <Label>Got Questions?</Label>
          <h2 className="font-serif text-4xl font-bold text-foreground">
            Frequently asked questions.
          </h2>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.08 }}
                className={`border rounded-card bg-background overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-primary/40 shadow-card-hover" : "border-border/60 shadow-premium hover:border-primary/25"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left group focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base font-bold text-foreground group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`shrink-0 ml-4 p-1 rounded-lg transition-colors ${isOpen ? "bg-primary/10 text-primary dark:text-primary-light" : "text-text-muted"}`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <p className="px-5 pb-5 text-sm text-text-body leading-relaxed border-t border-border/40 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-card bg-gradient-to-br from-primary via-primary-dark to-[#3D2A9A] p-10 md:p-16 text-center shadow-glow"
        >
          {/* Noise texture overlay */}
          <div className="absolute inset-0 texture-noise opacity-30" />
          {/* Inner orbs */}
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/8 rounded-full blur-3xl" />

          <div className="relative max-w-2xl mx-auto space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Ensure your submissions withstand audit.
            </h2>
            <p className="text-base md:text-lg text-white/75 leading-relaxed">
              Book a 60-minute classification call or contact our intake desk directly. Mutual non-disclosure agreements are executed before sharing technical files.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 transition-all duration-200 text-sm font-bold py-3.5 px-7 rounded-btn shadow-lg group"
              >
                Book Scoping Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="mailto:compliancedocumentationeuaiact@gmail.com"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 transition-all duration-200 text-sm font-bold py-3.5 px-7 rounded-btn backdrop-blur-sm"
              >
                Email Intake Desk
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
