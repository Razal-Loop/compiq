import { Metadata } from "next";
import Link from "next/link";
import { Shield, Check, ArrowRight, FileText, AlertTriangle, BarChart3, Clock, DollarSign, ExternalLink, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "EU AI Act — Annex IV Technical Documentation",
  description:
    "Complete Annex IV technical documentation for high-risk AI systems under EU Regulation 2024/1689. Articles 9–15 compliance files drafted from primary regulatory text.",
};

const deliverables = [
  {
    article: "Article 9",
    title: "Risk Management System",
    desc: "A systematic, iterative risk identification and mitigation framework documenting probability matrices, residual safety levels, and post-deployment monitoring triggers.",
  },
  {
    article: "Article 10",
    title: "Data Governance & Provenance Log",
    desc: "Full data lifecycle records covering training data origins, bias mitigation measures, data quality indicators, and validation set construction.",
  },
  {
    article: "Article 11",
    title: "Technical File Assembly",
    desc: "Annex IV structural documentation compiling all required technical components into a single inspection-ready file meeting the provider's technical documentation obligation.",
  },
  {
    article: "Article 12",
    title: "Logging & Record-Keeping Configuration",
    desc: "Automated logging strategy documentation covering events capture scope, retention policy, and incident trace requirements for market surveillance.",
  },
  {
    article: "Article 13",
    title: "Transparency & User Information",
    desc: "End-user disclosure documentation including system capability statements, limitations disclosures, and Article 13 obligation compliance briefs.",
  },
  {
    article: "Article 14",
    title: "Human Oversight Operational Guide",
    desc: "Documented human oversight architecture mapping decision points, override mechanisms, and roles responsible for AI system monitoring.",
  },
  {
    article: "Article 15",
    title: "Accuracy, Robustness & Cybersecurity",
    desc: "Performance validation records, adversarial robustness test summaries, and security boundary documentation aligned to the system's operational context.",
  },
];

const packages = [
  {
    name: "Basic",
    price: "$650",
    period: "per system",
    note: "Sections 1–2 only",
    features: [
      "Annex IV Sections 1 and 2",
      "System description and general documentation",
      "Design specification summary",
    ],
  },
  {
    name: "Standard",
    price: "$1,200",
    period: "per system",
    note: "Full Annex IV",
    popular: true,
    features: [
      "Complete Annex IV technical file",
      "Article 9 Risk Management System",
      "Article 10 Data Governance log",
      "Article 14 Human Oversight guide",
      "15 business-day delivery",
    ],
  },
  {
    name: "Premium",
    price: "$2,200",
    period: "per system",
    note: "Full provider package",
    features: [
      "Everything in Standard",
      "Article 12 logging configuration",
      "Article 15 robustness documentation",
      "Post-market monitoring plan (Article 61)",
      "Quality Management System (Article 17)",
      "21 business-day delivery",
    ],
  },
];

const faqs = [
  {
    q: "Does ComplDoc certify compliance with the EU AI Act?",
    a: "No. ComplDoc drafts technical evidence files that your system requires under Article 11 and Annex IV. Formal conformity assessment is conducted by a notified body or through self-assessment — ComplDoc is not a notified body and does not certify compliance.",
  },
  {
    q: "Which AI systems require Annex IV documentation?",
    a: "High-risk AI systems as defined under Annex III of Regulation (EU) 2024/1689 require Annex IV technical documentation before being placed on the market or put into service. This includes AI systems in areas like employment screening, credit scoring, biometric identification, medical devices, and critical infrastructure.",
  },
  {
    q: "Can you work with our internal engineering team?",
    a: "Yes. We coordinate directly with your ML engineers, data scientists, and product leads to extract the technical parameters required. We operate under a mutual NDA and require access to model cards, training data documentation, and system architecture briefs.",
  },
  {
    q: "What if our system changes post-delivery?",
    a: "Substantial modifications to a high-risk AI system may trigger re-documentation obligations under Article 9. We offer a Compliance Maintenance Plan for systems undergoing continuous retraining or architectural updates.",
  },
];

