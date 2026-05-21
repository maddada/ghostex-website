import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import { DM_Sans, Fira_Code, Manrope } from "next/font/google";
import "./globals.css";

const firaCodeFiraCode = Fira_Code({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin",
    "latin-ext",
    "symbols2",
  ],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-code",
});

const dmSansDmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: [
    "100",
    "1000",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-dm-sans",
});

const manropeManrope = Manrope({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "latin",
    "latin-ext",
    "vietnamese",
  ],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Ghostex",
  description: "A polished agent CLI manager built around Ghostty workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased font-body",
        manropeManrope.variable,
        dmSansDmSans.variable,
        firaCodeFiraCode.variable,
      )}
    >
      <body className="dark flex min-h-full flex-col bg-[#000000]">
        <ReactLenis root />
        {children}
      </body>
    </html>
  );
}
