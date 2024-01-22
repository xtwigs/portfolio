import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import NavBar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Hugo Pitorro",
  description: "Computer Science and Machine Learning student",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  console.log(GeistSans.variable, GeistMono.variable)
  return (
    <html lang="en" className="dark">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
