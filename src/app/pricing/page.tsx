"use client";

import React from "react";

import { useState } from "react";
import Link from "next/link";
import { Check, Info, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Tier {
  name: string;
  price: string;
  tagline: string;
  period: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Consultation",
    price: "$75",
    tagline: "Applicability & classification check",
    period: "per session",
    features: [
      "60-minute classification call",
      "Annex III classification check",
      "Applicability walkthrough",
      "Written advisory brief in 24 hours",
    ],
    cta: "Book Consultation",
  },
  {
    name: "Core Pack",
    price: "$1,200",
    tagline: "Annex IV compliance for one system",
    period: "per project",
    popular: true,
    features: [
      "Full Annex IV technical structure",
      "Article 9 Risk Management System",
      "Data governance check (Article 10)",
      "Technical file assembly (15 business days)",
      "1 revision checkpoint",
    ],
    cta: "Request Core Pack",
  },
  {
    name: "Premium Pack",
    price: "$2,200",
    tagline: "Full provider documentation package",
    period: "per project",
    features: [
      "Annex IV + Quality Management (Art 17)",
      "Human oversight strategy (Article 14)",
      "Post-market monitoring plan (Article 61)",
      "Accuracy & robustness files (Article 15)",
      "Full provider package (21 business days)",
      "2 revision checkpoints",
    ],
    cta: "Request Premium Pack",
  },
  {
    name: "Enterprise",
    price: "Custom",
    tagline: "Multi-system portfolios & advanced standards",
    period: "quoted scope",
    features: [
      "Multi-system portfolio audits",
      "ISO/IEC 42001 & 23894 integration",
      "NIS2 & DORA resilience mapping",
      "Dedicated review workshops",
      "Continuous regulatory updates",
      "Direct phone/Slack advisory queue",
    ],
    cta: "Inquire Custom Scope",
  },
];

interface ComparisonCategory {
  title: string;
  features: {
    name: string;
    consultation: string | boolean;
    core: string | boolean;
    premium: string | boolean;
    enterprise: string | boolean;
    hint?: string;
  }[];
}

