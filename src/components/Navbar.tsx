"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-30"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 bg-[rgba(253,251,247,0.9)] shadow-sm backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(0,0,0,0.08)] bg-[--color-background]">
            <Camera className="h-4 w-4 text-[--color-accent]" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs tracking-[0.3em] text-neutral-500">
              WEDDING PHOTOGRAPHY
            </span>
            <span className="font-heading text-sm uppercase tracking-[0.25em]">
              STEPH
            </span>
          </div>
        </Link>
        <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.25em] text-neutral-600 md:flex">
          <Link href="#portfolio" className="hover:text-[--color-accent]">
            Portfolio
          </Link>
          <Link href="#about" className="hover:text-[--color-accent]">
            About
          </Link>
          <Link href="#experience" className="hover:text-[--color-accent]">
            Experience
          </Link>
          <Link href="#contact" className="hover:text-[--color-accent]">
            Inquire
          </Link>
        </div>
        <Link
          href="#contact"
          className="rounded-full border border-[--color-accent] bg-[--color-accent] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[--color-background] shadow-sm transition hover:bg-transparent hover:text-[--color-accent]"
        >
          Book a date
        </Link>
      </nav>
    </motion.header>
  );
}