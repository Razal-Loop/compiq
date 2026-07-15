"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight, Shield, FileText, Check, Activity, Plane,
  Award, Cpu, Database, FileCheck
} from "lucide-react";

/* ─── Types & Interfaces ────────────────────────────────── */
interface ServiceItem {
  id: string;
  num: string;
  icon: typeof Shield;
  title: string;
  lede: string;
  bullets: string[];
  reference: string;
}

interface StepItem {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  duration: string;
}

interface IndustryItem {
  title: string;
  regulatoryBody: string;
  description: string;
  icon: typeof Shield;
  framework: string;
}

interface CaseStudy {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: { value: string; label: string }[];
  citation: string;
}

interface FrameworkItem {
  name: string;
  scope: string;
  authority: string;
  status: string;
  category: string;
}

/* ─── Static Data ───────────────────────────────────────── */
const services: ServiceItem[] = [
  {
    id: "ai-compliance",
    num: "01",
    icon: Cpu,
    title: "AI Regulatory & Compliance Engineering",
    lede: "Rigorous technical files and Article 9 risk management systems structured directly for statutory auditing.",
    bullets: [
      "EU AI Act (Annex IV) technical documentation dossiers",
      "ISO/IEC 42001 (AIMS) setup and readiness audit files",
      "Algorithmic impact assessments and validation logs",
      "Model governance, drift logs, and lifecycle schemas"
    ],
    reference: "REGULATION (EU) 2024/1689"
  },
  {
    id: "tech-docs",
    num: "02",
    icon: FileText,
    title: "Government Tenders & Grant Writing",
    lede: "Highly structured RFP responses and scientific grant proposals aligned precisely to scoring metrics.",
    bullets: [
      "Requirement-to-response technical mapping matrices",
      "Defense and civil procurement bids (RFP/RFI/RFQ)",
      "Horizon Europe, Innovate UK, and SBIR grant bids",
      "Executive summaries and system architecture descriptions"
    ],
    reference: "FAR SUBPART 15.2 / HEU-7.2"
  },
  {
    id: "aviation-manuals",
    num: "03",
    icon: Plane,
    title: "Aviation & Safety Manuals",
    lede: "Operational manuals and maintenance expositions engineered to EASA, FAA, and ICAO regulations.",
    bullets: [
      "Maintenance Organisation Expositions (MOE Part-145)",
      "Flight Operations Manuals (OM Parts A, B, C, & D)",
      "Safety Management Systems (SMS) design and filing",
      "Continuous Airworthiness Management (CAMO) standards"
    ],
    reference: "EASA PART-145 / FAA AC 120-92"
  },
  {
    id: "audit-engineering",
    num: "04",
    icon: Database,
    title: "Audit-Ready Engineering Dossiers",
    lede: "Detailed specifications, safety cases, and architecture manuals prepared for high-stakes audits.",
    bullets: [
      "IEC 62304 Medical Device software lifecycle reports",
      "DO-178C / DO-254 avionics software and hardware assurance",
      "ISO 26262 automotive functional safety technical logs",
      "NASA-STD-8739 critical software architecture audits"
    ],
    reference: "RTCA DO-178C / IEC 62304"
  }
];

const methodologySteps: StepItem[] = [
  {
    number: "01",
    phase: "TECHNICAL INTAKE & SCHEMATIC EXTRACTION",
    title: "Deconstruct the System Architecture",
    description: "Our engineers extract data models, system logs, code architecture, and regulatory mandates directly from your technical team to map out the entire operational footprint.",
    deliverables: ["Structural system boundary reports", "Regulatory gap analysis logs", "Citation mapping database setup"],
    duration: "Week 1"
  },
  {
    number: "02",
    phase: "DRAFTING & STRUCTURING DOSSIERS",
    title: "Synthesize the Audit Dossiers",
    description: "Our regulatory technical writers draft every chapter in accordance with the target standard's formal structure, embedding exact mathematical formulas, architecture charts, and compliance citations.",
    deliverables: ["Initial technical file drafts", "Annex compliance matrices", "Risk assessment & mitigation registries"],
    duration: "Weeks 2–4"
  },
  {
    number: "03",
    phase: "VERIFICATION & MOCK AUDIT",
    title: "Surgical Review & Integrity Validation",
    description: "A secondary compliance lead conducts a mock audit against the primary regulatory text, validating each assertion to ensure it is robust, evidence-backed, and audit-ready.",
    deliverables: ["Pre-submission verification report", "SLA confidence score certificate", "Audit readiness sign-off"],
    duration: "Week 5"
  }
];

