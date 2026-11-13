import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectOverview from "@/components/ProjectOverview";
import AiCapabilities from "@/components/AiCapabilities";
import TechGrid from "@/components/TechGrid";
import Timeline from "@/components/Timeline";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { SITE_URL } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Leoneider Trigos",
  alternateName: "DevOps42",
  jobTitle: "DevOps & AI Engineer",
  description:
    "DevOps & AI Engineer especializado en soluciones escalables, arquitectura en la nube e inteligencia artificial.",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og-image.jpg`,
  knowsAbout: [
    "DevOps",
    "Inteligencia Artificial",
    "Cloud Architecture",
    "AWS",
    "Next.js",
    "Angular",
    "Spring Boot",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ScrollProgress />
      <Navbar />
      <main className="relative min-h-screen bg-background text-on-surface">
        <Hero />
        <ProjectOverview />
        <AiCapabilities />
        <TechGrid />
        <Timeline />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
