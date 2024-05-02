import { Navbar } from "@/components/common/header/navbar";
import { Toaster } from "@/components/ui/sonner";
import { APP_DATA } from "@/lib/constants";
import "@/styles/globals.css";
import { type Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_DATA.name,
  description: APP_DATA.description,
  icons: {
    icon: "/favicon.ico",
  },
  keywords: APP_DATA.keywords,
  openGraph: {
    type: "website",
    url: APP_DATA.website,
    title: APP_DATA.name,
    description: APP_DATA.description,
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: APP_DATA.name,
      },
    ],
  },
  twitter: {
    site: "@ghostkode",
    card: "summary_large_image",
    creator: APP_DATA.twitter,
    title: APP_DATA.name,
    description: APP_DATA.description,
    images: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className}`}>
        <Navbar />
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