const industries: IndustryItem[] = [
  {
    title: "Artificial Intelligence",
    regulatoryBody: "EU AI Board / National Supervisory Authorities",
    description: "Technical files and model governance reports for foundation models and high-risk AI applications.",
    icon: Cpu,
    framework: "ISO/IEC 42001 / EU AI Act"
  },
  {
    title: "Aerospace & Avionics",
    regulatoryBody: "EASA / FAA / CAA",
    description: "Operational manuals and safety expositions for Part-145, Part-CAMO, and UAS/eVTOL operators.",
    icon: Plane,
    framework: "DO-178C / Part-M"
  },
  {
    title: "Defense & Government Bids",
    regulatoryBody: "MOD / DOD / Public Procurement Boards",
    description: "Technical bidding narratives, military spec compliance, and secure tenders.",
    icon: Shield,
    framework: "DEFCON / FAR / NIST 800-171"
  },
  {
    title: "Healthcare & MedTech",
    regulatoryBody: "FDA / EMA / MHRA",
    description: "Software lifecycle documentation, risk management logs, and clinical safety declarations.",
    icon: Activity,
    framework: "IEC 62304 / ISO 14971"
  }
];

const frameworks: FrameworkItem[] = [
  { name: "EU AI Act", scope: "Artificial Intelligence", authority: "European Union", status: "Statutory / Binding", category: "AI Regulatory" },
  { name: "ISO 42001", scope: "AI Management System", authority: "ISO / IEC", status: "International Standard", category: "AI Governance" },
  { name: "ISO 27001", scope: "Information Security", authority: "ISO / IEC", status: "International Standard", category: "Cybersecurity" },
  { name: "IEC 62304", scope: "Medical Device Software", authority: "IEC / FDA", status: "Safety Critical", category: "Medical Systems" },
  { name: "DO-178C", scope: "Avionics Software Assurance", authority: "RTCA / FAA / EASA", status: "Safety Critical", category: "Aerospace" },
  { name: "FDA 510(k)", scope: "Medical Devices Bids", authority: "US Food & Drug Admin", status: "Statutory Approval", category: "Medical Devices" },
  { name: "MDR 2017/745", scope: "European Medical Devices", authority: "European Commission", status: "Statutory Directive", category: "Medical Devices" },
  { name: "HIPAA Security", scope: "Protected Health Info", authority: "US DHHS", status: "Federal Law", category: "Healthcare IT" },
  { name: "SOC 2 Type II", scope: "Trust Services Criteria", authority: "AICPA", status: "Industry Standard", category: "Enterprise Security" },
  { name: "CQC standards", scope: "Care Quality Assurance", authority: "UK CQC", status: "Statutory Inspectorate", category: "Public Services" }
];

const caseStudies: CaseStudy[] = [
  {
    client: "Volatus Aerospace Technologies",
    industry: "Defense & Autonomous Aviation",
    challenge: "Deliver FAA-compliant Safety Cases and UAS Operation Expositions under strict deadlines for defense procurement.",
    solution: "ComplDoc mapped the UAV propulsion system and software control loops directly to DO-178C objectives, authoring 1,200 pages of audit-ready technical briefs.",
    metrics: [
      { value: "100%", label: "First-Pass FAA Approval" },
      { value: "$18.4M", label: "Government Contract Won" }
    ],
    citation: "CASE RECORD: COM-UAS-2025"
  },
  {
    client: "MedGen AI Diagnostics",
    industry: "Healthcare / Medical AI",
    challenge: "Complete ISO 42001 and IEC 62304 compliance files for a neural-network-based oncology screening tool.",
    solution: "Configured Article 9 AI Risk Registers, technical specifications of training pipelines, and dataset provenance matrices mapped to FDA guidance.",
    metrics: [
      { value: "3 Weeks", label: "Documentation Delivery" },
      { value: "Zero", label: "Auditor Corrective Actions" }
    ],
    citation: "CASE RECORD: COM-MED-42001"
  }
];

