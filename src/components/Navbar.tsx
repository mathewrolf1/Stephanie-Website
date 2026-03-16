"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const spring = { type: "spring", stiffness: 100, damping: 20, mass: 1 } as const;

const portfolioCategories = ["Weddings", "Engagement", "Family", "Motherhood"] as const;

export function Navbar() {
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={spring}
      className="sticky top-0 z-50"
    >
      <nav className="flex w-full items-center bg-[#fdfbf7] shadow-sm px-8 py-4">

        {/* Left links — desktop only */}
        <div className="hidden md:flex flex-1 items-center gap-8 text-[10px] uppercase tracking-[0.25em] text-neutral-600">
          <Link href="/" className="hover:text-[--color-accent] transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-[--color-accent] transition-colors">
            About
          </Link>
          <Link href="/faq" className="hover:text-[--color-accent] transition-colors">
            Q&amp;A
          </Link>
        </div>

        {/* Mobile: spacer to push brand to center */}
        <div className="flex md:hidden flex-1" />

        {/* Center brand */}
        <Link href="/" className="shrink-0 px-4 md:px-8" onClick={() => setMobileOpen(false)}>
          <span className="font-heading text-xl md:text-2xl italic text-[--color-foreground]">
            Stephanie Guerra
          </span>
        </Link>

        {/* Right links — desktop only */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-8 text-[10px] uppercase tracking-[0.25em] text-neutral-600">

          {/* Portfolio dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPortfolioOpen(true)}
            onMouseLeave={() => setPortfolioOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 hover:text-[--color-accent] transition-colors"
            >
              Portfolio
              <motion.span
                animate={{ rotate: portfolioOpen ? 180 : 0 }}
                transition={spring}
                className="inline-flex"
              >
                <ChevronDown className="h-3 w-3" />
              </motion.span>
            </button>

            <AnimatePresence>
              {portfolioOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={spring}
                  className="absolute top-full left-1/2 -translate-x-1/2 z-[100] w-44 pt-3"
                >
                  <div className="bg-[#fdfbf7] border border-black/8 shadow-xl rounded-sm py-2">
                    {portfolioCategories.map((cat) => (
                      <Link
                        key={cat}
                        href={`/portfolio/${cat.toLowerCase()}`}
                        className="block px-5 py-2 text-[10px] uppercase tracking-[0.2em] text-neutral-600 hover:text-[--color-accent] hover:bg-black/[0.02] transition-colors"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/prices" className="hover:text-[--color-accent] transition-colors">
            Prices
          </Link>

          <Link href="/book" className="hover:text-[--color-accent] transition-colors">
            Book Now
          </Link>
        </div>

        {/* Burger button — mobile only */}
        <div className="flex md:hidden flex-1 justify-end">
          <motion.button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            whileTap={{ scale: 0.85 }}
            transition={spring}
            className="p-1 text-neutral-600 hover:text-[--color-accent] transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={spring}
                  className="flex"
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={spring}
                  className="flex"
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={spring}
            className="md:hidden bg-[#fdfbf7] border-t border-black/8 shadow-md"
          >
            <div className="flex flex-col py-2">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block px-8 py-3 text-[10px] uppercase tracking-[0.25em] text-neutral-600 hover:text-[--color-accent] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="block px-8 py-3 text-[10px] uppercase tracking-[0.25em] text-neutral-600 hover:text-[--color-accent] transition-colors"
              >
                About
              </Link>

              {/* Portfolio sub-links */}
              <p className="px-8 pt-3 pb-1 text-[9px] uppercase tracking-[0.3em] text-neutral-400">
                Portfolio
              </p>
              {portfolioCategories.map((cat) => (
                <Link
                  key={cat}
                  href={`/portfolio/${cat.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-12 py-2.5 text-[10px] uppercase tracking-[0.25em] text-neutral-600 hover:text-[--color-accent] transition-colors"
                >
                  {cat}
                </Link>
              ))}

              <Link
                href="/faq"
                onClick={() => setMobileOpen(false)}
                className="block px-8 py-3 text-[10px] uppercase tracking-[0.25em] text-neutral-600 hover:text-[--color-accent] transition-colors"
              >
                Q&amp;A
              </Link>
              <Link
                href="/prices"
                onClick={() => setMobileOpen(false)}
                className="block px-8 py-3 text-[10px] uppercase tracking-[0.25em] text-neutral-600 hover:text-[--color-accent] transition-colors"
              >
                Prices
              </Link>
              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                className="block px-8 py-3 text-[10px] uppercase tracking-[0.25em] text-[--color-accent] font-medium transition-colors"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
