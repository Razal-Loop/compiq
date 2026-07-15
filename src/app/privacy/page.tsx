import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ComplDoc's compliance framework for data security, client confidentiality, and regulatory data protection.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-4 border-b border-border/60 pb-8">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary dark:text-primary-light">
          ComplDoc Briefing — Section 01
        </span>
        <h1 className="font-serif font-bold tracking-tight text-dark dark:text-white" style={{ fontSize: 'var(--text-h1)' }}>
          Privacy &amp; Data Governance Policy
        </h1>
        <p className="text-xs font-mono text-text-muted">
          Last revised: July 13, 2026 | Document Ref: CD-POL-PRV-2026-V1
        </p>
      </div>

      <div className="mt-12 space-y-12 text-sm leading-relaxed text-text-muted">
        
        {/* Intro */}
        <section className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-dark dark:text-white">
            1. Purpose &amp; Scope
          </h2>
          <p>
            ComplDoc (&ldquo;the practice&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides technical writing, gap analysis, and document formation consulting services. Because we draft technical files for high-risk artificial intelligence systems, aviation operating procedures, and government tenders, client data confidentiality and security are central to our operational principles.
          </p>
          <p>
            This policy outlines how we collect, store, and process client information and technical assets. We do not store personal data beyond what is voluntarily submitted for inquiries, consultations, or direct engagement operations.
          </p>
        </section>

        {/* Technical Data Handling */}
        <section className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-dark dark:text-white">
            2. Handling of Sensitive Technical Documentation
          </h2>
          <p>
            Documentation drafted for the EU AI Act (Annex IV), NIS2, SOC 2, and aviation regulatory approval contains proprietary details of client systems, architectures, and operations. All technical materials are handled under the following strict criteria:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-dark dark:text-white">Isolation:</strong> Client architectural schematics, code descriptions, and data flow charts are stored in isolated encrypted directories.
            </li>
            <li>
              <strong className="text-dark dark:text-white">Zero Third-Party Training:</strong> We do not upload client technical files, prompt parameters, or documentation drafts to public LLMs or machine learning systems.
            </li>
            <li>
              <strong className="text-dark dark:text-white">Destruction Schedule:</strong> Unless a Compliance Maintenance Plan is active, client documentation assets are purged from our working directories 90 days after delivery.
            </li>
          </ul>
        </section>

        {/* Data We Collect */}
        <section className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-dark dark:text-white">
            3. Information Collected via the Public Site
          </h2>
          <p>
            For visitors to the public marketing site, we collect minimal information:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-dark dark:text-white">Inquiry Details:</strong> Name, company name, email address, and system specifications provided through our contact form.
            </li>
            <li>
              <strong className="text-dark dark:text-white">Analytics:</strong> Minimal, privacy-compliant analytics tracking to measure page loading speeds and overall resource efficiency. We do not use cross-site tracker IDs.
            </li>
          </ul>
        </section>

        {/* Contact details */}
        <section className="space-y-4 border-t border-border/40 pt-8">
          <h2 className="font-serif text-lg font-bold text-dark dark:text-white">
            4. Governance Inquiries
          </h2>
          <p>
            For questions about this policy or to request immediate deletion of technical drafts, contact:
          </p>
          <div className="bg-white dark:bg-card border border-border/60 rounded-card p-6 font-mono text-xs space-y-1.5">
            <p><span className="text-text-muted">Entity:</span> ComplDoc Practice Group</p>
            <p><span className="text-text-muted">Director:</span> Sarshar Jehangir</p>
            <p><span className="text-text-muted">Intake Email:</span> sarsharjehangir@gmail.com</p>
          </div>
        </section>

      </div>
    </article>
  );
}
