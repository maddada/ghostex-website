"use client";

import DarkVeil from "@/components/DarkVeil";
import HeroDetails from "@/components/home/hero-details";
import HomeFeatures from "@/components/home/home-features";
import HomeHero from "@/components/home/home-hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="relative flex flex-1">
      <div className="absolute z-0 h-screen w-screen">
        <DarkVeil
          hueShift={25}
          noiseIntensity={0.01}
          scanlineIntensity={1}
          speed={0.6}
          scanlineFrequency={0}
          warpAmount={0.2}
          resolutionScale={1}
        />
      </div>
      <main className="z-10 flex-1">
        <Navbar />
        <HomeHero />
        <HomeFeatures />
        {/* <HeroDetails /> */}
      </main>
    </div>
  );
}
