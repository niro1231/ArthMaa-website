import type { Metadata } from "next";
import Image from "next/image";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = { title: "About Us | ArthMaa Crafts & Decor" };

// ---- Edit these details ------------------------------------------------
const FOUNDER = {
  name: "Founder Name", // TODO: replace with the founder's name
  role: "Founder & Maker",
  // Put the photo in frontend/public/ (e.g. founder.jpg) and set "/founder.jpg"
  photo: "" as string,
  story: [
    "Hi, I'm the hand behind ArthMaa. What began as a love for making things with my own hands slowly grew into a little studio of lamps, crochet bags, kolam and keepsakes.",
    "Every piece is made with patience and care, because I believe a handmade gift carries a feeling no factory can copy.",
  ],
};

// TODO: confirm the real meaning of the name with the founder
const NAME_MEANING = {
  parts: [
    { word: "Arth", meaning: "from Arthikaa" },
    { word: "Maa", meaning: "from Mathumai" },
  ],
  text: "ArthMaa is named after our founder's daughter, Arthikaa Mathumai. Every piece we make carries the same love a mother has for her child.",
};
// -------------------------------------------------------------------------

const journey = [
  { step: "The spark", text: "A passion for crafting grows from a hobby into a dream." },
  { step: "First creations", text: "Lamps, vases and crochet bags for family and friends." },
  { step: "ArthMaa is born", text: "Crafts & Decor opens its doors to customers." },
  { step: "Growing with you", text: "Custom cards, memory books and décor made for your moments." },
];

const process = [
  { icon: "💡", title: "Share your idea", text: "Tell us the item, occasion and any colours or names you want." },
  { icon: "🧶", title: "We craft it", text: "Your piece is made by hand, just for you." },
  { icon: "🎁", title: "You receive it", text: "Delivered ready to gift or to place in your home." },
];

const occasions = [
  { icon: "🎓", title: "Retirement", text: "A memory book to celebrate a lifetime of work." },
  { icon: "💍", title: "Wedding Anniversary", text: "Keepsakes that tell your love story." },
  { icon: "🎂", title: "21st Birthday", text: "A milestone memory book and tailor-made cards." },
  { icon: "🪔", title: "Festivals & Pooja", text: "Nirai Kudam, kolam, lamps and Vashthu muddi." },
];

export default function About() {
  return (
    <>
      {/* Intro */}
      <section className="kolam-bg bg-gradient-to-b from-sand to-cream py-20 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <div className="flex justify-center"><LogoMark size={64} /></div>
          <h1 className="section-title mt-6 font-serif text-4xl font-bold text-maroon md:text-5xl">About ArthMaa</h1>
          <p className="mt-8 text-lg leading-relaxed text-ink/80">
            ArthMaa Crafts &amp; Decor is a home-grown handmade studio. We turn
            simple materials into lamps, crochet handbags, kolam, embroidered
            and hand painted textiles, bottle art and more — pieces that carry
            warmth, culture and care.
          </p>
        </div>
      </section>

      {/* Meet the maker */}
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-20 md:grid-cols-[280px_1fr]">
        <div className="mx-auto">
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-gold bg-gradient-to-br from-maroon to-terracotta shadow-xl">
            {FOUNDER.photo ? (
              <Image src={FOUNDER.photo} alt={FOUNDER.name} fill className="object-cover" sizes="256px" />
            ) : (
              <span className="flex h-full items-center justify-center font-serif text-7xl font-bold text-cream">
                {FOUNDER.name.charAt(0)}
              </span>
            )}
          </div>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-terracotta">Meet the maker</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-maroon">{FOUNDER.name}</h2>
          <p className="text-sm text-leaf">{FOUNDER.role}</p>
          <div className="mt-5 space-y-4 leading-relaxed text-ink/75">
            {FOUNDER.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Name meaning */}
      <section className="bg-maroon py-16 text-center text-cream">
        <div className="mx-auto max-w-3xl px-5">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">The name</p>
          <div className="mt-6 flex flex-wrap items-start justify-center gap-10">
            {NAME_MEANING.parts.map((p) => (
              <div key={p.word}>
                <div className="font-serif text-5xl font-bold text-gold">{p.word}</div>
                <div className="mt-1 text-sm text-cream/80">{p.meaning}</div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-xl leading-relaxed text-cream/85">{NAME_MEANING.text}</p>
        </div>
      </section>

      {/* Journey */}
      <section className="mx-auto max-w-4xl px-5 py-20">
        <h2 className="section-title text-center font-serif text-3xl font-bold text-maroon">Our Journey</h2>
        <ol className="relative mt-12 space-y-8 border-l-2 border-gold/50 pl-8">
          {journey.map((j) => (
            <li key={j.step} className="relative">
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-gold bg-terracotta" />
              <h3 className="font-serif text-lg font-semibold text-maroon">{j.step}</h3>
              <p className="text-sm text-ink/70">{j.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Made to order */}
      <section className="bg-sand/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="section-title text-center font-serif text-3xl font-bold text-maroon">Made Just for You</h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-ink/70">
            Tailor-made wishing cards, memory books and décor — here&apos;s how it works.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {process.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-gold/30 bg-white p-8 text-center shadow-sm">
                <div className="text-5xl">{s.icon}</div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-terracotta">Step {i + 1}</p>
                <h3 className="mt-1 font-serif text-xl font-semibold text-maroon">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="section-title text-center font-serif text-3xl font-bold text-maroon">Gifts for Every Occasion</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {occasions.map((o) => (
              <div key={o.title} className="rounded-2xl border border-gold/30 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="text-4xl">{o.icon}</div>
                <h3 className="mt-3 font-serif text-lg font-semibold text-maroon">{o.title}</h3>
                <p className="mt-1 text-sm text-ink/70">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
