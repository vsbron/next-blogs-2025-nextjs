import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";
import "./ql-styles.css";

// Import the fonts
const PoppinsSerif = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
});
const LatoSerif = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: false,
});

// Set the main meta data
export const metadata: Metadata = {
  metadataBase: new URL("https://next-blogs-2025.vercel.app/"),
  title: {
    default: "NextBlogs - Read, Create, and Share your stories",
    template: "%s | NextBlogs",
  },
  description:
    "Modern multi-user blogging platform to discover and enjoy articles on a variety of topics with a clean, user-friendly experience.",
  creator: "VSBroN",
  icons: {
    icon: [
      { url: "/favicon2.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    url: "https://next-blogs-2025.vercel.app/",
    title: "NextBlogs - Read, Create, and Share your stories",
    description:
      "Modern multi-user blogging platform to discover and enjoy articles on a variety of topics with a clean, user-friendly experience.",

    siteName: "NextBlogs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NextBlogs",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "NextBlogs - Read, Create, and Share your stories",
    description:
      "Modern multi-user blogging platform to discover and enjoy articles on a variety of topics with a clean, user-friendly experience.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.webmanifest",
  // themeColor: "#6f42c1",
  robots: {
    index: true,
    follow: true,
  },
  referrer: "origin-when-cross-origin",
};

// The Main Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${PoppinsSerif.variable} ${LatoSerif.variable} ${LatoSerif.className} antialiased tracking-[0.02em]`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main>
              <Container className="pt-6 xs:pt-8 lg:pt-12 pb-12 flex flex-col gap-8">
                {children}
              </Container>
            </main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
