"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { links, userlinks } from "@/utils/links";
import Link from "next/link";
import { LuAlignRight } from "react-icons/lu";
import UserIcon from "./UserIcon";
import { useEffect, useState } from "react";
import { checkUser } from "@/utils/actionsClient";
import { Separator } from "../ui/separator";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useToast } from "../hooks/use-toast";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";

function LinkDropdown() {
  //get user data
  const [image, setImage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState("کاربر");
  const [userFetch, setUserFetch] = useState("");

  const router = useRouter();
  const { toast } = useToast();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    Cookies.remove("token");
    router.refresh();
    setToken(null);
    setIsAdmin(false);
    setImage("");

    toast({
      description: "شما با موفقیت خارج شدید.",
    });
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
    async function getUserIcon() {
      if (savedToken) {
        const user = await checkUser();
        if (user) {
          const userImage = user?.avatar_urls?.["96"];
          setImage(userImage);
          const userRole = user?.roles?.includes("administrator");
          setIsAdmin(userRole);

          const userName = user?.username;
          setUserFetch(userName);
          setUsername(userName);
        }
      }
    }

    getUserIcon();
  }, [token]);

  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="default"
          className="flex flex-row items-center justify-between"
        >
          <LuAlignRight className="h-6 w-6" />
          <UserIcon image={image} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-48" sideOffset={10}>
        {token && (
          <>
            <DropdownMenuLabel className="font-semibold text-xs p-2 text-center">
              خوش امدید ، {username}
            </DropdownMenuLabel>
            <Separator className="m-1" />
          </>
        )}
        {token ? (
          <>
            {userlinks.map((link) => {
              return (
                <DropdownMenuItem key={link.href} className="p-2">
                  <Link href={link.href} className="w-full text-start">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
            <Separator className="m-1" />
            {userFetch && !isAdmin && (
              <DropdownMenuItem>
                <Link href={"#"} className="w-full text-start">
                  پروفایل کاربری
                </Link>
              </DropdownMenuItem>
            )}
          </>
        ) : (
          links.map((link) => {
            return (
              <DropdownMenuItem key={link.href} className="p-2">
                <Link href={link.href} className="w-full text-start">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })
        )}
        {isAdmin && (
          <DropdownMenuItem className="p-2">
            <Link href={"/dashboard"} className="w-full text-start">
              مدیریت فروشگاه
            </Link>
          </DropdownMenuItem>
        )}
        {token && (
          <>
            <DropdownMenuItem className="p-2">
              <button onClick={logoutHandler} className="w-full text-start">
                خروج
              </button>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinkDropdown;
