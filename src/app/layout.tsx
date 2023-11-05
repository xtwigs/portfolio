import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
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
  return (
    <html lang="en" className="dark">
      <body className={GeistMono.variable}>
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
