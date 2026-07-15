"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type LucideIcon, Shield, FileSpreadsheet, Compass, Settings, ChevronDown, Check, ArrowRight, Plane, Landmark, Sparkles } from "lucide-react";
import Link from "next/link";

interface ServiceItem {
  id: string;
  name: string;
  icon: LucideIcon;
  overview: string;
  deliverables: string[];
  timeline: string;
  pricing: string;
  tagline: string;
  href: string;
}

interface ServiceGroup {
  category: string;
  items: ServiceItem[];
}

const serviceGroups: ServiceGroup[] = [
  {
    category: "AI &amp; Regulatory Compliance",
    items: [
      {
        id: "ai-act",
        name: "EU AI Act — Annex IV Technical Documentation",
        icon: Shield,
        tagline: "EU Reg. 2024/1689 Article 9–15 requirements",
        overview: "Full technical documentation pack for High-Risk AI systems. Includes systematic risk management structures, detailed data governance records, data provenance logs, system architecture metrics, and human oversight strategy sheets cited article-by-article.",
        deliverables: [
          "Annex IV technical file assembly",
          "Article 9 Risk Management System template",
          "Article 10 Data Governance & Provenance log",
          "Article 14 Human Oversight operational guide",
        ],
        timeline: "15 business days",
        pricing: "$1,200 / system",
        href: "/services/eu-ai-act",
      },
      {
        id: "nis2",
        name: "NIS2 Cybersecurity Governance Pack",
        icon: Compass,
        tagline: "EU Dir. 2022/2555 security infrastructure",
        overview: "Drafting internal policies for cybersecurity risk management, incident classification models, and supply chain security frameworks aligned to NIS2 essential and important entity definitions.",
        deliverables: [
          "ICT security policy documentation",
          "Incident classification and report worksheets",
          "Supply-chain vendor assessment criteria",
        ],
        timeline: "10 business days",
        pricing: "Quoted per scope",
        href: "/services/nis2",
      },
      {
        id: "soc2",
        name: "SOC 2 Readiness Documentation",
        icon: Settings,
        tagline: "Trust Services Criteria control narratives",
        overview: "Structured control descriptions, employee handbook security additions, and system architectural reports mapped to Trust Services Criteria. Preparing client evidence repositories ahead of third-party audit.",
        deliverables: [
          "SOC 2 system description narrative",
          "Standard operating procedure logs",
          "Security control documentation audit files",
        ],
        timeline: "14 business days",
        pricing: "Quoted per scope",
        href: "/services/soc2",
      },
    ],
  },
  {
    category: "Bids, Grants &amp; Tenders",
    items: [
      {
        id: "rfp",
        name: "RFP &amp; RFQ Response Writing",
        icon: FileSpreadsheet,
        tagline: "High-scoring technical narratives for public tenders",
        overview: "Drafting full technical responses, method statements, and regulatory compliance files for major RFPs and RFQs. Structured point-by-point against the scoring rubrics of government and enterprise procurement teams.",
        deliverables: [
          "Technical capability response statements",
          "Methodology and resource deployment chapters",
          "Compliance matrix alignment logs",
        ],
        timeline: "Aligned to bid deadline",
        pricing: "Quoted per submission",
        href: "/services/rfp",
      },
      {
        id: "grants",
        name: "Government Grant Applications",
        icon: Landmark,
        tagline: "Outcome-driven funding proposals",
        overview: "Creating robust funding narratives, budget justifications, and project impact frameworks. Structured to address public funding assessment criteria explicitly.",
        deliverables: [
          "Grant narrative proposals",
          "Budget justification spreadsheets",
          "Work package and outcome templates",
        ],
        timeline: "Aligned to grant window",
        pricing: "Quoted per application",
        href: "/services/grants",
      },
    ],
  },
  {
    category: "Aviation Operating Manuals",
    items: [
      {
        id: "aviation-manuals",
        name: "Regulatory Aviation Manuals",
        icon: Plane,
        tagline: "EASA, FAA, and ICAO compliant expositions",
        overview: "Comprehensive drafting and revision of operating manuals for Part-145 maintenance, Part-M airworthiness, Flight Operations Manuals, and Safety Management System approvals.",
        deliverables: [
          "Maintenance Organisation Exposition (MOE)",
          "Flight Operations Manual Part A-D chapters",
          "SMS manuals aligned to ICAO Annex 19",
          "Amendment tracker setup",
        ],
        timeline: "20–30 business days",
        pricing: "Quoted per manual",
        href: "/services/aviation-manuals",
      },
    ],
  },
];

