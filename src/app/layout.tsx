import "../style/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { ChildrenProps } from "@/types/types";
import { classNames } from "../utils";
import { MenuBar } from "@/components/matarial";

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

const DynamicProvider = dynamic(
  () => import("../../config/Provider/Provider"),
  {
    loading: () => (
      <p className="text-[#a3e1f0] text-uppercase opaicty-0 transform rotate-x-[-90deg]">
        is loading .....
      </p>
    ),
  }
);

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body
        className={classNames(
          "h-full scroll-smooth antialiased",
          inter.className
        )}
      >
        <DynamicProvider>
          
            <MenuBar/>
            {children}
        
        </DynamicProvider>
      </body>
    </html>
  );
}
