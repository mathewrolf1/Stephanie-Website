"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const GMAIL_TO = "Stephanieguerraphoto@gmail.com";

function openGmail(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
  e.preventDefault();
  const f = new FormData(e.currentTarget);
  const fullName    = f.get("fullName")    as string;
  const phone       = f.get("phone")       as string;
  const email       = f.get("email")       as string;
  const eventDate   = f.get("eventDate")   as string;
  const eventType   = f.get("eventType")   as string;
  const bookingStage = f.get("bookingStage") as string;
  const location    = f.get("location")    as string;
  const message     = f.get("message")     as string;

  const subject = `Photography Inquiry — ${eventType || "General"}`;
  const body = [
    `Name: ${fullName}`,

    `Phone: ${phone}`,
    `Email: ${email}`,
    `Event Date: ${eventDate || "—"}`,
    `Looking For: ${eventType || "—"}`,
    `Booking Stage: ${bookingStage || "—"}`,
    `Event Location: ${location || "—"}`,
    ``,
    message,
  ].join("\n");

  const url =
    `https://mail.google.com/mail/?view=cm` +
    `&to=${encodeURIComponent(GMAIL_TO)}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  window.open(url, "_blank");
}

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
  const searchParams = useSearchParams();
  const preselected = searchParams.get("session") ?? "";
  const [message, setMessage] = useState("");
  const wordCount = message.trim() === "" ? 0 : message.trim().split(/\s+/).length;
  const overLimit = wordCount > 500;

  return (
    <>
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
              I will get back to you within 1–4 hours!
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
            <form onSubmit={openGmail} className="space-y-5">

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
                disabled={overLimit}
                whileHover={overLimit ? {} : { scale: 1.06, y: -2 }}
                whileTap={overLimit ? {} : { scale: 0.96 }}
                transition={spring}
                className={`w-full rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] shadow-sm transition-opacity ${overLimit ? "cursor-not-allowed border-neutral-300 bg-neutral-300 text-white opacity-50" : "cursor-pointer border-[var(--color-accent)] bg-[var(--color-accent)] text-[#fdfbf7]"}`}
              >
                Send Inquiry
              </motion.button>

              <p className="text-center text-[10px] leading-relaxed text-neutral-400">
                I typically respond within 1–4 hours. You can also reach me directly at{" "}
                <a
                  href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(GMAIL_TO)}`}
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
