"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react";
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
  const { theme, toggleTheme } = useTheme();

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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
          isScrolled || isOpen
            ? "bg-white/98 dark:bg-[#0B0B0F]/98 backdrop-blur-md border-b border-border shadow-premium py-3"
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Logo size={22} />

            {/* Desktop Nav — hidden below md */}
            <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 lg:px-4 py-2 text-[11px] lg:text-xs font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? "text-primary dark:text-[#7C4DFF]"
                        : "text-text-muted hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navPill"
                        className="absolute inset-x-3 lg:inset-x-4 bottom-0 h-0.5 bg-primary dark:bg-[#7C4DFF]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              {/* Theme Toggle — 44×44px touch target */}
              <motion.button
                onClick={toggleTheme}
                whileTap={{ scale: 0.98 }}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center border border-border text-text-muted hover:text-foreground hover:bg-muted transition-all duration-200"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    {theme === "light" ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
                  </motion.span>
                </AnimatePresence>
              </motion.button>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="btn-primary px-4 lg:px-5 text-[11px] lg:text-xs font-semibold uppercase tracking-wider group whitespace-nowrap"
              >
                Secure Intake
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Actions — visible below md */}
            <div className="flex md:hidden items-center gap-1.5">
              <motion.button
                onClick={toggleTheme}
                whileTap={{ scale: 0.95 }}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center border border-border text-text-muted hover:text-foreground hover:bg-muted transition-all"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </motion.button>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.95 }}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center border border-border text-text-muted hover:text-foreground hover:bg-muted transition-all"
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

      {/* Mobile Full-Screen Drawer — rendered as portal at root level */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Slide-down drawer */}
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed top-[57px] left-0 right-0 z-40 md:hidden bg-white dark:bg-[#0B0B0F] border-b border-border shadow-lg max-h-[calc(100vh-57px)] overflow-y-auto"
            >
              <div className="px-4 pt-2 pb-6 space-y-0.5">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 py-3.5 px-4 text-sm font-semibold uppercase tracking-wider border-b border-border/40 last:border-0 transition-all min-h-[52px] ${
                        isActive
                          ? "text-primary dark:text-[#7C4DFF] bg-primary/5"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />}
                      {item.label}
                    </Link>
                  );
                })}
                <div className="pt-4 pb-2">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider px-5"
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
