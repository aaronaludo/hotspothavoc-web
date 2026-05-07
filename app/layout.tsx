import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotspot Havoc",
  description:
    "A local multiplayer arena game for nearby phones, hotspots, and same-room battles.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
