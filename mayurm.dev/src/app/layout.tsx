import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/component/Header";
import Particle from "@/component/Particle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mayur Mahajan",
  description: "mayurm.dev porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-[0.2rem] bg-[black]`}
      >
        {/* <div className="absolute top-12  h-full w-[90%] z-[2]"> */}
          <Particle />
        {/* </div> */}
        <Header />

        {children}
      </body>
    </html>
  );
}
