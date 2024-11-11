"use client";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import BreadcrumbSidebar from "@/components/sidebar/BreadcrumbSidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { checkUser } from "@/utils/actionsClient";

import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const fetchCheckAdmin = async () => {
      try {
        const response = await checkUser();
        console.log(response);
        if (response?.roles?.includes("administrator")) {
          return;
        }
        localStorage.removeItem("token");
        window.location.href = "/login";
      } catch (error) {
        console.log(error);
      }
    };
    fetchCheckAdmin();
  }, []);

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <BreadcrumbSidebar />
            </div>
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}