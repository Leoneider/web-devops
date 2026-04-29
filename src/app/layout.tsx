import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";

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
  themeColor: "#020617", // Default slate-950/black color often used in dark mode
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devops42.dev"),
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Leoneider Trigos | DevOps & AI Engineer",
    description: "Portfolio de Leoneider Trigos - DevOps & AI Engineer especializado en soluciones escalables e inteligencia artificial.",
  },
  icons: {
    icon: "/favicon.png",
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
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${orbitron.variable} dark h-full antialiased relative`}
    >
      <body className="min-h-full flex flex-col font-body selection:bg-primary-container/30 relative">
        {children}
      </body>
    </html>
  );
}
