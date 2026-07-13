"use client";

import { ShieldAlert, Award, FileText, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineStep {
  num: string;
  title: string;
  desc: string;
}

const steps: TimelineStep[] = [
  {
    num: "01",
    title: "Discovery & Intake",
    desc: "We review the system capabilities, target market, and upcoming regulatory audits or submission deadlines.",
  },
  {
    num: "02",
    title: "Classification Analysis",
    desc: "We run a systematic applicability check (e.g. EU AI Act Annex III categories) to verify the exact risk tier and obligations.",
  },
  {
    num: "03",
    title: "Scoping & Gap Analysis",
    desc: "We map out existing technical assets against what is required, producing a custom compliance matrix and fixed quote.",
  },
  {
    num: "04",
    title: "Technical Drafting",
    desc: "We draft the files chapter by chapter, converting raw technical parameters (architectures, datasets) into structured evidence.",
  },
  {
    num: "05",
    title: "Revision & QA Checkpoints",
    desc: "We run iterative review checkpoints with your technical team to ensure client accuracy matches regulatory standards.",
  },
  {
    num: "06",
    title: "Final Delivery",
    desc: "We deliver the completed, cited, audit-ready compliance packages, RFP schedules, or operating manuals.",
  },
  {
    num: "07",
    title: "Ongoing Maintenance",
    desc: "For systems that undergo continuous retraining or manual revisions, we transition updates onto a maintenance plan.",
  },
];

export default function AboutPage() {
  const processRef = useRef(null);
  const inViewProcess = useInView(processRef, { once: true, margin: "-60px" });

  return (
    <div className="relative overflow-hidden">
      {/* ── Header ─────────────────────────────────────── */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 texture-noise border-b border-border">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="badge-primary inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" /> Our Philosophy
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              We translate engineering into <span className="gradient-text">compliance evidence.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg text-text-body leading-relaxed max-w-2xl"
            >
              ComplDoc was founded to bridge the gap between technical engineering teams and regulatory auditors. We are technical writers, systems analysts, and compliance specialists who understand how to structure a winning argument.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Principles ─────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: FileText, 
                title: "Primary Source Citation", 
                desc: "We don't use generic templates. Every document is structured based directly on the primary text of the regulation, RFP, or aviation standard." 
              },
              { 
                icon: ShieldAlert, 
                title: "Auditor-first Structure", 
                desc: "Regulators don't want to read marketing fluff. They want clear, declarative, risk-quantified statements. We write for the person grading the paper." 
              },
              { 
                icon: Award, 
                title: "Deep Technical Literacy", 
                desc: "From neural network parameters to aeronautical maintenance schedules, we speak the language of your engineers to minimize their time spent explaining." 
              }
            ].map((principle, idx) => (
              <motion.div 
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="bg-card border border-border p-8 rounded-card shadow-premium"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <principle.icon className="w-6 h-6 text-primary dark:text-primary-light" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{principle.title}</h3>
                <p className="text-sm text-text-body leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Timeline ───────────────────────────── */}
      <section ref={processRef} className="py-24 md:py-32 border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sticky Header */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start space-y-6">
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-primary block">
                Methodology
              </span>
              <h2 className="font-serif text-4xl font-bold text-foreground">
                How we deliver.
              </h2>
              <p className="text-sm text-text-body leading-relaxed">
                A predictable, systematic process designed to produce audit-ready documentation with minimal disruption to your core operations.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 text-sm font-semibold py-3 px-6 rounded-btn group mt-4"
              >
                Initiate Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Timeline Steps */}
            <div className="lg:col-span-8 relative">
              {/* Vertical line */}
              <div className="absolute top-4 bottom-4 left-[28px] w-[2px] bg-border/60 hidden md:block" />
              
              <div className="space-y-12 relative">
                {steps.map((step, index) => (
                  <motion.div 
                    key={step.num}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inViewProcess ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative flex flex-col md:flex-row gap-6 md:gap-12"
                  >
                    {/* Number Indicator */}
                    <div className="flex items-center gap-4 md:block shrink-0">
                      <div className="w-14 h-14 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center font-mono font-bold text-primary dark:text-primary-light text-lg z-10 shadow-sm relative">
                        {step.num}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="bg-background border border-border p-6 rounded-card shadow-premium card-lift flex-1">
                      <h3 className="font-serif text-xl font-bold text-foreground mb-3">{step.title}</h3>
                      <p className="text-sm text-text-body leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
