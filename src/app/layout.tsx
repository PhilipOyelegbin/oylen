import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Oylen Group | Scaling Innovation & Sustainable Growth",
    template: "%s | Oylen Group",
  },
  description:
    "Oylen Group is a leading global conglomerate driving technology-enabled advancements across Fintech, Real Estate, Agritech, and Healthtech.",
  keywords: [
    "Oylen Group",
    "Conglomerate",
    "Real Estate",
    "Fintech",
    "Agritech",
    "Healthtech",
    "Smart Living",
    "Precision Farming",
    "Telemedicine",
  ],
  openGraph: {
    title: "Oylen Group | Scaling Innovation & Sustainable Growth",
    description:
      "Oylen Group is a leading global conglomerate driving technology-enabled advancements across Fintech, Real Estate, Agritech, and Healthtech.",
    url: process.env.NEXT_PUBLIC_HOST_URI,
    type: "website",
    locale: "en_US",
    images: "./opengraph-image.png",
    siteName: "Oylen Group",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "./apple-touch-icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "./apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "./apple-touch-icon.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-light-bg text-text-gray font-sans selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main className="grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
