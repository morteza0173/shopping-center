import Container from "../global/Container";
import { Separator } from "../ui/separator";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import { DockNavbar } from "./DockNavbar";
import LinkDropdown from "./LinkDropdown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
function Navbar() {
  return (
    <nav className="border-b shadow-lg">
      <Container className="flex flex-col items-center sm:flex-row sm:justify-between flex-wrap py-2 gap-4">
        <Logo />
        <NavSearch />
        <section className="flex gap-4 justify-center items-center h-5">
          {/* <CartButton />
          <DarkMode />
          <Separator orientation="vertical" className="" />
          <LinkDropdown />  */}
          <DockNavbar />
        </section>
      </Container>
    </nav>
  );
}
export default Navbar;
