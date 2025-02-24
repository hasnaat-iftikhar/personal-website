"use client";

import type { Metadata } from "next";
import "./globals.css";

// Fonts
import { SFProDisplay } from "./utils/fonts";

// Components
import WorkForm from "./components/base/WorkForm";
import { WorkFormProvider } from "./components/base/WorkForm/context/context";

const metadata: Metadata = {
  title: "Hasnaat Iftikhar",
  description: "Hey, there! I'm Hasnaat Iftikhar, a software engineer based in Lahore, Pakistan.",
};

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
        <WorkFormProvider>
          {children}

          <WorkForm />
        </WorkFormProvider>
      </body>
    </html>
  );
}
