import Link from "next/link";
import { Button } from "../ui/button";
import logo from "../../assets/logo.svg";
import Image from "next/image";
function Logo() {
  return (
    <Button className="h-24" variant="ghost" asChild>
      <Link href="/">
        <Image src={logo} alt="Logo" width={70} height={70} />
        <h1 className="pr-2 font-extrabold">شاپینگ سنتر</h1>
      </Link>
    </Button>
  );
}
export default Logo;
