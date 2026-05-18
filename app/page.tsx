import DarkVeil from "@/components/DarkVeil";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="relative flex flex-1">
      {/* <div className="absolute w-screen h-screen z-0">
        <DarkVeil
          hueShift={35}
          noiseIntensity={0.04}
          scanlineIntensity={1}
          speed={0.6}
          scanlineFrequency={0}
          warpAmount={0.2}
          resolutionScale={1}
        />
      </div> */}
      <main className="z-10 flex-1 w-full max-w-4xl mx-auto border-x border-border border-dashed">
        <Navbar />
      </main>
    </div>
  );
}
