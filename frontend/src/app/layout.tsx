import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCategories } from "@/lib/api";

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ArthMaa Crafts & Decor | Handmade with Love",
  description:
    "Handmade crafts and decor — lamps, vases, crochet handbags, kolam, hand painted table cloths and more. Custom orders welcome.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const categories = await getCategories().catch(() => []);
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${playfair.variable} ${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer categories={categories} />
      </body>
    </html>
  );
}
