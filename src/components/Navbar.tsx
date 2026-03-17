"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const spring = { type: "spring", stiffness: 100, damping: 20, mass: 1 } as const;

const portfolioCategories = ["Weddings", "Engagement", "Family", "Motherhood"] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={spring}
      className="sticky top-0 z-50 relative"
    >
      <nav className="flex w-full items-center justify-end bg-[#fdfbf7] shadow-sm px-8 py-4">

        {/* Burger button */}
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-600">Menu</span>
          <motion.button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            transition={spring}
            className="p-2 rounded-full text-neutral-600 hover:text-[--color-accent] hover:bg-black/5 active:bg-black/10 transition-colors cursor-pointer"
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

      {/* Dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={spring}
            className="absolute right-0 top-full w-56 bg-[#fdfbf7] border border-black/8 shadow-md rounded-sm"
          >
            <div className="flex flex-col py-2">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block px-8 py-3 text-xs uppercase tracking-[0.25em] text-neutral-600 hover:text-[--color-accent] hover:bg-[--color-accent]/5 hover:pl-10 transition-all duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="block px-8 py-3 text-xs uppercase tracking-[0.25em] text-neutral-600 hover:text-[--color-accent] hover:bg-[--color-accent]/5 hover:pl-10 transition-all duration-200"
              >
                About
              </Link>

              {/* Portfolio sub-links */}
              <p className="px-8 pt-3 pb-1 text-[11px] uppercase tracking-[0.3em] text-neutral-400">
                Portfolio
              </p>
              {portfolioCategories.map((cat) => (
                <Link
                  key={cat}
                  href={`/portfolio/${cat.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-12 py-2.5 text-xs uppercase tracking-[0.25em] text-neutral-600 hover:text-[--color-accent] hover:bg-[--color-accent]/5 hover:pl-14 transition-all duration-200"
                >
                  {cat}
                </Link>
              ))}

              <Link
                href="/faq"
                onClick={() => setMobileOpen(false)}
                className="block px-8 py-3 text-xs uppercase tracking-[0.25em] text-neutral-600 hover:text-[--color-accent] hover:bg-[--color-accent]/5 hover:pl-10 transition-all duration-200"
              >
                Q&amp;A
              </Link>
              <Link
                href="/prices"
                onClick={() => setMobileOpen(false)}
                className="block px-8 py-3 text-xs uppercase tracking-[0.25em] text-neutral-600 hover:text-[--color-accent] hover:bg-[--color-accent]/5 hover:pl-10 transition-all duration-200"
              >
                Prices
              </Link>
              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                className="block px-8 py-3 text-xs uppercase tracking-[0.25em] text-[--color-accent] font-medium hover:bg-[--color-accent]/5 hover:pl-10 transition-all duration-200"
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
