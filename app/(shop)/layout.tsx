import Navbar from "@/components/navbar/Navbar";

import Footer from "@/components/home/Footer";
import Container from "@/components/global/Container";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <Container className="py-20">{children}</Container>
      <Footer />
    </>
  );
}
