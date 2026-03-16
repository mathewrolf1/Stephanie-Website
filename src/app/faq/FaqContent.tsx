"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const spring = { type: "spring", stiffness: 100, damping: 20, mass: 1 } as const;

const steps = [
  {
    number: "01",
    title: "Connect & Inquire",
    description:
      "Head over to the Book page, fill out the inquiry form with your details, and I'll be in touch within 24 hours to confirm availability and talk through your vision.",
  },
  {
    number: "02",
    title: "Plan & Secure Your Date",
    description:
      "Once we're a great fit, a signed contract and deposit reserve your date. Choose to pay in full or set up a payment plan that works for you — no stress, ever.",
  },
  {
    number: "03",
    title: "Capture & Deliver",
    description:
      "I arrive early to scout the space and settle in. Then I get to work documenting your day. Your fully edited gallery is delivered to a private online link, ready to download and share.",
  },
];

const faqs = [
  {
    question: "How do I book a session?",
    answer:
      "Fill out the inquiry form on the Book page with your event details. I'll get back to you within 24 hours to confirm availability and discuss your vision. A signed contract and retainer fee secure your date.",
  },
  {
    question: "What is your editing style?",
    answer:
      "My style is editorial and cinematic — soft, natural tones with careful attention to light and shadow. I avoid heavy presets or overly warm/orange skin tones. Every image is individually edited to feel timeless.",
  },
  {
    question: "How long until I receive my photos?",
    answer:
      "Wedding galleries are delivered within 6–8 weeks. Portrait sessions (engagement, family, motherhood) are typically ready within 3–4 weeks. You'll receive a private online gallery with full download rights.",
  },
  {
    question: "Do you travel for weddings?",
    answer:
      "Absolutely. I'm based in Northern California but love destination weddings. Travel expenses (flights, accommodation) are billed at cost and discussed during the booking process. I've shot weddings across the US and internationally.",
  },
];

function AccordionItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ...spring, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="border-b border-black/8"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-sm font-medium text-[--color-foreground] md:text-base">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={spring}
          className="shrink-0 text-[--color-accent]"
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={spring}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-neutral-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqContent() {
  return (
    <>
      {/* How it works */}
      <section className="bg-neutral-50 px-6 pt-20 pb-16">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={spring}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[--color-foreground]">Process</p>
            <h2 className="font-heading text-2xl text-[--color-foreground] md:text-3xl">
              How it works
            </h2>
          </motion.div>

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-[3rem_1fr] gap-6"
              >
                <span className="font-heading text-3xl leading-none text-[--color-accent] opacity-60">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading text-lg text-[--color-foreground] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.35 }}
            viewport={{ once: true }}
            className="font-heading mt-12 text-center text-lg italic text-neutral-500 md:text-xl"
          >
            "From planning to memories — every step with intention."
          </motion.p>
        </div>
      </section>

      {/* FAQ label */}
      <section className="bg-[--color-background] px-6 pt-16 pb-0">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={spring}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">Questions</p>
            <h2 className="font-heading text-2xl text-[--color-foreground] md:text-3xl">FAQ</h2>
          </motion.div>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-[--color-background] px-6 pb-20">
        <div className="mx-auto max-w-3xl">
          <div className="border-t border-black/8">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={spring}
        viewport={{ once: true }}
        className="bg-neutral-50 px-6 py-20 text-center"
      >
        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-neutral-500">
          Still have questions?
        </p>
        <h2 className="font-heading mb-8 text-2xl text-[--color-foreground] md:text-3xl">
          I'd love to hear from you
        </h2>
        <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.96 }} transition={spring} className="inline-block">
          <Link
            href="/book"
            className="block rounded-full border border-black/10 bg-white px-8 py-3 text-xs uppercase tracking-[0.2em] text-neutral-600 shadow-sm transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Send an Inquiry
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
}
