import { Metadata } from "next";
import Link from "next/link";
import { Compass, ArrowRight, Shield, Server, Network, FileWarning, Clock, DollarSign, ExternalLink, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "NIS2 Cybersecurity Governance Documentation",
  description:
    "ICT risk management policies, incident classification procedures and supply chain security frameworks aligned to the NIS2 Directive (EU) 2022/2555.",
};

const deliverables = [
  {
    icon: Shield,
    title: "ICT Risk Management Framework",
    desc: "A structured policy document covering the risk identification methodology, control selection criteria, and residual risk acceptance process required under Article 21(2)(a).",
  },
  {
    icon: FileWarning,
    title: "Incident Classification & Reporting Procedures",
    desc: "Step-by-step incident detection, classification, escalation, and notification procedures aligned to the significant incident thresholds and 24/72-hour reporting windows under Articles 23–24.",
  },
  {
    icon: Network,
    title: "Supply Chain Security Policy",
    desc: "Vendor assessment criteria, contractual security requirement templates, and supply chain risk monitoring procedures covering Article 21(2)(d) obligations.",
  },
  {
    icon: Server,
    title: "Business Continuity & Crisis Management Plans",
    desc: "Documented backup policies, disaster recovery procedures, and crisis management playbooks satisfying Article 21(2)(c) requirements.",
  },
];

const entityTypes = [
  {
    type: "Essential Entities",
    sectors: ["Energy", "Transport", "Banking", "Health", "Digital Infrastructure", "Water"],
    note: "Subject to proactive supervisory regime and stricter enforcement.",
  },
  {
    type: "Important Entities",
    sectors: ["Postal services", "Waste management", "Chemical manufacturing", "Food production", "Digital services"],
    note: "Subject to reactive supervisory regime; same technical obligations apply.",
  },
];

const faqs = [
  {
    q: "Who must comply with NIS2?",
    a: "NIS2 applies to medium and large entities operating in 18 critical sectors across the EU. Member states must also identify additional entities that meet the size cap thresholds. The Directive came into effect 17 October 2024.",
  },
  {
    q: "Does ComplDoc provide legal compliance certification for NIS2?",
    a: "No. ComplDoc drafts the governance policy documentation that forms your evidence of compliance. Legal sign-off on interpretation and formal NIS2 registration with national competent authorities remains with you and your legal counsel.",
  },
  {
    q: "What's the difference between Essential and Important entities?",
    a: "Essential entities face proactive supervision by national authorities; Important entities face reactive supervision (triggered by incidents or complaints). Both categories carry the same technical security obligations under Article 21.",
  },
];

export default function Nis2Page() {
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
                Directive (EU) 2022/2555
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              NIS2 Cybersecurity Governance Documentation
            </h1>
            <p className="text-lg text-text-body leading-relaxed">
              ICT risk management frameworks, incident classification procedures, and supply chain security policies drafted for essential and important entities under the NIS2 Directive.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-sm font-semibold py-3 px-6 rounded-btn shadow-sm group">
                Request This Service <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-background border border-border hover:border-primary/40 transition-all text-sm font-semibold py-3 px-6 rounded-btn text-foreground hover:text-primary group">
                All Services <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 pt-20">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: Clock, label: "Delivery", value: "10 business days" },
            { icon: DollarSign, label: "Pricing", value: "Quoted per scope" },
            { icon: Compass, label: "Directive", value: "NIS2 / Art. 21–24" },
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

        {/* Entity Types */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-primary">Entity Classification</span>
            <h2 className="font-serif text-3xl font-bold text-foreground leading-tight">
              Does your organisation fall under NIS2?
            </h2>
            <p className="text-sm text-text-body leading-relaxed">
              NIS2 applies to mid-size and large organisations in 18 critical sectors. Both essential and important entities must implement the same Article 21 cybersecurity measures.
            </p>
            <a
              href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022L2555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary dark:text-primary-light hover:underline link-underline group mt-2"
            >
              Read Directive (EU) 2022/2555 <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-text-muted border-b border-border pb-4">
              Sector Scope
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {entityTypes.map((et) => (
                <div key={et.type} className="bg-card border border-border rounded-card p-6 shadow-premium hover:border-primary/30 transition-all duration-300 space-y-4">
                  <h3 className="font-serif text-lg font-bold text-foreground">{et.type}</h3>
                  <div className="flex flex-wrap gap-2">
                    {et.sectors.map((s) => (
                      <span key={s} className="text-[10px] font-mono bg-muted border border-border/60 rounded-lg px-2.5 py-1 text-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed border-t border-border pt-4 mt-2">{et.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="space-y-10 bg-background py-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-primary">Deliverables</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Documentation produced under this engagement.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliverables.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-card border border-border rounded-card p-6 md:p-8 shadow-premium flex gap-5 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:text-primary-light shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-lg font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-text-body leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center">Common Questions</h2>
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
          <div className="absolute inset-0 texture-noise opacity-50" />
          
          <div className="space-y-3 max-w-xl relative z-10">
            <h3 className="font-serif text-3xl font-bold text-foreground">Ready to begin your NIS2 governance pack?</h3>
            <p className="text-base text-text-body leading-relaxed">We scope NIS2 engagements against your sector and entity size before committing to a fixed quote.</p>
          </div>
          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <Link href="/contact" className="btn-primary w-full md:w-auto inline-flex justify-center items-center gap-2 text-sm font-semibold py-3.5 px-7 rounded-btn shadow-lg group">
              Request Scope Call <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
