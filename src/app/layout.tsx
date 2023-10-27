import "../style/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChildrenProps } from "@/types/types";
import { classNames } from "../utils/utils";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Muhammad Saqlain",
    template: "%s | Software Engineering",
  },
  description: "this is a my website for pratices",
  openGraph: {
    images: "/og.png",
  },
};


export default function RootLayout({ children }: ChildrenProps) {
  const lang:string = "en";
  return (
    <html lang={lang}>
      <body
        className={classNames(
          "h-full scroll-smooth antialiased",
          inter.className,
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
