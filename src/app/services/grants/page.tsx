import { Metadata } from "next";
import Link from "next/link";
import { Landmark, ArrowRight, Target, ClipboardList, PieChart, Clock, DollarSign, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Government Grant Applications",
  description:
    "Outcome-driven funding proposals and budget justifications tailored for public sector assessment criteria.",
};

const deliverables = [
  {
    icon: Target,
    title: "Grant Narrative Proposals",
    desc: "Drafting the core project narrative, ensuring your technical innovation and market impact are explicitly tied to the fund's stated objectives.",
  },
  {
    icon: PieChart,
    title: "Budget Justification",
    desc: "Articulating the financial necessity and allocation strategy for requested funds, ensuring alignment with eligible cost frameworks.",
  },
  {
    icon: ClipboardList,
    title: "Work Package & Milestones",
    desc: "Structuring the project delivery into verifiable work packages, clear deliverables, and measurable key performance indicators (KPIs).",
  },
];

export default function GrantsPage() {
  return (
    <div className="pb-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] -z-10" />

      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="badge-primary !bg-emerald-500/10 !text-emerald-600 dark:!text-emerald-400 !border-emerald-500/20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" /> Bids, Grants &amp; Tenders
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Government Grant Applications
            </h1>
            <p className="text-lg text-text-body leading-relaxed">
              Public funding requires proving not just technical merit, but economic impact. We structure applications to explicitly address the assessment criteria of national and EU grant bodies.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="btn-primary !bg-emerald-600 hover:!bg-emerald-700 !shadow-emerald-500/20 inline-flex items-center gap-2 text-sm font-semibold py-3 px-6 rounded-btn shadow-sm group">
                Discuss Your Grant <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-background border border-border hover:border-emerald-500/40 transition-all text-sm font-semibold py-3 px-6 rounded-btn text-foreground hover:text-emerald-600 group">
                All Services <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 pt-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: Clock, label: "Timeline", value: "Aligned to window" },
            { icon: DollarSign, label: "Pricing", value: "Quoted per application" },
            { icon: Landmark, label: "Focus", value: "Public Funding" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-card border border-border rounded-card p-6 shadow-premium card-lift space-y-3">
              <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <div>
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-1">{label}</p>
                <p className="font-serif text-base font-bold text-foreground">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="space-y-10 bg-background py-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Application Elements</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Comprehensive grant assembly.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliverables.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-card border border-border rounded-card p-6 shadow-premium flex flex-col gap-5 hover:-translate-y-1 hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
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

        <section className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-card p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-premium relative overflow-hidden">
          <div className="absolute inset-0 texture-noise opacity-50" />
          <div className="space-y-3 max-w-xl relative z-10">
            <h3 className="font-serif text-3xl font-bold text-foreground">Have a funding call in mind?</h3>
            <p className="text-base text-text-body leading-relaxed">Let&apos;s review the call criteria and your project summary to determine alignment and drafting effort.</p>
          </div>
          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <Link href="/contact" className="btn-primary !bg-emerald-600 hover:!bg-emerald-700 w-full md:w-auto inline-flex justify-center items-center gap-2 text-sm font-semibold py-3.5 px-7 rounded-btn shadow-lg group">
              Contact Intake <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
