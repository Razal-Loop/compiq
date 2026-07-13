import { Metadata } from "next";
import Link from "next/link";
import { Plane, ArrowRight, ShieldCheck, Wrench, BookOpen, AlertCircle, Clock, DollarSign, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Regulatory Aviation Manuals",
  description:
    "EASA, FAA, and ICAO compliant expositions. Comprehensive drafting and revision of operating manuals for Part-145 maintenance, Part-M airworthiness, and Safety Management Systems.",
};

const deliverables = [
  {
    icon: Wrench,
    title: "Maintenance Organisation Exposition (MOE)",
    desc: "Detailed drafting of Part-145 compliant MOE chapters, covering management structures, maintenance procedures, and quality systems.",
  },
  {
    icon: BookOpen,
    title: "Flight Operations Manuals (OM A-D)",
    desc: "Complete operational manual authoring including general policies (Part A), aircraft operating matters (Part B), route instructions (Part C), and training (Part D).",
  },
  {
    icon: ShieldCheck,
    title: "Safety Management Systems (SMS)",
    desc: "ICAO Annex 19 and EASA compliant SMS manual drafting, including hazard identification and safety risk mitigation protocols.",
  },
  {
    icon: AlertCircle,
    title: "Continuous Airworthiness (CAME)",
    desc: "Part-M Continuing Airworthiness Management Expositions structuring your fleet airworthiness control and oversight procedures.",
  },
];

export default function AviationManualsPage() {
  return (
    <div className="pb-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] -z-10" />

      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="badge-primary !bg-indigo-500/10 !text-indigo-600 dark:!text-indigo-400 !border-indigo-500/20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" /> Aviation Operating Manuals
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Regulatory Aviation Manuals
            </h1>
            <p className="text-lg text-text-body leading-relaxed">
              Precision drafting of MOE, CAME, SMS, and Operations manuals. We map your internal procedures directly against EASA, FAA, and ICAO requirements for regulatory approval.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="btn-primary !bg-indigo-600 hover:!bg-indigo-700 !shadow-indigo-500/20 inline-flex items-center gap-2 text-sm font-semibold py-3 px-6 rounded-btn shadow-sm group">
                Request Manual Drafting <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-background border border-border hover:border-indigo-500/40 transition-all text-sm font-semibold py-3 px-6 rounded-btn text-foreground hover:text-indigo-600 group">
                All Services <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 pt-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: Clock, label: "Timeline", value: "20-30 business days" },
            { icon: DollarSign, label: "Pricing", value: "Quoted per manual" },
            { icon: Plane, label: "Framework", value: "EASA / FAA / ICAO" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-card border border-border rounded-card p-6 shadow-premium card-lift space-y-3">
              <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <div>
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-1">{label}</p>
                <p className="font-serif text-base font-bold text-foreground">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">The Requirement</span>
            <h2 className="font-serif text-3xl font-bold text-foreground leading-tight">
              Aviation authorities approve processes, not promises.
            </h2>
            <p className="text-sm text-text-body leading-relaxed">
              Gaining Part-145, Part-M or AOC certification requires exhaustive documentation of how your organisation operates safely and compliantly.
            </p>
            <p className="text-sm text-text-body leading-relaxed">
              We act as an extension of your Compliance Monitoring department, drafting manuals that bridge the gap between how your mechanics and pilots operate, and what the regulatory inspector demands to see.
            </p>
          </div>
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-text-muted border-b border-border pb-4">
              Documentation Types
            </h3>
            <div className="grid grid-cols-1 gap-6 pt-2">
              {deliverables.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-card border border-border rounded-card p-6 md:p-8 shadow-premium hover:border-indigo-500/30 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
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

        <section className="bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 rounded-card p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-premium relative overflow-hidden">
          <div className="absolute inset-0 texture-noise opacity-50" />
          <div className="space-y-3 max-w-xl relative z-10">
            <h3 className="font-serif text-3xl font-bold text-foreground">Need a new manual or major revision?</h3>
            <p className="text-base text-text-body leading-relaxed">Let us know which regulation you are targeting (e.g. EASA Part-145, FAA Part 135) and we will provide a scope of work.</p>
          </div>
          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <Link href="/contact" className="btn-primary !bg-indigo-600 hover:!bg-indigo-700 w-full md:w-auto inline-flex justify-center items-center gap-2 text-sm font-semibold py-3.5 px-7 rounded-btn shadow-lg group">
              Request Aviation Scope <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