export default function ServicesPage() {
  const [expandedId, setExpandedId] = useState<string | null>("ai-act");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-24"
      >
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-primary dark:text-primary-light badge-primary px-3 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5" /> Services Portfolio
        </span>
        <h1 className="font-serif font-bold tracking-tight text-foreground leading-[1.1]" style={{ fontSize: 'var(--text-h1)' }}>
          Six practices.<br className="hidden md:block" /> Zero template boilerplate.
        </h1>
        <p className="text-base md:text-lg text-text-body leading-relaxed max-w-2xl mx-auto">
          We extract evidence directly from your system architecture or proposal draft to satisfy exact evaluators, inspectors, or regulators.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="space-y-20 md:space-y-24 max-w-5xl mx-auto">
        {serviceGroups.map((group, gIdx) => (
          <motion.div 
            key={group.category} 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + (gIdx * 0.1), duration: 0.5 }}
            className="space-y-8"
          >
            <h2 
              className="font-mono text-xs font-semibold uppercase tracking-widest text-text-subtle border-b border-border pb-4"
              dangerouslySetInnerHTML={{ __html: group.category }}
            />
            
            <div className="grid grid-cols-1 gap-6">
              {group.items.map((item) => {
                const IconComp = item.icon;
                const isExpanded = expandedId === item.id;

                return (
                  <div
                    key={item.id}
                    className={`bg-card border rounded-card shadow-premium overflow-hidden transition-all duration-300 card-lift ${
                      isExpanded ? "border-primary/40 shadow-card-hover" : "border-border/60 hover:border-primary/30"
                    }`}
                  >
                    {/* Header Trigger */}
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded-t-card"
                      aria-expanded={isExpanded}
                      aria-controls={`panel-${item.id}`}
                    >
                      <div className="flex items-center gap-5 w-full md:w-auto">
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${isExpanded ? "bg-primary text-white shadow-glow" : "bg-primary/10 text-primary dark:text-primary-light"}`}>
                          <IconComp className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 
                            className="font-serif text-xl font-bold text-foreground leading-tight"
                            dangerouslySetInnerHTML={{ __html: item.name }}
                          />
                          <p className="text-sm text-text-muted mt-1">{item.tagline}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 shrink-0 w-full md:w-auto justify-between md:justify-end ml-0 border-t border-border/50 pt-4 md:pt-0 md:border-0">
                        <div className="text-left sm:text-right w-full sm:w-auto flex justify-between sm:block">
                          <span className="text-[10px] uppercase tracking-wider font-mono text-text-subtle block mb-0.5">Duration</span>
                          <span className="text-sm font-semibold text-foreground">{item.timeline}</span>
                        </div>
                        <div className="text-left sm:text-right w-full sm:w-auto flex justify-between sm:block">
                          <span className="text-[10px] uppercase tracking-wider font-mono text-text-subtle block mb-0.5">Fee Model</span>
                          <span className="text-sm font-semibold text-foreground">{item.pricing}</span>
                        </div>
                        <div className={`h-8 w-8 shrink-0 rounded-full flex items-center justify-center transition-colors ${isExpanded ? "bg-primary/10 text-primary" : "bg-muted text-text-muted"}`}>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                        </div>
                      </div>
                    </button>

                    {/* Expandable Section */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={`panel-${item.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="border-t border-border p-6 md:p-8 bg-muted/30">
                            
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                              
                              {/* Left column: Overview */}
                              <div className="lg:col-span-7 space-y-4">
                                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-text-muted block">
                                  Scope Overview
                                </span>
                                <p className="text-sm text-text-body leading-relaxed">
                                  {item.overview}
                                </p>
                              </div>

                              {/* Right column: Deliverables */}
                              <div className="lg:col-span-5 space-y-4">
                                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-text-muted block">
                                  Key Deliverables
                                </span>
                                <ul className="space-y-3 text-sm text-text-body leading-relaxed">
                                  {item.deliverables.map((deliv, dIdx) => (
                                    <li key={dIdx} className="flex gap-3 items-start">
                                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5">
                                        <Check className="w-3 h-3 text-primary dark:text-primary-light" />
                                      </span>
                                      <span>{deliv}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                            </div>

                            {/* Action Row */}
                            <div className="border-t border-border pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                              <p className="text-xs text-text-subtle font-mono">
                                Pre-requisite: Non-disclosure agreement required.
                              </p>
                              <div className="flex gap-3 w-full sm:w-auto">
                                <Link
                                  href={item.href}
                                  className="flex-1 sm:flex-none inline-flex justify-center items-center gap-1.5 bg-background border border-border hover:border-primary/40 text-foreground hover:text-primary transition-all duration-200 text-sm font-semibold py-2.5 px-5 rounded-btn shadow-sm group"
                                >
                                  Detailed Spec
                                  <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                                </Link>
                                <Link
                                  href="/contact"
                                  className="flex-1 sm:flex-none btn-primary inline-flex justify-center items-center gap-1.5 text-sm font-semibold py-2.5 px-5 rounded-btn group"
                                >
                                  Book Scope Call
                                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                              </div>
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
