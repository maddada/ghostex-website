import type { StaticImageData } from "next/image";

import o1 from "@/public/o1.png";
import o2 from "@/public/o2.png";
import o3 from "@/public/o3.png";
import o4 from "@/public/o4.png";
import o5 from "@/public/o5.png";

export type HeroShowcaseItem = {
  id: string;
  navLabel: string;
  headline: string;
  image: StaticImageData;
  alt: string;
};

export const heroShowcaseItems: HeroShowcaseItem[] = [
  {
    id: "multi-project-agents",
    navLabel: "Multi-project agents",
    headline:
      "Work with tens of agents in multiple projects with ease",
    image: o1,
    alt: "Ghostex managing multiple agent projects",
  },
  {
    id: "agent-clis",
    navLabel: "All Agent CLIs",
    headline:
      "All Agent CLIs supported (please send an issue or PR for integrating any missing agent CLI)",
    image: o2,
    alt: "Supported agent CLI integrations",
  },
  {
    id: "mobile-remote",
    navLabel: "iOS & Android remote",
    headline:
      "Android and iOS apps for remote controlling ANY Agent CLI running on your Mac (live remote control that includes all features)",
    image: o3,
    alt: "Mobile apps for remote agent control",
  },
  {
    id: "embedded-browser",
    navLabel: "Embedded browser",
    headline:
      "Includes Chromium-based embedded browser with Devtools, profiles, and MCP access",
    image: o4,
    alt: "Embedded Chromium browser with devtools",
  },
  {
    id: "embedded-vscode",
    navLabel: "Embedded VS Code",
    headline:
      "Includes embedded VS Code for editing files, checking PRs, and working with git",
    image: o5,
    alt: "Embedded VS Code for editing and git",
  },
];
