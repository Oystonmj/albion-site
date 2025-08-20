import type { Metadata } from "next";
import { Merriweather_Sans, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const merriweather = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-merriweather-sans",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.albion.uk"),
  title: "Albion — Replace the Expansion Cartel with One Operator",
  description: "Done-for-you UK market entry for U.S. B2B tech. One operator, one plan, owned outcomes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Albion — Replace the Expansion Cartel with One Operator",
    description: "UK entry without the cartel: single chain of command, compliance first, measured speed.",
    url: "https://www.albion.uk",
    siteName: "Albion",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Albion — Replace the Expansion Cartel",
    description: "One accountable operator for UK market entry.",
    images: ["/opengraph-image.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Albion",
    url: "https://www.albion.uk",
    logo: "https://www.albion.uk/icon.png"
  };
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Albion vs. The Expansion Cartel",
    url: "https://www.albion.uk/"
  };

  return (
    <html lang="en-GB" className={`${merriweather.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <header className="container py-6" role="banner" aria-label="Site header">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div aria-hidden className="size-8 rounded-md bg-brand" />
              <span className="font-heading text-xl">Albion</span>
            </div>
            <nav role="navigation" aria-label="Primary" className="hidden md:block">
              <ul className="flex gap-6 text-sm text-muted">
                <li><a href="#principles">Principles</a></li>
                <li><a href="#proof">Proof</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="container py-12 text-sm text-muted" role="contentinfo">
          © {new Date().getFullYear()} Albion. All rights reserved.
        </footer>

        <Script
          id="jsonld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Script
          id="jsonld-page"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
        />
      </body>
    </html>
  );
}