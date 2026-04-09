import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import { LanguageProvider } from "../context/language-context";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "NFT Registration USA | Legal NFT Consulting | USDGA.US",
  description:
    "Register your NFT legally in the USA. We guide creators, companies, and investors through US Copyright Office, USPTO, and SEC compliance from start to finish.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