export default function EuAiActPage() {
  return (
    <div className="pb-24 overflow-hidden relative">
      
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      {/* Hero */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="badge-primary inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" /> AI &amp; Regulatory Compliance
              </span>
              <span className="font-mono text-[10px] text-text-subtle border border-border rounded-full px-2.5 py-1">
                Reg. (EU) 2024/1689
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              EU AI Act — Annex IV Technical Documentation
            </h1>
            <p className="text-lg text-text-body leading-relaxed">
              Complete technical documentation for high-risk AI systems. Drafted directly from Articles 9 through 15, structured for the auditor or notified body that will read it.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 text-sm font-semibold py-3 px-6 rounded-btn shadow-sm group"
              >
                Request This Service
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-background border border-border hover:border-primary/40 transition-all text-sm font-semibold py-3 px-6 rounded-btn text-foreground hover:text-primary group"
              >
                All Services
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 pt-20">

        {/* Key Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Clock, label: "Standard delivery", value: "15 business days" },
            { icon: DollarSign, label: "Starting from", value: "$1,200" },
            { icon: FileText, label: "Regulatory basis", value: "Annex IV / Art. 9–15" },
            { icon: BarChart3, label: "Risk tier coverage", value: "High-Risk AI" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-card border border-border rounded-card p-6 shadow-premium card-lift space-y-3">
              <Icon className="w-5 h-5 text-primary dark:text-primary-light" />
              <div>
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-1">{label}</p>
                <p className="font-serif text-base font-bold text-foreground">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What is the EU AI Act obligation? */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-primary">
              The Regulatory Context
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground leading-tight">
              What Annex IV actually requires providers to document.
            </h2>
            <p className="text-sm text-text-body leading-relaxed">
              Article 11 of Regulation (EU) 2024/1689 mandates that providers of high-risk AI systems compile and maintain technical documentation as specified in Annex IV before placing the system on the market or putting it into service.
            </p>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5 text-xs text-red-700 dark:text-red-400 flex gap-4">
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
              <span className="leading-relaxed font-medium">Failure to maintain Annex IV documentation is a market access violation under Article 99 with penalties of up to €15M or 3% of global annual turnover.</span>
            </div>
            <a
              href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary dark:text-primary-light hover:underline link-underline group mt-2"
            >
              Read Regulation (EU) 2024/1689
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-text-muted border-b border-border pb-4">
              Full Article Coverage
            </h3>
            <div className="space-y-4 pt-2">
              {deliverables.map((item) => (
                <div
                  key={item.article}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start bg-card border border-border rounded-xl p-6 shadow-premium hover:shadow-card-hover hover:border-primary/30 transition-all duration-300"
                >
                  <span className="font-mono text-[11px] font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20 shrink-0 whitespace-nowrap">
                    {item.article}
                  </span>
                  <div>
                    <h4 className="font-serif text-base font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-text-body leading-relaxed mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="space-y-12 bg-background py-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-primary">Pricing</span>
            <h2 className="font-serif text-4xl font-bold text-foreground">
              Fixed-scope packages.<br />No surprise invoices.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col justify-between bg-card border rounded-card p-8 shadow-premium relative transition-all duration-300 ${
                  pkg.popular ? "border-primary shadow-glow scale-[1.02]" : "border-border hover:border-primary/30 hover:-translate-y-1"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-primary text-white shadow-lg">
                    Most Requested
                  </span>
                )}
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="font-serif text-2xl font-bold text-foreground">{pkg.name}</h3>
                    <p className="text-xs font-mono text-text-muted mt-1">{pkg.note}</p>
                  </div>
                  <div className="border-y border-border py-6 text-center">
                    <span className="font-serif text-4xl font-extrabold text-foreground">{pkg.price}</span>
                    <span className="text-xs font-mono text-text-muted block mt-1">{pkg.period}</span>
                  </div>
                  <ul className="space-y-4 pt-2">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex gap-3 items-start text-sm text-text-body">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8">
                  <Link
                    href="/contact"
                    className={`w-full text-center inline-flex items-center justify-center gap-2 text-sm font-semibold py-3.5 px-6 rounded-btn transition-all duration-200 group ${
                      pkg.popular
                        ? "btn-primary"
                        : "bg-background border border-border text-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    Request Package <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-premium space-y-3 hover:border-primary/30 transition-colors">
                <h3 className="font-serif text-base md:text-lg font-bold text-foreground flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-sm text-text-body leading-relaxed pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-card p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-premium relative overflow-hidden">
          {/* Noise texture overlay */}
          <div className="absolute inset-0 texture-noise opacity-50" />
          
          <div className="space-y-3 max-w-xl relative z-10">
            <h3 className="font-serif text-3xl font-bold text-foreground">
              Start with a classification call.
            </h3>
            <p className="text-base text-text-body leading-relaxed">
              A 60-minute session confirms whether your system falls under Annex III before any documentation work begins.
            </p>
          </div>
          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="btn-primary w-full md:w-auto inline-flex justify-center items-center gap-2 text-sm font-semibold py-3.5 px-7 rounded-btn shadow-lg group"
            >
              Book Classification Call ($75) <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
