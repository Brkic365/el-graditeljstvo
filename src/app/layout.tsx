import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Navbar from "@/components/Navbar";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El Graditeljstvo",
  description: "Vaš Partner za Savršene Građevinske Završnice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
