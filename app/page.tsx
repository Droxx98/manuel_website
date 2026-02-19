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
          <p className="text-white">Discover new destinations and adventures.</p>
        </div>
      </div>
      {/* About Section */}
      <div className="mt-16 px-4 pb-10">
        <h2 className="text-4xl font-bold flex flex-col items-center">About Us</h2>
        <h4 className="text-md mb-8 text-center">Our foundation is our passion for nature and our mission is to preserve it</h4>
        <p className="text-center font-serif mb-4">
          In Wild Travels is your go-to travel agency for unforgettable experiences. We specialize in crafting personalized travel itineraries that cater to your unique preferences and interests. Whether you're seeking a relaxing beach getaway, an adventurous mountain trek, or a cultural city tour, we have the expertise to make your dream trip a reality.
        </p>
        <p className="text-center font-serif mb-4">In Wild Peru consists of Manuel Mori, from Iquitos by the Amazon River in Peru. Based on Manuel’s vast knowledge of tourism and guiding in Peru.</p>
        <p className="text-center font-serif">”We commit to making our trips a way of helping the nature and local people. The preservation of wild nature and protecting wildlife is our great passion that fuels us in our work. Peru is a treasure that we must protect. We believe it’s possible to contribute and to make a real difference. We'd be honored to get the opportunity to share with you our passion for this remarkable country and it's incredible diversity.” We extend a very warm welcome to you.</p>
      </div>

      {/* Footer */}
    </div>
  );
}
