import Image from "next/image";

import logoIcon from "@/public/icon.png";

import { GithubLogoIcon, XLogoIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="relative mx-auto flex w-full items-center justify-between rounded p-2">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <Image
            alt="Ghostex logo"
            src={logoIcon}
            priority
            className="size-10"
          />
          <span className="font-heading text-xl font-semibold">Ghostex</span>
        </div>
        <div className="flex gap-2">
          <Link href={"https://github.com/maddada/ghostex"}>
            <Button
              className="font-body font-thin rounded-none"
              variant="ghost"
            >
              <GithubLogoIcon weight="fill" /> Github
            </Button>
          </Link>
          <Link href={"https://x.com/maddada"}>
            <Button
              className="font-body font-thin rounded-none"
              variant="ghost"
            >
              <XLogoIcon weight="fill" /> @maddada
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
