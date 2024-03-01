import React from "react";

const nav = ["home", "about", "skills", "educations", "blogs"];

function Navigtion() {
  return (
    <ul className="capitalize px-5">
      {nav.map((items, index) => {
        return (
          <li
            className="text-center hover:text-blue-500 hover:underline leading-6 text-base py-1.5"
            key={index}
          >
            {items}
          </li>
        );
      })}
    </ul>
  );
}

export default Navigtion;
