import Link from "next/link";
import Logo from "./Logo";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, type Category } from "@/lib/api";

export default function Footer({ categories }: { categories: Category[] }) {
  return (
    <footer className="mt-auto bg-maroon text-cream/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/75">
            Handmade crafts and decor, made with love and tradition. Every piece
            is crafted by hand — and can be made just for you.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-lg text-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-gold" href="/">Home</Link></li>
            <li><Link className="hover:text-gold" href="/about">About Us</Link></li>
            <li><Link className="hover:text-gold" href="/contact">Contact</Link></li>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link className="hover:text-gold" href={`/#${c.slug}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg text-gold">Get in Touch</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="hover:text-gold" href={`tel:${PHONE_TEL}`}>📞 {PHONE_DISPLAY}</a>
            </li>
            <li>
              <a className="break-all hover:text-gold" href={`mailto:${EMAIL}`}>✉️ {EMAIL}</a>
            </li>
            <li>
              <a className="hover:text-gold" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                💬 WhatsApp us
              </a>
            </li>
            <li className="text-cream/70">Custom orders welcome</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15 py-5 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} ArthMaa Crafts &amp; Decor. All rights reserved.
      </div>
    </footer>
  );
}
