"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Macawbackground from './content/macaw-background.jpg';


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
          <h1 className="text-4xl font-bold ml-4">IN WILD TRAVELS</h1>
          <p className="mt-1 ml-4 text-sm">Take your next trip with In Wild Travels.</p>
        </div>
      </div>
      {/* Main content */}

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
          <p>Discover new destinations and adventures.</p>
        </div>
      </div>
      {/* About Section */}
      <div className="mt-16 px-4 pb-10">
        <h2 className="text-2xl font-semibold mb-4 flex flex-col items-center">About Us</h2>
        <p>
          In Wild Travels is your go-to travel agency for unforgettable experiences. We specialize in crafting personalized travel itineraries that cater to your unique preferences and interests. Whether you're seeking a relaxing beach getaway, an adventurous mountain trek, or a cultural city tour, we have the expertise to make your dream trip a reality.
        </p>
      </div>

      {/* Footer */}
    </div>
  );
}
