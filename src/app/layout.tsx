import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import "../../public/css/bootstrap.min.css";
import "../../public/css/animate.css";
import "../../public/css/custom-animation.css";
import "../../public/css/slick.css";
import "../../public/css/nice-select.css";
import "../../public/css/flaticon.css";
import "../../public/css/swiper-bundle.css";
import "../../public/css/meanmenu.css";
import "../../public/css/font-awesome-pro.css";
import "../../public/css/magnific-popup.css";
import "../../public/css/spacing.css";
import "../../public/css/style.css";
import Preloader from "@/components/ui/preloader";
import Header from "@/components/ui/header";

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
