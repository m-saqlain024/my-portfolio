import React from "react";
import { Footer, Logo, Navigation } from "@/components";

function Sidebar() {
  return (
    <>
      <div className="flex-1 px-5 flex flex-col min-h-0 bg-gray-900 text-white">
        <div className="flex items-center justify-center object-contain">
          <Logo />
        </div>

        <div className="border-b border-gray-200 pb-5">
          <h3 className="text-base font-bold leading-6 text-center">
            Muhammad Saqlain
          </h3>
          <h2 className="text-sm font-semibold leading-2 text-center">
            Front-End Developer
          </h2>
        </div>

        <div className="flex-1 flex flex-col  bg-gray-900 overflow-y-auto">
          <nav className="flex-1 text-white space-y-1">
            <Navigation />
          </nav>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Sidebar;
