import { Suspense } from "react";
import Container from "../global/Container";

import Logo from "./Logo";
import NavSearch from "./NavSearch";
import DarkMode from "./DarkMode";
import CartButton from "./CartButton";
import { Separator } from "../ui/separator";
import LinkDropdown from "./LinkDropdown";
function Navbar() {
  return (
    <nav className="border-b shadow-lg">
      <Container className="flex items-center flex-row justify-between  py-2 gap-4">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <section className="flex sm:gap-4 h-5 md:ml-10">
          <DarkMode />
          <CartButton />
          <Separator orientation="vertical" className="h-10" />
          <LinkDropdown />
        </section>
      </Container>
    </nav>
  );
}
export default Navbar;
