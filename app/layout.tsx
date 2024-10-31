import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Provider from "./provider";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "شاپینگ سنتر",
  description:
    "مرکز خرید آنلاین شما برای دسترسی به بهترین محصولات با کیفیت و قیمت‌های رقابتی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirmatn.className} antialiased`}>
        <Provider>
          <Navbar />
          <Container className="py-20">{children}</Container>
        </Provider>
      </body>
    </html>
  );
}
