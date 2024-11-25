"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import LoginPage from "@/app/(login)/login/page";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitButton({
  className = "",
  text = "ثبت",
  size = "lg",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn("capitalize", className)}
      size={size}
    >
      {pending ? (
        <>
          <ReloadIcon className="ml-2 h-4 w-4 animate-spin" />
          لطفا صبر کنید ...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

export const CardSignInButton = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          type="button"
          size="icon"
          className="p-2 cursor-pointer w-8 h-8"
        >
          <FaRegHeart className="w-4 h-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle className="text-center mb-10">
          برای افزودن به علاقه مندی وارد شوید
        </DrawerTitle>
        <LoginPage />
      </DrawerContent>
    </Drawer>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="icon"
      variant="outline"
      className="p-2 cursor-pointer w-8 h-8"
    >
      {pending ? (
        <ReloadIcon className="animate-spin" />
      ) : isFavorite ? (
        <FaHeart className="w-4 h-4" />
      ) : (
        <FaRegHeart className="w-4 h-4" />
      )}
    </Button>
  );
};


