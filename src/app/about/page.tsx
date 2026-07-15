"use client";

import { Shield, Award, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface TimelineStep {
  num: string;
  title: string;
  desc: string;
  deliverables: string[];
}

const steps: TimelineStep[] = [
  {
    num: "01",
    title: "Discovery & Technical Intake",
    desc: "We review the system capabilities, data flow models, and target market to map out upcoming regulatory obligations or submission deadlines.",
    deliverables: ["Initial applicability log", "Timeline roadmap schedule"]
  },
  {
    num: "02",
    title: "Classification Analysis",
    desc: "We perform a systematic check against target legislative clauses (e.g. EU AI Act Annex III) to lock in the exact risk classification.",
    deliverables: ["Classification memo", "Statutory obligations register"]
  },
  {
    num: "03",
    title: "Scoping & Gap Mapping",
    desc: "We inspect your existing technical assets, identifying delta parameters between current evidence and auditor expectations.",
    deliverables: ["Technical gap analysis report", "Fixed-price contract schedule"]
  },
  {
    num: "04",
    title: "Technical Writing & Drafting",
    desc: "We write the files section-by-section, translating raw technical data into structured, cited regulatory evidence.",
    deliverables: ["Draft technical files", "Citations bibliography database"]
  },
  {
    num: "05",
    title: "Mock Review & Audit",
    desc: "We run a secondary integrity audit of the compiled documents, testing each evidence claim against primary legislation.",
    deliverables: ["Mock audit finding log", "Dossier sign-off memo"]
  }
];

export default function AboutPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative bg-white dark:bg-[#0B0B0F] transition-colors duration-300">
      
      {/* ── 1. HEADER SECTION ── */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 border-b border-border blueprint-grid blueprint-grid-fine">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-primary dark:text-[#7C4DFF] bg-primary/5 border border-primary/10">
              PRACTICE OVERVIEW
            </div>
            
            <h1 className="font-serif font-light tracking-tight text-foreground leading-[1.1]" style={{ fontSize: 'var(--text-h1)' }}>
              Bridging the gap between{" "}
              <span className="font-normal italic">engineering</span> and <span className="font-normal italic">regulation.</span>
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-text-body leading-relaxed max-w-2xl">
              ComplDoc was established to address the critical translation gap between technical product teams and compliance auditors. We are systems analysts, technical writers, and regulatory specialists who write documentation that regulators accept without pushback.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. PRINCIPLES SECTION (3 Columns, Enterprise Layout) ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#0B0B0F] text-foreground border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="font-serif font-light text-foreground tracking-tight" style={{ fontSize: 'var(--text-h2)' }}>
              Audit-ready output built from primary sources.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {[
              { 
                icon: FileText, 
                title: "Primary Source Citations", 
                desc: "We do not rely on generic fill-in-the-blank templates. Every technical dossier is drafted and structured directly from the primary statutory text of target legislations or bidding briefs." 
              },
              { 
                icon: Shield, 
                title: "Auditor-First Structure", 
                desc: "Regulators require clear, declarative, and evidence-backed assertions. We write documents specifically organized to make it easy for auditing teams to locate required proofs." 
              },
              { 
                icon: Award, 
                title: "Deep Technical Literacy", 
                desc: "We speak the language of engineering. From safety control loops to model checkpoints and data lineage pipelines, we work directly from logs and technical briefs." 
              }
            ].map((principle) => {
              const IconComp = principle.icon;
              return (
                <div 
                  key={principle.title}
                  className="bg-white dark:bg-[#18181F] p-6 sm:p-8 space-y-5 sm:space-y-6 hover:bg-[#F7F7FA] dark:hover:bg-[#111117] transition-colors duration-300 min-h-[260px] sm:min-h-[300px] flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="p-2 border border-border w-fit bg-white">
                      <IconComp className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-normal text-foreground">{principle.title}</h3>
                    <p className="font-sans text-xs text-text-muted leading-relaxed">{principle.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. DETAILED METHODOLOGY (Timeline style) ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#111117] text-white relative">
        <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#7C4DFF] font-semibold">
                DRAFTING CYCLE
              </span>
              <h2 className="font-serif font-light text-white tracking-tight leading-tight" style={{ fontSize: 'var(--text-h2)' }}>
                Our systematic documentation lifecycle.
              </h2>
              <p className="font-sans text-xs text-[#E4E4EB] leading-relaxed max-w-md">
                We embed within your sprint schedules or design meetings to extract necessary system specifications, delivering complete files on agreed milestones.
              </p>
              <div className="pt-2 sm:pt-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full sm:w-auto px-6 text-xs font-semibold uppercase tracking-wider items-center gap-2"
                >
                  Initiate Engagement
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Timeline */}
            <div className="lg:col-span-7 pl-4 sm:pl-6 border-l border-white/10 space-y-6 sm:space-y-8">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div 
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    className={`cursor-pointer p-6 border transition-all duration-300 ${
                      isActive 
                        ? "bg-[#18181F] border-[#7C4DFF] active-glow" 
                        : "bg-transparent border-transparent hover:bg-[#18181F]/50 hover:border-white/5"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-xs text-[#7C4DFF] font-semibold">PHASE {step.num}</span>
                      {isActive && <span className="font-mono text-[9px] text-white bg-white/10 px-2 py-0.5">ACTIVE WORKFLOW</span>}
                    </div>
                    <h3 className="font-serif text-lg font-normal text-white mb-2">{step.title}</h3>
                    <p className="font-sans text-xs text-white/75 leading-relaxed">{step.desc}</p>
                    
                    {isActive && (
                      <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                        <span className="font-mono text-[9px] text-white/55 uppercase block">PHASE DELIVERABLES:</span>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((del) => (
                            <span key={del} className="font-mono text-[10px] bg-white/5 border border-white/10 px-2.5 py-1 text-white">
                              {del}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
