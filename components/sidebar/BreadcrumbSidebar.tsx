"use client";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { data } from "./app-sidebar";

function BreadcrumbSidebar() {
  let breadcrumbPage = "";
  const dataPathName = data;
  const pathName = usePathname();
  dataPathName.navMain.map((nav) => {
    if (pathName === nav.url) {
      breadcrumbPage = nav.title;
      return;
    }
    nav.items.map((item) => {
      if (pathName === item.url) {
        breadcrumbPage = item.title;
        return;
      }
    });
  });
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="#">مدیریت شاپینگ سنتر</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>{breadcrumbPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
export default BreadcrumbSidebar;
