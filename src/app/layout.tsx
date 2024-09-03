import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";


import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hugo Pitorro",
  description: "Computer Science and Machine Learning student",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={` ${GeistMono.variable} ${GeistSans.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
