import React from "react";
import { Logo } from "@/components";

function Navbar() {
  return (
    <>
      <div className="flex-1 flex flex-col min-h-0 bg-gray-900">
        <div className="flex items-center justify-between h-16 px-5 text-white">
          <Logo />
        </div>
        <div className="flex-1 flex flex-col  bg-gray-900 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 m-3 space-y-1">navigation</nav>
        </div>
      </div>
    </>
  );
}
export default Navbar;
