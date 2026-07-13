import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 bg-white dark:bg-dark-foreground/5 dark:bg-[#080C14] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand & Disclaimer Column */}
          <div className="md:col-span-2 space-y-6">
            <Logo size={36} />
            <p className="text-sm leading-relaxed text-gray-muted max-w-md">
              ComplDoc produces precise technical documentation across regulatory compliance, bids and grants, and aviation manuals. ComplDoc does not provide legal advice and is not a law firm, notified body, or regulator.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/5 text-primary dark:text-primary-light border border-primary/10">
              Reg. (EU) 2024/1689 (EU AI Act)
            </div>
          </div>

          {/* Sitemaps */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-dark dark:text-white mb-6">
              Practice Areas
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/services#compliance" className="text-gray-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  AI &amp; Tech Compliance
                </Link>
              </li>
              <li>
                <Link href="/services#bids" className="text-gray-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  Government Tenders
                </Link>
              </li>
              <li>
                <Link href="/services#aviation" className="text-gray-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  Aviation Operating Manuals
                </Link>
              </li>
              <li>
                <Link href="/services#grants" className="text-gray-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  Grant Writing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-dark dark:text-white mb-6">
              Company
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="text-gray-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  About Practice
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  Pricing Models
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Resources */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-dark dark:text-white mb-6">
              Resources &amp; Legal
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/resources" className="text-gray-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  Knowledge Center
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-muted">
          <span>
            &copy; {currentYear} ComplDoc. All rights reserved.
          </span>
          <span>
            Precision. Authority. Trust.
          </span>
        </div>
      </div>
    </footer>
  );
}
