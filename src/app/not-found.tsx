"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-md space-y-6"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary dark:text-primary-light">
          <FileQuestion className="h-8 w-8" />
        </div>
        
        <div className="space-y-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary dark:text-primary-light">
            Error 404
          </span>
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-dark dark:text-white">
            Document Not Found
          </h1>
          <p className="text-base text-text-muted leading-relaxed">
            The page or compliance brief you are looking for does not exist, has been moved, or is restricted under regulatory clearance.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary-dark transition-all duration-200 text-sm font-semibold py-3 px-6 rounded-btn shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Return to Homepage
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
