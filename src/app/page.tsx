import React from "react";
import { Hero } from "../components";

export default function page() {
  return (
    <main className="lg:pl-20">
      <div className="xl:pl-96">
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
          <Hero />
        </div>
      </div>
    </main>
  );
}
