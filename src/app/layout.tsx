import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Yuki Ainge - Developer, Maker, Creator",
  description: "Where code meets craft. Building digital solutions and creating tangible art through development, electronics, woodworking, and creative expression.",
  keywords: ["developer", "maker", "woodworking", "electronics", "LED poi", "full-stack", "portfolio"],
  authors: [{ name: "Yuki Ainge" }],
  openGraph: {
    title: "Yuki Ainge - Developer, Maker, Creator",
    description: "Where code meets craft. Building digital solutions and creating tangible art.",
    url: "https://yukiainge.com",
    siteName: "Yuki Ainge Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuki Ainge - Developer, Maker, Creator",
    description: "Where code meets craft. Building digital solutions and creating tangible art.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased min-h-screen`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
