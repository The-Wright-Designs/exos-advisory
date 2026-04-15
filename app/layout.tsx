import type { Metadata } from "next";

import { Archivo } from "next/font/google";

import HeaderComponent from "@/_components/navigation/header-component";

const archivoSansSerif = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

import "@/_styles/globals.css";
import FooterComponent from "@/_components/navigation/footer-component";

export const metadata: Metadata = {
  metadataBase: new URL("https://exos.global"),
  title: "EXOS Advisory",
  description:
    "Clarity for entrepreneurs after exit. EXOS Advisory helps entrepreneurs navigate life after selling their company.",
  keywords: "",
  openGraph: {
    description:
      "Clarity for entrepreneurs after exit. EXOS Advisory helps entrepreneurs navigate life after selling their company.",
    type: "website",
    locale: "en_ZA",
    siteName: "EXOS Advisory",
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
    name: "EXOS Advisory",
    url: "https://exos.global",
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
