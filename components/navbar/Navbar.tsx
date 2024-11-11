import { Suspense } from "react";
import Container from "../global/Container";

import { DockNavbar } from "./DockNavbar";

import Logo from "./Logo";
import NavSearch from "./NavSearch";
import DarkMode from "./DarkMode";
import CartButton from "./CartButton";
import { Separator } from "../ui/separator";
import LinkDropdown from "./LinkDropdown";
function Navbar() {
  return (
    <nav className="border-b shadow-lg">
      <Container className="flex flex-col items-center sm:flex-row sm:justify-between flex-wrap py-2 gap-4">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <section className="flex gap-4 h-5 md:ml-10">
          <DarkMode />
          <CartButton />
          <Separator orientation="vertical" className="h-10" />
          <LinkDropdown />
          {/* <DockNavbar /> */}
        </section>
      </Container>
    </nav>
  );
}
export default Navbar;
