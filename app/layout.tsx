import "./globals.css";
import type { Metadata } from "next";

import localFont from "next/font/local";
import Navbar from "./components/NavBar";

const clashdisplay = localFont({
  src: [
    {
      path: "./fonts/ClashDisplay-Bold.woff2",
      weight: "800",
    },
  ],
  variable: "--font-clash-display",
});
console.log("clashdisplay", clashdisplay);
export const metadata: Metadata = {
  title: "GetLinked",
  description: "A Pre-Hackanthon Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="montserrat min-h-screen text-white bg-[--primary-color]">
        <>
          <Navbar />
          {children}
        </>
      </body>
      {/*    <body className={`${clashdisplay.variable} font-sans`}>{children}</body> */}
    </html>
  );
}
