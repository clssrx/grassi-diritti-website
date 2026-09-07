import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Grassi Diritti",
    template: "%s | Grassi Diritti",
  },
  description: "Sito web di Grassi Diritti",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Navbar />

        <div className="min-h-screen flex flex-col">
          <div className="flex-1">
            <div className="max-w-6xl sm:max-w-7xl mx-auto px-6 sm:px-4">
              {children}
            </div>
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
}
