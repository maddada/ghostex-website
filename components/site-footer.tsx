import { GithubLogoIcon, StarIcon, XLogoIcon } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { GITHUB_URL, X_URL } from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-7xl px-2 pb-20 pt-12 sm:px-4">
      <div className="relative overflow-hidden border border-white/10  px-6 py-14 text-center sm:px-10 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(315deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_0,transparent_50%)] bg-size-[12px_12px] opacity-60"
        />
        <div className="relative">
          <p className="font-ibm-plex-mono text-[10px] uppercase tracking-[0.32em] text-primary/42">
            Free forever. No tracking.
          </p>
          <h2 className="font-heading mt-4 text-3xl tracking-tight text-primary sm:text-4xl">
            Help Make Ghostex Better
          </h2>
          <p className="font-body mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary/62">
            Ghostex is open source. Star the repo, share feedback, or contribute
            a fix — every bit helps shape the agent terminal we all want.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              variant={"outline"}
              className="gap-2 rounded-none px-5 text-primary"
              render={
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
            >
              <StarIcon className="size-4 text-[#fbbf24]" weight="fill" />
              Star on GitHub
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
        <p className="font-ibm-plex-mono text-[10px] uppercase tracking-[0.24em] text-primary/38">
          © {year} Ghostex
        </p>
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            variant="ghost"
            className="h-auto gap-1.5 rounded-none px-2 py-1 font-body text-sm font-normal text-primary/50 hover:text-primary/80"
            render={
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" />
            }
            nativeButton={false}
          >
            <GithubLogoIcon weight="fill" />
            GitHub
          </Button>
          <Button
            variant="ghost"
            className="h-auto gap-1.5 rounded-none px-2 py-1 font-body text-sm font-normal text-primary/50 hover:text-primary/80"
            render={<a href={X_URL} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
          >
            <XLogoIcon weight="fill" />
            @maddada
          </Button>
        </nav>
      </div>
    </footer>
  );
}
