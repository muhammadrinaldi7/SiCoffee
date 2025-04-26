"use client";

import { Hero } from "./sections/Hero";
import { Product } from "./sections/Product";

export default function Home() {
  return (
    <div className="w-full scroll-smooth overflow-hidden">
      <Hero />
      <Product />
    </div>
  );
}
