import { Navbar } from "@/components/common/header/navbar";
import { APP_DATA } from "@/lib/constants";
import "@/styles/globals.css";

import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata = {
  title: APP_DATA.name,
  description: APP_DATA.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
      </body>
    </html>
  );
}