const comparisonData: ComparisonCategory[] = [
  {
    title: "Document Outputs",
    features: [
      { name: "Risk applicability memo", consultation: "Yes", core: "Yes", premium: "Yes", enterprise: "Yes" },
      { name: "Annex IV technical file", consultation: false, core: "Yes (Full)", premium: "Yes (Full)", enterprise: "Yes (Multi)" },
      { name: "Article 9 risk management framework", consultation: false, core: "Standard", premium: "Enhanced", enterprise: "Tailored" },
      { name: "Post-market monitoring plan", consultation: false, core: false, premium: "Yes", enterprise: "Yes" },
      { name: "Article 17 Quality Management System", consultation: false, core: false, premium: "Yes", enterprise: "Yes" },
      { name: "ISO/IEC 42001 mapping matrix", consultation: false, core: false, premium: false, enterprise: "Yes" },
    ],
  },
  {
    title: "Drafting & Turnaround",
    features: [
      { name: "Session duration", consultation: "60 mins", core: "15 business days", premium: "21 business days", enterprise: "Custom", hint: "Scoping begins upon receipt of all technical schematics" },
      { name: "Revision cycles Included", consultation: "0", core: "1", premium: "2", enterprise: "Unlimited" },
      { name: "Advisory channels", consultation: "Email", core: "Email / Portal", premium: "Email / Call", enterprise: "Direct Line & Slack" },
    ],
  },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"onetime" | "retainer">("onetime");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary dark:text-primary-light">
          Practice Pricing
        </span>
        <h1 className="font-serif font-bold tracking-tight text-dark dark:text-white" style={{ fontSize: 'var(--text-h1)' }}>
          Authoritative compliance, predictable rates.
        </h1>
        <p className="text-base text-text-muted leading-relaxed">
          Select standard document packages designed directly around EU AI Act Annex IV parameters, or choose custom scopes for enterprise systems.
        </p>

        {/* Pricing Toggle */}
        <div className="pt-4 flex justify-center">
          <div className="inline-flex items-center gap-1 bg-white/50 dark:bg-card/50 border border-border/60 p-1.5 rounded-full shadow-sm">
            <button
              onClick={() => setBillingPeriod("onetime")}
              className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all ${
                billingPeriod === "onetime"
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-muted hover:text-dark dark:hover:text-white"
              }`}
            >
              One-Time Projects
            </button>
            <button
              onClick={() => setBillingPeriod("retainer")}
              className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all ${
                billingPeriod === "retainer"
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-muted hover:text-dark dark:hover:text-white"
              }`}
            >
              Compliance Retainers
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16 sm:mb-20 lg:mb-24">
        {tiers.map((tier) => {
          // Adjust price display for retainer mode
          let displayPrice = tier.price;
          let displayPeriod = tier.period;
          if (billingPeriod === "retainer") {
            if (tier.name === "Core Pack") {
              displayPrice = "$350";
              displayPeriod = "per month";
            } else if (tier.name === "Premium Pack") {
              displayPrice = "$600";
              displayPeriod = "per month";
            } else if (tier.name === "Consultation") {
              displayPrice = "$150";
              displayPeriod = "2 sessions/mo";
            }
          }

          return (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`flex flex-col justify-between bg-white dark:bg-card border rounded-card p-6 shadow-premium relative ${
                tier.popular ? "border-primary ring-1 ring-primary/45" : "border-border/60"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-primary text-white">
                  Most Requested
                </span>
              )}
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-bold text-dark dark:text-white">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed mt-1 min-h-[32px]">
                    {tier.tagline}
                  </p>
                </div>

                <div className="flex items-baseline gap-1 border-b border-border/40 pb-6">
                  <span className="font-serif text-3xl font-extrabold text-dark dark:text-white">
                    {displayPrice}
                  </span>
                  <span className="text-xs font-mono text-text-muted">
                    /{displayPeriod}
                  </span>
                </div>

                <ul className="space-y-3.5 text-xs text-text-muted leading-relaxed">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex gap-2.5 items-start">
                      <Check className="w-3.5 h-3.5 text-primary dark:text-primary-light shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href="/contact"
                  className={`w-full text-center inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-3 px-4 rounded-btn transition-colors ${
                    tier.popular
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "bg-muted text-dark dark:text-white hover:bg-border/60"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Comparison Table */}
      <div className="space-y-8 max-w-5xl mx-auto">
        <div className="text-center space-y-2">
          <h2 className="font-serif font-bold text-dark dark:text-white" style={{ fontSize: 'var(--text-h2)' }}>
            Feature Comparison Matrix
          </h2>
          <p className="text-sm text-text-muted">
            Detailed breakdown of deliverables and service boundaries across tiers.
          </p>
        </div>

        <div className="border border-border/60 rounded-card bg-white dark:bg-card shadow-premium overflow-hidden">
          <div className="overflow-x-auto w-full scrollbar-thin">
            <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-border/60 bg-muted/40 font-serif text-sm text-dark dark:text-white">
                <th className="p-5 font-semibold">Service Parameters</th>
                <th className="p-5 font-semibold">Consultation</th>
                <th className="p-5 font-semibold">Core Pack</th>
                <th className="p-5 font-semibold">Premium Pack</th>
                <th className="p-5 font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 text-xs text-text-muted">
              {comparisonData.map((category) => (
                <React.Fragment key={category.title}>
                  <tr className="bg-muted/10 font-mono text-[10px] uppercase tracking-wider text-dark dark:text-white">
                    <td colSpan={5} className="px-5 py-3 font-semibold">
                      {category.title}
                    </td>
                  </tr>
                  {category.features.map((row) => (
                    <tr key={row.name} className="hover:bg-muted/5 transition-colors">
                      <td className="p-5 font-medium text-dark dark:text-white flex items-center gap-2">
                        {row.name}
                        {row.hint && (
                          <div className="group relative">
                            <Info className="w-3.5 h-3.5 text-text-muted hover:text-dark dark:hover:text-white cursor-pointer" />
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block w-48 p-2 bg-dark text-white dark:bg-white dark:text-dark text-[10px] leading-normal rounded-lg shadow-md z-10">
                              {row.hint}
                            </span>
                          </div>
                        )}
                      </td>
                      <td className="p-5">
                        {typeof row.consultation === "boolean" ? (row.consultation ? "✓" : "—") : row.consultation}
                      </td>
                      <td className="p-5">
                        {typeof row.core === "boolean" ? (row.core ? "✓" : "—") : row.core}
                      </td>
                      <td className="p-5">
                        {typeof row.premium === "boolean" ? (row.premium ? "✓" : "—") : row.premium}
                      </td>
                      <td className="p-5">
                        {typeof row.enterprise === "boolean" ? (row.enterprise ? "✓" : "—") : row.enterprise}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    </div>
  );
}

