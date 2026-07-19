"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
  image?: string;
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
  { name: "CQC Standards", scope: "Care Quality Assurance", authority: "UK CQC", status: "Statutory Inspectorate", category: "Public Services" }
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
    citation: "CASE RECORD: COM-UAS-2025",
    image: "/airplane.jpg"
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
    citation: "CASE RECORD: COM-MED-42001",
    image: "/medgen.jpg"
  }
];

/* ─── Colour constants ──────────────────────────────────── */
const NAVY       = "#0F1A2E";
const NAVY_DEEP  = "#0d1627";
const PURPLE     = "#6B4FBB";
const PAPER      = "#F7F3EC";

export default function HomePage() {
  const [activeStep, setActiveStep] = useState(0);

  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  const frameworksRef = useRef(null);
  const frameworksInView = useInView(frameworksRef, { once: true, margin: "-100px" });

  const caseStudiesRef = useRef(null);
  const caseStudiesInView = useInView(caseStudiesRef, { once: true, margin: "-100px" });

  return (
    <div className="relative" style={{ backgroundColor: PAPER }}>

      {/* ── 1. HERO ── */}
      <section
        className="relative overflow-hidden border-b min-h-[100svh] sm:min-h-[90vh] flex items-center pt-20 sm:pt-24 pb-16 sm:pb-24"
        style={{ 
          borderColor: "rgba(247,243,236,0.1)",
          backgroundColor: NAVY
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-45 pointer-events-none"
        >
          <source src="/6929599-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        {/* Blueprint background over image */}
        <div className="absolute inset-0 blueprint-grid blueprint-grid-fine opacity-20 pointer-events-none" />
        {/* Vertical rule lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px hidden md:block" style={{ backgroundColor: "rgba(107,79,187,0.15)" }} />
        <div className="absolute right-1/4 top-0 bottom-0 w-px hidden md:block" style={{ backgroundColor: "rgba(107,79,187,0.15)" }} />
        <div className="absolute top-1/3 left-0 right-0 h-px hidden md:block" style={{ backgroundColor: "rgba(107,79,187,0.15)" }} />

        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left — Editorial Copy */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="lg:col-span-12 max-w-4xl mx-auto text-center flex flex-col items-center space-y-7 sm:space-y-9"
            >
              <div className="space-y-5 flex flex-col items-center">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase border"
                  style={{ color: PURPLE, backgroundColor: "rgba(107,79,187,0.1)", borderColor: "rgba(107,79,187,0.3)" }}
                >
                  Audit-Ready Engineering Dossiers
                </div>

                <h1
                  className="font-serif font-light tracking-tight leading-[1.08]"
                  style={{ fontSize: "var(--text-hero)", color: PAPER }}
                >
                  Documentation that{" "}
                  <span className="font-normal italic">withstands</span>{" "}
                  scrutiny.
                </h1>
              </div>

              <p
                className="font-sans leading-relaxed max-w-xl mx-auto"
                style={{ fontSize: "var(--text-body-f)", color: "rgba(247,243,236,0.7)" }}
              >
                We engineer precise, citation-accurate technical files, regulatory dossiers,
                and operating manuals for AI companies, aerospace systems, and defense
                contractors. Audit-ready from the first draft.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full">
                <Link
                  href="/contact"
                  className="btn-primary w-full sm:w-auto px-7 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
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
                  Book Executive Consultation
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary w-full sm:w-auto px-7 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
                  style={{ color: PAPER, borderColor: "rgba(247,243,236,0.4)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = PAPER;
                    (e.currentTarget as HTMLAnchorElement).style.color = NAVY;
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = PAPER;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = PAPER;
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(247,243,236,0.4)";
                  }}
                >
                  Explore Practice Areas
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="border-t pt-7 sm:pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6 w-full max-w-2xl mx-auto text-center" style={{ borderColor: "rgba(247,243,236,0.12)" }}>
                <div className="flex flex-col items-center">
                  <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest" style={{ color: "rgba(247,243,236,0.45)" }}>Cited Workflows</p>
                  <p className="font-serif text-base sm:text-xl font-bold mt-1" style={{ color: PAPER }}>500+</p>
                  <p className="font-sans text-[10px] sm:text-[11px] leading-tight mt-0.5" style={{ color: "rgba(247,243,236,0.55)" }}>High-Stakes Audits Passed</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest" style={{ color: "rgba(247,243,236,0.45)" }}>Response SLA</p>
                  <p className="font-serif text-base sm:text-xl font-bold mt-1" style={{ color: PAPER }}>48 Hours</p>
                  <p className="font-sans text-[10px] sm:text-[11px] leading-tight mt-0.5" style={{ color: "rgba(247,243,236,0.55)" }}>Guaranteed Intake</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest" style={{ color: "rgba(247,243,236,0.45)" }}>Success Value</p>
                  <p className="font-serif text-base sm:text-xl font-bold mt-1" style={{ color: PAPER }}>100%</p>
                  <p className="font-sans text-[10px] sm:text-[11px] leading-tight mt-0.5" style={{ color: "rgba(247,243,236,0.55)" }}>Regulator Clearance Rate</p>
                </div>
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* ── 2. SERVICES ── */}
      <section ref={servicesRef} id="services" className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: PAPER }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16 space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-widest font-semibold" style={{ color: PURPLE }}>
              Practice Areas &amp; Core Competency
            </span>
            <h2 className="font-serif font-light tracking-tight" style={{ fontSize: "var(--text-h2)", color: NAVY }}>
              Rigorous documentation systems tailored for highly regulated sectors.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border" style={{ borderColor: "rgba(15,26,46,0.15)" }}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 sm:p-8 flex flex-col justify-between group transition-colors duration-300 border-b sm:border-b-0 sm:border-r last:border-r-0"
                  style={{
                    backgroundColor: PAPER,
                    borderColor: "rgba(15,26,46,0.12)",
                    minHeight: "340px"
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#EDE9E2")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = PAPER)}
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-widest" style={{ color: "rgba(15,26,46,0.4)" }}>
                        REF // {service.reference}
                      </span>
                      <span className="font-serif text-3xl font-light" style={{ color: "rgba(107,79,187,0.25)" }}>
                        {service.num}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-2 border w-fit" style={{ borderColor: "rgba(15,26,46,0.15)" }}>
                        <IconComponent className="w-5 h-5" style={{ color: PURPLE }} />
                      </div>
                      <h3 className="font-serif text-xl font-normal leading-snug transition-colors duration-200" style={{ color: NAVY }}>
                        {service.title}
                      </h3>
                      <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(15,26,46,0.6)" }}>
                        {service.lede}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-2 border-t pt-4 font-sans text-xs" style={{ borderColor: "rgba(15,26,46,0.1)" }}>
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2" style={{ color: "rgba(15,26,46,0.75)" }}>
                        <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: PURPLE }} />
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

      {/* ── 3. METHODOLOGY ── */}
      <section className="py-16 sm:py-20 lg:py-24 relative border-t border-b overflow-hidden" style={{ backgroundColor: NAVY, borderColor: "rgba(247,243,236,0.08)" }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
        >
          <source src="/14740986_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 blueprint-grid opacity-[0.04] pointer-events-none" />

        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

            {/* Left */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <span className="font-mono text-[11px] uppercase tracking-widest font-semibold" style={{ color: PURPLE }}>
                Operational Phases
              </span>
              <h2 className="font-serif font-light tracking-tight leading-tight" style={{ fontSize: "var(--text-h2)", color: PAPER }}>
                Our Proven Drafting &amp; Audit Methodology
              </h2>
              <p className="font-sans text-sm leading-relaxed max-w-md" style={{ color: "rgba(247,243,236,0.65)" }}>
                We work as embedded regulatory engineers. Rather than generic templates, we create
                system-specific compliance files citing direct regulatory frameworks.
              </p>

              <div className="pt-8 hidden lg:block">
                <div className="border p-6 space-y-4" style={{ borderColor: "rgba(247,243,236,0.12)", backgroundColor: "rgba(247,243,236,0.03)" }}>
                  <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "rgba(247,243,236,0.5)" }}>
                    System Process Compliance Verification
                  </span>
                  <div className="flex gap-2 items-center">
                    <Award className="w-5 h-5" style={{ color: PURPLE }} />
                    <span className="text-xs font-semibold" style={{ color: PAPER }}>SLA Assurance Contract Included</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Timeline */}
            <div className="lg:col-span-7 relative pl-5 sm:pl-8 border-l space-y-8 sm:space-y-10" style={{ borderColor: "rgba(247,243,236,0.12)" }}>
              {methodologySteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div key={step.number} className="relative group">
                    {/* Timeline dot */}
                    <div
                      className={`absolute -left-[30px] sm:-left-[41px] top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300`}
                      style={{
                        backgroundColor: isActive ? PURPLE : NAVY,
                        borderColor: isActive ? PURPLE : "rgba(247,243,236,0.2)",
                      }}
                    >
                      {isActive && <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: PAPER }} />}
                    </div>

                    <div
                      onClick={() => setActiveStep(idx)}
                      className="cursor-pointer p-6 border transition-all duration-300"
                      style={{
                        backgroundColor: isActive ? "rgba(247,243,236,0.04)" : "transparent",
                        borderColor: isActive ? PURPLE : "transparent",
                      }}
                      onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(247,243,236,0.12)"; }}
                      onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLDivElement).style.borderColor = "transparent"; }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: PURPLE }}>
                          {step.phase}
                        </span>
                        <span className="font-mono text-xs" style={{ color: "rgba(247,243,236,0.55)" }}>{step.duration}</span>
                      </div>

                      <h3 className="font-serif text-lg font-normal mb-3" style={{ color: PAPER }}>
                        {step.title}
                      </h3>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28 }}
                            className="overflow-hidden"
                          >
                            <p className="font-sans text-xs leading-relaxed mb-4" style={{ color: "rgba(247,243,236,0.65)" }}>
                              {step.description}
                            </p>
                            <div className="space-y-2 border-t pt-3" style={{ borderColor: "rgba(247,243,236,0.08)" }}>
                              <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: PAPER }}>Key Deliverables:</p>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]" style={{ color: "rgba(247,243,236,0.6)" }}>
                                {step.deliverables.map((item) => (
                                  <li key={item} className="flex items-center gap-1.5">
                                    <FileCheck className="w-3.5 h-3.5 shrink-0" style={{ color: PURPLE }} />
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

      {/* ── 4. INDUSTRIES ── */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: PAPER }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-widest font-semibold" style={{ color: PURPLE }}>
              Sectors of Engagement
            </span>
            <h2 className="font-serif font-light tracking-tight" style={{ fontSize: "var(--text-h2)", color: NAVY }}>
              Regulated environments require domain expertise.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(15,26,46,0.12)" }}>
            {industries.map((ind) => {
              const IconComp = ind.icon;
              return (
                <div
                  key={ind.title}
                  className="p-5 sm:p-6 flex flex-col justify-between transition-colors duration-300 group"
                  style={{ backgroundColor: PAPER, minHeight: "220px" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#EDE9E2")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = PAPER)}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="p-2 border" style={{ borderColor: "rgba(15,26,46,0.15)", backgroundColor: "rgba(15,26,46,0.03)" }}>
                        <IconComp className="w-4 h-4" style={{ color: PURPLE }} />
                      </div>
                      <span className="font-mono text-[9px] tracking-wider border px-2 py-0.5 hidden sm:inline-block"
                        style={{ borderColor: "rgba(15,26,46,0.15)", color: "rgba(15,26,46,0.5)" }}>
                        {ind.framework}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-normal mb-1" style={{ color: NAVY }}>{ind.title}</h3>
                      <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(15,26,46,0.6)" }}>{ind.description}</p>
                    </div>
                  </div>
                  <div className="border-t pt-3 mt-4 text-[10px] font-mono flex justify-between items-center"
                    style={{ borderColor: "rgba(15,26,46,0.1)", color: "rgba(15,26,46,0.45)" }}>
                    <span>Regulated by:</span>
                    <span className="font-semibold uppercase text-right max-w-[55%] text-[9px]" style={{ color: NAVY }}>{ind.regulatoryBody}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 5. FRAMEWORKS ── */}
      <section ref={frameworksRef} className="py-16 sm:py-20 lg:py-24 border-t border-b" style={{ backgroundColor: NAVY_DEEP, borderColor: "rgba(247,243,236,0.08)" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 lg:mb-16 gap-5">
            <div className="max-w-2xl space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-widest font-semibold" style={{ color: PURPLE }}>
                Technical Assurance Frameworks
              </span>
              <h2 className="font-serif font-light tracking-tight" style={{ fontSize: "var(--text-h2)", color: PAPER }}>
                Framework Expositions We Maintain
              </h2>
            </div>
            <p className="font-sans text-sm max-w-xs" style={{ color: "rgba(247,243,236,0.55)" }}>
              Direct mapping of compliance criteria to verify operational systems against
              globally recognised legislation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px" style={{ backgroundColor: "rgba(247,243,236,0.08)" }}>
            {frameworks.map((fw, index) => (
              <motion.div
                key={fw.name}
                initial={{ opacity: 0, y: 15 }}
                animate={frameworksInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="p-4 sm:p-5 lg:p-6 flex flex-col justify-between transition-colors duration-300"
                style={{ backgroundColor: "rgba(15,26,46,0.6)", minHeight: "155px" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(15,26,46,0.8)")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(15,26,46,0.6)")}
              >
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider" style={{ color: PURPLE }}>
                    {fw.category}
                  </span>
                  <h3 className="font-serif text-lg font-normal mt-1 mb-2" style={{ color: PAPER }}>
                    {fw.name}
                  </h3>
                  <p className="font-sans text-[11px]" style={{ color: "rgba(247,243,236,0.55)" }}>
                    {fw.scope}
                  </p>
                </div>
                <div className="border-t pt-3 mt-4 flex justify-between items-center text-[9px] font-mono"
                  style={{ borderColor: "rgba(247,243,236,0.08)", color: "rgba(247,243,236,0.4)" }}>
                  <span>{fw.authority}</span>
                  <span style={{ color: "rgba(247,243,236,0.5)" }}>{fw.status}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. CASE STUDIES ── */}
      <section ref={caseStudiesRef} className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: PAPER }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16 space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-widest font-semibold" style={{ color: PURPLE }}>
              Case Archives
            </span>
            <h2 className="font-serif font-light tracking-tight" style={{ fontSize: "var(--text-h2)", color: NAVY }}>
              Proven Regulatory Clearances
            </h2>
          </div>

          <div className="space-y-16">
            {caseStudies.map((cs, idx) => {
              const isDarkCard = !!cs.image;
              const textPrimary = isDarkCard ? PAPER : NAVY;
              const textMuted = isDarkCard ? "rgba(247,243,236,0.55)" : "rgba(15,26,46,0.55)";
              const textLabel = isDarkCard ? "rgba(247,243,236,0.4)" : "rgba(15,26,46,0.4)";
              const textBody = isDarkCard ? "rgba(247,243,236,0.75)" : "rgba(15,26,46,0.75)";
              const textQuote = isDarkCard ? "rgba(247,243,236,0.6)" : "rgba(15,26,46,0.6)";
              const quoteBg = isDarkCard ? "rgba(107,79,187,0.06)" : "rgba(107,79,187,0.04)";
              const borderColor = isDarkCard ? "rgba(247,243,236,0.12)" : "rgba(15,26,46,0.1)";

              return (
                <motion.div
                  key={cs.client}
                  initial={{ opacity: 0, y: 30 }}
                  animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 pb-10 sm:pb-14 lg:pb-16 last:pb-0 last:border-0 ${
                    isDarkCard ? "p-6 sm:p-8 lg:p-12 border overflow-hidden relative" : "border-b"
                  }`}
                  style={{ 
                    borderColor: borderColor,
                    backgroundImage: isDarkCard ? `linear-gradient(rgba(15,26,46,0.75), rgba(15,26,46,0.75)), url('${cs.image}')` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  {/* Metadata */}
                  <div className="lg:col-span-4 space-y-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: textLabel }}>{cs.citation}</span>
                    <h3 className="font-serif text-2xl font-normal leading-tight" style={{ color: textPrimary }}>{cs.client}</h3>
                    <p className="font-mono text-xs font-semibold" style={{ color: PURPLE }}>{cs.industry}</p>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-5 sm:pt-6 border-t" style={{ borderColor: borderColor }}>
                      {cs.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="font-serif text-2xl font-bold" style={{ color: textPrimary }}>{metric.value}</p>
                          <p className="font-sans text-[11px]" style={{ color: textMuted }}>{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Narrative */}
                  <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-5">
                      <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-wider mb-1.5" style={{ color: textLabel }}>
                          The Challenge
                        </h4>
                        <p className="font-sans text-sm leading-relaxed" style={{ color: textBody }}>{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-wider mb-1.5" style={{ color: textLabel }}>
                          The Solution
                        </h4>
                        <p className="font-sans text-sm leading-relaxed" style={{ color: textBody }}>{cs.solution}</p>
                      </div>
                    </div>

                    <blockquote
                      className="border-l-2 pl-4 py-2 italic font-serif text-sm leading-relaxed"
                      style={{ borderColor: PURPLE, color: textQuote, backgroundColor: quoteBg }}
                    >
                      &ldquo;ComplDoc transformed a chaotic compliance risk matrix into a perfectly typeset regulatory dossier,
                      satisfying the external audit committee within hours of receipt.&rdquo;
                    </blockquote>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 7. STATISTICS ── */}
      <section className="py-14 sm:py-16 lg:py-20 border-t" style={{ backgroundColor: NAVY, borderColor: "rgba(247,243,236,0.08)" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-center">

            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: PURPLE }}>Audit Data Performance</span>
              <h3 className="font-serif text-3xl font-light leading-tight" style={{ color: PAPER }}>
                Consistently aligned to rigorous mandates.
              </h3>
              <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(247,243,236,0.6)" }}>
                Empirical compliance reports generated by our system pass regulator evaluations on first submittal.
              </p>
            </div>

            <div className="lg:col-span-2 border p-6 space-y-6" style={{ borderColor: "rgba(247,243,236,0.1)", backgroundColor: "rgba(247,243,236,0.03)" }}>
              <div className="flex justify-between items-center border-b pb-4" style={{ borderColor: "rgba(247,243,236,0.08)" }}>
                <span className="font-mono text-xs uppercase tracking-wider" style={{ color: PAPER }}>Annual Submission Metric Runtime</span>
                <span className="font-mono text-[10px]" style={{ color: PURPLE }}>Stable Clearance</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
                {[
                  { label: "EASA File Accuracy", value: "100%" },
                  { label: "Tender Score Ratio", value: "94.8%" },
                  { label: "Audit Satisfaction", value: "99.2%" },
                ].map(({ label, value }) => (
                  <div key={label} className="border p-4" style={{ borderColor: "rgba(247,243,236,0.08)", backgroundColor: "rgba(247,243,236,0.02)" }}>
                    <p className="font-mono text-[9px] uppercase tracking-wider" style={{ color: "rgba(247,243,236,0.45)" }}>{label}</p>
                    <p className="font-serif text-2xl font-bold mt-1" style={{ color: PAPER }}>{value}</p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 flex justify-between text-[9px] font-mono" style={{ borderColor: "rgba(247,243,236,0.06)", color: "rgba(247,243,236,0.35)" }}>
                <span>Last Run: 2026-07-14 18:00</span>
                <span>System Status: Compliant</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ── */}
      <section className="py-16 sm:py-20 lg:py-24 border-t" style={{ backgroundColor: PAPER, borderColor: "rgba(15,26,46,0.1)" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16 space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-widest font-semibold" style={{ color: PURPLE }}>
              Executive Endorsements
            </span>
            <h2 className="font-serif font-light tracking-tight" style={{ fontSize: "var(--text-h2)", color: NAVY }}>
              Trusted by procurement directors and compliance leads.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {[
              {
                quote: "ComplDoc drafted our maintenance organization exposition for EASA Part-145 approval. Their technical writers understood the regulatory text better than our engineering team. An absolute masterpiece.",
                name: "Antoine Varin",
                role: "Head of Safety Expositions, Aviate Global Ltd",
                initials: "AV"
              },
              {
                quote: "We secured a $12M municipal transit tender on our first bid attempt. ComplDoc\u2019s requirement mapping matrices allowed us to address every scoring criterion with clinical precision.",
                name: "Dr. Diana Boyd",
                role: "Bid Director, Transit Tech Systems",
                initials: "DB"
              }
            ].map(({ quote, name, role, initials }) => (
              <div
                key={name}
                className="space-y-6 border-l-2 pl-6"
                style={{ borderColor: PURPLE }}
              >
                <p className="font-serif text-lg italic leading-relaxed" style={{ color: "rgba(15,26,46,0.75)" }}>
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center font-serif font-semibold text-sm shrink-0"
                    style={{ backgroundColor: "rgba(107,79,187,0.1)", color: PURPLE }}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold" style={{ color: NAVY }}>{name}</p>
                    <p className="font-sans text-xs" style={{ color: "rgba(15,26,46,0.55)" }}>{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 9. CTA ── */}
      <section className="py-16 sm:py-20 lg:py-24 border-t" style={{ backgroundColor: NAVY, borderColor: "rgba(247,243,236,0.08)" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            <span className="font-mono text-[11px] uppercase tracking-widest font-semibold" style={{ color: PURPLE }}>
              Secure Consultation Intake
            </span>
            <h2 className="font-serif font-light tracking-tight" style={{ fontSize: "var(--text-h2)", color: PAPER }}>
              Ready to structure your regulatory dossiers?
            </h2>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(247,243,236,0.65)" }}>
              Ensure your documentation is audit-ready and legally robust. Get in touch with our
              lead regulatory technical engineering experts today.
            </p>
            <div className="pt-2 sm:pt-4 flex justify-center">
              <Link
                href="/contact"
                className="btn-primary px-10 text-xs uppercase tracking-widest gap-2 flex items-center"
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
                Book Audit Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
