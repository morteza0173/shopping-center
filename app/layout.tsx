import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import ReactProvider from "./provider";

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

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
        <ReactProvider>{children}</ReactProvider>
      </body>
    </html>
  );
}
