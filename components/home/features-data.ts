export type Feature = {
  title: string;
  description: string;
  eyebrow: string;
};

export const features: Feature[] = [
  {
    title: "T3.chat Support",
    description:
      "Runs cleanly alongside T3.chat workflows so you can manage browser-first and terminal-first agent work from the same surface.",
    eyebrow: "01",
  },
  {
    title: "Agent CLIs Manager",
    description:
      "A focused shell for starting, organizing, tracking, and resuming multiple agent CLI sessions without losing context.",
    eyebrow: "02",
  },
  {
    title: "Embedded Chromium Browser",
    description:
      "Built-in Chromium with DevTools and profile support keeps research, testing, and auth-heavy tasks inside the same workspace.",
    eyebrow: "03",
  },
  {
    title: "Embedded Light Code Editor",
    description:
      "Quick editing for code and Markdown files without the weight of a full IDE when you only need fast, focused changes.",
    eyebrow: "04",
  },
  {
    title: "Fast & Low RAM Usage",
    description:
      "Designed to stay lean under long-running agent workloads so your machine remains responsive even with many sessions open.",
    eyebrow: "05",
  },
  {
    title: "SSH With Live Persistence",
    description:
      "Remote workflows stay attached and recoverable through zmx, tmux, and zellij-backed session persistence.",
    eyebrow: "06",
  },
  {
    title: "Native Swift macOS Shell",
    description:
      "The app shell is built natively in Swift for tighter platform integration and better day-to-day performance.",
    eyebrow: "07",
  },
  {
    title: "Native Ghostty Terminal",
    description:
      "Uses Ghostty for strong compatibility and efficient CPU and RAM behavior under real agent CLI usage.",
    eyebrow: "08",
  },
  {
    title: "Auto Sleep Unused Terminals",
    description:
      "Inactive terminals sleep automatically to save memory and wake instantly when clicked back into focus.",
    eyebrow: "09",
  },
  {
    title: "Auto Session Naming",
    description:
      "Sessions label themselves clearly, so large multi-agent workspaces stay readable without manual cleanup.",
    eyebrow: "10",
  },
  {
    title: "Always Resume Sessions",
    description:
      "Reopening the app restores your agent CLI sessions so you can continue exactly where you left off.",
    eyebrow: "11",
  },
  {
    title: "Light VS Code + Git + PRs",
    description:
      "An embedded VS Code-based editor with Git tools and GitHub PR workflows keeps lightweight coding tasks in one place.",
    eyebrow: "12",
  },
  {
    title: "Rich Prompt Editor",
    description:
      "Press Ctrl+G to open an image-friendly prompt editor with preview support and a better writing surface for long instructions.",
    eyebrow: "13",
  },
  {
    title: "Menu Bar Status Indicators",
    description:
      "Working and done indicators with notification sounds keep you updated on nearly all agent CLIs without constant checking.",
    eyebrow: "14",
  },
  {
    title: "Pets Support",
    description:
      "Session pets give you a playful at-a-glance signal for status without adding noise to the main workspace.",
    eyebrow: "15",
  },
  {
    title: "Works With All Agent CLIs",
    description:
      "Compatible with Claude Code, Codex CLI, OpenCode, Pi Agent, Gemini, Copilot, and other terminal-based agent tools.",
    eyebrow: "16",
  },
];
