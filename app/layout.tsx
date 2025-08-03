import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UrbanGrow 🌱",
  description:
    "AI destekli şehir içi bahçecilik asistanı. Mevcut bitkilerine ve mevsime göre öneriler al.",
  generator: "UrbanGrow v1.0",
  keywords: ["urban gardening", "bitki önerisi", "AI", "sürdürülebilir"],
  authors: [{ name: "Mevlüt Furkan Yılmaz" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
