import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

const PoppinsSerif = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const LatoSerif = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "NextBlog",
  description: "Multi-user blogging platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PoppinsSerif.variable} ${LatoSerif.variable} antialiased`}
      >
        <Header />
        <main className="max-w-7xl mx-auto h-screen py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
