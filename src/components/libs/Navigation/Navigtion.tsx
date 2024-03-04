import React from "react";
import Link from "next/link";

const nav = [
  {
    name: "home ",
    href: "/#home",
  },
  {
    name: "about ",
    href: "/#about",
  },
  {
    name: "skills ",
    href: "/#skills",
  },
  {
    name: "educations ",
    href: "/#educations",
  },
  {
    name: "blogs ",
    href: "/#blogs",
  },
];
// const nav = ["home", "about", "skills", "educations", "blogs"];

function Navigtion() {
  return (
    <ul className="capitalize px-5">
      {nav.map((items, index) => {
        return (
          <li
            className="text-center hover:text-blue-500 hover:underline leading-6 text-base py-1.5"
            key={index}
          >
            <Link href={items.href}>{items.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Navigtion;
