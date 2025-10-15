import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${PoppinsSerif.variable} ${LatoSerif.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="max-w-7xl mx-auto h-screen py-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
