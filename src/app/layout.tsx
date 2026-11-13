import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1410",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Leoneider Trigos | DevOps & AI Engineer",
    template: "%s | Leoneider Trigos"
  },
  description: "Portfolio de Leoneider Trigos - DevOps & AI Engineer especializado en soluciones escalables, arquitectura en la nube e inteligencia artificial.",
  keywords: ["DevOps", "AI", "Cloud", "AWS", "Next.js", "Angular", "Spring Boot", "Software Architecture", "Leoneider Trigos", "Portfolio"],
  authors: [{ name: "Leoneider Trigos" }],
  creator: "Leoneider Trigos",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.devops42.dev/",
    title: "Leoneider Trigos | DevOps & AI Engineer",
    description: "Portfolio de Leoneider Trigos - DevOps & AI Engineer especializado en soluciones escalables e inteligencia artificial.",
    siteName: "Leoneider Trigos Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Leoneider Trigos | DevOps & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leoneider Trigos | DevOps & AI Engineer",
    description: "Portfolio de Leoneider Trigos - DevOps & AI Engineer especializado en soluciones escalables e inteligencia artificial.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CO"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} ${orbitron.variable} dark h-full antialiased relative`}
    >
      <body className="min-h-full flex flex-col font-body selection:bg-primary-container/30 relative">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
