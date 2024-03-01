import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <p className="mt-10 text-center text-xs leading-5 text-gray-500">
      &copy;{" "}
      <Link href={"https://github.com/m-saqlain024"}>Muhammad Saqlain</Link>,
      Inc. All rights reserved.
    </p>
  );
}

export default Footer;
