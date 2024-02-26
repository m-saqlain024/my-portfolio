import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import "../../style/globals.css";
// import { Inter } from "next/font/google";
import { Header } from "../components";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Muhammad Saqlain",
    template: "%s | Software Engineering",
  },
  description: "this is a my website for pratices",
  openGraph: {
    images: "/og.png",
  },
};

export default function RootLayout({ children }) {
  // const lang = "en"; // 'lang' variable is currently not used
  return (
    <div>
      <Header />
      <>
        {children}
        <div>footer</div>
      </>
    </div>
  );
}

// Define propTypes for RootLayout component
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
