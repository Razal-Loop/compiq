import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-[#0B0B0F] text-white transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
        
        {/* Main Grid — stacks on mobile, 3-col on md, 12-col on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 lg:pb-16 border-b border-white/5">
          
          {/* Brand Info — full width on mobile, full width col on sm, 5 cols on lg */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-5">
            <Logo size={26} showText={true} />
            <p className="text-xs leading-relaxed text-white/70 max-w-sm font-sans">
              ComplDoc engineers precise technical files, regulatory compliance dossiers, operating manuals, and bids. We partner with leaders in AI, defense, aviation, and engineering.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-mono bg-white/5 text-[#D8D8E2] border border-white/10">
              REG. IDENTIFIER: COMPL-DOC-2026
            </div>
          </div>

          {/* Practice Areas Navigation — col 1 on sm, 3 cols on lg */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-wider text-white/55">
              Practice Areas
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <Link href="/services#ai-compliance" className="text-white/60 hover:text-white transition-colors py-1 block">
                  AI &amp; Tech Regulatory dossiers
                </Link>
              </li>
              <li>
                <Link href="/services#tech-docs" className="text-white/60 hover:text-white transition-colors py-1 block">
                  Government Tenders &amp; Grants
                </Link>
              </li>
              <li>
                <Link href="/services#aviation-manuals" className="text-white/60 hover:text-white transition-colors py-1 block">
                  Aviation Operating Manuals
                </Link>
              </li>
              <li>
                <Link href="/services#audit-engineering" className="text-white/60 hover:text-white transition-colors py-1 block">
                  Audit-Ready Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Contact — col 2 on sm, 4 cols on lg */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-wider text-white/55">
              Practice Office
            </h4>
            <ul className="space-y-3 text-xs font-sans text-white/60">
              <li>
                <span className="text-white block font-semibold">ComplDoc Technical Consulting Group</span>
                <span className="block mt-1">First Floor, Royal Exchange Building</span>
                <span>London, EC3V 3DG</span>
              </li>
              <li className="pt-3 border-t border-white/5">
                <span className="block text-[10px] font-mono text-white/45 mb-1">SECURE INTAKE PORTAL</span>
                <a href="mailto:compliancedocumentationeuaiact@gmail.com" className="text-white hover:underline break-all block">
                  compliancedocumentationeuaiact@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] font-mono text-white/45">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <span>&copy; {currentYear} ComplDoc. All rights reserved.</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Expositions</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Engagement</Link>
          </div>
          <div className="text-left sm:text-right">
            <span>TECHNICAL EVIDENCE FILES // AUDIT-READY SECURITY</span>
          </div>
        </div>

        {/* Credit */}
        <div className="mt-6 border-t border-white/5 pt-4 text-center text-[10px] font-mono text-white/40">
          developed by Razal Ali , For development services <a href="https://webaxissolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">https://webaxissolutions.com</a>
        </div>

      </div>
    </footer>
  );
}
