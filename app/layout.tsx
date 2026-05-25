import type { Metadata } from "next";
import "./globals.css";
import "./affetto.css";

export const metadata: Metadata = {
  title: "AFFETTO",
  description: "Relationship Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}