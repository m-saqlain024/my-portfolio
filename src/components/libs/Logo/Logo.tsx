import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="rounded-2xl">
      <Image
        src="/images/logo.jpg"
        alt={"loading"}
        width={100}
        height={100}
        className="rounded-xl"
      />
    </div>
  );
}

export default Logo;
