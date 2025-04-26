"use client";

import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Product } from "./sections/Product";
import { Promo } from "./sections/Promo";

export default function Home() {
  return (
    <div className="w-full scroll-smooth overflow-hidden">
      <Hero />
      <Product />
      <Promo />
      <Footer />
    </div>
  );
}
