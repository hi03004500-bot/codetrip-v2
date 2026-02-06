import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Hassan Irfan — Portfolio",
  description:
    "Student, Web Developer and FX Trader portfolio. Showcasing projects, skills, trading insights and personal work.",
  keywords: [
    "Hassan Irfan",
    "Portfolio",
    "Web Developer",
    "FX Trader",
    "Next.js Portfolio",
    "Trading Journal",
  ],
  authors: [{ name: "Hassan Irfan" }],
  creator: "Hassan Irfan",
  openGraph: {
    title: "Hassan Irfan — Portfolio",
    description:
      "Student, Web Developer and FX Trader portfolio website.",
    url: "https://yourdomain.com",
    siteName: "Hassan Irfan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hassan Irfan Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

/* NEXT 15 — themeColor goes here */
export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* NAVBAR HERE */}
        <Navbar />

        {children}
      </body>
    </html>
  );
}