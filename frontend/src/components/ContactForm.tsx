"use client";

import { useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";
type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch(`${API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-gold/40 bg-white px-4 py-3 text-sm outline-none transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/20";

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-gold/30 bg-white p-6 shadow-sm">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">Your name</label>
        <input id="name" name="name" required className={field} />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">Email address</label>
        <input id="email" name="email" type="email" required className={field} />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">What are you looking for?</label>
        <textarea id="message" name="message" rows={5} required maxLength={2000} className={field} />
      </div>
      <button
        disabled={status === "sending"}
        className="w-full rounded-full bg-terracotta px-6 py-3 font-semibold text-white transition hover:bg-maroon disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      {status === "sent" && (
        <p role="status" className="text-sm text-leaf">Thank you! We&apos;ll get back to you soon.</p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          Something went wrong. Please call or WhatsApp us instead.
        </p>
      )}
    </form>
  );
}
