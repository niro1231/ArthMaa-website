import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { LogoMark } from "@/components/Logo";
import { getCategories, WHATSAPP_URL } from "@/lib/api";

export default async function Home() {
  const categories = await getCategories();

  return (
    <>
      {/* Hero */}
      <section className="kolam-bg relative overflow-hidden bg-gradient-to-b from-sand to-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-5 pb-28 pt-20 text-center md:pt-28">
          <LogoMark size={72} />
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.35em] text-terracotta">
            Handmade with love
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-maroon md:text-6xl">
            Crafts &amp; Decor that make your home <span className="text-terracotta">feel special</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75">
            From glowing lamps and crochet handbags to kolam, embroidered
            pillow cases and keepsake memory books — all crafted by hand, and
            made-to-order for you.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            {categories.map((c, i) => (
              <Link
                key={c.slug}
                href={`#${c.slug}`}
                className={`rounded-full px-7 py-3 text-sm font-semibold transition ${
                  i === 0
                    ? "bg-maroon text-cream hover:bg-terracotta"
                    : "border-2 border-maroon text-maroon hover:bg-maroon hover:text-cream"
                }`}
              >
                Shop {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category tiles */}
      <section className="relative z-10 mx-auto -mt-14 grid max-w-6xl gap-6 px-5 md:grid-cols-2">
        {categories.map((c, i) => (
          <Link
            key={c.slug}
            href={`#${c.slug}`}
            className={`group relative overflow-hidden rounded-3xl p-8 text-cream shadow-lg transition hover:-translate-y-1 ${
              i === 0 ? "bg-gradient-to-br from-maroon to-terracotta" : "bg-gradient-to-br from-leaf to-[#2a4128]"
            }`}
          >
            <span className="absolute -right-4 -top-6 text-8xl opacity-20 transition group-hover:scale-110">
              {c.products[0].icon}
            </span>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{c.products.length} collections</p>
            <h2 className="mt-2 font-serif text-3xl font-bold">{c.name}</h2>
            <p className="mt-2 max-w-xs text-sm text-cream/85">{c.tagline}</p>
            <span className="mt-5 inline-block text-sm font-semibold text-gold">Explore →</span>
          </Link>
        ))}
      </section>

      {/* Items by category */}
      {categories.map((c, i) => (
        <section key={c.slug} id={c.slug} className={i % 2 === 1 ? "bg-sand/60" : ""}>
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-terracotta">{c.tagline}</p>
              <h2 className="section-title mt-2 font-serif text-4xl font-bold text-maroon">{c.name}</h2>
              <p className="mx-auto mt-5 max-w-xl text-ink/70">{c.description}</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {c.products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-maroon">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-cream md:text-4xl">
            Want something made just for you?
          </h2>
          <p className="mt-4 text-cream/80">
            Tailor-made cards, memory books and custom orders — tell us your idea and we&apos;ll craft it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-maroon transition hover:bg-cream"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="rounded-full border-2 border-cream/60 px-7 py-3 text-sm font-semibold text-cream transition hover:bg-cream hover:text-maroon"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
