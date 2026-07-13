import { Metadata } from "next";
import Link from "next/link";
import { Settings, ArrowRight, Shield, Server, FileText, Clock, DollarSign, Lock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "SOC 2 Readiness Narratives & Documentation",
  description:
    "Structured control descriptions, SOPs, and system narratives mapped to AICPA Trust Services Criteria ahead of third-party audit.",
};

const deliverables = [
  {
    icon: FileText,
    title: "System Description Narrative",
    desc: "A comprehensive written overview of your service commitments, system boundaries, and logical architectures structured for the auditor's reading.",
  },
  {
    icon: Lock,
    title: "Control Evidence Documentation",
    desc: "Detailed written accounts of how logical access controls, encryption standards, and physical security measures are implemented to meet the Security criteria.",
  },
  {
    icon: Server,
    title: "Availability & Processing Integrity Logs",
    desc: "Documenting backup protocols, failover mechanisms, and data processing validation steps to satisfy additional Trust Services Criteria if elected.",
  },
  {
    icon: Shield,
    title: "Security SOP Handbook",
    desc: "Employee-facing acceptable use, onboarding/offboarding, and incident response procedures aligned directly to your stated controls.",
  },
];

const faqs = [
  {
    q: "Does ComplDoc perform the SOC 2 audit?",
    a: "No. ComplDoc is a documentation firm. We write the narratives, control descriptions, and SOPs that you will hand over to your certified CPA firm (the auditor) who will perform the actual Type I or Type II assessment.",
  },
  {
    q: "Why do we need a writer if we have security tools?",
    a: "Automated compliance platforms (like Vanta or Drata) collect technical evidence, but auditors still require a comprehensive, well-written 'System Description' and narrative context. We write the document that wraps around your technical evidence.",
  },
  {
    q: "Do you write for Type I or Type II?",
    a: "Both. We draft the initial readiness narratives and control design descriptions needed for a Type I audit, and we can help structure the operational logs required to prove compliance over time for a Type II audit.",
  },
];

export default function Soc2Page() {
  return (
    <div className="pb-24 overflow-hidden relative">
      
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      {/* Hero */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="badge-primary inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" /> AI &amp; Regulatory Compliance
              </span>
              <span className="font-mono text-[10px] text-text-subtle border border-border rounded-full px-2.5 py-1">
                AICPA Trust Services Criteria
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              SOC 2 Readiness Narratives &amp; Documentation
            </h1>
            <p className="text-lg text-text-body leading-relaxed">
              Automated platforms collect your technical evidence. We write the auditor-facing narratives, system descriptions, and control design documents required to pass.
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
            { icon: Clock, label: "Delivery", value: "14 business days" },
            { icon: DollarSign, label: "Pricing", value: "Quoted per scope" },
            { icon: Settings, label: "Framework", value: "SOC 2 (Type I / II)" },
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

        {/* Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-primary">The Gap</span>
            <h2 className="font-serif text-3xl font-bold text-foreground leading-tight">
              Tools don&apos;t write narratives. We do.
            </h2>
            <p className="text-sm text-text-body leading-relaxed">
              SaaS compliance tools are excellent for mapping endpoints and verifying configurations. However, auditors require a comprehensive written System Description detailing the physical, logical, and organisational boundaries of your service.
            </p>
            <p className="text-sm text-text-body leading-relaxed">
              We extract this information from your engineering leads and draft the formal prose required to supplement your technical dashboard.
            </p>
          </div>
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-text-muted border-b border-border pb-4">
              Core Deliverables
            </h3>
            <div className="grid grid-cols-1 gap-6 pt-2">
              {deliverables.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-card border border-border rounded-card p-6 md:p-8 shadow-premium hover:border-primary/30 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start">
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
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto space-y-8 bg-background py-10">
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
            <h3 className="font-serif text-3xl font-bold text-foreground">Prepare your narratives for audit.</h3>
            <p className="text-base text-text-body leading-relaxed">Let your engineers build while we document your system boundaries and controls.</p>
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
