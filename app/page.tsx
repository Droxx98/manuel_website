"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
    <div className="min-h-screen content">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div
          className="glass-navbar ui-text p-3 transition-all duration-300"
          style={{
            opacity: hasScrolled ? 1 : 0.9,
          }}
        >
          <h1 className="display-text text-2xl md:text-3xl ml-4 tracking-[0.09em]">IN WILD TRAVELS</h1>
          <p className="mt-1 ml-4 text-xs md:text-sm">Take your next trip with In Wild Travels.</p>
        </div>
      </div>

      <video autoPlay muted loop playsInline preload="metadata" id="bgvideo">
        <source src="/background-video-desktop.mp4" type="video/mp4" />
      </video>

      <div className="fixed inset-0 z-0 bg-black/25" aria-hidden />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-4 pt-24 pb-10">
        <div className="glass-panel w-full max-w-3xl rounded-3xl px-6 py-10 text-center md:px-10 md:py-14">
          <h2 className="display-text text-3xl md:text-5xl">Explore Peru with Local Guides</h2>
          <p className="ui-text mt-4 text-base md:text-lg">
            Discover new destinations and unforgettable nature adventures with a modern, personal and safe experience.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 pb-12">
        <h2 className="display-text text-3xl text-center">About Us</h2>
        <h4 className="ui-text text-sm mt-2 mb-6 text-center">Passion for nature. Travel with purpose.</h4>

        <div
          className="glass-panel mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-3xl p-5 md:flex-row md:items-start md:gap-8 md:p-7"
        >
          <div className="w-70 md:w-80 shrink-0 rounded-2xl overflow-hidden">
            <Image
              src={Manuel}
              alt="Manuel Mori, founder of In Wild Travels"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="ui-text w-full text-center md:text-left">
            <h3 className="display-text text-2xl">Meet Manuel Mori</h3>
            <p className="mt-3">
              Manuel comes from Iquitos by the Amazon River and leads In Wild Travels with deep local expertise in guiding and tourism across Peru.
            </p>
            <p className="mt-3">
              Every trip is designed to support local communities and protect Peru’s wildlife and wild places, while giving you a meaningful and unforgettable experience.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
