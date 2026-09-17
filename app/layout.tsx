import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gabimonutti.com"),
  title: "Gabriel Monutti — Backend Engineer",
  description:
    "Backend Engineer building APIs, integrations, and business applications with Node.js, TypeScript, and PostgreSQL.",
  openGraph: {
    title: "Gabriel Monutti — Backend Engineer",
    description:
      "APIs, integrations, business systems, and real products built from Argentina.",
    type: "website",
  },
  icons: {
    icon: "/gm.ico",
    shortcut: "/gm.ico",
    apple: "/gm.png",
  },
};

const themeScript = `
  (() => {
    const saved = localStorage.getItem("theme");
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.dataset.theme = saved || preferred;
  })();
`;

const designContract = `<!--
SYSTEMS_LOG_3B11D4BD
THESIS: The portfolio behaves like a systems log that proves how Gabriel connects real products; it refuses the generic hero, card grid, and logo wall.
OWN-WORLD: Warm off-white paper or near-black ink, sparse deep teal signals, fine rules, lightly softened technical panels, humanist grotesk copy, and mono only for machine metadata.
STORY: Identify Gabriel as a backend engineer, inspect professional evidence, trace four complementary builds, understand his working method, and contact him.
FIRST VIEWPORT: A 7/5 split pairs a direct headline and actions with a live topology routing products and operations through a backend toward APIs and data.
FORM: Connected engineering log, grounded direction fused with an observability trace viewer; seed 3b11d4bd.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <div
          className="design-contract"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: designContract }}
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
