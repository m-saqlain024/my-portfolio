import React from "react";
import "../style/globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "../components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Muhammad Saqlain",
    template: "%s | Software Engineering",
  },
  description: "this is a my website for pratices",
  openGraph: {
    images: "/og.png",
  },
};

export default function RootLayout() {
  const lang = "en";
  return (
    <div>
      <Navbar />
      this is a nocve 
    </div>
  );
}
