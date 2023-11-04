import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";

import "./globals.css";
import NavBar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Hugo Pitorro",
  description: "Computer Science and Machine Learning student",
};

const runtime = "edge";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
