import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1A2E] text-[#F7F3EC]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 pt-16 pb-10 sm:pt-20 sm:pb-12">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 lg:pb-16 border-b border-[rgba(247,243,236,0.1)]">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-5">
            <Logo size={26} showText={true} />
            <p className="text-xs leading-relaxed text-[rgba(247,243,236,0.6)] max-w-sm font-sans">
              ComplDoc engineers precise technical files, regulatory compliance dossiers,
              operating manuals, and bids. We partner with leaders in AI, defense, aviation,
              and engineering.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-mono bg-[rgba(247,243,236,0.05)] text-[rgba(247,243,236,0.5)] border border-[rgba(247,243,236,0.1)] tracking-widest uppercase">
              REG. IDENTIFIER: COMPL-DOC-2026
            </div>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-[rgba(247,243,236,0.45)]">
              Practice Areas
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <Link href="/services#ai-compliance" className="text-[rgba(247,243,236,0.6)] hover:text-[#F7F3EC] transition-colors py-1 block">
                  AI &amp; Tech Regulatory Dossiers
                </Link>
              </li>
              <li>
                <Link href="/services#tech-docs" className="text-[rgba(247,243,236,0.6)] hover:text-[#F7F3EC] transition-colors py-1 block">
                  Government Tenders &amp; Grants
                </Link>
              </li>
              <li>
                <Link href="/services#aviation-manuals" className="text-[rgba(247,243,236,0.6)] hover:text-[#F7F3EC] transition-colors py-1 block">
                  Aviation Operating Manuals
                </Link>
              </li>
              <li>
                <Link href="/services#audit-engineering" className="text-[rgba(247,243,236,0.6)] hover:text-[#F7F3EC] transition-colors py-1 block">
                  Audit-Ready Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Office */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-[rgba(247,243,236,0.45)]">
              Practice Office
            </h4>
            <ul className="space-y-3 text-xs font-sans text-[rgba(247,243,236,0.6)]">
              <li>
                <span className="text-[#F7F3EC] block font-semibold">ComplDoc Technical Consulting Group</span>
                <span className="block mt-1">First Floor, Royal Exchange Building</span>
                <span>London, EC3V 3DG</span>
              </li>
              <li className="pt-3 border-t border-[rgba(247,243,236,0.08)]">
                <span className="block text-[10px] font-mono text-[rgba(247,243,236,0.4)] mb-1.5 uppercase tracking-widest">
                  Secure Intake Portal
                </span>
                <a
                  href="mailto:compliancedocumentationeuaiact@gmail.com"
                  className="text-[#F7F3EC] hover:text-[#6B4FBB] transition-colors break-all block"
                >
                  compliancedocumentationeuaiact@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] font-mono text-[rgba(247,243,236,0.4)] uppercase tracking-wider">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>&copy; {currentYear} ComplDoc. All rights reserved.</span>
            <Link href="/privacy" className="hover:text-[#F7F3EC] transition-colors">
              Privacy Expositions
            </Link>
            <Link href="/terms" className="hover:text-[#F7F3EC] transition-colors">
              Terms of Engagement
            </Link>
          </div>
          <div className="text-left sm:text-right">
            <span>Technical Evidence Files // Audit-Ready Security</span>
          </div>
        </div>

        {/* Credit */}
        <div className="mt-6 border-t border-[rgba(247,243,236,0.06)] pt-5 text-center text-[10px] font-mono text-[rgba(247,243,236,0.3)]">
          Developed by Razal Ali — For development services{" "}
          <a
            href="https://webaxissolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[rgba(247,243,236,0.6)] transition-colors"
          >
            webaxissolutions.com
          </a>
        </div>

      </div>
    </footer>
  );
}
