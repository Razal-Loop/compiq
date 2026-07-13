import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ComplDoc | Technical Compliance & Regulatory Documentation",
    template: "%s | ComplDoc",
  },
  description:
    "Expert technical documentation for the EU AI Act, government tenders, grant applications, and aviation operating manuals. Precise, citation-accurate writing built directly from regulatory texts.",
  metadataBase: new URL("https://compldoc.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ComplDoc | Technical Compliance & Regulatory Documentation",
    description:
      "Expert technical documentation for the EU AI Act, government tenders, grant applications, and aviation operating manuals. Precise, citation-accurate writing built directly from regulatory texts.",
    url: "https://compldoc.com",
    siteName: "ComplDoc",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ComplDoc | Technical Compliance & Regulatory Documentation",
    description:
      "Expert technical documentation for the EU AI Act, government tenders, grant applications, and aviation operating manuals.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F3" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F19" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${ibmPlexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          {/* Skip-to-content accessibility link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-btn focus:outline-none"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-grow pt-24 md:pt-28">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
