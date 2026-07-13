import { Metadata } from "next";
import Link from "next/link";
import { FileSpreadsheet, ArrowRight, Target, Layout, Edit3, Clock, DollarSign, Building2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "RFP & RFQ Response Writing",
  description:
    "High-scoring technical narratives for public tenders. Method statements and compliance files structured directly against the scoring rubric.",
};

const deliverables = [
  {
    icon: Layout,
    title: "Response Matrix & Outline",
    desc: "A structural breakdown of the tender requirements mapped directly to your technical capabilities, ensuring zero omission of mandatory criteria.",
  },
  {
    icon: Edit3,
    title: "Method Statement Drafting",
    desc: "Written articulation of your delivery methodology, implementation timelines, and quality assurance processes, tailored to the evaluator's rubric.",
  },
  {
    icon: Target,
    title: "Technical Capability Narratives",
    desc: "Translating your engineering specifications, software architecture, or operational capacities into compelling evidence of capability.",
  },
  {
    icon: Building2,
    title: "Compliance & Security Statements",
    desc: "Addressing mandatory security, data protection, and regulatory compliance questionnaires required in enterprise and government bids.",
  },
];

export default function RfpPage() {
  return (
    <div className="pb-24 overflow-hidden relative">
      
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[100px] -z-10" />

      {/* Hero */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="badge-primary !bg-sky-500/10 !text-sky-600 dark:!text-sky-400 !border-sky-500/20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" /> Bids, Grants &amp; Tenders
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              RFP &amp; RFQ Response Writing
            </h1>
            <p className="text-lg text-text-body leading-relaxed">
              Winning public tenders and enterprise bids requires more than good marketing. It requires structured, evidence-backed writing mapped point-by-point to the evaluator&apos;s scoring rubric.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="btn-primary !bg-sky-600 hover:!bg-sky-700 !shadow-sky-500/20 inline-flex items-center gap-2 text-sm font-semibold py-3 px-6 rounded-btn shadow-sm group">
                Request Bid Support <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-background border border-border hover:border-sky-500/40 transition-all text-sm font-semibold py-3 px-6 rounded-btn text-foreground hover:text-sky-600 group">
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
            { icon: Clock, label: "Timeline", value: "Aligned to bid deadline" },
            { icon: DollarSign, label: "Pricing", value: "Quoted per submission" },
            { icon: FileSpreadsheet, label: "Focus", value: "Technical Scoring" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-card border border-border rounded-card p-6 shadow-premium card-lift space-y-3">
              <Icon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              <div>
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-1">{label}</p>
                <p className="font-serif text-base font-bold text-foreground">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables */}
        <section className="space-y-10 bg-background py-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">Response Components</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              What we write for your bid.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliverables.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-card border border-border rounded-card p-6 md:p-8 shadow-premium flex gap-5 hover:-translate-y-1 hover:border-sky-500/30 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0">
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

        {/* CTA */}
        <section className="bg-gradient-to-br from-sky-500/10 to-transparent border border-sky-500/20 rounded-card p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-premium relative overflow-hidden">
          <div className="absolute inset-0 texture-noise opacity-50" />
          
          <div className="space-y-3 max-w-xl relative z-10">
            <h3 className="font-serif text-3xl font-bold text-foreground">Need support on an active tender?</h3>
            <p className="text-base text-text-body leading-relaxed">Provide us the RFP documentation, and we will return a fixed quote and schedule for the technical drafting.</p>
          </div>
          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <Link href="/contact" className="btn-primary !bg-sky-600 hover:!bg-sky-700 w-full md:w-auto inline-flex justify-center items-center gap-2 text-sm font-semibold py-3.5 px-7 rounded-btn shadow-lg group">
              Submit RFP for Quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
