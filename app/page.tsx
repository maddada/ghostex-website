"use client"
import DarkVeil from "@/components/DarkVeil";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { AppleLogoIcon } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="relative flex flex-1">
      <div className="absolute w-screen h-screen z-0">
        <DarkVeil
          hueShift={35}
          noiseIntensity={0.04}
          scanlineIntensity={1}
          speed={0.6}
          scanlineFrequency={0}
          warpAmount={0.2}
          resolutionScale={1}
        />
      </div>
      <main className="z-10 flex-1 ">
        <Navbar />
        <section className="pt-16 w-full max-w-7xl mx-auto">
          <h1 className="font-heading font-semibold tracking-tighter leading-19 max-w-full text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-2">
            Ghostty Terminals Inspired <br /> by Codex App's UX
          </h1>
          <p className="font-body text-center text-primary/85 max-w-2xl text-lg w-full mx-auto pt-5 px-2">
            Ghostex combines a high-performance Ghostty terminal with Chromium
            browser panes, VS Code editing, and polished session management to
            keep your agents productive and your Mac responsive.
          </p>
          <div className="w-full p-2 flex items-center justify-center my-5 mb-10 gap-2">
            <Button size={"lg"} className={"py-6 px-4 rounded-none flex items-center justify-center gap-1 text-lg"}>
              {/* <AppleLogoIcon size={32} weight="fill" /> */}
              Download Now
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className={"py-6 px-4 rounded-none text-lg"}
            >
              Browse Features
            </Button>
          </div>
          <div className="p-1 h-fit w-fit bg-primary/65 backdrop-blur-2xl rounded-2xl overflow-hidden">
            <img src="/ghostex.png" alt="main" />
          </div>
        </section>
      </main>
    </div>
  );
}
