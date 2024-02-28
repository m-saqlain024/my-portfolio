import React from "react";
import { Logo } from "@/components";

function Navbar() {
  return (
    <>
      <div className="flex-1 flex flex-col min-h-0 bg-gray-900">
        <div className="flex items-center justify-center px-5 object-contain">
          <Logo />
        </div>
        <div className="flex-1 flex flex-col  bg-gray-900 overflow-y-auto">
          <nav className="flex-1 text-white space-y-1">navigation</nav>
        </div>
      </div>
    </>
  );
}
export default Navbar;
