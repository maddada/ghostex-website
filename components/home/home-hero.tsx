"use client";
import Image from "next/image";

import { PlusIcon } from "@phosphor-icons/react";

import ghostexImage from "@/public/ghostex.png";
import { Button } from "@/components/ui/button";
import { CometCard } from "@/components/ui/comet-card";
import Link from "next/link";
import { useLenis } from "lenis/react";

export default function HomeHero() {
  const lenis = useLenis();
  return (
    <section className="mx-auto w-full max-w-7xl pt-16">
      <h1 className="font-heading max-w-full px-2 text-center text-4xl tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
        Ghostty Terminals Inspired <br /> by Codex App&apos;s UX
      </h1>
      <p className="font-body mx-auto w-full max-w-2xl px-2 pt-5 text-center text-lg text-primary/85">
        Ghostex combines a high-performance Ghostty terminal with Chromium
        browser panes, VS Code editing, and polished session management to keep
        your agents productive and your Mac responsive.
      </p>
      <div className="my-5 mb-10 flex w-full items-center justify-center gap-2 p-2">
        <Button
          size="lg"
          className="flex items-center justify-center gap-1 rounded-none px-4 py-6 text-lg"
        >
          Download Now
        </Button>
        <a
          href="#product-showcase"
          onClick={(e) => {
            e.preventDefault();
            lenis?.scrollTo("#product-showcase");
          }}
        >
          <Button
            size="lg"
            variant="outline"
            className="relative rounded-none border-dashed px-4 py-6 text-lg"
          >
            <PlusIcon className="absolute -left-2 -top-2 text-border" />
            <PlusIcon className="absolute -bottom-2 -left-2 text-border" />
            <PlusIcon className="absolute -bottom-2 -right-2 text-border" />
            <PlusIcon className="absolute -right-2 -top-2 text-border" />
            Browse Features
          </Button>
        </a>
      </div>
      <CometCard rotateDepth={1} translateDepth={1}>
        <div className="h-fit w-fit overflow-hidden rounded sm:rounded-xl lg:rounded-2xl bg-primary/65 p-1 backdrop-blur-2xl mx-2">
          <Image
            src={ghostexImage}
            alt="Ghostex app preview"
            priority
            className="h-auto w-auto"
          />
        </div>
      </CometCard>
    </section>
  );
}
