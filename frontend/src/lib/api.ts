export interface ProductDetails {
  about: string;
  highlights: string[];
  perfectFor: string[];
  customizable: boolean;
}

export interface Product {
  id: string;
  name: string;
  icon: string;
  description: string;
  image?: string;
  details: ProductDetails;
}

export interface ProductPage {
  product: Product;
  category: Omit<Category, "products">;
  related: Product[];
}

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  products: Product[];
}

// Server components use API_URL; browser code uses NEXT_PUBLIC_API_URL.
export const API_URL =
  process.env.API_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:4000/api";

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${API_URL}/categories`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load categories (${res.status})`);
  return res.json();
}

export async function getProduct(id: string): Promise<ProductPage | null> {
  const res = await fetch(`${API_URL}/products/${encodeURIComponent(id)}`, { cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to load product (${res.status})`);
  return res.json();
}

export const PHONE_DISPLAY = "076 209 8329";
export const PHONE_TEL = "0762098329";
export const EMAIL = "pratheepanniroshan49@gmail.com";
export const WHATSAPP_URL = "https://wa.me/94762098329";
