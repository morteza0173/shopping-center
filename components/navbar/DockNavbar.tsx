import React from "react";

import { Dock, DockIcon } from "@/components/ui/dock";
import DarkMode from "./DarkMode";
import CartButton from "./CartButton";
import LinkDropdown from "./LinkDropdown";
import { Separator } from "../ui/separator";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockNavbar() {
  return (
    <div className="relative md:mb-6">
      <Dock direction="middle" className="px-6">
        <DockIcon>
          <DarkMode />
        </DockIcon>
        <DockIcon>
          <CartButton />
        </DockIcon>
        <DockIcon className="-mx-4">
          <Separator orientation="vertical" className="h-full" />
        </DockIcon>
        <DockIcon>
          <LinkDropdown />
        </DockIcon>
      </Dock>
    </div>
  );
}
