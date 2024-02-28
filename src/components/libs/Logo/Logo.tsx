import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <>
      <Image
        src="/images/logo.jpg"
        alt={"Picture of the author"}
        width={400}
        height={400}
        className="rounded-full my-4 border-4 border-white"
      />
    </>
  );
}

export default Logo;
