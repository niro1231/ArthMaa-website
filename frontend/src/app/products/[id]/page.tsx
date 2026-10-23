import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { EMAIL, getProduct, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/api";

export async function generateMetadata({ params }: PageProps<"/products/[id]">): Promise<Metadata> {
  const { id } = await params;
  const data = await getProduct(id).catch(() => null);
  if (!data) return { title: "Product not found | ArthMaa Crafts & Decor" };
  return {
    title: `${data.product.name} | ArthMaa Crafts & Decor`,
    description: data.product.description,
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[id]">) {
  const { id } = await params;
  const data = await getProduct(id);
  if (!data) notFound();

  const { product, category, related } = data;
  const { details } = product;
  const msg = encodeURIComponent(`Hi ArthMaa! I'd like to know more about: ${product.name}`);

  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-5 pt-8 text-sm text-ink/60">
        <Link href="/" className="hover:text-terracotta">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/#${category.slug}`} className="hover:text-terracotta">{category.name}</Link>
        <span className="mx-2">/</span>
        <span className="text-maroon">{product.name}</span>
      </nav>

      {/* Main */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-10 md:grid-cols-2">
        <div className="kolam-bg relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-sand to-[#f7d9b8] shadow-lg">
          {product.image ? (
            <Image src={product.image} alt={product.name} fill priority className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
          ) : (
            <span className="text-[9rem] drop-shadow-lg" aria-hidden="true">{product.icon}</span>
          )}
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-terracotta">{category.name}</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-maroon md:text-5xl">{product.name}</h1>
          <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-leaf/10 px-3 py-1 text-leaf">100% Handmade</span>
            {details.customizable && (
              <span className="rounded-full bg-gold/20 px-3 py-1 text-maroon">Custom orders available</span>
            )}
          </div>

          <p className="mt-6 text-lg leading-relaxed text-ink/80">{details.about}</p>

          <h2 className="mt-8 font-serif text-xl font-semibold text-maroon">Highlights</h2>
          <ul className="mt-3 space-y-2">
            {details.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-ink/80">
                <span className="mt-1 text-gold" aria-hidden="true">✦</span>
                {h}
              </li>
            ))}
          </ul>

          <h2 className="mt-8 font-serif text-xl font-semibold text-maroon">Perfect for</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {details.perfectFor.map((x) => (
              <span key={x} className="rounded-full border border-gold/50 bg-white px-4 py-1.5 text-sm text-ink/80">{x}</span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`${WHATSAPP_URL}?text=${msg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-maroon px-7 py-3 text-sm font-semibold text-cream transition hover:bg-terracotta"
            >
              Order / Enquire on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="rounded-full border-2 border-maroon px-7 py-3 text-sm font-semibold text-maroon transition hover:bg-maroon hover:text-cream"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <p className="mt-4 text-sm text-ink/60">
            Prices and delivery depend on your requirements — contact us for a quote. Or email{" "}
            <a className="text-terracotta underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-sand/60">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="section-title text-center font-serif text-3xl font-bold text-maroon">
              More from {category.name}
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
