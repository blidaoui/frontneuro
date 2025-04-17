import "./globals.css";
import Navbar from "./components/NavBar";
import ScrollUp from "./components/Common/ScrollUp";
import { Toaster } from "react-hot-toast";

import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: {
    default: "NeuroFlow Consulting",
    template: "%s | NeuroFlow",
  },
  description: "Transformez vos défis numériques en opportunités stratégiques",
  metadataBase: new URL("https://neuroflow-consulting.fr"),
  openGraph: {
    images: "/og-image.jpg",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`scroll-smooth ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="text-gray-100 antialiased">
        <Toaster />
        <Navbar />
        <main id="main-content">{children}</main>
        <ScrollUp />
      </body>
    </html>
  );
}
