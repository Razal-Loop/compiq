"use client";

import { Heart, Users, Landmark, Shield, Factory, Plane, Landmark as FinanceIcon, ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Industry {
  name: string;
  icon: LucideIcon;
  challenges: string[];
  regulations: string[];
  services: string[];
}

const industries: Industry[] = [
  {
    name: "Healthcare AI",
    icon: Heart,
    challenges: [
      "Clinical risk classification under medical device rules",
      "Model validation for diagnostic decision support systems",
      "Rigid audit paths for notified body conformity checks",
    ],
    regulations: ["EU AI Act Annex III (Medical Device overlaps)", "MDR/IVDR compliance guidelines", "GDPR Article 35 (DPIA)"],
    services: ["Core Annex IV Technical Pack", "ISO/IEC 42001 system scoping", "GDPR Data Impact Assessments"],
  },
  {
    name: "HR & Recruitment AI",
    icon: Users,
    challenges: [
      "Explicitly categorized as High-Risk (Annex III, Item 4)",
      "Mandatory audits for gender and racial bias mitigation",
      "Drafting transparent notices for candidates (Article 50)",
    ],
    regulations: ["EU AI Act Article 9 & Annex III", "GDPR Article 22 (Automated decisions)", "Employment parity standards"],
    services: ["Core Annex IV Technical Pack", "Transparency notices drafting", "Bias assessment framework setup"],
  },
  {
    name: "Aviation Operator",
    icon: Plane,
    challenges: [
      "Strict inspector checks against AOC (Air Operator Certificate) structures",
      "Complex manuals requiring constant amendment tracking",
      "Risk assessment mappings for safety management",
    ],
    regulations: ["EASA Part-145 & Part-M guidelines", "FAA operating regulations", "ICAO Annex 19 SMS mandates"],
    services: ["Flight Operations Manuals (F.O.M.)", "Maintenance Organisation Exposition (MOE)", "SMS manual formation"],
  },
  {
    name: "Defense & Strategic Tech",
    icon: Shield,
    challenges: [
      "Exclusions analysis under military/defense act categories",
      "Technical specifications files for defense supply procurement",
      "Rigid security credentials & NIS2 cybersecurity overlays",
    ],
    regulations: ["EU AI Act Article 2 exceptions", "NIS2 cybersecurity framework", "Mil-spec procurement standards"],
    services: ["Tender response writing", "NIS2 cybersecurity governance files", "Technical brief packaging"],
  },
  {
    name: "Financial Services AI",
    icon: FinanceIcon,
    challenges: [
      "High-risk classification for credit scoring systems",
      "Algorithmic decision documentation for compliance audits",
      "Resilience mapping overlays for critical ICT operations",
    ],
    regulations: ["EU AI Act credit rating overlaps", "DORA (Digital Operational Resilience Act)", "MIFID II compliance matrices"],
    services: ["Core Annex IV Technical Pack", "DORA operational resilience files", "Tender & proposal writing"],
  },
  {
    name: "Manufacturing & Industrial AI",
    icon: Factory,
    challenges: [
      "Safety-component classification under machinery standards",
      "Risk mitigation documentation for cobots & automated lines",
      "Procurement bids mapping onto public contract rubrics",
    ],
    regulations: ["EU AI Act machinery safety exceptions", "Machinery Regulation (EU) 2023/1230", "ISO 12100 risk management"],
    services: ["Core Annex IV Technical Pack", "Tender response packages", "Operating manuals creation"],
  },
  {
    name: "Government & Public Sector",
    icon: Landmark,
    challenges: [
      "Highly complex bid specifications scored against fixed rubrics",
      "Mandatory compliance matrices mapping every point in the brief",
      "Strict data classification and procurement restrictions",
    ],
    regulations: ["Public procurement directives", "Government grant guidelines", "National cybersecurity policies"],
    services: ["RFP & RFQ response packages", "Government grant applications", "Compliance matrices formulation"],
  },
];

export default function IndustriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary dark:text-primary-light">
          Target Sectors
        </span>
        <h1 className="font-serif font-bold tracking-tight text-dark dark:text-white" style={{ fontSize: 'var(--text-h1)' }}>
          Tailored to your industry&apos;s regulatory pressure.
        </h1>
        <p className="text-base text-text-muted leading-relaxed">
          Different domains face different evaluators. We map technical capabilities onto the exact checklist your industry is scored against.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {industries.map((ind, idx) => {
          const IconComp = ind.icon;
          return (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
              className="bg-white dark:bg-card border border-border/60 rounded-card p-6 md:p-8 flex flex-col justify-between shadow-premium hover:shadow-lg transition-all duration-300 group"
            >
              <div className="space-y-6">
                
                {/* Industry Name & Icon */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary dark:text-primary-light group-hover:bg-primary/10 transition-colors">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-dark dark:text-white">
                    {ind.name}
                  </h3>
                </div>

                {/* Challenges */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted block">
                    Key Challenges
                  </span>
                  <ul className="space-y-1.5 text-xs text-text-muted leading-relaxed">
                    {ind.challenges.map((chal, cIdx) => (
                      <li key={cIdx} className="flex gap-2 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 dark:bg-primary-light/40 shrink-0 mt-1.5" />
                        <span>{chal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Regulations */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted block">
                    Target Regulations
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.regulations.map((reg) => (
                      <span key={reg} className="bg-muted text-[10px] font-mono font-medium px-2 py-0.5 rounded-lg text-dark dark:text-white border border-border/40">
                        {reg}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted block">
                    Recommended Services
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.services.map((service) => (
                      <span key={service} className="bg-primary/5 text-[10px] font-semibold px-2 py-0.5 rounded-lg text-primary dark:text-primary-light border border-primary/5">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action */}
              <div className="pt-8 border-t border-border/40 mt-8 flex justify-between items-center">
                <span className="text-xs text-text-muted group-hover:text-dark dark:group-hover:text-white transition-colors">
                  Need an industry scope?
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-primary dark:text-primary-light hover:underline"
                >
                  Configure brief
                  <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>

            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
