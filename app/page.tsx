"use client";
import DarkVeil from "@/components/DarkVeil";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { CometCard } from "@/components/ui/comet-card";

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
        {/* very danger below */}
        {/* <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 90%, #0a0a0a 40%, #172554 100%)",
          }}
        /> */}
        {/* <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
        linear-gradient(45deg, transparent 49%, #262626 49%, #262626 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #262626  49%, #262626 51%, transparent 51%)
      `,
            backgroundSize: "40px 40px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          }}
        /> */}
      </div>
      <main className="z-10 flex-1 ">
        <Navbar />
        <section className="pt-16 w-full max-w-7xl mx-auto">
          <h1 className="font-heading font-semibold tracking-tighter leading-19 max-w-full text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-2">
            Ghostty Terminals Inspired <br /> by Codex App's UX
          </h1>
          <p className="font-body text-left text-primary/85 max-w-2xl text-lg w-full  pt-5 px-2">
            Ghostex combines a high-performance Ghostty terminal with Chromium
            browser panes, VS Code editing, and polished session management to
            keep your agents productive and your Mac responsive.
          </p>
          <div className="w-full p-2 flex items-center  my-5 mb-10 gap-2">
            <Button
              size={"lg"}
              className={
                "py-6 px-4 rounded-none flex items-center justify-center gap-1 text-lg"
              }
            >
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
          <CometCard rotateDepth={5} translateDepth={1}>
            <div className="p-1 h-fit w-fit bg-primary/65 backdrop-blur-2xl rounded-2xl overflow-hidden">
              <img src="/ghostex.png" alt="main" />
            </div>
          </CometCard>
        </section>
        <section className="pt-16 w-full max-w-7xl mx-auto min-h-screen bg-background">
          <h1 className="font-heading font-semibold tracking-tighter leading-19 max-w-full text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-2">
            The Agent Manager for Power Users
          </h1>
          <p className="font-body text-left text-primary/85 max-w-5xl text-lg w-full pt-5 px-2">
            Built for the long-haul. Sessions are persistent, automatically
            named, and resume exactly where you left off. Intuitive tabs and
            splits. Menu bar status indicators. Tons more features. All designed
            to keep you in flow without sacrificing performance.
          </p>
        </section>
      </main>
    </div>
  );
}
