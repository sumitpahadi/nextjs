"use client";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./nav/page";
import { useEffect } from "react";
import Footer from "./footer/page";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window != "undefined") {
      require("bootstrap/dist/js/bootstrap.min.js");
    }
  });
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
