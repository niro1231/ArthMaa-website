import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/api";

export const metadata: Metadata = { title: "Contact | ArthMaa Crafts & Decor" };

export default function Contact() {
  return (
    <section className="kolam-bg bg-gradient-to-b from-sand to-cream py-16">
      <div className="mx-auto max-w-5xl px-5">
        <h1 className="section-title text-center font-serif text-4xl font-bold text-maroon md:text-5xl">Contact Us</h1>
        <p className="mx-auto mt-6 max-w-xl text-center text-ink/70">
          Have a question or a custom idea? Call, WhatsApp, or send us a message.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-4 rounded-2xl border border-gold/30 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <span className="text-3xl">📞</span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-terracotta">Call us</span>
                <span className="font-serif text-xl font-semibold text-maroon">{PHONE_DISPLAY}</span>
              </span>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 rounded-2xl border border-gold/30 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <span className="text-3xl">✉️</span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-terracotta">Email us</span>
                <span className="break-all font-serif text-xl font-semibold text-maroon">{EMAIL}</span>
              </span>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-gold/30 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <span className="text-3xl">💬</span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-terracotta">WhatsApp</span>
                <span className="font-serif text-xl font-semibold text-maroon">Chat with us</span>
              </span>
            </a>
            <div className="rounded-2xl bg-maroon p-6 text-cream">
              <h2 className="font-serif text-lg text-gold">Custom orders</h2>
              <p className="mt-2 text-sm text-cream/80">
                Memory books, wishing cards and décor can be tailor-made. Share your idea and occasion and we&apos;ll take care of the rest.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
