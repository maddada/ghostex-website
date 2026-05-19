"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import type { Variants } from "motion/react";

import { Button } from "@/components/ui/button";

import { features } from "./features-data";

const INITIAL_FEATURE_COUNT = 8;

const gridVariants: Variants = {
  collapsed: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.04,
    },
  },
  expanded: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.06,
    },
  },
};

const featureVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
      mass: 0.9,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.985,
    transition: {
      duration: 0.18,
      ease: "easeOut",
    },
  },
};

export default function HomeFeatures() {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const visibleFeatures = showAllFeatures
    ? features
    : features.slice(0, INITIAL_FEATURE_COUNT);
  const hiddenCount = features.length - INITIAL_FEATURE_COUNT;

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col px-2 pb-24 pt-20 sm:px-4">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-heading max-w-full text-center text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          The Agent Manager for Power Users
        </h1>
        <p className="font-body mx-auto w-full max-w-5xl px-2 pt-5 text-center text-lg text-primary/85">
          Built for the long-haul. Sessions are persistent, automatically
          named, and resume exactly where you left off. Intuitive tabs and
          splits. Menu bar status indicators. Tons more features. All designed
          to keep you in flow without sacrificing performance.
        </p>
      </div>

      <section className="mt-14 px-4 py-5 sm:px-6 sm:py-6">
        <motion.div
          layout
          variants={gridVariants}
          initial={false}
          animate={showAllFeatures ? "expanded" : "collapsed"}
          transition={{
            layout: {
              type: "spring",
              stiffness: 120,
              damping: 20,
            },
          }}
          className="grid gap-px overflow-hidden border border-border md:grid-cols-2 xl:grid-cols-4"
        >
          <AnimatePresence initial={false} mode="popLayout">
            {visibleFeatures.map((feature) => (
              <motion.article
                key={feature.title}
                layout
                variants={featureVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  transition: {
                    duration: 0.18,
                    ease: "easeOut",
                  },
                }}
                className="group bg-background/0 p-5"
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <div className="font-ibm-plex-mono text-[10px] uppercase tracking-[0.32em] text-primary/42">
                      Feature
                    </div>
                    <span className="font-ibm-plex-mono text-[10px] uppercase tracking-[0.28em] text-primary/36">
                      {feature.eyebrow}
                    </span>
                  </div>

                  <motion.div
                    layout="position"
                    initial={false}
                    whileHover={{ x: 2 }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 22,
                    }}
                    className="mt-3 flex items-center justify-between gap-4 border-b border-white/10 pb-3 [--pattern:rgba(255,255,255,0.08)]"
                  >
                    <div className="h-5 w-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px]" />
                  </motion.div>

                  <div className="mt-6 max-w-sm">
                    <h3 className="text-[1.65rem] leading-[1.08] text-primary">
                      {feature.title}
                    </h3>
                    <p className="mt-4 max-w-[34ch] text-[15px] leading-7 text-primary/62">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        {hiddenCount > 0 ? (
          <div className="mt-6 flex items-center justify-center">
            <motion.div
              layout
              whileHover={{ y: -2 }}
              whileTap={{ y: 0, scale: 0.985 }}
              transition={{
                type: "spring",
                stiffness: 360,
                damping: 24,
              }}
            >
              <Button
                type="button"
                size="lg"
                variant="outline"
                onClick={() => setShowAllFeatures((current) => !current)}
                className="rounded-none border-dashed px-5 py-6 text-sm uppercase tracking-[0.22em]"
              >
                <motion.span
                  key={showAllFeatures ? "less" : "more"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 24,
                  }}
                >
                  {showAllFeatures
                    ? "Show Less"
                    : `Show ${hiddenCount} More Features`}
                </motion.span>
              </Button>
            </motion.div>
          </div>
        ) : null}
      </section>
    </section>
  );
}
