import Navbar from "@/components/libs/Navbar/Navbar";
import "../style/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Saqlain",
  description: "Porfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen">
          {/* Static sidebar for desktop */}
          <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            <Navbar />
          </div>
          {/* Main content area */}
          <div className="md:pl-64 flex flex-col">
            {/* Main content */}
            <main className="flex-1 absolute inset-0 md:left-64 pt-16 overflow-hidden border-1 border-red-500">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
