import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import "../../public/css/bootstrap.min.css";
import "../../public/css/style.css";
import Preloader from "@/components/ui/preloader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fiqra",
  description: "Where indispensable talents emerge!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Preloader>{children}</Preloader>
      </body>
    </html>
  );
}
