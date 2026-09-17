import { Portfolio } from "@/components/portfolio";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gabriel Monutti",
    jobTitle: "Backend Engineer",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
    },
    sameAs: [
      "https://github.com/gabimonutti",
      "https://www.linkedin.com/in/gabriel-monutti/",
    ],
    knowsAbout: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "API design",
      "System integration",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Portfolio />
    </>
  );
}
