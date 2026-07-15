import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing ComplDoc engagements, document drafting cycles, and professional boundaries.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-4 border-b border-border/60 pb-8">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary dark:text-primary-light">
          ComplDoc Briefing — Section 02
        </span>
        <h1 className="font-serif font-bold tracking-tight text-dark dark:text-white" style={{ fontSize: 'var(--text-h1)' }}>
          Terms of Engagement
        </h1>
        <p className="text-xs font-mono text-text-muted">
          Last revised: July 13, 2026 | Document Ref: CD-TOS-ENG-2026-V1
        </p>
      </div>

      <div className="mt-12 space-y-12 text-sm leading-relaxed text-text-muted">
        
        {/* Scope of Practice */}
        <section className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-dark dark:text-white">
            1. Professional Boundary &amp; No Legal Advice
          </h2>
          <p>
            ComplDoc is a documentation-first practice. We draft technical compliance files, tenders, grants, and operating manuals based on technical specifications and primary regulatory text.
          </p>
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-card p-5 text-amber-800 dark:text-amber-300">
            <strong className="block mb-1">Important Legal Notice:</strong>
            ComplDoc is NOT a law firm, notified body, or accredited certification registrar. We do not provide legal counsel, legal interpretation, or liability representation. The client is responsible for reviewing and obtaining separate legal sign-off from qualified attorneys for any regulatory filings, contracts, or certifications.
          </div>
        </section>

        {/* Client Obligations */}
        <section className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-dark dark:text-white">
            2. Client Data &amp; Input Obligations
          </h2>
          <p>
            The accuracy of the documentation drafted by ComplDoc relies entirely on the technical specifications, system outlines, and details provided by the client.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Clients must supply comprehensive and truthful system schematics, risk logs, and operational structures.
            </li>
            <li>
              ComplDoc is not liable for regulatory penalties, audit failures, or rejected bids arising from inaccuracies, omissions, or misrepresentations in client-supplied parameters.
            </li>
          </ul>
        </section>

        {/* Delivery Terms */}
        <section className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-dark dark:text-white">
            3. Drafting Cycles &amp; Revisions
          </h2>
          <p>
            Standard documentation scopes include designated feedback loops:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-dark dark:text-white">Draft Checkpoint:</strong> Clients receive intermediate drafts for approval. Feedbacks must be detailed in writing within 5 business days.
            </li>
            <li>
              <strong className="text-dark dark:text-white">Final Review:</strong> Once a project is marked completed, any subsequent modifications due to system redesign or regulatory updates require a Compliance Maintenance Plan or a new scope of work.
            </li>
          </ul>
        </section>

        {/* Governing Law */}
        <section className="space-y-4 border-t border-border/40 pt-8">
          <h2 className="font-serif text-lg font-bold text-dark dark:text-white">
            4. Governance &amp; Jurisdiction
          </h2>
          <p>
            These terms are governed by the laws applicable to ComplDoc operations. All scopes of work and specific liability limits are detailed in individual client Master Services Agreements (MSA).
          </p>
        </section>

      </div>
    </article>
  );
}
