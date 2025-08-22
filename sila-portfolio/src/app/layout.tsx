import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sila Demirkaya — Software Developer",
  description: "Portfolio of Sila Demirkaya, full-stack developer specialized in Next.js, React, Node.js, and PostgreSQL.",
  openGraph: {
    title: "Sila Demirkaya — Portfolio",
    description: "Full-stack developer portfolio.",
    url: "https://sila-portfolio.vercel.app",
    siteName: "Sila Demirkaya Portfolio",
    images: ["/og-image.png"], // create a nice preview image
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="min-h-[calc(100vh-160px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
