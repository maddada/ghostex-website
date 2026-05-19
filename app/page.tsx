import DarkVeil from "@/components/DarkVeil";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

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
      <main className="z-10 flex-1 w-full max-w-4xl mx-auto">
        {/* <Navbar /> */}
        <section className="pt-30">
          <h1 className="font-heading font-semibold tracking-tighter text-transparent bg-linear-0 from-primary/80 to-primary bg-clip-text max-w-full text-center text-7xl">
            Ghostty Terminals Inspired <br /> by Codex App's UX
          </h1>
          <p className="font-body text-center text-primary/60 max-w-2xl w-full mx-auto pt-5">
            Ghostex combines a high-performance Ghostty terminal with Chromium
            browser panes, VS Code editing, and polished session management to
            keep your agents productive and your Mac responsive.
          </p>
          <div className="w-full p-2 flex items-center justify-center my-10 gap-2">
            <Button size={"lg"}>Download Now</Button>
            <Button size={"lg"} variant={"outline"}>Browse Features</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
