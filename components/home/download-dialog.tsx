"use client";

import { useState } from "react";

import {
  AppleLogoIcon,
  CheckIcon,
  CopyIcon,
  LinuxLogoIcon,
  WindowsLogoIcon,
} from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BREW_INSTALL_COMMAND, X_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

type Platform = "macos" | "windows" | "linux";

const platforms: {
  id: Platform;
  label: string;
  icon: typeof AppleLogoIcon;
  available: boolean;
}[] = [
  { id: "macos", label: "macOS Homebrew", icon: AppleLogoIcon, available: true },
  {
    id: "windows",
    label: "Windows",
    icon: WindowsLogoIcon,
    available: false,
  },
  { id: "linux", label: "Linux", icon: LinuxLogoIcon, available: false },
];

type DownloadDialogProps = {
  triggerClassName?: string;
};

export function DownloadDialog({ triggerClassName }: DownloadDialogProps) {
  const [platform, setPlatform] = useState<Platform>("macos");
  const [copied, setCopied] = useState(false);

  async function copyCommand() {
    await navigator.clipboard.writeText(BREW_INSTALL_COMMAND);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            size="lg"
            className={cn(
              "flex items-center justify-center gap-1 rounded-none px-4 py-6 text-lg",
              triggerClassName,
            )}
          />
        }
      >
        Download Now
      </DialogTrigger>
      <DialogContent
        showCloseButton
        className="max-w-lg gap-0 sm:rounded-lg border-white/10 bg-[#0a0a0a]/95 p-0 ring-white/10 backdrop-blur-md sm:max-w-lg"
      >
        <DialogHeader className="border-b border-white/10 px-5 py-4">
          <DialogTitle className="font-heading text-lg tracking-tight text-primary">
            Install Ghostex
          </DialogTitle>
          <DialogDescription className="text-primary/55">
            macOS via Homebrew. Other platforms are on the way.
          </DialogDescription>
        </DialogHeader>

        <div className="p-4">
          <div
            role="tablist"
            aria-label="Platform"
            className="flex flex-wrap gap-1 border border-white/10 p-1"
          >
            {platforms.map(({ id, label, icon: Icon, available }) => {
              const isActive = platform === id;

              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  disabled={!available}
                  onClick={() => available && setPlatform(id)}
                  className={cn(
                    "flex min-w-0 flex-1 items-center gap-2 px-3 py-2.5 text-left text-sm transition-colors",
                    isActive
                      ? "border border-white/12 bg-white/4 text-primary"
                      : "border border-transparent text-primary/70",
                    !available && "cursor-default opacity-80",
                  )}
                >
                  <Icon className="size-4 shrink-0" weight="fill" />
                  <span className="min-w-0 truncate font-medium">{label}</span>
                  {!available ? (
                    <span className="ml-auto shrink-0 font-ibm-plex-mono text-[10px] uppercase tracking-[0.18em] text-primary/40">
                      Soon
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="mt-3 flex items-center gap-2 border border-white/10 bg-black/40 px-3 py-3">
            {platform === "macos" ? (
              <>
                <code className="min-w-0 flex-1 font-mono text-[13px] leading-snug text-primary/85">
                  {BREW_INSTALL_COMMAND}
                </code>
                <Button
                  type="button"
                  variant="outline"
                  size="icon-sm"
                  className="shrink-0 rounded-none border-white/15"
                  onClick={copyCommand}
                  aria-label={copied ? "Copied" : "Copy install command"}
                >
                  {copied ? (
                    <CheckIcon className="text-primary/70" />
                  ) : (
                    <CopyIcon />
                  )}
                </Button>
              </>
            ) : (
              <p className="font-body text-sm text-primary/50">
                Windows and Linux builds are not available yet. Follow{" "}
                <a
                  href={X_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/75 underline-offset-2 hover:text-primary hover:underline"
                >
                  @maddada
                </a>{" "}
                for updates.
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
