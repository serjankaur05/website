import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "wdth"],
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  display: "swap",
});

const description =
  "Serjan Kaur is a Western University computer science student building with AI: LLM deployment at CIBC, agent workflows, machine learning research and optimization projects you can try in the browser.";

export const metadata: Metadata = {
  metadataBase: new URL("https://serjankaur.com"),
  title: "Serjan Kaur, AI developer",
  description,
  openGraph: {
    title: "Serjan Kaur, AI developer",
    description,
    url: "https://serjankaur.com",
    siteName: "Serjan Kaur",
    type: "website",
  },
  twitter: { card: "summary", title: "Serjan Kaur, AI developer", description },
};

export const viewport: Viewport = {
  themeColor: "#2430D9",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
