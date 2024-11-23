"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function DarkMode() {
  const { setTheme } = useTheme();

  return (
    <div className="hidden sm:block">
      <DropdownMenu dir="rtl">
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">تغییر تم</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" sideOffset={10}>
          <DropdownMenuItem onClick={() => setTheme("light")}>
            روشن
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            تاریک
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            پیش فرض
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DarkMode;
