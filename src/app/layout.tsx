"use client";

import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const metadata: Metadata = {
  title: "Hasnaat Iftikhar",
  description: "Hey, there! I'm Hasnaat Iftikhar, a software engineer based in Lahore, Pakistan.",
};

export const MediaSans = localFont({
  src: '../fonts/MediaSans.ttf',
  display: 'auto'
});

export const ClashDisplay = localFont({
  src: '../fonts/ClashDisplay.otf',
  display: 'auto'
});

export const SFProDisplay = localFont({
  src: '../fonts/SFProDisplay.otf',
  display: 'auto'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={SFProDisplay.className}>
      <head>
        <title>{`${metadata.title}`}</title>
        <meta name="description" content={`${metadata.description}`} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
