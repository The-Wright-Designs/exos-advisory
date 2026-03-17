import type { Metadata } from "next";

import { Archivo } from "next/font/google";

import HeaderComponent from "@/_components/navigation/header-component";

const archivoSansSerif = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "700"],
});

import "@/_styles/globals.css";
import FooterComponent from "@/_components/navigation/footer-component";

export const metadata: Metadata = {
  metadataBase: new URL("https://exos.global"),
  title: "1",
  description: "2",
  keywords: "",
  openGraph: {
    description: "2",
    type: "website",
    locale: "en_ZA",
    siteName: "1",
    images: [
      {
        url: "/open-graph-image.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "1",
    url: "3",
  };
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <HeaderComponent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