export default function HomePage() {
  const [activeStep, setActiveStep] = useState(0);

  // Ref references for Scroll/InView animations
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  const methodologyRef = useRef(null);

  const frameworksRef = useRef(null);
  const frameworksInView = useInView(frameworksRef, { once: true, margin: "-100px" });

  const caseStudiesRef = useRef(null);
  const caseStudiesInView = useInView(caseStudiesRef, { once: true, margin: "-100px" });

  return (
    <div className="relative bg-white dark:bg-[#0B0B0F] transition-colors duration-300">
      
      {/* ── 1. HERO SECTION ── */}
      <section className="relative overflow-hidden border-b border-border min-h-[100svh] sm:min-h-[90vh] flex items-center pt-20 sm:pt-24 pb-16 sm:pb-24">
        {/* Subtle Engineering Grid Background */}
        <div className="absolute inset-0 blueprint-grid blueprint-grid-fine opacity-70 pointer-events-none" />
        
        {/* Very Faint Architectural Blueprint Lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-primary/5 dark:bg-primary/10 hidden md:block" />
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-primary/5 dark:bg-primary/10 hidden md:block" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-primary/5 dark:bg-primary/10 hidden md:block" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Premium Editorial Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6 sm:space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-primary dark:text-primary-light bg-primary/5 border border-primary/10">
                  <span>AUDIT-READY ENGINEERING DOSSIERS</span>
                </div>
                
                <h1 className="font-serif font-light tracking-tight leading-[1.08] text-foreground" style={{ fontSize: 'var(--text-hero)' }}>
                  Documentation that{" "}
                  <span className="font-normal italic">withstands</span>{" "}scrutiny.
                </h1>
              </div>

              <p className="font-sans leading-relaxed text-text-body max-w-xl" style={{ fontSize: 'var(--text-body-f)' }}>
                We engineer precise, citation-accurate technical files, regulatory dossiers, and operating manuals for AI companies, aerospace systems, and defense contractors. Audit-ready from the first draft.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
                <Link
                  href="/contact"
                  className="btn-primary w-full sm:w-auto px-6 text-sm uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
                >
                  Book Executive Consultation
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary w-full sm:w-auto px-6 text-sm uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
                >
                  Explore Practice Areas
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="border-t border-border pt-6 sm:pt-8 grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <p className="font-mono text-[10px] sm:text-xs text-text-subtle">CITED WORKFLOWS</p>
                  <p className="font-serif text-base sm:text-lg font-bold text-foreground mt-1">500+</p>
                  <p className="font-sans text-[10px] sm:text-[11px] text-text-muted leading-tight mt-0.5">High-Stakes Audits Passed</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] sm:text-xs text-text-subtle">RESPONSE SLA</p>
                  <p className="font-serif text-base sm:text-lg font-bold text-foreground mt-1">48 Hours</p>
                  <p className="font-sans text-[10px] sm:text-[11px] text-text-muted leading-tight mt-0.5">Guaranteed Intake</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] sm:text-xs text-text-subtle">SUCCESS VALUE</p>
                  <p className="font-serif text-base sm:text-lg font-bold text-foreground mt-1">100%</p>
                  <p className="font-sans text-[10px] sm:text-[11px] text-text-muted leading-tight mt-0.5">Regulator Clearance Rate</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Animated Blueprint Widget — hidden on mobile to avoid overflow */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="hidden sm:flex lg:col-span-5 relative justify-center items-center"
            >
              {/* Animated Blueprint Matrix Container */}
              <div className="w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[420px] aspect-square border border-border bg-muted/30 dark:bg-[#111117]/50 p-5 sm:p-6 relative flex flex-col justify-between font-mono text-[11px] text-text-muted overflow-hidden shadow-premium">
                
                {/* Internal alignment marks */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-primary/45" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-primary/45" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-primary/45" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-primary/45" />
                
                {/* Compliance grid animation */}
                <div className="flex justify-between items-center border-b border-border/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-bold text-foreground">SYSTEM: COMPL-MD-2026</span>
                  </div>
                  <span className="text-[10px] text-text-subtle">REV 4.12.0</span>
                </div>

                {/* Simulated Risk / Compliance Audit Matrix */}
                <div className="my-6 space-y-3.5 flex-grow flex flex-col justify-center">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px]">
                      <span>EU AI ACT ANNEX IV CHECKLIST</span>
                      <span className="text-primary font-bold">94% ASSURED</span>
                    </div>
                    <div className="h-1.5 w-full bg-border relative">
                      <div className="absolute top-0 left-0 bottom-0 bg-primary w-[94%]" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px]">
                      <span>DO-178C CRITICAL OBJECTIVES</span>
                      <span className="text-primary font-bold">100% CITED</span>
                    </div>
                    <div className="h-1.5 w-full bg-border relative">
                      <div className="absolute top-0 left-0 bottom-0 bg-primary w-full" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px]">
                      <span>REGULATORY EVIDENCE INDEX</span>
                      <span className="text-primary font-bold">182 FILES SECURE</span>
                    </div>
                    <div className="h-1.5 w-full bg-border relative">
                      <div className="absolute top-0 left-0 bottom-0 bg-primary w-[82%]" />
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/60 pt-3 flex flex-col gap-1 text-[10px] text-text-subtle">
                  <div className="flex justify-between">
                    <span>SECURITY HASH:</span>
                    <span>9F28E2A74FEE810C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AUDIT GATEWAY:</span>
                    <span>READY FOR SUBMISSION</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 2. SERVICES SECTION (Enterprise Cards, White BG) ── */}
      <section ref={servicesRef} id="services" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#0B0B0F] text-foreground relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header Block */}
          <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              PRACTICE AREAS &amp; CORE COMPETENCY
            </span>
            <h2 className="font-serif font-light text-foreground tracking-tight" style={{ fontSize: 'var(--text-h2)' }}>
              Rigorous documentation systems tailored for highly regulated sectors.
            </h2>
          </div>

          {/* Grid Layout — 1 col mobile, 2 col tablet, 4 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 border border-border">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white dark:bg-[#18181F] p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#F7F7FA] dark:hover:bg-[#111117] transition-colors duration-300 min-h-[320px] sm:min-h-[380px] border border-border"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-text-subtle tracking-widest">
                        REF // {service.reference}
                      </span>
                      <span className="font-serif text-3xl font-light text-primary/30 group-hover:text-primary transition-colors duration-300">
                        {service.num}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-2 border border-border w-fit rounded-none bg-white dark:bg-[#18181F]">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-serif text-xl font-normal text-foreground group-hover:text-primary transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="font-sans text-xs leading-relaxed text-text-muted">
                        {service.lede}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-2 border-t border-border/40 pt-4 font-sans text-xs">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-text-body">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 3. METHODOLOGY SECTION (Vertical Timeline) ── */}
      <section ref={methodologyRef} className="py-16 sm:py-20 lg:py-24 bg-[#111117] text-white border-y border-border/40 relative">
        {/* Subtle grid background to represent blueprints */}
        <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Left Column: Heading and Details */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#7C4DFF] font-semibold">
                OPERATIONAL PHASES
              </span>
              <h2 className="font-serif font-light tracking-tight text-white leading-tight" style={{ fontSize: 'var(--text-h2)' }}>
                Our Proven Drafting &amp; Audit Methodology
              </h2>
              <p className="font-sans text-sm text-light-gray/80 leading-relaxed max-w-md">
                We work as embedded regulatory engineers. Rather than generic templates, we create system-specific compliance files citing direct regulatory frameworks.
              </p>
              
              <div className="pt-8 hidden lg:block">
                <div className="border border-white/10 p-6 space-y-4 bg-[#18181F]/70">
                  <span className="font-mono text-[10px] text-[#D8D8E2]">SYSTEM PROCESS COMPLIANCE VERIFICATION</span>
                  <div className="flex gap-2 items-center">
                    <Award className="w-5 h-5 text-[#7C4DFF]" />
                    <span className="text-xs font-semibold">SLA Assurance Contract Included</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Vertical Timeline */}
            <div className="lg:col-span-7 relative pl-5 sm:pl-8 border-l border-white/10 space-y-8 sm:space-y-12">
              {methodologySteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div key={step.number} className="relative group">
                    {/* Circle Anchor on Timeline */}
                    <div 
                      className={`absolute -left-[30px] sm:-left-[41px] top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? "bg-[#7C4DFF] border-[#7C4DFF] active-glow" 
                          : "bg-[#111117] border-white/20 group-hover:border-[#7C4DFF]"
                      }`}
                    >
                      {isActive && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </div>

                    <div 
                      onClick={() => setActiveStep(idx)}
                      className={`cursor-pointer p-6 border transition-all duration-300 ${
                        isActive 
                          ? "bg-[#18181F] border-[#7C4DFF] active-glow" 
                          : "bg-transparent border-transparent hover:border-white/10 hover:bg-[#18181F]/40"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-[10px] text-[#7C4DFF] tracking-widest">
                          {step.phase}
                        </span>
                        <span className="font-mono text-xs text-[#D8D8E2]">{step.duration}</span>
                      </div>

                      <h3 className="font-serif text-lg font-normal mb-3 text-white">
                        {step.title}
                      </h3>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="font-sans text-xs text-[#D8D8E2] leading-relaxed mb-4">
                              {step.description}
                            </p>
                            <div className="space-y-2 border-t border-white/5 pt-3">
                              <p className="font-mono text-[10px] text-white">KEY DELIVERABLES:</p>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-white/65">
                                {step.deliverables.map((item) => (
                                  <li key={item} className="flex items-center gap-1.5">
                                    <FileCheck className="w-3.5 h-3.5 text-[#7C4DFF] shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. INDUSTRIES SECTION (Enterprise Grid) ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#0B0B0F] text-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              SECTORS OF ENGAGEMENT
            </span>
            <h2 className="font-serif font-light text-foreground tracking-tight" style={{ fontSize: 'var(--text-h2)' }}>
              Regulated environments require domain expertise.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {industries.map((ind) => {
              const IconComp = ind.icon;
              return (
                <div key={ind.title} className="border border-border p-5 sm:p-6 hover:border-primary/50 transition-colors duration-300 flex flex-col justify-between min-h-[200px] sm:min-h-[220px] bg-white dark:bg-[#18181F]">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="p-2 border border-border bg-[#F7F7FA] dark:bg-[#111117]">
                        <IconComp className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-mono text-[9px] text-text-subtle tracking-wider border border-border px-2 py-0.5 hidden xs:inline-block sm:inline-block">
                        {ind.framework}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-normal text-foreground mb-1">
                        {ind.title}
                      </h3>
                      <p className="font-sans text-xs text-text-muted leading-relaxed">
                        {ind.description}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-border pt-3 mt-4 text-[10px] font-mono text-text-subtle flex justify-between items-center">
                    <span>REGULATED BY:</span>
                    <span className="font-semibold text-foreground uppercase">{ind.regulatoryBody}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 5. COMPLIANCE FRAMEWORKS (Grid of Certification Cards) ── */}
      <section ref={frameworksRef} className="py-16 sm:py-20 lg:py-24 bg-[#0B0B0F] text-white border-t border-border/40 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 lg:mb-16 gap-5 sm:gap-6">
            <div className="max-w-2xl space-y-3 sm:space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#7C4DFF] font-semibold">
                TECHNICAL ASSURANCE FRAMEWORKS
              </span>
              <h2 className="font-serif font-light text-white tracking-tight" style={{ fontSize: 'var(--text-h2)' }}>
                Framework Expositions We Maintain
              </h2>
            </div>
            <p className="font-sans text-sm text-white/70 max-w-xs">
              Direct mapping of compliance criteria to verify operational systems against globally recognized legislation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {frameworks.map((fw, index) => (
              <motion.div
                key={fw.name}
                initial={{ opacity: 0, y: 15 }}
                animate={frameworksInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-[#111117] p-4 sm:p-5 lg:p-6 hover:bg-[#18181F] transition-colors duration-300 flex flex-col justify-between min-h-[140px] sm:min-h-[160px]"
              >
                <div>
                  <span className="font-mono text-[9px] text-[#7C4DFF] uppercase tracking-wider">
                    {fw.category}
                  </span>
                  <h3 className="font-serif text-lg font-normal text-white mt-1 mb-2">
                    {fw.name}
                  </h3>
                  <p className="font-sans text-[11px] text-white/65">
                    {fw.scope}
                  </p>
                </div>
                <div className="border-t border-white/5 pt-3 mt-4 flex justify-between items-center text-[9px] font-mono text-white/50">
                  <span>{fw.authority}</span>
                  <span className="text-white/60">{fw.status}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. CASE STUDIES SECTION (Professional Briefing Layout) ── */}
      <section ref={caseStudiesRef} className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#0B0B0F] text-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              CASE ARCHIVES
            </span>
            <h2 className="font-serif font-light text-foreground tracking-tight" style={{ fontSize: 'var(--text-h2)' }}>
              Proven Regulatory Clearances
            </h2>
          </div>

          <div className="space-y-16">
            {caseStudies.map((caseStudy, idx) => (
              <motion.div
                key={caseStudy.client}
                initial={{ opacity: 0, y: 30 }}
                animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 border-b border-border pb-10 sm:pb-14 lg:pb-16 last:border-0"
              >
                {/* Executive Metadata (Cols 1-4) */}
                <div className="lg:col-span-4 space-y-4">
                  <span className="font-mono text-xs text-text-subtle uppercase">{caseStudy.citation}</span>
                  <h3 className="font-serif text-2xl font-normal text-foreground leading-tight">
                    {caseStudy.client}
                  </h3>
                  <p className="font-mono text-xs text-primary font-semibold">{caseStudy.industry}</p>
                  
                  {/* Pull metrics */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-border">
                    {caseStudy.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="font-serif text-2xl font-bold text-foreground">{metric.value}</p>
                        <p className="font-sans text-[11px] text-text-muted">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Narrative (Cols 5-12) */}
                <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-mono text-[10px] uppercase text-text-subtle tracking-wider mb-1">
                        THE CHALLENGE
                      </h4>
                      <p className="font-sans text-sm text-text-body leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-[10px] uppercase text-text-subtle tracking-wider mb-1">
                        THE SOLUTION
                      </h4>
                      <p className="font-sans text-sm text-text-body leading-relaxed">
                        {caseStudy.solution}
                      </p>
                    </div>
                  </div>

                  <blockquote className="border-l-2 border-primary pl-4 py-2 italic font-serif text-sm text-text-muted bg-[#F7F7FA] dark:bg-[#18181F]">
                    &ldquo;ComplDoc transformed a chaotic compliance risk matrix into a perfectly typeset regulatory dossier, satisfying the external audit committee within hours of receipt.&rdquo;
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 7. STATISTICS SECTION (Executive Dashboard Style) ── */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#111117] text-white border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-center">
            
            {/* Stat Summary */}
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#7C4DFF]">AUDIT DATA PERFORMANCE</span>
              <h3 className="font-serif text-3xl font-light text-white leading-tight">
                Consistently aligned to rigorous mandates.
              </h3>
              <p className="font-sans text-xs text-[#D8D8E2] leading-relaxed">
                Empirical compliance reports generated by our system pass regulator evaluations on first submittal.
              </p>
            </div>

            {/* Dashboard Mock Component */}
            <div className="lg:col-span-2 border border-white/10 p-6 bg-[#18181F] space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="font-mono text-xs text-white uppercase tracking-wider">ANNUAL SUBMISSION METRIC RUNTIME</span>
                <span className="font-mono text-[10px] text-[#7C4DFF]">STABLE clearance</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
                <div className="border border-white/5 p-4 bg-[#111117]">
                  <p className="font-mono text-[9px] text-white/55">EASA FILE ACCURACY</p>
                  <p className="font-serif text-2xl font-bold text-white mt-1">100%</p>
                </div>
                <div className="border border-white/5 p-4 bg-[#111117]">
                  <p className="font-mono text-[9px] text-white/55">TENDER SCORE RATIO</p>
                  <p className="font-serif text-2xl font-bold text-white mt-1">94.8%</p>
                </div>
                <div className="border border-white/5 p-4 bg-[#111117]">
                  <p className="font-mono text-[9px] text-white/55">AUDIT SATISFACTION</p>
                  <p className="font-serif text-2xl font-bold text-white mt-1">99.2%</p>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 flex justify-between text-[9px] font-mono text-white/45">
                <span>LAST RUN: 2026-07-14 18:00</span>
                <span>SYSTEM STATUS: COMPLIANT</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS SECTION (Quote-First Layout) ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#0B0B0F] text-foreground border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              EXECUTIVE ENDORSEMENTS
            </span>
            <h2 className="font-serif font-light text-foreground tracking-tight" style={{ fontSize: 'var(--text-h2)' }}>
              Trusted by procurement directors and compliance leads.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <div className="space-y-6 border-l border-primary pl-6">
              <p className="font-serif text-lg italic text-text-body leading-relaxed">
                &ldquo;ComplDoc drafted our maintenance organization exposition for EASA Part-145 approval. Their technical writers understood the regulatory text better than our engineering team. An absolute masterpiece.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 flex items-center justify-center font-serif text-primary dark:text-[#7C4DFF] font-semibold text-sm">
                  AV
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-foreground">Antoine Varin</p>
                  <p className="font-sans text-xs text-text-muted">Head of Safety Expositions, Aviate Global Ltd</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 border-l border-primary pl-6">
              <p className="font-serif text-lg italic text-text-body leading-relaxed">
                &ldquo;We secured a $12M municipal transit tender on our first bid attempt. ComplDoc&rsquo;s requirement mapping matrices allowed us to address every scoring criterion with clinical precision.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 flex items-center justify-center font-serif text-primary dark:text-[#7C4DFF] font-semibold text-sm">
                  DB
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-foreground">Dr. Diana Boyd</p>
                  <p className="font-sans text-xs text-text-muted">Bid Director, Transit Tech Systems</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 9. MOCK FAQ INTAKE CALL TO ACTION ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#111117] text-white border-t border-border/20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#7C4DFF] font-semibold">
            SECURE CONSULTATION INTAKE
          </span>
          <h2 className="font-serif font-light text-white tracking-tight max-w-3xl mx-auto" style={{ fontSize: 'var(--text-h2)' }}>
            Ready to structure your regulatory dossiers?
          </h2>
          <p className="font-sans text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
            Ensure your documentation is audit-ready and legally robust. Get in touch with our lead regulatory technical engineering experts today.
          </p>
          <div className="pt-2 sm:pt-4 flex justify-center">
            <Link
              href="/contact"
              className="btn-primary w-full sm:w-auto px-8 text-sm font-bold uppercase tracking-widest gap-2 items-center"
            >
              Book Audit Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
