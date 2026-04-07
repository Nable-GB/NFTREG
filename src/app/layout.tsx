import type { Metadata } from "next";
import { Chakra_Petch, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "../context/language-context";
import "./globals.css";

const headingFont = Chakra_Petch({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SYS.CORE | Futuristic Developer Dashboard & Topology Monitor",
  description:
    "Visualize your infrastructure with SYS.CORE. A sci-fi inspired, dark-mode dashboard for live node topology, memory allocation, and system diagnostics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${monoFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
