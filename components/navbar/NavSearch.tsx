"use client";
import { useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );

  const handlerSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`);
  }, 500);

  useEffect(() => {
    const currentSearch = searchParams.get("search") || "";
    if (currentSearch !== search) {
      setSearch("");
    }
  }, [searchParams.get("search")]);

  return (
    <Input
      type="search"
      placeholder="جستجو ..."
      className="max-w-xs mt-5 dark:bg-muted w-36 sm:w-48 md:w-60 lg:w-80"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        handlerSearch(e.target.value);
      }}
    />
  );
}
export default NavSearch;
