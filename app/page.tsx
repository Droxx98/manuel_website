"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Macawbackground from './content/macaw-background.jpg';
import Manuel from './content/manuel.jpg';


export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div
          className="p-2 transition-colors duration-300"
          style={{
            background: hasScrolled ? "var(--accent-green)" : "transparent",
            color: "var(--willow-green)",
          }}
        >
          <h1 className="text-4xl font-bold ml-4" style={{ color: "var(--willow-green)" }}>IN WILD TRAVELS</h1>
          <p className="mt-1 ml-4 text-sm" style={{ color: "var(--willow-green)" }}>Take your next trip with In Wild Travels.</p>
        </div>
      </div>

      {/* Top Section */}
      <div className="relative w-full h-screen">
        <Image
          src={Macawbackground}
          alt="Macaw in rainforest"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-4 text-center text-white">
          <p className="text-white">Discover new destinations and adventures.</p>
        </div>
      </div>

      {/* About Section */}
      <section className="mt-14 px-4 pb-12" style={{ background: "var(--bg-page)" }}>
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <h4 className="text-sm mt-2 mb-6 text-center">Passion for nature. Travel with purpose.</h4>

        <div
          className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-lg p-4 md:flex-row md:items-start md:gap-8 md:p-6"
          style={{ background: "var(--bg-surface)", border: "1px solid var(--surface-border)" }}
        >
          <div className="w-70 md:w-80 shrink-0 rounded-md" style={{ background: "var(--forest-moss)" }}>
            <Image
              src={Manuel}
              alt="Manuel Mori, founder of In Wild Travels"
              className="h-auto w-full rounded-md object-cover"
            />
          </div>

          <div className="w-full text-center md:text-left" style={{ color: "var(--willow-green)" }}>
            <h3 className="text-xl font-semibold" style={{ color: "var(--willow-green)" }}>Meet Manuel Mori</h3>
            <p className="mt-3 font-serif" style={{ color: "var(--willow-green)" }}>
              Manuel comes from Iquitos by the Amazon River and leads In Wild Travels with deep local expertise in guiding and tourism across Peru.
            </p>
            <p className="mt-3 font-serif" style={{ color: "var(--willow-green)" }}>
              Every trip is designed to support local communities and protect Peru’s wildlife and wild places, while giving you a meaningful and unforgettable experience.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
