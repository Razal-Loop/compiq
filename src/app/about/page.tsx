"use client";

import { Shield, Award, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

const NAVY = "#0F1A2E";
const NAVY_DEEP = "#0d1627";
const PURPLE = "#6B4FBB";
const PAPER = "#F7F3EC";

export default function AboutPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative" style={{ backgroundColor: PAPER }}>
      
      {/* ── 1. HEADER SECTION ── */}
      <section 
        className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 border-b"
        style={{ borderColor: "rgba(15,26,46,0.1)" }}
      >
        <div className="absolute inset-0 blueprint-grid blueprint-grid-fine opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-5 sm:space-y-6">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase border"
              style={{ color: PURPLE, backgroundColor: "rgba(107,79,187,0.07)", borderColor: "rgba(107,79,187,0.2)" }}
            >
              PRACTICE OVERVIEW
            </div>
            
            <h1 
              className="font-serif font-light tracking-tight leading-[1.1]" 
              style={{ fontSize: 'var(--text-h1)', color: NAVY }}
            >
              Bridging the gap between{" "}
              <span className="font-normal italic">engineering</span> and <span className="font-normal italic">regulation.</span>
            </h1>
            
            <p 
              className="font-sans text-base sm:text-lg leading-relaxed max-w-2xl"
              style={{ color: "rgba(15,26,46,0.7)" }}
            >
              ComplDoc was established to address the critical translation gap between technical product teams and compliance auditors. We are systems analysts, technical writers, and regulatory specialists who write documentation that regulators accept without pushback.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. PRINCIPLES SECTION ── */}
      <section 
        className="py-16 sm:py-20 lg:py-24 border-b"
        style={{ backgroundColor: PAPER, borderColor: "rgba(15,26,46,0.1)" }}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4">
            <span 
              className="font-mono text-xs uppercase tracking-widest font-semibold"
              style={{ color: PURPLE }}
            >
              OUR GUIDING PRINCIPLES
            </span>
            <h2 
              className="font-serif font-light tracking-tight" 
              style={{ fontSize: 'var(--text-h2)', color: NAVY }}
            >
              Audit-ready output built from primary sources.
            </h2>
          </div>

          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border"
            style={{ backgroundColor: "rgba(15,26,46,0.15)", borderColor: "rgba(15,26,46,0.15)" }}
          >
            {[
              { 
                icon: FileText, 
                title: "Primary Source Citations", 
                desc: "We do not rely on generic fill-in-the-blank templates. Every technical dossier is drafted and structured directly from the primary statutory text of target legislations or bidding briefs.",
                image: "/principle-3.jpg"
              },
              { 
                icon: Shield, 
                title: "Auditor-First Structure", 
                desc: "Regulators require clear, declarative, and evidence-backed assertions. We write documents specifically organized to make it easy for auditing teams to locate required proofs.",
                image: "/principle-1.jpg"
              },
              { 
                icon: Award, 
                title: "Deep Technical Literacy", 
                desc: "We speak the language of engineering. From safety control loops to model checkpoints and data lineage pipelines, we work directly from logs and technical briefs.",
                image: "/principle-2.jpg"
              }
            ].map((principle) => {
              const IconComp = principle.icon;
              return (
                <div 
                  key={principle.title}
                  className="transition-colors duration-300 flex flex-col justify-between overflow-hidden border-b sm:border-b-0"
                  style={{ backgroundColor: PAPER }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#EDE9E2")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = PAPER)}
                >
                  <div className="relative w-full h-[200px] overflow-hidden">
                    <Image 
                      src={principle.image} 
                      alt={principle.title} 
                      fill 
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="p-6 sm:p-8 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <div 
                        className="p-2 border w-fit"
                        style={{ borderColor: "rgba(15,26,46,0.15)", backgroundColor: "rgba(15,26,46,0.03)" }}
                      >
                        <IconComp className="w-5 h-5" style={{ color: PURPLE }} />
                      </div>
                      <h3 
                        className="font-serif text-xl font-normal"
                        style={{ color: NAVY }}
                      >
                        {principle.title}
                      </h3>
                      <p 
                        className="font-sans text-xs leading-relaxed"
                        style={{ color: "rgba(15,26,46,0.6)" }}
                      >
                        {principle.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. DETAILED METHODOLOGY (Timeline style) ── */}
      <section 
        className="py-16 sm:py-20 lg:py-24 relative border-b"
        style={{ backgroundColor: NAVY, borderColor: "rgba(247,243,236,0.08)" }}
      >
        <div className="absolute inset-0 blueprint-grid opacity-[0.04] pointer-events-none" />
        
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <span 
                className="font-mono text-[11px] uppercase tracking-widest font-semibold"
                style={{ color: PURPLE }}
              >
                DRAFTING CYCLE
              </span>
              <h2 
                className="font-serif font-light tracking-tight leading-tight" 
                style={{ fontSize: 'var(--text-h2)', color: PAPER }}
              >
                Our systematic documentation lifecycle.
              </h2>
              <p 
                className="font-sans text-sm leading-relaxed max-w-md"
                style={{ color: "rgba(247,243,236,0.65)" }}
              >
                We embed within your sprint schedules or design meetings to extract necessary system specifications, delivering complete files on agreed milestones.
              </p>
              <div className="pt-2 sm:pt-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full sm:w-auto px-7 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 inline-flex"
                  style={{ backgroundColor: PAPER, color: NAVY, borderColor: PAPER }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = PAPER;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = PAPER;
                    (e.currentTarget as HTMLAnchorElement).style.color = NAVY;
                  }}
                >
                  Initiate Engagement
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>

            {/* Right Column: Timeline */}
            <div 
              className="lg:col-span-7 pl-5 sm:pl-8 border-l space-y-6 sm:space-y-8"
              style={{ borderColor: "rgba(247,243,236,0.12)" }}
            >
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div 
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    className="cursor-pointer p-6 border transition-all duration-300 relative group"
                    style={{
                      backgroundColor: isActive ? "rgba(247,243,236,0.04)" : "transparent",
                      borderColor: isActive ? PURPLE : "transparent",
                    }}
                    onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(247,243,236,0.12)"; }}
                    onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLDivElement).style.borderColor = "transparent"; }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span 
                        className="font-mono text-xs font-semibold"
                        style={{ color: PURPLE }}
                      >
                        PHASE {step.num}
                      </span>
                      {isActive && (
                        <span 
                          className="font-mono text-[9px] px-2 py-0.5 tracking-widest"
                          style={{ color: PAPER, backgroundColor: "rgba(247,243,236,0.1)" }}
                        >
                          ACTIVE WORKFLOW
                        </span>
                      )}
                    </div>
                    <h3 
                      className="font-serif text-lg font-normal mb-2"
                      style={{ color: PAPER }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="font-sans text-xs leading-relaxed"
                      style={{ color: "rgba(247,243,236,0.65)" }}
                    >
                      {step.desc}
                    </p>
                    
                    {isActive && (
                      <div 
                        className="mt-4 pt-4 border-t space-y-2"
                        style={{ borderColor: "rgba(247,243,236,0.08)" }}
                      >
                        <span 
                          className="font-mono text-[9px] uppercase tracking-widest block"
                          style={{ color: "rgba(247,243,236,0.55)" }}
                        >
                          PHASE DELIVERABLES:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((del) => (
                            <span 
                              key={del} 
                              className="font-mono text-[10px] px-2.5 py-1 border"
                              style={{ 
                                backgroundColor: "rgba(247,243,236,0.05)", 
                                borderColor: "rgba(247,243,236,0.1)", 
                                color: PAPER 
                              }}
                            >
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
