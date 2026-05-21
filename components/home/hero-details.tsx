"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { heroShowcaseItems } from "./hero-showcase-data";

export default function HeroDetails() {
  const [activeId, setActiveId] = useState(heroShowcaseItems[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    heroShowcaseItems.forEach((item) => {
      const node = sectionRefs.current[item.id];
      if (!node) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(item.id);
          }
        },
        { rootMargin: "-35% 0px -45% 0px", threshold: 0 },
      );

      observer.observe(node);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const scrollToSection = useCallback((id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <section
      id="product-showcase"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-2 pb-32 pt-8 sm:px-4"
    >
      <div className="mb-10 max-w-3xl">
        <p className="font-ibm-plex-mono text-[10px] uppercase tracking-[0.32em] text-primary/42">
          Product tour
        </p>
        <h2 className="font-heading mt-3 text-3xl tracking-tight text-primary sm:text-4xl md:text-5xl">
          Built for agent power users
        </h2>
      </div>

      <div className="flex gap-0 lg:gap-12 xl:gap-16">
        <aside className="hidden w-52 shrink-0 lg:block xl:w-60">
          <nav
            aria-label="Product features"
            className="sticky top-28 flex flex-col border-l border-white/10"
          >
            {heroShowcaseItems.map((item, index) => {
              const isActive = activeId === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "group relative -ml-px border-l py-4 pl-5 pr-2 text-left transition-colors",
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-primary/45 hover:text-primary/72",
                  )}
                >
                  <span className="font-ibm-plex-mono text-[10px] uppercase tracking-[0.28em] text-primary/32">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block text-sm leading-snug tracking-tight">
                    {item.navLabel}
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        <div className="min-w-0 flex-1 border-t border-white/10 lg:border-t-0">
          <div className="flex gap-2 overflow-x-auto border-b border-white/10 pb-4 lg:hidden">
            {heroShowcaseItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "shrink-0 rounded-none border px-3 py-2 font-ibm-plex-mono text-[10px] uppercase tracking-[0.22em] transition-colors",
                  activeId === item.id
                    ? "border-primary/40 bg-primary/8 text-primary"
                    : "border-white/10 text-primary/50",
                )}
              >
                {item.navLabel}
              </button>
            ))}
          </div>

          <div className="divide-y divide-white/10">
            {heroShowcaseItems.map((item) => (
              <article
                key={item.id}
                id={item.id}
                ref={(node) => {
                  sectionRefs.current[item.id] = node;
                }}
                className="scroll-mt-28 py-16 first:pt-10 sm:py-20 lg:min-h-[72vh] lg:py-24"
              >
                <h3 className="font-heading max-w-3xl text-2xl leading-[1.15] tracking-tight text-primary sm:text-3xl md:text-4xl">
                  {item.headline}
                </h3>

                <div className="mt-10 overflow-hidden rounded sm:rounded-xl lg:rounded-2xl border border-white/10 bg-primary/5 p-1 backdrop-blur-sm">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="h-auto w-full"
                    sizes="(max-width: 1024px) 100vw, min(900px, 70vw)"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
