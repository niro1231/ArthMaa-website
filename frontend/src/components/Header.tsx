"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" aria-label="ArthMaa Crafts & Decor home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden gap-8 md:flex" aria-label="Main">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative py-1 text-sm font-medium transition-colors hover:text-terracotta ${
                  active ? "text-terracotta" : "text-ink"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          className="rounded-lg p-2 text-maroon md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold/30 bg-cream px-5 pb-4 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block border-b border-sand py-3 text-sm font-medium ${
                pathname === l.href ? "text-terracotta" : "text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
