
import Container from "@/components/global/Container";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container className="py-20">{children}</Container>;
}
