"use client";

import { useState } from "react";
import { Search, Clock, FileText, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Article {
  title: string;
  category: "AI Regulation" | "Aviation Expositions" | "Bids & Grants" | "Security Standards";
  date: string;
  readTime: string;
  excerpt: string;
  citation: string;
  link: string;
}

const articles: Article[] = [
  {
    title: "Understanding Annex IV parameters under the EU AI Act",
    category: "AI Regulation",
    date: "July 02, 2026",
    readTime: "8 min read",
    excerpt: "A detailed breakdown of Article 9 through 15 parameters for providers of high-risk artificial intelligence systems, detailing risk registers, data provenance, and human override logs.",
    citation: "Reg. (EU) 2024/1689 Annex IV",
    link: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
  },
  {
    title: "How to draft a EASA Part-145 MOE compliance matrix",
    category: "Aviation Expositions",
    date: "June 25, 2026",
    readTime: "12 min read",
    excerpt: "A walkthrough of maintenance organization expositions (MOE) structures, structuring chapters against inspector checklists and amendment trackers.",
    citation: "EASA Part-145.A.70 exposition",
    link: "https://www.easa.europa.eu/en",
  },
  {
    title: "Aligning bid narratives to RFP scoring rubrics",
    category: "Bids & Grants",
    date: "June 14, 2026",
    readTime: "6 min read",
    excerpt: "Why typical marketing copy fails in public procurement. How to align technical narratives to point values and evaluator checklist parameters.",
    citation: "ComplDoc Brief CD-TND-09",
    link: "/contact",
  },
  {
    title: "Mapping ISO/IEC 42001 to AI Act requirements",
    category: "AI Regulation",
    date: "May 28, 2026",
    readTime: "10 min read",
    excerpt: "An analysis of overlapping metrics between ISO/IEC 42001 AI Management Systems and statutory requirements in the EU AI Act Annex IV.",
    citation: "ISO/IEC 42001:2023 vs. Article 9–15",
    link: "https://www.iso.org/standard/81230.html",
  },
  {
    title: "Cybersecurity governance and NIS2: What is required?",
    category: "Security Standards",
    date: "May 19, 2026",
    readTime: "9 min read",
    excerpt: "Essential entity requirements under the NIS2 directive, covering ICT security protocols, supply chain assessments, and incident notification cycles.",
    citation: "Directive (EU) 2022/2555",
    link: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022L2555",
  },
  {
    title: "Structuring aviation Safety Management (SMS) manuals",
    category: "Aviation Expositions",
    date: "May 02, 2026",
    readTime: "11 min read",
    excerpt: "A step-by-step assembly guide for flight operators implementing Safety Management Systems to meet ICAO Annex 19 guidelines.",
    citation: "ICAO Annex 19 Framework",
    link: "https://www.icao.int",
  },
];

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "AI Regulation", "Aviation Expositions", "Bids & Grants", "Security Standards"];

  const filteredArticles = articles.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.citation.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = activeCategory === "All" || art.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
          Knowledge Center
        </span>
        <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Regulatory updates &amp; structural guides.
        </h1>
        <p className="text-base text-text-body leading-relaxed">
          Primary analysis of Annex parameters, aviation expositions, and tender methodologies. We write from source regulatory texts, not secondary opinions.
        </p>
      </div>

      {/* Search & Category Filter Section */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
          <input
            type="text"
            placeholder="Search resources, citations, or regulations (e.g., Annex IV, MDR, Part-145)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-input pl-12 pr-4 py-4 text-sm text-foreground placeholder:text-text-subtle focus:outline-none shadow-premium transition-all"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-card text-text-muted border-border hover:text-foreground hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredArticles.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredArticles.map((art) => (
                <motion.article
                  layout
                  key={art.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col justify-between bg-card border border-border rounded-card p-6 md:p-8 shadow-premium hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-primary">
                        {art.category}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-text-muted">
                        <Clock className="w-3 h-3" />
                        {art.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {art.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs text-text-body leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  {/* Citation & Action */}
                  <div className="pt-6 border-t border-border mt-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-text-muted bg-background px-2.5 py-1 rounded-lg border border-border truncate max-w-[200px]">
                      <FileText className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{art.citation}</span>
                    </div>
                    
                    {art.link.startsWith("http") ? (
                      <a
                        href={art.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-primary hover:underline"
                      >
                        Read Regulation
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    ) : (
                      <Link
                        href={art.link}
                        className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-primary hover:underline"
                      >
                        Review Brief
                        <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </Link>
                    )}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
             <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 space-y-4"
            >
              <p className="text-sm text-text-muted">
                No resources or regulatory citation notes match your query.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="text-xs font-mono text-primary hover:underline"
              >
                Reset search filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
