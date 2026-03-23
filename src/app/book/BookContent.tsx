"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const GMAIL_TO = "Stephanieguerraphoto@gmail.com";

const spring = { type: "spring", stiffness: 100, damping: 20, mass: 1 } as const;


const sessionTypes = [
  "Standard Session",
  "Newborn & Engagement",
  "Wedding Coverage",
];

const bookingStages = [
  "Ready to Book!",
  "Inquiries on Wedding Quote",
  "Other Inquiries",
];

export function BookContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselected = searchParams.get("session") ?? "";
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const wordCount = message.trim() === "" ? 0 : message.trim().split(/\s+/).length;
  const overLimit = wordCount > 500;

  useEffect(() => {
    if (status === "sent") {
      const t = setTimeout(() => router.push("/"), 3000);
      return () => clearTimeout(t);
    }
  }, [status, router]);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName:     f.get("fullName"),
          phone:        f.get("phone"),
          email:        f.get("email"),
          eventDate:    f.get("eventDate"),
          eventType:    f.get("eventType"),
          bookingStage: f.get("bookingStage"),
          location:     f.get("location"),
          message:      f.get("message"),
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Sending overlay */}
      <AnimatePresence>
        {status === "sending" && (
          <motion.div
            key="sending"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[--color-background]"
          >
            <div className="flex gap-2 mb-6">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="block h-2 w-2 rounded-full bg-[--color-accent]"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Sending your inquiry…</p>
          </motion.div>
        )}

        {status === "sent" && (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={spring}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[--color-background] text-center px-6"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ ...spring, delay: 0.1 }}
              className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[--color-accent]"
            >
              <svg className="h-7 w-7 text-[--color-accent]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </motion.div>
            <motion.p
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...spring, delay: 0.2 }}
              className="mb-2 text-xs uppercase tracking-[0.35em] text-neutral-500"
            >
              Inquiry Received
            </motion.p>
            <motion.h2
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...spring, delay: 0.3 }}
              className="font-heading text-3xl text-[--color-foreground] md:text-4xl"
            >
              Thank you!
            </motion.h2>
            <motion.p
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...spring, delay: 0.4 }}
              className="mt-4 text-sm text-neutral-500"
            >
              Stephanie will be in touch within 24 hours.
              <br />Taking you home…
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="bg-[--color-background] px-6 pb-0 pt-20 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={spring}
              className="mb-3 text-xs uppercase tracking-[0.35em] text-neutral-500"
            >
              Let's Begin
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...spring, delay: 0.1 }}
              className="font-heading text-3xl text-[--color-foreground] md:text-5xl"
            >
              Let Me Reach <em>Out To You!</em>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...spring, delay: 0.2 }}
              className="mt-4 text-sm leading-relaxed text-neutral-500"
            >
              I will get back to you within 24 hours!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[--color-background] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl">

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={spring}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Full name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="fullName"
                  className="text-[10px] uppercase tracking-[0.25em] text-neutral-500"
                >
                  First &amp; Last Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="w-full border border-black/10 bg-white px-4 py-3 text-sm text-[--color-foreground] outline-none focus:border-[--color-accent] transition-colors"
                />
              </div>

              {/* Phone + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="text-[10px] uppercase tracking-[0.25em] text-neutral-500"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full border border-black/10 bg-white px-4 py-3 text-sm text-[--color-foreground] outline-none focus:border-[--color-accent] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-[10px] uppercase tracking-[0.25em] text-neutral-500"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-black/10 bg-white px-4 py-3 text-sm text-[--color-foreground] outline-none focus:border-[--color-accent] transition-colors"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="space-y-1.5">
                <label
                  htmlFor="eventDate"
                  className="text-[10px] uppercase tracking-[0.25em] text-neutral-500"
                >
                  What date are you looking for?
                </label>
                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full border border-black/10 bg-white px-4 py-3 text-sm text-[--color-foreground] outline-none focus:border-[--color-accent] transition-colors"
                />
              </div>

              {/* Session type */}
              <div className="space-y-1.5">
                <label
                  htmlFor="eventType"
                  className="text-[10px] uppercase tracking-[0.25em] text-neutral-500"
                >
                  What are you looking for?
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  defaultValue={preselected}
                  className="w-full border border-black/10 bg-white px-4 py-3 text-sm text-[--color-foreground] outline-none focus:border-[--color-accent] transition-colors"
                >
                  <option value="">Select option</option>
                  {sessionTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Booking stage */}
              <div className="space-y-1.5">
                <label
                  htmlFor="bookingStage"
                  className="text-[10px] uppercase tracking-[0.25em] text-neutral-500"
                >
                  Where are you at in your booking process?
                </label>
                <select
                  id="bookingStage"
                  name="bookingStage"
                  required
                  className="w-full border border-black/10 bg-white px-4 py-3 text-sm text-[--color-foreground] outline-none focus:border-[--color-accent] transition-colors"
                >
                  <option value="">Select option</option>
                  {bookingStages.map((stage) => (
                    <option key={stage} value={stage}>{stage}</option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div className="space-y-1.5">
                <label
                  htmlFor="location"
                  className="text-[10px] uppercase tracking-[0.25em] text-neutral-500"
                >
                  Where will your event be taking place?
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  className="w-full border border-black/10 bg-white px-4 py-3 text-sm text-[--color-foreground] outline-none focus:border-[--color-accent] transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-[10px] uppercase tracking-[0.25em] text-neutral-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full border bg-white px-4 py-3 text-sm text-[--color-foreground] outline-none transition-colors resize-none ${overLimit ? "border-red-400 focus:border-red-400" : "border-black/10 focus:border-[--color-accent]"}`}
                />
                <p className={`text-right text-[10px] ${overLimit ? "text-red-400" : "text-neutral-400"}`}>
                  {wordCount} / 500 words
                </p>
              </div>

              <motion.button
                type="submit"
                disabled={overLimit || status === "sending"}
                whileHover={overLimit || status !== "idle" ? {} : { scale: 1.06, y: -2 }}
                whileTap={overLimit || status !== "idle" ? {} : { scale: 0.96 }}
                transition={spring}
                className={`w-full rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] shadow-sm transition-opacity ${
                  overLimit
                    ? "cursor-not-allowed border-neutral-300 bg-neutral-300 text-white opacity-50"
                    : status === "error"
                    ? "cursor-pointer border-red-400 bg-red-400 text-white"
                    : "cursor-pointer border-[var(--color-accent)] bg-[var(--color-accent)] text-[#fdfbf7]"
                }`}
              >
                {status === "error" ? "Failed — Try Again" : "Send Inquiry"}
              </motion.button>

              <p className="text-center text-[10px] leading-relaxed text-neutral-400">
                I typically respond within 24 hours. You can also reach me directly at{" "}
                <a
                  href={`mailto:${GMAIL_TO}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[--color-accent]"
                >
                  Stephanieguerraphoto@gmail.com
                </a>
                {" "}or DM me on{" "}
                <a
                  href="https://www.instagram.com/stephanieguerraphoto/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[--color-accent]"
                >
                  Instagram
                </a>
                .
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
