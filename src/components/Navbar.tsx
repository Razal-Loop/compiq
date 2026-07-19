"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-[#F7F3EC] border-b border-[rgba(15,26,46,0.12)] shadow-[0_1px_3px_rgba(15,26,46,0.06)] py-3"
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Logo size={22} />

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 lg:px-4 py-2 font-mono text-[11px] lg:text-[12px] uppercase tracking-widest transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? "text-[#6B4FBB]"
                        : "text-[rgba(15,26,46,0.6)] hover:text-[#0F1A2E]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute inset-x-3 lg:inset-x-4 bottom-0 h-px bg-[#6B4FBB]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="btn-primary px-5 text-[11px] lg:text-[12px] group whitespace-nowrap gap-2"
              >
                Secure Intake
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden items-center">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.95 }}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center border border-[rgba(15,26,46,0.2)] text-[#0F1A2E] hover:bg-[rgba(15,26,46,0.05)] transition-all"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isOpen ? "close" : "open"}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-[rgba(15,26,46,0.3)] md:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed top-[57px] left-0 right-0 z-40 md:hidden bg-[#F7F3EC] border-b border-[rgba(15,26,46,0.12)] max-h-[calc(100vh-57px)] overflow-y-auto"
            >
              <div className="px-4 pt-2 pb-6 space-y-0.5">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 py-3.5 px-4 font-mono text-xs uppercase tracking-widest border-b border-[rgba(15,26,46,0.08)] last:border-0 transition-all min-h-[52px] ${
                        isActive
                          ? "text-[#6B4FBB] bg-[rgba(107,79,187,0.05)]"
                          : "text-[#0F1A2E] hover:bg-[rgba(15,26,46,0.04)]"
                      }`}
                    >
                      {isActive && <span className="w-1.5 h-1.5 bg-[#6B4FBB] shrink-0" />}
                      {item.label}
                    </Link>
                  );
                })}
                <div className="pt-4 pb-2">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full gap-2 text-xs"
                  >
                    Secure Intake
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
