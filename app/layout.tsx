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
    "At the core of EXOS is the Pathfinder Playbook, a structured framework for pre and post exit entrepreneurs that sequences decisions across identity, structure, capital, and support to bring clarity to what comes next.",
  keywords:
    "entrepreneur exit advisory, post-exit clarity, business exit transition, life after selling a business, exited entrepreneur support, entrepreneur identity after exit, post-exit wealth management, capital allocation after exit, entrepreneur advisory South Africa, EXOS Advisory, Brett Fleming, exit planning, entrepreneur next chapter, post-exit decision making, business sale transition",
  openGraph: {
    description:
      "At the core of EXOS is the Pathfinder Playbook, a structured framework for pre and post exit entrepreneurs that sequences decisions across identity, structure, capital, and support to bring clarity to what comes next.",
    type: "website",
    locale: "en_ZA",
    siteName: "EXOS Advisory",
    images: [
      {
        url: "/images/open-graph-image.webp",
        width: 1270,
        height: 714,
        alt: "EXOS Advisory",
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
