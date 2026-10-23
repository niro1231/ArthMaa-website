import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL, type Product } from "@/lib/api";

export default function ProductCard({ product }: { product: Product }) {
  const href = `/products/${product.id}`;
  const msg = encodeURIComponent(`Hi ArthMaa! I'm interested in: ${product.name}`);
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gold/25 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={href}
        aria-label={`View details of ${product.name}`}
        className="kolam-bg relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-sand to-[#f7d9b8]"
      >
        {product.image ? (
          <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
        ) : (
          <span className="text-6xl drop-shadow transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
            {product.icon}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-serif text-lg font-semibold leading-snug text-maroon">
          <Link href={href} className="hover:text-terracotta">{product.name}</Link>
        </h3>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-ink/70">{product.description}</p>
        <div className="mt-4 flex items-center justify-between gap-2 text-sm font-semibold">
          <Link href={href} className="text-terracotta hover:text-maroon">View details →</Link>
          <a
            href={`${WHATSAPP_URL}?text=${msg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-leaf hover:text-maroon"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
