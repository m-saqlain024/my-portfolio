import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="rounded-2xl">
      <Image
        src="/images/logo.jpg"
        alt={"loading"}
        width={400}
        height={400}
        className="rounded-full my-4 border-4 border-white"
      />
    </div>
  );
}

export default Logo;
