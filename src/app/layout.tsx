import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Semrush - Online Marketing Can Be Easy",
  description: "Turn the algorithm into a friend. Make your business visible online with 55+ tools for SEO, PPC, content, social media, competitive research, and more.",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
