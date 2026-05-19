import Image from "next/image";

import logoIcon from "@/public/icon.png";

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
          <Button className="font-body rounded-none" variant="outline">
            Download Now
          </Button>
        </div>
      </div>
    </div>
  );
}
